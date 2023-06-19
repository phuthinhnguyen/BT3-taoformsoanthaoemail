import React, { useState } from "react";
import { Formik } from "formik";
import "./App.css";

export default function App() {
  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  };

  const [form, setForm] = useState({});

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  function handleValidate() {
    const errors = {};
    if (!form.email) {
      errors.email = "Required";
    } else if (!REGEX.email.test(form.email)) {
      errors.email = "Invalid email address";
      console.log("code");
    }
    if (!form.title) {
      errors.title = "Required";
    }
    if (!form.message) {
      errors.message = "Required";
    }

    return errors;
  }

  function handleSubmit() {
    alert("Login in successfully!!!");
  }

  return (
    <div>
      <h1>Sign up</h1>
      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ errors, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div
              className={`custom-input ${
                errors.email ? "custom-input-error" : ""
              }`}
            >
              <label>To</label>
              <input
                type="email"
                name="email"
                value={form.email || ""}
                onChange={handleChange}
              />
              <p className="error">{errors.email}</p>
            </div>
            <div
              className={`custom-input ${
                errors.title ? "custom-input-error" : ""
              }`}
            >
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={form.title || ""}
                onChange={handleChange}
              />
              <p className="error">{errors.title}</p>
            </div>
            <div className={`custom-input ${
                errors.message ? "custom-input-error" : ""
              }`}>
              <label>Message</label>
              <textarea style={{resize:"none"}} 
                name="message"
                value={form.message || ""}
                onChange={handleChange}></textarea>
                <p className="error">{errors.message}</p>
            </div>
            <div>
              <input type="file"></input>
            </div>

            <button type="submit" style={{marginTop:20}}>Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}
