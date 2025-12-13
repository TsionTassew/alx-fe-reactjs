import React, { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

export default function App() {
  const [useFormik, setUseFormik] = useState(false);

  return (
    <div className="app-container">
      <header>
        <h1>Form Handling Demo — Controlled vs Formik</h1>
        <div className="toggle">
          <label>
            <input
              type="checkbox"
              checked={useFormik}
              onChange={() => setUseFormik((v) => !v)}
            />
            Use Formik
          </label>
        </div>
      </header>

      <main>
        {useFormik ? <FormikForm /> : <RegistrationForm />}
      </main>

      <footer>
        <p>Toggle the checkbox to switch between the two implementations.</p>
      </footer>
    </div>
  );
}