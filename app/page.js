import Image from "next/image";
import Link from "next/link";
import FAQSection from "./components/faq/page";

export default function Home() {
  const logos = [
    { src: "/Landing-page/s1.jpg", alt: "Accenture" },
    { src: "/Landing-page/s2.jpg", alt: "ALDO" },
    { src: "/Landing-page/s3.jpg", alt: "Zalando" },
    { src: "/Landing-page/s4.jpg", alt: "Mango" },
    { src: "/Landing-page/s5.jpg", alt: "Asics" },
    { src: "/Landing-page/s6.jpg", alt: "Pacsun" },
    { src: "/Landing-page/s7.jpg", alt: "Pacsun" },
    { src: "/Landing-page/s8.jpg", alt: "Pacsun" },
  ];

  return (
    <>
      <section className="h-4/5 md:flex justify-around items-center p-8 scroll-smooth bg-white text-black">
        <div className="max-w-lg">
          <h2 className="md:text-8xl text-6xl w-8 font-bold">Editors Cloud Your Editing</h2>
          <h3 className="text-8xl text-gray-600 mt-2">Pathner</h3>
          <p className="text-lg mt-4 mb-6">
            We’re empowering photo studio professionals with reliable image
            editing
          </p>
          <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-700 transition duration-300">
            Get Started
          </button>
        </div>
        <div className="flex gap-4 items-center">
          <div className="">
            <Image
              src="/Landing-page/Hero1.jpg"
              alt="Model"
              width={400}
              height={600}
              className="rounded-lg"
            />
          </div>
          <div className="">
            <div className="">
              <Image
                src="/Landing-page/Hero2.jpg"
                alt="Model"
                width={400}
                height={600}
                className="rounded-lg mb-4"
              />
            </div>
            <div className="">
              <Image
                src="/Landing-page/Hero3.jpg"
                alt="Model"
                width={400}
                height={600}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Logo Animation Section */}
      <section className=" w-4/5 flex m-auto overflow-hidden py-8">
        <div className="flex animate-infinite-scroll whitespace-nowrap">
          {logos.map((logo, index) => (
            <div key={index} className="logo-item w-44 h-auto ">
              <Image src={logo.src} alt={logo.alt} width={120} height={50} />
            </div>
          ))}
        </div>
        <div className="flex animate-infinite-scroll whitespace-nowrap">
          {logos.map((logo, index) => (
            <div key={index} className="logo-item w-44 h-auto ">
              <Image src={logo.src} alt={logo.alt} width={120} height={50} />
            </div>
          ))}
        </div>
      </section>
      {/* End of Logo Animation Section */}
      <div className="hero bg-base-200 min-h-screen flex items-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 px-4 py-6 lg:px-6 lg:py-12">
          {/* Text Section */}
          <div className="flex-1  lg:text-right">
            <h1 className="text-5xl leading-tight md:text-[70px] font-bold">
              There’s A<br />
              <p className="text-[#ADB5BD]">Better Way To</p>
              Do Post-
              <br />
              Production
              <br />
            </h1>

            <p className="py-6 text-[#323436]  text-lg">
              With an automated production system, custom editing features, and
              a platform for full transparency, you can quickly grow without the
              usual limits of traditional post-production. All of this is
              possible with Editors Cloud.
            </p>
          </div>

          <div className="flex-1 flex justify-start ">
            <Image
              src="/Landing-page/Model1.jpg"
              alt="camera"
              width={500}
              height={500}
              className="rounded-xl hover:translate-y-1 transition duration-300"
            />
          </div>
        </div>
      </div>
      {/* end */}
      <div className="hero bg-base-200 flex items-center">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-12 px-4 py-6 lg:px-6 lg:py-12">
          <div className="flex-1 flex justify-end">
            <Image
              src="/Landing-page/Model2.jpg"
              alt="camera"
              width={500}
              height={500}
              className="rounded-xl  hover:translate-y-1 transition duration-300"
            />
          </div>
          {/* Text Section */}
          <div className="flex-1  lg:text-left">
            <h1 className="text-5xl leading-tight md:text-[70px] font-bold">
              All your
              <br />
              <p className="text-[#ADB5BD]">e-commerce</p>
              assets in
              <br />
              one place
              <br />
            </h1>

            <p className="py-6  text-[#323436] text-lg">
              A great product photo can capture attention and boost sales. But
              even the best shots need a bit of tweaking. That’s where Editors
              Cloud steps in. We make sure your image editing experience is
              top-notch.
            </p>
          </div>
        </div>
      </div>
      {/* end */}
      <section className="w-4/5 flex  flex-col lg:flex-row m-auto overflow-hidden py-12">
        <div className="w-full flex-1 sm:w-1/2 lg:w-1/4 p-4">
          <div className="bg-white shadow-md rounded-lg p-6">
            <p className="text-[#ADB5BD] text-3xl  md:text-5xl font-bold">
              4000+
            </p>
            <h1 className="text-3xl  md:text-5xl mb-2 font-bold">
              Images
              <br />
              Processed
              <br />
              Daily
              <br />
            </h1>
            <p className="text-gray-600 w-2/3">
              Our workflows make it simple to scale and meet all your photo
              processing needs effortlessly!
            </p>
          </div>
        </div>
        <div className="w-full flex-1 sm:w-1/2 lg:w-1/4 p-4">
          <div className="bg-white h-full w-4/5 m-auto text-center my-auto py-12  shadow-md rounded-lg ">
            <h3 className="text-3xl  md:text-5xl font-bold mb-4">99.5%</h3>
            <p className="text-green-600 text-xl mb-7">First Time Approval</p>
            <p className="text-black">
              Eliminate the back-and-forth to achieve the perfect result.
            </p>
          </div>
        </div>{" "}
        <div className="w-full flex-1 sm:w-1/2 lg:w-1/4 p-4">
          <div className="bg-white h-full w-4/5 m-auto text-center  py-12  shadow-md rounded-lg ">
            <h3 className="text-3xl  md:text-5xl font-bold mb-4">99.7%</h3>
            <p className="text-green-600 text-xl mb-7">On-Time Delivery</p>
            <p className="text-black">
            We hate being late as much as you do.
            </p>
          </div>
        </div>{" "}
        <div className="w-full flex-1 sm:w-1/2 lg:w-1/4 p-4">
          <div className="bg-white h-full w-4/5 m-auto text-center my-auto py-12  shadow-md rounded-lg ">
            <h3 className="text-3xl  md:text-5xl font-bold mb-4">1h</h3>
            <p className="text-green-600 text-xl mb-7">First Time Approval</p>
            <p className="text-black">
            With Flow, our customers receive images in as little as 1 hour.
            </p>
          </div>
        </div>
      </section>
      {/* end */}
      <div className="text-center md:w-2/3 m-auto pt-28">
        <h1 className="text-5xl md:text-[80px] text-center font-bold">
          Explore Our
        </h1>
        +
        <h1 className="text-5xl md:text-[80px] text-center  text-[#ADB5BD] font-bold">
          Editing Services
        </h1>
      </div>
      {/* title section end */}

      {/* Grid Section */}
      <div className="flex justify-center">
        <div className="grid w-full sm:max-w-[90%] md:max-w-[80%] pb-28 pt-16 h-auto items-center m-auto md:grid-cols-3 gap-10">
          {/* Left Column */}
          <div className="flex flex-col gap-7 items-start">
            <div className="p-6 w-full sm:w-[90%] md:w-[80%]">
              <h3 className="text-2xl font-bold mb-7">Background Removal</h3>
              <p>
                Getting the perfect shot isn’t always easy. Sometimes, the
                background is either too distracting or doesn’t do your subject
                justice. No matter how complex or detailed your image is, we
                professionally make backgrounds transparent, keeping the focus
                right where it should be.
              </p>
            </div>
            <div className="p-6 w-full sm:w-[90%] md:w-[80%]">
              <h3 className="text-2xl font-bold mb-7">Color Service</h3>
              <p>
                Our advanced tools and professional editors ensure your subject
                stands out by removing any unwanted background efficiently and
                accurately. Get a clean and crisp image ready for any use.
              </p>
            </div>
          </div>

          {/* Middle Column */}
          <div className="flex flex-col gap-7 items-start">
            <div className="p-6 w-full sm:w-[90%] md:w-[80%]">
              <h3 className="text-2xl font-bold mb-7">Retouching</h3>
              <p>
                Getting the perfect shot isn’t always easy. Sometimes, the
                background is either too distracting or doesn’t do your subject
                justice. No matter how complex or detailed your image is, we
                professionally make backgrounds transparent, keeping the focus
                right where it should be.
              </p>
            </div>
            <div className="p-6 w-full sm:w-[90%] md:w-[80%]">
              <h3 className="text-2xl font-bold mb-7">Ghost Mannequin</h3>
              <p>
                Unwanted objects in an image can distract from the main subject.
                Remove any unwanted elements from your photos to keep the focus
                where it belongs. We’ll make them disappear, helping your
                subject stand out.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-7 items-start">
            <div className="p-6 w-full sm:w-[90%] md:w-[80%]">
              <h3 className="text-2xl font-bold mb-7">Clipping</h3>
              <p>
                Getting the perfect shot isn’t always easy. Sometimes, the
                background is either too distracting or doesn’t do your subject
                justice. No matter how complex or detailed your image is, we
                professionally make backgrounds transparent, keeping the focus
                right where it should be.
              </p>
            </div>
            <div className="p-6 w-full sm:w-[90%] md:w-[80%]">
              <h3 className="text-2xl font-bold mb-7">Shahows</h3>
              <p>
                Unwanted objects in an image can distract from the main subject.
                Remove any unwanted elements from your photos to keep the focus
                where it belongs. We’ll make them disappear, helping your
                subject stand out.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* end */}
      <div className="hero bg-base-200 flex items-center">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-12 px-4 py-6 lg:px-6 lg:py-12">
          <div className="flex-1 flex justify-end">
            <Image
              src="/Landing-page/poster.png"
              alt="camera"
              width={500}
              height={500}
              className="rounded-xl  hover:translate-y-1 transition duration-300"
            />
          </div>
          {/* Text Section */}
          <div className="flex-1  lg:text-left">
            <p className="text-2xl">LET&rsquo;S START</p>
            <p className="py-3 text-2xl text-gray-500">A Partnership</p>
            <p className="text-xl pb-3">
              Boost your sales on Amazon, Etsy, Shopify, eBay, and other
              marketplaces with our expert image and video editing services.
            </p>
            <p className="text-xl pb-3">
              Simply upload your photos or videos and relax while we deliver the
              best results for your marketplace listings. Our photo and video
              editors will make your content eye-catching and engaging.
            </p>
            <Link href="/start">
              <button className="bg-black text-[#ADB5BD] hover:bg-[#ADB5BD] hover:text-black px-5 py-3 rounded-xl transition duration-300">
                Join us
              </button>
            </Link>
          </div>
        </div>
      </div>
      <FAQSection></FAQSection>
    </>
  );
}
