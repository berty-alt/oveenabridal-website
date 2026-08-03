"use client";

import Image from "next/image";
import { useEffect, useState, type FormEvent } from "react";

type Product = {
  id: string; code: string; slug: string; name: string; category: string; style: string;
  sizes: string; price: number; deposit: number; image: string; active: boolean;
};
type RentalRequest = {
  id: string; dress_code: string; dress_name: string; customer_name: string; phone: string;
  preferred_size: string; event_date: string; fitting_date: string; notes?: string;
  status: "pending" | "approved" | "rejected"; created_at: string;
};

const blank = { code: "", slug: "", name: "", category: "Bridal", style: "", sizes: "S–XL", price: 5000, deposit: 5000, image: "/images/collection/ivory-liyana.webp", active: true };

export function AdminDashboard({ email }: { email: string }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [requests, setRequests] = useState<RentalRequest[]>([]);
  const [editing, setEditing] = useState<Product | null>(null);
  const [tab, setTab] = useState<"products" | "requests">("products");
  const [message, setMessage] = useState("");
  const [reviewingId, setReviewingId] = useState<string | null>(null);

  async function load() {
    const [productResponse, requestResponse] = await Promise.all([fetch("/api/admin/products"), fetch("/api/admin/requests")]);
    if (productResponse.ok) setProducts(await productResponse.json());
    if (requestResponse.ok) setRequests(await requestResponse.json());
  }

  useEffect(() => {
    Promise.all([fetch("/api/admin/products"), fetch("/api/admin/requests")]).then(async ([productResponse, requestResponse]) => {
      if (productResponse.ok) setProducts(await productResponse.json());
      if (requestResponse.ok) setRequests(await requestResponse.json());
    });
  }, []);

  async function saveProduct(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload = {
      code: data.get("code"), slug: data.get("slug"), name: data.get("name"), category: data.get("category"),
      style: data.get("style"), sizes: data.get("sizes"), price: Number(data.get("price")),
      deposit: Number(data.get("deposit")), image: data.get("image"), active: data.get("active") === "on",
    };
    const response = await fetch(editing ? `/api/admin/products/${editing.id}` : "/api/admin/products", {
      method: editing ? "PUT" : "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload),
    });
    const result = await response.json();
    setMessage(response.ok ? `${payload.name} saved.` : result.error ?? "Unable to save product.");
    if (response.ok) { setEditing(null); (event.target as HTMLFormElement).reset(); await load(); }
  }

  async function disableProduct(product: Product) {
    if (!window.confirm(`Hide ${product.name} from the public collection?`)) return;
    const response = await fetch(`/api/admin/products/${product.id}`, { method: "DELETE" });
    setMessage(response.ok ? `${product.name} hidden.` : "Unable to hide product.");
    if (response.ok) await load();
  }

  function whatsappPhone(phone: string) {
    const digits = phone.replace(/\D/g, "");
    if (digits.startsWith("94")) return digits;
    if (digits.startsWith("0")) return `94${digits.slice(1)}`;
    return digits;
  }

  function reviewMessage(item: RentalRequest, status: "approved" | "rejected") {
    const intro = `Hello ${item.customer_name},`;
    const details = `Dress: ${item.dress_name} (${item.dress_code})\nPreferred size: ${item.preferred_size}\nEvent date: ${item.event_date}\nFitting date: ${item.fitting_date}`;

    if (status === "approved") {
      return `${intro}\n\nYour rental request has been approved by Oveena Bridal Dresses.\n\n${details}\n\nPlease visit our shop to confirm the fitting and payment. Thank you.`;
    }

    return `${intro}\n\nThank you for your rental request. Unfortunately, we are unable to approve it for the selected dates.\n\n${details}\n\nPlease reply to this message and we will help you find a suitable alternative.\n\nOveena Bridal Dresses`;
  }

  function statusMessageUrl(item: RentalRequest) {
    if (item.status === "pending") return `https://wa.me/${whatsappPhone(item.phone)}`;
    return `https://wa.me/${whatsappPhone(item.phone)}?text=${encodeURIComponent(reviewMessage(item, item.status))}`;
  }

  async function reviewRequest(item: RentalRequest, status: "approved" | "rejected") {
    setReviewingId(item.id);

    try {
      const response = await fetch("/api/admin/requests", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: item.id, status }),
      });
      const result = await response.json();

      if (!response.ok) {
        setMessage(result.error ?? "Unable to update the rental request.");
        return;
      }

      await load();
      setMessage(`${item.customer_name}'s request was ${status}. Send the status on WhatsApp only if needed.`);
    } finally {
      setReviewingId(null);
    }
  }

  async function logout() { await fetch("/api/admin/session", { method: "DELETE" }); window.location.reload(); }

  const current = editing ?? blank;
  return (
    <main className="admin-shell">
      <header className="admin-header">
        <div><span className="brand-monogram" aria-hidden="true">O</span><div><strong>Oveena Admin</strong><small>{email}</small></div></div>
        <div><a href="/" target="_blank">View website</a><button type="button" onClick={logout}>Sign out</button></div>
      </header>
      <div className="admin-layout">
        <aside className="admin-sidebar">
          <p>Manage</p>
          <button className={tab === "products" ? "is-active" : ""} onClick={() => setTab("products")}>Products <span>{products.length}</span></button>
          <button className={tab === "requests" ? "is-active" : ""} onClick={() => setTab("requests")}>Rental requests <span>{requests.filter((item) => item.status === "pending").length}</span></button>
        </aside>
        <section className="admin-content">
          {message && <p className="admin-message" role="status">{message}</p>}
          {tab === "products" ? (
            <>
              <div className="admin-title"><div><p className="eyebrow">Catalogue</p><h1>Products</h1></div><button className="button button-dark" onClick={() => setEditing(null)}>Add product</button></div>
              <form className="product-editor" key={editing?.id ?? "new"} onSubmit={saveProduct}>
                <div className="product-editor-heading"><h2>{editing ? `Edit ${editing.name}` : "Add a new product"}</h2>{editing && <button type="button" onClick={() => setEditing(null)}>Cancel edit</button>}</div>
                <div className="admin-form-grid">
                  <label>Product code<input name="code" defaultValue={current.code} placeholder="OV-BR-005" required /></label>
                  <label>URL slug<input name="slug" defaultValue={current.slug} placeholder="ov-br-005" pattern="[a-z0-9-]+" required /></label>
                  <label>Product name<input name="name" defaultValue={current.name} required /></label>
                  <label>Category<select name="category" defaultValue={current.category}>{["Bridal", "Engagement", "Bridesmaid", "Wedding Party", "Pre-shoot"].map((item) => <option key={item}>{item}</option>)}</select></label>
                  <label>Style<input name="style" defaultValue={current.style} required /></label>
                  <label>Sizes<input name="sizes" defaultValue={current.sizes} required /></label>
                  <label>Rental price (LKR)<input name="price" type="number" min="5000" step="500" defaultValue={current.price} required /></label>
                  <label>Deposit (LKR)<input name="deposit" type="number" min="5000" step="500" defaultValue={current.deposit} required /></label>
                  <label className="admin-wide">Image path or URL<input name="image" defaultValue={current.image} required /></label>
                  <label className="admin-checkbox"><input name="active" type="checkbox" defaultChecked={current.active} /> Show in public collection</label>
                </div>
                <button className="button button-gold" type="submit">{editing ? "Save changes" : "Add product"}</button>
              </form>
              <div className="admin-product-list">
                {products.map((product) => <article key={product.id}>
                  <div className="admin-product-image"><Image src={product.image} alt="" fill className="photo-cover" sizes="90px" /></div>
                  <div><small>{product.code} · {product.category}</small><h3>{product.name}</h3><p>LKR {product.price.toLocaleString()} · Sizes {product.sizes}</p></div>
                  <span className={product.active ? "status-active" : "status-hidden"}>{product.active ? "Active" : "Hidden"}</span>
                  <div><button onClick={() => setEditing(product)}>Edit</button>{product.active && <button onClick={() => disableProduct(product)}>Hide</button>}</div>
                </article>)}
              </div>
            </>
          ) : (
            <>
              <div className="admin-title"><div><p className="eyebrow">Workflow</p><h1>Rental requests</h1></div></div>
              <div className="request-list">
                {requests.length === 0 && <p className="admin-empty">No rental requests yet.</p>}
                {requests.map((item) => <article className={`request-card request-card-${item.status}`} key={item.id}>
                  <div className="request-heading"><div><small>{item.dress_code}</small><h2>{item.dress_name}</h2></div><span className={`request-${item.status}`}>{item.status}</span></div>
                  <dl><div><dt>Customer</dt><dd>{item.customer_name}</dd></div><div><dt>Phone</dt><dd>{item.phone}</dd></div><div><dt>Size</dt><dd>{item.preferred_size}</dd></div><div><dt>Event</dt><dd>{item.event_date}</dd></div><div><dt>Fitting</dt><dd>{item.fitting_date}</dd></div></dl>
                  {item.notes && <p>{item.notes}</p>}
                  <div className="request-actions"><a href={`https://wa.me/${whatsappPhone(item.phone)}`} target="_blank" rel="noreferrer">WhatsApp customer</a>{item.status !== "pending" && <a className="status-whatsapp" href={statusMessageUrl(item)} target="_blank" rel="noreferrer">Send status on WhatsApp</a>}<button disabled={reviewingId === item.id} onClick={() => reviewRequest(item, "rejected")}>{reviewingId === item.id ? "Updating..." : "Reject"}</button><button className="approve" disabled={reviewingId === item.id} onClick={() => reviewRequest(item, "approved")}>{reviewingId === item.id ? "Updating..." : "Approve"}</button></div>
                </article>)}
              </div>
            </>
          )}
        </section>
      </div>
    </main>
  );
}
