import { type FormEvent, useState } from 'react';

export interface SignUpFormProps {
  submitLabel?: string;
  onSubmit?: (data: { name: string; email: string }) => void;
}

export function SignUpForm({
  submitLabel = 'SEND MY PREVIEW NOW',
  onSubmit,
}: SignUpFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit?.({ name, email });
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
      />
      <button type="submit" className="cta-button signup-form__submit">
        {submitLabel}
      </button>
    </form>
  );
}
