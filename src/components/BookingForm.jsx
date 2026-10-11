// src/components/BookingForm.jsx
import React, { useState } from 'react';
import { content } from '../data/propertyContent';

export default function BookingForm() {
  const { booking } = content;
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo mode – just show a success message
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="booking" className="py-16 bg-bgSecondary text-textPrimary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-heading mb-4">Thank you!</h2>
          <p>Your enquiry has been recorded (demo only).</p>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-16 bg-bgSecondary text-textPrimary">
      <div className="container mx-auto max-w-xl">
        <h2 className="text-3xl font-heading text-center mb-8">{booking.headline}</h2>
        <form onSubmit={handleSubmit} className="grid gap-4" aria-label="Inquiry form">
          {booking.fields.map((field) => (
            <div key={field.name}>
              <label htmlFor={field.name} className="block mb-1 font-medium">{field.label}</label>
              {field.type === 'textarea' ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  required={field.required}
                  onChange={handleChange}
                  className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent"
                />
              ) : (
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  onChange={handleChange}
                  className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent"
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            className="w-full py-2 bg-accent text-bgPrimary font-semibold rounded hover:bg-accent/80 transition"
          >
            Send Enquiry (Demo Only)
          </button>
        </form>
      </div>
    </section>
  );
}
