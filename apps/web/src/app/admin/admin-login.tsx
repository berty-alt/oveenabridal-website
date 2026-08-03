"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

export function AdminLogin() {
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError("");
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/admin/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: form.get("email"), password: form.get("password") }),
    });
    const result = await response.json();
    if (!response.ok) {
      setError(result.error ?? "Unable to sign in.");
      setBusy(false);
      return;
    }
    window.location.reload();
  }

  return (
    <main className="admin-gate">
      <form className="admin-gate-card admin-login-form" onSubmit={login}>
        <p className="eyebrow">Oveena administration</p>
        <h1>Welcome back.</h1>
        <p>Sign in with the approved Oveena administrator account.</p>
        <label>Email<input name="email" type="email" autoComplete="email" required /></label>
        <label>Password<input name="password" type="password" autoComplete="current-password" required /></label>
        {error && <p className="admin-error" role="alert">{error}</p>}
        <button className="button button-dark" type="submit" disabled={busy}>{busy ? "Signing in…" : "Sign in"}</button>
        <Link href="/">Return to website</Link>
      </form>
    </main>
  );
}
