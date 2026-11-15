"use client";

import { FormEvent, useState } from "react";
import { LoaderCircle, Send } from "lucide-react";

type FormStatus = { kind: "success" | "error"; message: string } | null;

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>(null);
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    if (payload.name.length < 2 || payload.name.length > 100 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email) || payload.message.length < 10 || payload.message.length > 5000) {
      setStatus({ kind: "error", message: "Please provide a valid name, email, and a message between 10 and 5,000 characters." });
      return;
    }

    setSending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json() as { message?: string; error?: string };
      if (!response.ok) throw new Error(result.error ?? "Your message could not be sent. Please try again.");
      setStatus({ kind: "success", message: result.message ?? "Your message has been sent." });
      form.reset();
    } catch (error) {
      setStatus({ kind: "error", message: error instanceof Error ? error.message : "Your message could not be sent. Please try again." });
    } finally {
      setSending(false);
    }
  }

  const inputStyle = "mt-2 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-600 transition focus:border-accent/50 focus:outline-none";
  return (
    <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-slate-300">
          Your name
          <input className={inputStyle} type="text" name="name" autoComplete="name" minLength={2} maxLength={100} required placeholder="Jane Smith" />
        </label>
        <label className="text-sm font-medium text-slate-300">
          Email address
          <input className={inputStyle} type="email" name="email" autoComplete="email" maxLength={254} required placeholder="jane@example.com" />
        </label>
        <label className="text-sm font-medium text-slate-300 sm:col-span-2">
          Message
          <textarea className={`${inputStyle} min-h-36 resize-y`} name="message" minLength={10} maxLength={5000} required placeholder="What would you like to talk about?" />
        </label>
      </div>
      {status && <p role={status.kind === "error" ? "alert" : "status"} className={`mt-4 text-sm ${status.kind === "success" ? "text-emerald-300" : "text-rose-300"}`}>{status.message}</p>}
      <button type="submit" disabled={sending} className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-70">
        {sending ? <><LoaderCircle size={16} className="animate-spin" aria-hidden="true" /> Sending…</> : <><Send size={15} aria-hidden="true" /> Send message</>}
      </button>
    </form>
  );
}
