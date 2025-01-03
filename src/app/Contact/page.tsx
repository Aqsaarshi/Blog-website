"use client";
import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!formData.name) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is not valid";
      isValid = false;
    }

    if (!formData.message) {
      errors.message = "Message is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the data to an API or service
      alert("Form Submitted!");
      // Clear form data
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-rose-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center text-pink-700 mb-6">
        Contact Us
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-lg font-medium" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
          {formErrors.name && (
            <p className="text-red-500 text-sm">{formErrors.name}</p>
          )}
        </div>

        <div>
          <label className="block text-lg font-medium" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
          {formErrors.email && (
            <p className="text-red-500 text-sm">{formErrors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-lg font-medium" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500"
            placeholder="Write your message here"
          ></textarea>
          {formErrors.message && (
            <p className="text-red-500 text-sm">{formErrors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-rose-400 text-white font-semibold rounded-md hover:bg-rose-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
