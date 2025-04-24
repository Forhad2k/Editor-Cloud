import React from 'react';
import Image from 'next/image';

const ContactUs = () => {
    return (
        <div className='flex items-center justify-center min-h-screen  p-4 '>
            <div className=' flex-1 flex  items-center justify-center'  > 
            <Image src="/contact/hero.jpg" alt="Contact Us"   width={500} height={500} objectFit="cover" className=" h-4/5 w-auto " />
            </div>
            
           <form className=" flex-1 max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
           <h1 className='text-center font-lexend font-semibold text-2xl'>Contact Us</h1>
  <div className="mb-4">
    <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-2">Name:</label>
    <input type="text" id="name" name="name" required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" />
  </div>
  <div className="mb-4">
    <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-2">Email:</label>
    <input type="email" id="email" name="email" required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" />
  </div>
  <div className="mb-4">
    <label htmlFor="message" className="block text-lg font-semibold text-gray-700 mb-2">Message:</label>
    <textarea id="message" name="message" required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" rows="4"></textarea>
  </div>
  <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">Submit</button>
</form>

        </div>
    );
};

export default ContactUs;