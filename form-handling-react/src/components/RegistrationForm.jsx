import React, { useState } from "react";

/**
 * Controlled components implementation.
 * Fields: username, email, password
 * Basic validation: non-empty fields
 * Simulated POST to mock API (jsonplaceholder)
 */
export default function RegistrationForm() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, message: null, error: null });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: null }));
  }

  function validate() {
    const errs = {};
    if (!form.username.trim()) errs.username = "Username is required";
    if (!form.email.trim()) errs.email = "Email is required";
    if (!form.password.trim()) errs.password = "Password is required";
    return errs;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ loading: false, message: null, error: null });
    const v = validate();
    if (Object.keys(v).length) {
      setErrors(v);
      return;
    }

    setStatus({ loading: true, message: null, error: null });

    try {
      // Mock API endpoint — replace with your actual endpoint
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Network response was not ok");

      const data = await res.json();
      setStatus({ loading: false, message: `Registered (mock) with id ${data.id || "N/A"}`, error: null });
      setForm({ username: "", email: "", password: "" });
    } catch (err) {
      setStatus({ loading: false, message: null, error: err.message || "Submission failed" });
    }
  }

  return (
    <div className="card">
      <h2>Controlled Registration Form</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <label htmlFor="username">Username</label>
          <input id="username" name="username" value={form.username} onChange={handleChange} />
          {errors.username && <div className="error">{errors.username}</div>}
        </div>

        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange} />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div className="form-row">
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" value={form.password} onChange={handleChange} />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>

        <div style={{ marginTop: 12 }}>
          <button type="submit" disabled={status.loading}>
            {status.loading ? "Registering..." : "Register"}
          </button>
        </div>

        {status.message && <div className="success">{status.message}</div>}
        {status.error && <div className="error">{status.error}</div>}
      </form>
    </div>
  );
}