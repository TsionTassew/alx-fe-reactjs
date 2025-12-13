import React, { useState } from "react";

/**
 * Controlled components implementation (updated).
 * Uses separate state variables for username, email, password
 * and ensures inputs include value={username}, value={email}, value={password}.
 * Validation now includes explicit `if (!email)` and `if (!password)` checks.
 */

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, message: null, error: null });

  function validate() {
    const errs = {};
    if (!username || !username.trim()) errs.username = "Username is required";

    // explicit presence check as requested
    if (!email) {
      errs.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errs.email = "Invalid email address";
    }

    // explicit presence check as requested
    if (!password) {
      errs.password = "Password is required";
    } else if (password.length < 6) {
      errs.password = "Password must be at least 6 characters";
    }

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
        body: JSON.stringify({ username, email, password }),
      });

      if (!res.ok) throw new Error("Network response was not ok");

      const data = await res.json();
      setStatus({ loading: false, message: `Registered (mock) with id ${data.id || "N/A"}`, error: null });
      // clear form
      setUsername("");
      setEmail("");
      setPassword("");
      setErrors({});
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
          <input
            id="username"
            name="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setErrors((prev) => ({ ...prev, username: null }));
            }}
          />
          {errors.username && <div className="error">{errors.username}</div>}
        </div>

        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors((prev) => ({ ...prev, email: null }));
            }}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div className="form-row">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors((prev) => ({ ...prev, password: null }));
            }}
          />
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