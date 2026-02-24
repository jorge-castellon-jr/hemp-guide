"use client";

import { type FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export interface SignUpFormProps {
  submitLabel?: string;
  onSubmit?: (data: { name: string; email: string }) => void;
}

type SubmitStatus = "idle" | "loading" | "error";

const FREEVIEW_THANK_YOU_PATH = "/freeview-thank-you";

export function SignUpForm({
  submitLabel = "Send my preview now",
  onSubmit,
}: SignUpFormProps) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit?.({ name, email });

    setStatus("loading");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setErrorMessage((data.error as string) || "Something went wrong.");
        return;
      }
      router.push(FREEVIEW_THANK_YOU_PATH);
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  }

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <label className="signup-form__label" htmlFor="signup-name">
        Name
      </label>
      <input
        id="signup-name"
        type="text"
        className="signup-form__input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        autoComplete="name"
        disabled={status === "loading"}
      />
      <label className="signup-form__label" htmlFor="signup-email">
        Email
      </label>
      <input
        id="signup-email"
        type="email"
        className="signup-form__input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        autoComplete="email"
        required
        disabled={status === "loading"}
      />
      <button
        type="submit"
        className="cta-button signup-form__submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending…" : submitLabel}
      </button>
      {status === "error" && errorMessage && (
        <p className="signup-form__message signup-form__message--error">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
