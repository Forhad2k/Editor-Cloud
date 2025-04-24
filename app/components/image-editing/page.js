"use client"
import Image from "next/image";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function ImageEditing() {
  const [total, setTotal] = useState(0.40);
  const [selectedServices, setSelectedServices] = useState([]);

  const services = [
    { name: "Ghost Mannequin", price: 0.60 },
    { name: "Clipping Path", price: 0.15 },
    { name: "Shadow & Reflection", price: 0.10 },
    { name: "Color Correction", price: 0.60 },
    { name: "Basic Retouch", price: 0.30 },
    { name: "Advance Retouch", price: 0.75 }
  ];

  const handleServiceClick = (service) => {
    // Check if service is already selected using name or other unique property
    const isSelected = selectedServices.includes(service.name);

    if (isSelected) {
      // If selected, subtract the price and remove from the selected list
      setTotal((prevTotal) => prevTotal - service.price);
      setSelectedServices(selectedServices.filter((item) => item !== service.name));
    } else {
      // If not selected, add the price and add to the selected list
      setTotal((prevTotal) => prevTotal + service.price);
      setSelectedServices([...selectedServices, service.name]);
    }
  };

  return (
    <div className="h-screen w-full">
      <div>
        <Image
          src="/Pricing/image-editing-pricing.png"
          alt="Image Editing Pricing"
          width={1000}
          height={1000}
          className="w-full object-cover"
        />
      </div>

      <div className="relative text-4xl text-bold mx-24 bottom-52 z-10">
        <h1 className="flex items-center">
          Image Editing<span className="text-white mx-4">Pricing</span>
        </h1>
      </div>

      <div className="container mx-auto px-10 py-20">
        <div className="flex justify-between">
          {/* Left Section - Services */}
          <div className="w-1/2 pr-10">
            <h2 className="text-2xl font-semibold mb-4">Select Services</h2>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex justify-between cursor-pointer hover:text-green-500"
                  onClick={() => handleServiceClick(service)}
                >
                  <span>{service.name}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">${service.price.toFixed(2)}</span>
                    {selectedServices.includes(service.name) ? (
                      <FaMinus className="text-red-500" />
                    ) : (
                      <FaPlus className="text-green-500" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Price Information */}
          <div className="w-1/2 pl-10">
            <h2 className="text-2xl font-semibold mb-4">Base Price</h2>
            <p className="text-xl mb-6">
              <span className="font-semibold text-green-500">$0.40</span> <br />
              Includes Background removal, Alignment, Cropping, Resizing,
              Compression, File format, Color profile, DPI, File size, Meta-data,
              and Watermarks.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Total Price Image</h2>
            <p className="text-4xl font-bold text-green-500 mb-6">${total.toFixed(2)}</p>

            <button className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600">
              GET STARTED
            </button>

            <p className="text-sm text-gray-500 mt-4">
              For customizing pricing, please contact us!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
