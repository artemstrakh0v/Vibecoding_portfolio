"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "success" | "error";

export default function NewsletterForm({ id }: { id?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim() || !email.includes("@")) {
      setStatus("error");
      return;
    }

    // Mock submit — connect your newsletter provider later
    setStatus("success");
    setEmail("");
  }

  return (
    <div id={id}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          placeholder="you@example.com"
          required
          className="min-w-0 flex-1 border border-black bg-white px-5 py-4 text-base text-black placeholder:text-black/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        />
        <button
          type="submit"
          className="shrink-0 bg-accent px-8 py-4 text-base font-medium text-white transition-opacity hover:opacity-90"
        >
          Subscribe
        </button>
      </form>

      {status === "success" && (
        <p className="mt-4 text-sm text-black/70" role="status">
          Thanks — you&apos;re on the list. (Placeholder success message.)
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 text-sm text-accent" role="alert">
          Please enter a valid email address.
        </p>
      )}
    </div>
  );
}
