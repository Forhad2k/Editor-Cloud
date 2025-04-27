"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    emailjs
      .send('service_hmlk13j', 'template_j83tdcu', formData, 'rjiEo2WbwurVOiRFr')
      .then(
        (response) => {
          setSuccessMessage('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          setErrorMessage('Failed to send message. Please try again later.');
        }
      )
      .finally(() => {
        setIsSubmitting(false); // Ensure submission state is reset regardless of success or failure
      });
  };

  return (
    <div className="md:flex items-center justify-center min-h-screen p-4">
      <div className="flex-1 flex items-center justify-center">
        <Image
          src="/contact/hero.jpg"
          alt="Contact Us"
          width={500}
          height={500}
          objectFit="cover"
          className="h-4/5 w-auto"
        />
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex-1 items-center justify-center max-w-2xl md:mx-32 p-6 bg-white rounded-lg shadow-lg"
      >
        <h1 className="text-center font-lexend font-semibold text-2xl">Contact Us</h1>
        
        {successMessage && (
          <div className="text-green-600 mb-4">{successMessage}</div>
        )}
        {errorMessage && <div className="text-red-600 mb-4">{errorMessage}</div>}

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-lg font-semibold text-gray-700 mb-2"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-lg font-semibold text-gray-700 mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-lg font-semibold text-gray-700 mb-2"
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            rows="4"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
