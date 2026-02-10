"use client";

import { useState } from "react";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-12 sm:py-16">
      <div className="container grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-start">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-400">
            Contact
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">
            Let&apos;s talk
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl">
            If you&apos;d like to discuss a project, collaboration or
            opportunity, send me a message and I&apos;ll get back to you.
          </p>
        </div>

        <form
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%2300bcff' fill-opacity='0.1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E\")",
          }}
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 sm:p-6 flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1 text-sm">
            <label
              htmlFor="name"
              className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-400"
            />
          </div>

          <div className="flex flex-col gap-1 text-sm">
            <label
              htmlFor="email"
              className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-400"
            />
          </div>

          <div className="flex flex-col gap-1 text-sm">
            <label
              htmlFor="message"
              className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-400 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-full hover:scale-[1.03] active:scale-[0.98] bg-linear-to-tr from-sky-400 to-emerald-400 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-950 hover:opacity-90 cursor-pointer"
          >
            {status === "loading" ? "Sending..." : "Send message"}
          </button>

          {status === "success" && (
            <p className="text-xs text-emerald-400">
              Message sent. I&apos;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-xs text-rose-400">
              Something went wrong. Please try again in a moment.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
