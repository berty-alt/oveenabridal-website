"use client";

import { useState, type FormEvent } from "react";
import type { Dress } from "@/data/dresses";

export function RentalRequestForm({ dress }: { dress: Dress }) {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const requestData = {
      dress_code: dress.code,
      dress_name: dress.name,
      customer_name: String(data.get("name")),
      phone: String(data.get("phone")),
      preferred_size: String(data.get("size")),
      event_date: String(data.get("eventDate")),
      fitting_date: String(data.get("fittingDate")),
      notes: String(data.get("notes") || ""),
    };
    await fetch("/api/rental-requests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestData),
    }).catch(() => undefined);

    const message = [
      "Hello Oveena, I would like to request a rental fitting.",
      "",
      `Dress: ${dress.name} (${dress.code})`,
      `Name: ${requestData.customer_name}`,
      `Phone: ${requestData.phone}`,
      `Preferred size: ${requestData.preferred_size}`,
      `Event date: ${requestData.event_date}`,
      `Preferred fitting date: ${requestData.fitting_date}`,
      `Notes: ${requestData.notes || "None"}`,
      "",
      "I understand this is a request only and requires showroom fitting and admin approval.",
    ].join("\n");

    setSubmitted(true);
    window.open(`https://wa.me/94774968058?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="rental-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Full name
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          Phone number
          <input name="phone" type="tel" autoComplete="tel" required />
        </label>
        <label>
          Preferred size
          <select name="size" defaultValue="" required>
            <option value="" disabled>Select a size</option>
            {["XS", "S", "M", "L", "XL", "XXL"].map((size) => <option key={size}>{size}</option>)}
          </select>
        </label>
        <label>
          Event date
          <input name="eventDate" type="date" required />
        </label>
        <label>
          Preferred fitting date
          <input name="fittingDate" type="date" required />
        </label>
        <label className="form-notes">
          Notes <span>(optional)</span>
          <textarea name="notes" rows={4} placeholder="Tell us about your event or fit preferences." />
        </label>
      </div>
      <label className="form-consent">
        <input type="checkbox" required />
        <span>I understand that availability and rental confirmation require an in-store fitting and Oveena admin approval.</span>
      </label>
      <button className="button button-gold" type="submit">Continue on WhatsApp</button>
      {submitted && <p className="form-status" role="status">WhatsApp opened with your request. Please send the prepared message to Oveena.</p>}
    </form>
  );
}
