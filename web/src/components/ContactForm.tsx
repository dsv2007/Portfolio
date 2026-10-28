"use client";

import { useState } from "react";
import { Send } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

const field =
  "glass mt-2 w-full rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-cyan";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!endpoint) {
      setStatus("error");
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);

    // Hidden field that only bots fill in
    if (data.get("website")) return;

    setStatus("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
      <div>
        <label htmlFor="name" className="text-sm font-medium">
          Your name <span aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={field}
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium">
          Email address <span aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={field}
        />
      </div>

      <div>
        <label htmlFor="topic" className="text-sm font-medium">
          What is this about?
        </label>
        <select id="topic" name="topic" className={field} defaultValue="Project">
          <option value="Project">Discuss a project</option>
          <option value="Internship">Internship opportunity</option>
          <option value="Collaboration">Collaboration</option>
          <option value="Other">Something else</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium">
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={6}
          className={field}
        />
      </div>

      {/* Spam trap: hidden from people and screen readers */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue to-violet px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        {status === "sending" ? "Sending..." : "Send message"}
      </button>

      <div aria-live="polite">
        {status === "success" && (
          <p
            role="status"
            className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-sm"
          >
            Thank you! Your message was sent. I&apos;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p
            role="alert"
            className="rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-sm"
          >
            Sorry, the message could not be sent. Please try again in a moment
            {endpoint ? "." : " (the contact form isn't configured yet)."}
          </p>
        )}
      </div>
    </form>
  );
}