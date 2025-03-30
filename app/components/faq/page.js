"use client"
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
const faqs = [
  {
    question: "What types of image do you edit ?",
    answer: "At Editors Cloud, we specialize in image editing services across various industries, including product, model, and automotive images. Our expert team can retouch, color correct, and resize images to perfection, ensuring they’re ready for e-commerce websites and advertising campaigns.",
  },
  {
    question: "What is the turn around time ?",
    answer: "We pride ourselves on our fast and efficient service. While our Editors Cloud, we take pride in our fast and efficient service. While our standard turnaround time is 24 hours, we always aim to deliver as quickly as possible without ever compromising on quality standard turnaround time is 24 hours, We always strive to deliver our services as quickly as possible without compromising on quality.",
  },
  {
    question: "What types of image do you accept ?",
    answer: "We specialize in image editing services for a wide range of formats, including JPEG, PNG, GIF, JPG, RAW, BMP, TIFF, SVG, WebP, and more.",
  },
  {
    question: "What types of payment gateway do you support ?",
    answer: "We aim to make our image editing services as accessible as possible by accepting both PayPal and Bank Transfer. Clients can choose the payment method that suits them best, ensuring a smooth and hassle-free transaction process.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-[80%] m-auto py-16">
      <h1 className="text-4xl font-bold text-center">Frequently Asked Questions</h1>
      <div className="mt-8 space-y-4 ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:scale-105 transition duration-300"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 p-5">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
