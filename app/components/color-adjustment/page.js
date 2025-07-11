import Image from "next/image";
import BeforeAfterCard from "../BeforeAfterCard/page";
import FAQSection from "../faq/page";
import Link from "next/link";
export const metadata = {
  title: "Color Adjustment Services",
  description: "Give your photos the exact color you envision, perfectly tailored to your needs.",
};

export default function Home() {
  return (
    <>
      <div className="hero bg-[#F2F2F2] min-h-screen flex items-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 px-4 py-6 lg:px-6 lg:py-12">
          <div className="shadow-lg rounded-lg overflow-hidden hover:scale-105 transition duration-300">
            <BeforeAfterCard
              beforeImage="/Color Adjustment/Before1.jpg"
              afterImage="/Color Adjustment/After1.jpg"
            />
          </div>
          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-[80px] font-bold">
              Color <span className="text-[#ADB5BD]">Adjustment</span>
            </h1>
            <p className="py-6 text-2xl font-bold">
              Give your photos the exact color you envision, perfectly tailored
              to your needs.
            </p>
            <p className="py-6 text-lg">
              With our color correction service, you can achieve the exact hues
              you desire for your photos. We’ll fine-tune your images to
              perfectly match your taste and style. Try our FREE TRIAL and see
              the difference firsthand.
            </p>

            <Link href="/start">
              <button className="bg-black text-[#ADB5BD] hover:bg-[#ADB5BD] hover:text-black px-5 py-3 rounded-xl transition duration-300">
                Get Started
              </button>
            </Link>
          </div>

          {/* Before After Card Section */}
        </div>
      </div>
      {/* title section */}
      <div className="text-center w-2/3 m-auto pt-28">
        <h1 className="text-5xl md:text-[80px] text-center  text-[#ADB5BD] font-bold">
          Professional
        </h1>
        <h1 className="text-5xl md:text-[80px] text-center font-bold">
          Color Correction Services
        </h1>
        <p className="text-lg w-[800px] m-auto mt-4 text-center ">
          Colors can completely transform the story a photo tells. Let us help
          you shape your visual narrative with our expert touch.
        </p>
      </div>
      {/* title section end */}

      {/* Grid Section */}
      <div className="flex justify-center">
        <div className="grid max-w-[80%] w-full pb-28 pt-16 h-auto items-center m-auto md:grid-cols-3 gap-10">
          {/* Left Column */}
          <div className="flex flex-col gap-7 items-center">
            <div className="p-6 w-full md:w-[80%]">
              <h3 className="text-2xl font-bold mb-7">
                White Balance Adjustment
              </h3>
              <p>
                Objects that appear white in real life should also look white in
                photos. However, sometimes pure white images can appear more
                bluish or yellowish. We can fine-tune your photos to ensure the
                colors stay true and accurate.
              </p>
            </div>
            <div className="p-6 w-full md:w-[80%]">
              <h3 className="text-2xl font-bold mb-7">Highlights & Shadows</h3>
              <p>
                Photos appear far more realistic when they have depth. Editors
                Cloud professional digital illustrators are experts in applying
                shadows to enhance size and distance variations. We also add
                dramatic highlights to elevate your images.
              </p>
            </div>
          </div>

          {/* Middle Column */}
          <div className="flex items-center justify-center hover:scale-105 transition duration-300">
            <Image
              src="/Color Adjustment/color.jpg"
              alt="chair"
              width={500}
              height={500}
              className="rounded-xl"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-7 items-center">
            <div className="p-6 w-full md:w-[80%]">
              <h3 className="text-2xl font-bold mb-7">
                Temperature Adjustment
              </h3>
              <p>
                By adjusting the color temperature, we make photos look more
                realistic and authentic. This technique helps create different
                moods—whether it&rsquo;s enhancing the warmth of sunlight or
                cooling down tones, we fine-tune photos to boost their visual
                appeal.
              </p>
            </div>
            <div className="p-6 w-full md:w-[80%]">
              <h3 className="text-2xl font-bold mb-7">Contrast & Brightness</h3>
              <p>
                Brightness and contrast are key to creating realistic photos. We
                can brighten dark areas to reveal hidden details, and by
                adjusting the contrast, we enhance colors and clearly define the
                separation between the foreground and background.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero bg-[#F2F2F2] min-h-screen flex items-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 px-4 py-6 lg:px-6 lg:py-12">
          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-[80px] font-bold">
              Why Use Color <br />
              Adjustment
              <br />
              Services for
              <br />
              <p className="text-[#ADB5BD]">eCommerce?</p>
            </h1>

            <p className="py-6 text-lg">
              Photographers&rsquo; lighting and camera settings aren&rsquo;t
              always perfect. If product photos don&rsquo;t accurately reflect
              the actual color, it can lead to customer dissatisfaction. We can
              adjust the image color to ensure it matches the real product,
              providing a more authentic and reliable representation.
            </p>

            <Link href="/start">
              <button className="bg-black text-[#ADB5BD] hover:bg-[#ADB5BD] hover:text-black px-5 py-3 rounded-xl transition duration-300">
                Get Started
              </button>
            </Link>
          </div>

          <div className="flex-1 flex justify-center hover:scale-105 transition duration-300">
            <Image
              src="/Color Adjustment/model.jpg"
              alt="chair"
              width={500}
              height={500}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
      {/* title section */}
      <div className="text-center md:w-2/3 m-auto p-28">
        <h1 className="text-5xl md:text-[80px] text-center font-bold">
          OUR <span className="text-[#ADB5BD]">WORK</span>
        </h1>

        <p className="text-lg mt-4 text-center ">
          Whether it&rsquo;s eCommerce product images, model photos, or fashion
          shots, our expert team and advanced technology can make them both
          appealing and true to life.
        </p>
      </div>
      {/* title section end */}
      {/* Grid Section */}
      <div className="grid w-[80%] pb-28 pt-16 h-auto items-center m-auto gap-7 md:grid-cols-3">
        {/* Left Column */}
        <div className="flex flex-col gap-7 items-center">
          <div className="shadow-lg rounded-lg overflow-hidden w-full max-w-[400px] hover:scale-105 transition duration-300">
            <BeforeAfterCard
              beforeImage="/Color Adjustment/Before2.jpg"
              afterImage="/Color Adjustment/After2.jpg"
            />
            <h3 className=" text-center text-2xl  mt-8">Product Photo</h3>
            <p className="text-lg mt-3 p-3">
              Editors Cloud offers top-tier product photo color correction
              services, ensuring that the colors in your images are perfectly
              natural. We fine-tune white balance, highlights, shadows, color
              temperature, contrast, and brightness to achieve flawless results.
            </p>
          </div>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col gap-7 items-center">
          <div className="shadow-lg rounded-lg overflow-hidden w-full max-w-[400px] hover:scale-105 transition duration-300 ">
            <BeforeAfterCard
              beforeImage="/Color Adjustment/Before3.jpg"
              afterImage="/Color Adjustment/After3.jpg"
            />
            <h3 className=" text-center text-2xl  mt-8">Model Photo</h3>
            <p className="text-lg mt-3 p-3">
              At Editors Cloud, we specialize in model photo color correction.
              We address unnatural skin tones, adjust colors, correct
              imperfections, remove moles if needed, and tackle other issues—all
              while preserving a natural appearance.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-7 items-center">
          <div className="shadow-lg rounded-lg overflow-hidden w-full max-w-[400px] hover:scale-105 transition duration-300">
            <BeforeAfterCard
              beforeImage="/Color Adjustment/Before4.jpg"
              afterImage="/Color Adjustment/After4.jpg"
            />
            <h3 className=" text-center text-2xl  mt-8">Color Change​</h3>
            <p className="text-lg mt-3 p-3">
              Product photos are crucial for online buyers, as purchase
              decisions are greatly influenced by how items are presented.
              Showcasing products in various color options can significantly
              boost sales by appealing to diverse cultures and preferences.
            </p>
          </div>
        </div>
      </div>
      {/* Grid Section End */}
      {/*section start */}
      <div className="hero bg-[#F2F2F2] min-h-screen flex items-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 px-4 py-6 lg:px-6 lg:py-12">
          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-[80px] font-bold">When To Use?</h1>

            <p className="py-10 text-lg">
              A natural photo often fails to accurately capture a
              product&rsquo;s true color. Variations in lighting and settings
              can make your goods appear different from one shot to another.
              Issues such as incorrect white balance, shadows, color
              temperature, contrast, and brightness can affect the
              product&rsquo;s appearance. Additionally, the model’s skin tone
              may not look natural in the photos.
            </p>

            <Link href="/start">
              <button className="bg-black text-[#ADB5BD] hover:bg-[#ADB5BD] hover:text-black px-5 py-3 rounded-xl transition duration-300">
                Get Started
              </button>
            </Link>
          </div>

          <div className="flex-1 flex justify-center hover:scale-105 transition duration-300">
            <Image
              src="/Color Adjustment/towel.jpg"
              alt="bike"
              width={500}
              height={500}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
      {/*section End */}
      {/*section Start */}
      <div className="hero bg-[#F2F2F2] flex items-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 px-4 py-6 lg:px-6 lg:py-6">
          <div className="flex-1 flex justify-center hover:scale-105 transition duration-300">
            <Image
              src="/Color Adjustment/shoe.png"
              alt="model"
              width={500}
              height={500}
              className="rounded-xl"
            />
          </div>
          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-[80px] font-bold">When To Use?</h1>

            <p className="py-10 text-lg">
              You run an online store and want to focus on growing your business
              rather than spending hours in Photoshop, or you work for an agency
              with tight client deadlines. You need top-notch product images,
              but the sheer volume is overwhelming and time-consuming to enhance
              on your own.
            </p>
          </div>
        </div>
      </div>
      {/*section End */}
      <div className="hero bg-[#F2F2F2] h-screen flex items-center">
        <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center justify-center gap-12 px-4 py-6 lg:px-6 lg:py-6">
          <div className="flex-1 flex justify-center h-[694px] hover:scale-105 transition duration-300">
            <Image
              src="/Color Adjustment/model2.jpg"
              alt="model"
              width={500}
              height={500}
              className="rounded-xl"
            />
          </div>
          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left">
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
