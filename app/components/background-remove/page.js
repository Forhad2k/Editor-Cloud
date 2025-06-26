import Image from "next/image";
import BeforeAfterCard from "../BeforeAfterCard/page";
import FAQSection from "../faq/page";
import Link from "next/link";
export const metadata = {
  title: "Background Remove",
  description: "Remove unwanted backgrounds and give your photos a polished, professional look. Use our photo background removal services to easily eliminate unwanted backgrounds and give your images a fresh, new look. It’s fast, easy, and affordable. Start your free trial today.",
};

export default function Home() {
  return (
    <>
    
      <div className="hero bg-base-200 min-h-screen flex items-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 px-4 py-6 lg:px-6 lg:py-12">
          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-[80px] font-bold">
              Background <span className="text-[#ADB5BD]">Remove</span>
            </h1>
            <p className="py-6 text-2xl font-bold">
              Remove unwanted backgrounds and give your photos a polished,
              professional look.
            </p>
            <p className="py-6 text-lg">
              Use our photo background removal services to easily eliminate
              unwanted backgrounds and give your images a fresh, new look. It’s
              fast, easy, and affordable. Start your free trial today.
            </p>

            <Link href="/components/contact-us">
              <button className="bg-black text-[#ADB5BD] hover:bg-[#ADB5BD] hover:text-black px-5 py-3 rounded-xl transition duration-300">
                Get Started
              </button>
            </Link>
          </div>

          {/* Before After Card Section */}
          <div className="shadow-lg rounded-lg overflow-hidden hover:scale-105 transition duration-300">
            <BeforeAfterCard
              beforeImage="/Background Remove/Before1.jpg"
              afterImage="/Background Remove/After1.jpg"
            />
          </div>
        </div>
      </div>
      {/* title section */}
      <div className="text-center md:w-2/3 m-auto pt-28">
        <h1 className="text-5xl md:text-[80px] text-center  text-[#ADB5BD] font-bold">
          Professional
        </h1>
        <h1 className="text-5xl md:text-[80px] text-center font-bold">
          Background Removal Services
        </h1>
        <p className="text-lg mt-4 text-center ">
          Say goodbye to unwanted backgrounds. We&rsquo;ll remove any background
          from any photo, no matter how complex or challenging. We can also
          replace it with a background of your choice or make it transparent.
        </p>
      </div>
      {/* title section end */}

      {/* Grid Section */}
      <div className="flex justify-center">
        <div className="grid w-full sm:max-w-[90%] md:max-w-[80%] pb-28 pt-16 h-auto items-center m-auto md:grid-cols-3 gap-10">
          {/* Left Column */}
          <div className="flex flex-col gap-7 items-start">
            <div className="p-6 w-full sm:w-[90%] md:w-[80%]">
              <h3 className="text-2xl font-bold mb-7">
                Transparent Background
              </h3>
              <p>
                Getting the perfect shot isn’t always easy. Sometimes, the
                background is either too distracting or doesn’t do your subject
                justice. No matter how complex or detailed your image is, we
                professionally make backgrounds transparent, keeping the focus
                right where it should be.
              </p>
            </div>
            <div className="p-6 w-full sm:w-[90%] md:w-[80%]">
              <h3 className="text-2xl font-bold mb-7">Background Removal</h3>
              <p>
                Our advanced tools and professional editors ensure your subject
                stands out by removing any unwanted background efficiently and
                accurately. Get a clean and crisp image ready for any use.
              </p>
            </div>
          </div>

          {/* Middle Column */}
          <div className="flex md:relative left-[-60] items-center justify-center hover:scale-105 transition duration-300">
            <Image
              src="/Background Remove/center.jpg"
              alt="chair"
              width={500}
              height={500}
              className="w-[80%] md:w-[500px] rounded-xl"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-7 items-start">
            <div className="p-6 w-full sm:w-[90%] md:w-[80%]">
              <h3 className="text-2xl font-bold mb-7">Shadow Removal</h3>
              <p>
                Getting the perfect shot isn’t always easy. Sometimes, the
                background is either too distracting or doesn’t do your subject
                justice. No matter how complex or detailed your image is, we
                professionally make backgrounds transparent, keeping the focus
                right where it should be.
              </p>
            </div>
            <div className="p-6 w-full sm:w-[90%] md:w-[80%]">
              <h3 className="text-2xl font-bold mb-7">
                Remove Unwanted Object
              </h3>
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

      <div className="hero bg-base-200 min-h-screen flex items-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 px-4 py-6 lg:px-6 lg:py-12">
          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-[80px] font-bold">
              Why Use <br />
              Photo
              <br />
              Background
              <br />
              Remove
              <br />
              Services for
              <br />
              <p className="text-[#ADB5BD]">eCommerce?</p>
            </h1>

            <p className="py-6 text-lg">
              Ever browsed an online store with blurry, cluttered product
              photos? Not exactly impressive, right? Our professional photo
              background removal services deliver clean, consistent product
              images that catch the eye and boost sales. We’ll remove unwanted
              backgrounds from your images, making them flawless. It’s the
              difference between blending in and standing out.
            </p>

            <Link href="/components/contact-us">
              <button className="bg-black text-[#ADB5BD] hover:bg-[#ADB5BD] hover:text-black px-5 py-3 rounded-xl transition duration-300">
                Get Started
              </button>
            </Link>
          </div>

          <div className="flex-1 flex justify-center hover:scale-105 transition duration-300">
            <Image
              src="/Background Remove/camera.jpg"
              alt="camera"
              width={500}
              height={500}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
      {/* title section */}
      <div className="text-center md:w-2/3 m-auto p-14 md:p-28">
        <h1 className="text-5xl md:text-[80px] text-center font-bold">
          SEE OUR <span className="text-[#ADB5BD]">WORK</span>
        </h1>

        <p className="text-lg mt-4 text-center ">
          Take a look at our work and see our image editing mastery in action.
          Whether it’s removing backgrounds, shadows, or anything else you don’t
          want, we do it quickly and affordably. Give us a try today!
        </p>
      </div>
      {/* title section end */}
      {/* Grid Section */}
      <div className="grid w-[80%] pb-28 pt-16 h-auto items-center m-auto gap-7 md:grid-cols-3">
        {/* Left Column */}
        <div className="flex flex-col gap-7 items-center">
          <div className="shadow-lg rounded-lg overflow-hidden w-full max-w-[400px] hover:scale-105 transition duration-300">
            <BeforeAfterCard
              beforeImage="/Background Remove/B2.png"
              afterImage="/Background Remove/2.jpg"
            />
            <h3 className=" text-center text-2xl  mt-8">
              Dust & Scratch Remove
            </h3>
            <p className="text-lg mt-3 p-3">
              We specialize in providing top-notch background removal services
              to make your images stand out. Trust us to deliver high-quality
              results every time.
            </p>
          </div>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col gap-7 items-center">
          <div className="shadow-lg rounded-lg overflow-hidden w-full max-w-[400px] hover:scale-105 transition duration-300">
            <BeforeAfterCard
              beforeImage="/Background Remove/Before3.jpg"
              afterImage="/Background Remove/After3.jpg"
            />
            <h3 className=" text-center text-2xl  mt-8">
              Poor Reflection Remove
            </h3>
            <p className="text-lg mt-3 p-3">
              Shiny jewelry often has many reflections when photographed. In
              this piece, unwanted reflections were removed to give it a more
              expensive look.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-7 items-center">
          <div className="shadow-lg rounded-lg overflow-hidden w-full max-w-[400px] hover:scale-105 transition duration-300">
            <BeforeAfterCard
              beforeImage="/Background Remove/Before4.jpg"
              afterImage="/Background Remove/After4.jpg"
            />
            <h3 className=" text-center text-2xl  mt-8">Shadow Making</h3>
            <p className="text-lg mt-3 p-3">
              Shadows give the product a natural look. However, due to a
              two-sided light source, shadows might not be captured properly. We
              create and adjust them using Photoshop.
            </p>
          </div>
        </div>
      </div>
      {/* Grid Section End */}
      {/*section start */}
      <div className="hero bg-base-200 min-h-screen flex items-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 px-4 py-6 lg:px-6 lg:py-12">
          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-[80px] font-bold">
              Still, Confused?
            </h1>

            <p className="py-10 text-lg">
              Here to help! If you have any further questions regarding our
              services, our experienced team is here to help. Our promise is to
              make your experience smooth and the process of making a choice
              easy. We&rsquo;re grateful for your trust and can&rsquo;t wait to
              help you in any way we can. Feel free to reach out.
            </p>

            <Link href="/components/contact-us">
              <button className="bg-black text-[#ADB5BD] hover:bg-[#ADB5BD] hover:text-black px-5 py-3 rounded-xl transition duration-300">
                Get Started
              </button>
            </Link>
          </div>

          <div className="flex-1 flex justify-center hover:scale-105 transition duration-300">
            <Image
              src="/Background Remove/camera2.jpg"
              alt="camera"
              width={500}
              height={500}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
      {/*section End */}
      {/*section Start */}
      <div className="hero bg-base-200 flex items-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 px-4 py-6 lg:px-6 lg:py-6">
          <div className="flex-1 flex justify-center hover:scale-105 transition duration-300">
            <Image
              src="/Background Remove/model.jpg"
              alt="camera"
              width={500}
              height={500}
              className="rounded-xl"
            />
          </div>
          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-[80px] font-bold">How We Do It?</h1>

            <p className="py-10 text-lg">
              Before starting each retouch, we meticulously examine every detail
              of the jewelry image to identify and address any flaws. Using
              Photoshop and Lightroom, we correct these issues with precision.
              If any challenges arise later in the process, we&rsquo;re ready to
              make the necessary adjustments to ensure a flawless result.
            </p>
          </div>
        </div>
      </div>
      {/*section End */}
      <div className="hero bg-base-200 h-screen flex items-center">
        <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center justify-center gap-12 px-4 py-6 lg:px-6 lg:py-6">
          <div className="flex-1 flex justify-center h-[694px] hover:scale-105 transition duration-300">
            <Image
              src="/Background Remove/shoe.jpg"
              alt="camera"
              width={500}
              height={500}
              className="rounded-xl"
            />
          </div>
          {/* Text Section */}
          <div className="flex-1 text-center pb-9 lg:text-left">
            <h1 className="text-5xl md:text-[80px]  font-bold">
              How Can We <br /> Help?
            </h1>

            <p className="py-10 text-lg">
              We can give your product images a polished, professional look. For
              the past eight years, we&rsquo;ve been delivering high-quality
              image editing services. We can handle large volumes of work
              without sacrificing quality. Try our services with a free trial
              today.
            </p>
          </div>
        </div>
      </div>
      {/*section End */}
      {/*section Start */}

      {/* Title and Description Section */}
      <main className="flex-grow">
        <div className="text-center w-[80%] m-auto py-20">
          <h1 className="text-5xl font-bold">
            Why Choose <span className="text-[#ADB5BD]">Our Services?</span>
          </h1>
          <p className="text-lg mt-4 text-gray-600">
            We offer high-quality background removal and image enhancement
            services to make your photos look professional and polished. Whether
            you&rsquo;re an eCommerce store, a photographer, or a business
            owner, our services are tailored to meet your needs.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid w-[80%] m-auto pb-20 gap-10 md:grid-cols-3 text-center">
          {[
            {
              title: "Trustworthy",
              icon: "trustworthy-1.svg",
              text: "We have been working in this industry since 2015. We have built trust among our clients.",
            },
            {
              title: "Expert",
              icon: "expert-2.svg",
              text: "Our team consists of skilled and experienced eCommerce retouchers with 8 years of expertise.",
            },
            {
              title: "High Capacity",
              icon: "high-capacity-1.svg",
              text: "We can handle any volume and complexity of projects with exceptional proficiency.",
            },
            {
              title: "Delivery On-Time",
              icon: "delivery-on-time-1.svg",
              text: "Your deadlines matter to us, and we’ll deliver your work on time.",
            },
            {
              title: "Affordability",
              icon: "affordability-1.svg",
              text: "We offer competitive prices and value for money. Deals that are affordable and satisfactory.",
            },
            {
              title: "Support",
              icon: "support-1.svg",
              text: "We’re here 24/7, dedicated to customer happiness and satisfaction.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 shadow-lg rounded-lg bg-white flex flex-col items-center hover:scale-105 transition duration-300"
            >
              <Image
                src={`/Background Remove/${feature.icon}`}
                width={40}
                height={40}
                alt={feature.title}
                className="text-[#ADB5BD] mb-4"
              />
              <h3 className="text-2xl font-bold">{feature.title}</h3>
              <p className="text-gray-600 mt-3">{feature.text}</p>
            </div>
          ))}
        </div>
      </main>

      {/*section End */}

      <FAQSection></FAQSection>
    </>
  );
}
