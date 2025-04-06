"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import { FaAngleUp } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import Image from 'next/image';







export default function Navber() {
  const [dropdown, setDropdown] = useState(false);
  const [imageEditingDropdown, setImageEditingDropdown] = useState(false);
  const [videoEditingDropdown, setvideoEditingDropdown] = useState(false);
  const [cgi3dDropdown, setcgi3dDropdown] = useState(false);
  const [pricingDropdown, setPricingDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to control hamburger menu
  const menuItems = [
    { href: "/components/background-remove", icon: "/icons/Background-remove.png", label: "Background Remove" },
    { href: "/components/multi-clipping-path", icon: "/icons/clipping.png", label: "Multi Clipping Path" },
    { href: "/components/color-adjustment", icon: "/icons/Color-Correction.png", label: "Color Adjustment" },
    { href: "/components/shadow-reflection", icon: "/icons/Shadow.png", label: "Shadow Reflection" },
    { href: "/components/ghost-mannequin", icon: "/icons/Ghost-manniqien.png", label: "Ghost Mannequin" },
    { href: "/components/jewelry-retouch", icon: "/icons/Jewllery-Retouch.png", label: "Jewelry Retouch" },
    { href: "/components/model-retouch", icon: "/icons/Model-Retouch.png", label: "Model Retouch" },
  ];
  const [isMobile, setIsMobile] = useState(false);
  // Check if the device is mobile or not
  // This will set the isMobile state based on the user agent
  useEffect(() => {
    const checkMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsMobile(checkMobile);
  }, []);

  return (
    <div>
      <div className="bg-white h-20 w-full flex justify-between items-center px-5 md:px-14 relative">
        {/* Logo on Left */}
        <Link href="/">
        <Image src="/icons/logo.png" alt="My Icon" width="100" height="50" className="cursor-pointer" />
        </Link>
        

        {/* Hamburger Icon for Mobile */}
        <div
          className="block md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <TfiClose size={30} /> : <CiMenuFries size={30} />} 
        </div>

        {/* Navbar in Center */}
        <ul
          className={"md:flex h-screen md:h-auto transition-all duration-1000 z-[10000]  bg-white list-none absolute md:static top-0 left-0 p-5 " + (menuOpen ? "block" : "hidden")}
        >
          {/* Services Dropdown */}
          <li
           onMouseEnter={!isMobile ? () => setDropdown(true) : undefined}
           onMouseLeave={!isMobile ? () => setDropdown(false) : undefined}
            onClick={isMobile ? () => setDropdown(!dropdown) : undefined}
            className="relative px-4 py-2"
          >
            <Link href="#">
              <span className=" text-xl hover:text-blue-600 flex items-center gap-2">
                Services  { dropdown ? <FaAngleUp /> : <FaChevronDown /> }
              </span>
            </Link>
            {dropdown && (
              <div className=" md:absolute left-0 top-full z-[10000] bg-white shadow-lg w-48">
                <ul className="m-2 ">
                  {/* Image Editing Dropdown */}
                  <li
                     onMouseEnter={!isMobile ? () => setImageEditingDropdown(true) : undefined}
                     onMouseLeave={!isMobile ? () => setImageEditingDropdown(false) : undefined}
                      onClick={isMobile ? () => setImageEditingDropdown(!ImageEditingDropdown) : undefined}
                    className=" relative"
                  >
                    <Link href="/background-remove">
                      <span className=" flex items-center hover:bg-blue-600 p-2">
                      <Image src="/icons/clipping.png" alt="My Icon" width="50" height="50" className='p-3' />Image Editing 
                      </span>
                    </Link>
                    {imageEditingDropdown && (
                         <div className="absolute left-full z-50 top-0 shadow-lg w-60">
                         <ul className="m-2 bg-white">
                           {menuItems.map((item, index) => (
                             <li key={index}>
                               <Link href={item.href}>
                                 <span className="flex items-center hover:text-green-600 p-2">
                                   <Image src={item.icon} alt={`${item.label} Icon`} width={50} height={50} className="p-3" />
                                   {item.label}
                                 </span>
                               </Link>
                             </li>
                           ))}
                         </ul>
                       </div>
                    
                    )}
                  </li>
                  {/* Video Editing */}
                  <li
                     onMouseEnter={!isMobile ? () => setvideoEditingDropdown(true) : undefined}
                     onMouseLeave={!isMobile ? () => setvideoEditingDropdown(false) : undefined}
                      onClick={isMobile ? () => setvideoEditingDropdown(!videoEditingDropdown) : undefined}
                    className="relative"
                  >
                    <Link href="#">
                    <span className=" flex items-center hover:bg-blue-600 p-2">
                      <Image src="/icons/video-36x36.png" alt="My Icon" width="50" height="50" className='p-3' />Video Editing 
                      </span>
                    </Link>
                    {videoEditingDropdown && (
                      <div className="absolute left-full top-0 z-50 shadow-lg w-56">
                        <ul className="m-2 bg-white">
                          <li>
                            <Link href="/components/post-production">
                              <span className=" hover:bg-blue-600 block p-2">
                                Post Production
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>
                  {/* 3D & CGI */}
                  <li onMouseEnter={!isMobile ? () => setcgi3dDropdown(true) : undefined}
           onMouseLeave={!isMobile ? () => setcgi3dDropdown(false) : undefined}
            onClick={isMobile ? () => setcgi3dDropdown(!cgi3dDropdown) : undefined}
                    className="relative"
                  >
                    <Link href="/3d-cgi">
                    <span className=" flex items-center hover:bg-blue-600 p-2">
                      <Image src="/icons/3D.png" alt="My Icon" width="50" height="50" className='p-3' />3D & CGI 
                      </span>
                    </Link>
                    {cgi3dDropdown && (
                      <div className="absolute left-full top-0  shadow-lg w-56">
                        <ul className="m-2 bg-white">
                          <li>
                            <Link href="/components/product-3d-modeling">
                              <span className=" hover:bg-blue-600 block p-2">
                                Product 3D Modeling
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>
                </ul>
              </div>
            )}
          </li>

          {/* Pricing Dropdown */}
          <li
             onMouseEnter={!isMobile ? () => setPricingDropdown(true) : undefined}
             onMouseLeave={!isMobile ? () => setPricingDropdown(false) : undefined}
              onClick={isMobile ? () => setPricingDropdown(!pricingDropdown) : undefined}
            className="relative px-4 py-2"
          >
            <Link href="#">
              <span className=" text-xl hover:text-blue-600 flex items-center gap-2">
                Pricing { pricingDropdown ? <FaAngleUp /> : <FaChevronDown /> }
              </span>
            </Link>
            {pricingDropdown && (
              <div className="md:absolute z-50 left-0 top-full bg-white  w-48">
                <ul className="m-2 bg-white">
                  <li>
                    <Link href="/components/image-editing">
                      <span className=" hover:bg-blue-600 block p-4">
                        Image Editing
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/components/video-editing">
                      <span className=" hover:bg-blue-600 block p-4">
                        Video Editing
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/components/3d-cgi">
                      <span className=" hover:bg-blue-600 block p-4">
                        3D & CGI
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li
             onMouseEnter={!isMobile ? () => setAboutDropdown(true) : undefined}
             onMouseLeave={!isMobile ? () => setAboutDropdown(false) : undefined}
              onClick={isMobile ? () => setAboutDropdown(!aboutDropdown) : undefined}
            className="relative px-4 py-2"
          >
            <Link href="#">
              <span className=" text-xl hover:text-blue-600 flex items-center gap-2">
                Learn { aboutDropdown ? <FaAngleUp /> : <FaChevronDown /> }
              </span>
            </Link>
            {aboutDropdown && (
              <div className="md:absolute  z-50 left-0 top-full bg-white  w-48">
                <ul className="m-2 bg-white">
                  <li>
                    <Link href="/components/about">
                      <span className=" hover:bg-blue-600 block p-2">
                        About Us
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/components/contact-us">
                      <span className=" hover:bg-blue-600 block p-2">
                        Contact Us
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/components/faq">
                      <span className=" hover:bg-blue-600 block p-2">
                        FAQ
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/components/career">
                      <span className=" hover:bg-blue-600 block p-2">
                        Career
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>

        {/* Button on Right */}
        <div className="px-4 py-2 hidden sm:block">
          <Link href="/components/start">
            <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Free Trial
            </button>
          </Link>
        </div>
      </div>
      
      </div>

  );
}
