import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

/**
 * Formik implementation.
 * Filename kept as `formikForm.js` per task requirement.
 * Uses Yup for validation.
 */

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export default function FormikForm() {
  const initialValues = { username: "", email: "", password: "" };

  async function handleSubmit(values, { setSubmitting, resetForm, setStatus }) {
    setStatus({ success: null, error: null });
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      setStatus({ success: `Registered (mock) with id ${data.id || "N/A"}`, error: null });
      resetForm();
    } catch (err) {
      setStatus({ success: null, error: err.message || "Submission failed" });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="card">
      <h2>Formik Registration Form</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting, status }) => (
          <Form noValidate>
            <div className="form-row">
              <label htmlFor="username">Username</label>
              <Field id="username" name="username" />
              <ErrorMessage name="username" component="div" className="error" />
            </div>

            <div className="form-row">
              <label htmlFor="email">Email</label>
              <Field id="email" name="email" type="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-row">
              <label htmlFor="password">Password</label>
              <Field id="password" name="password" type="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <div style={{ marginTop: 12 }}>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Registering..." : "Register (Formik)"}
              </button>
            </div>

            {status && status.success && <div className="success">{status.success}</div>}
            {status && status.error && <div className="error">{status.error}</div>}
          </Form>
        )}
      </Formik>
    </div>
  );
}