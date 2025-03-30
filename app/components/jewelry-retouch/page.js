import Image from "next/image";
import BeforeAfterCard from "../BeforeAfterCard/page";
import FAQSection from '../faq/page';
import Link from "next/link";

export const metadata = {
  title: "Jewelry Retouch Services",
  description: "Jewelry retouching services to enhance your product images and make them shine.",
};

export default function Home() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen flex items-center">
        
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 px-4 py-6 lg:px-6 lg:py-12">
        <div className="shadow-lg rounded-lg overflow-hidden hover:scale-105 transition duration-300"> 
    <BeforeAfterCard
      beforeImage="/Jewelry Retouch/Before1.jpg"
      afterImage="/Jewelry Retouch/After1.jpg"
    />
  </div>
          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-[80px] font-bold">
            Jewelry <span className="text-[#ADB5BD]">Retouch</span>
            </h1>
            <p className="py-6 text-2xl font-bold">
            Jewelry photography is truly an art that demands precision and an artistic eye
            </p>
            <p className="py-6 text-lg">
            Jewelry retouching services can enhance the brilliance, remove distractions, and highlight every facet to ensure your jewelry shines at its best and attracts customers.
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
        Jewelry Retouch Services
        </h1>
        <p className="text-lg md:w-[800px] m-auto mt-4 text-center ">
        Stunning images are vital for your business. Our specialized retouching transforms jewelry photos into captivating visuals that impress and engage customers. Let us make your products shine!
        </p>
      </div>
      {/* title section end */}

      {/* Grid Section */}
      <div className="flex justify-center">
  <div className="grid w-full sm:max-w-[90%] md:max-w-[80%] pb-28 pt-16 h-auto items-center m-auto md:grid-cols-3 gap-10">
    
    {/* Left Column */}
    <div className="flex flex-col gap-7 items-start">
      <div className="p-6 w-full sm:w-[90%] md:w-[80%]">
        <h3 className="text-2xl font-bold mb-7">Jewelry Color Correction</h3>
        <p>
        Our jewelry color correction service enhances and adjusts colors and exposure, perfecting gold, silver, and gemstone hues. Using multipath techniques, we reveal the true beauty of each piece with precision.
        </p>
      </div>
      <div className="p-6 w-full sm:w-[90%] md:w-[80%]">
        <h3 className="text-2xl font-bold mb-7">Jewelry Photo Enhancement</h3>
        <p>
        Well-edited photos captivate and convert, especially in the jewelry industry, where visuals matter most. Poor editing can harm your business, but our tailored jewelry photo enhancement services ensure every piece sparkles and shines brilliantly.
        </p>
      </div>
    </div>

    {/* Middle Column */}
    <div className="flex md:relative left-[-60] items-center h-50vh justify-center hover:scale-105 transition duration-300">
      <Image
        src="/Jewelry Retouch/jewelry1.jpg"
        alt="jewelry"
        width={400}
        height={400}
        className="w-[80%] md:w-[500px] rounded-xl"
      />
    </div>

    {/* Right Column */}
    <div className="flex flex-col gap-7 items-start">
      <div className="p-6 w-full sm:w-[90%] md:w-[80%]">
        <h3 className="text-2xl font-bold mb-7">Cleaning Object/Noise Remove</h3>
        <p>
        Our team uses Adobe Photoshop tools like the clone stamp, brush, and pen tools to perfect jewelry images. We meticulously remove dust, scratches, and blemishes, ensuring e-commerce photos shine with flawless detail.
        </p>
      </div>
      <div className="p-6 w-full sm:w-[90%] md:w-[80%]">
        <h3 className="text-2xl font-bold mb-7">High End Jewelry Retouching</h3>
        <p>
        A pen tablet enables high-precision jewelry retouching with unmatched control and accuracy, surpassing traditional mouse methods. Experience superior quality—contact us today and try our free trial!
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
            Why Use<br />
            Jewelry<br />
            Retouching
              <br />
              Services for
              <br />
              
            
              <p className="text-[#ADB5BD]">eCommerce?</p>
            </h1>

            <p className="py-6 text-lg">
            Professional jewelry retouching enhances product images by correcting lighting, removing flaws, and sharpening details for vibrant, captivating visuals. It boosts customer engagement, strengthens brand identity, and drives sales with consistent, high-quality imagery.
            </p>

            <Link href="/start">
              <button className="bg-black text-[#ADB5BD] hover:bg-[#ADB5BD] hover:text-black px-5 py-3 rounded-xl transition duration-300">
                Get Started
              </button>
            </Link>

          </div>

          <div className="flex-1 flex h-50vh justify-center hover:scale-105 transition duration-300">
            <Image
              src="/Jewelry Retouch/jewelry2.jpg"
              alt="jewelry"
              width={700}
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
        Explore our work and witness our image editing expertise. From background removal to shadow adjustments, we deliver fast and affordable results. Try us today!
        </p>
      </div>
      {/* title section end */}
      {/* Grid Section */}
      <div className="grid w-[80%] pb-28 pt-16 h-auto items-center m-auto gap-7 md:grid-cols-3">
  {/* Left Column */}
  <div className="flex flex-col gap-7 items-center">
    <div className="shadow-lg rounded-lg overflow-hidden w-full max-w-[400px] hover:scale-105 transition duration-300">
      <BeforeAfterCard
        beforeImage="/Jewelry Retouch/Before2.jpg"
        afterImage="/Jewelry Retouch/After2.jpg"
      />
       <h3 className=" text-center text-2xl  mt-8">Jewelry Color Correction</h3>
      <p className="text-lg mt-3 p-3">
      At the time this jewelry image was taken, some dust was captured on the piece. We removed the dust and made it look more refined and polished.
      </p>
    </div>
  </div>

  {/* Middle Column */}
  <div className="flex flex-col gap-7 items-center">
    <div className="shadow-lg rounded-lg overflow-hidden w-full max-w-[400px] hover:scale-105 transition duration-300">
      <BeforeAfterCard
        beforeImage="/Jewelry Retouch/Before3.jpg"
        afterImage="/Jewelry Retouch/After3.jpg"
      />
       <h3 className=" text-center text-2xl  mt-8">Cleaning Object/Noise Remove</h3>
      <p className="text-lg mt-3 p-3">
      Shiny jewelry often has many reflections when photographed. In this piece, unwanted reflections were removed to give it a more expensive look.
      </p>
    </div>
  </div>

  {/* Right Column */}
  <div className="flex flex-col gap-7 items-center">
    <div className="shadow-lg rounded-lg overflow-hidden w-full max-w-[400px] hover:scale-105 transition duration-300">
      <BeforeAfterCard
        beforeImage="/Jewelry Retouch/Before4.jpg"
        afterImage="/Jewelry Retouch/After4.jpg"
      />
      <h3 className=" text-center text-2xl  mt-8">Jewelry Photo Enhancement</h3>
      <p className="text-lg mt-3 p-3">
      Shadows give the product a natural look. However, due to a two-sided light source, shadows might not be captured properly. We create and adjust them using Photoshop.
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
            Here to help! If you have any further questions regarding our services, our experienced team is here to help. Our promise is to make your experience smooth and the process of making a choice easy. We&rsquo;re grateful for your trust and can&rsquo;t wait to help you in any way we can. Feel free to reach out.
            </p>

            <Link href="/start">
              <button className="bg-black text-[#ADB5BD] hover:bg-[#ADB5BD] hover:text-black px-5 py-3 rounded-xl transition duration-300">
                Get Started
              </button>
            </Link>

          </div>

          <div className="flex-1 flex justify-center hover:scale-105 transition duration-300">
            <Image
              src="/Jewelry Retouch/jewelry3.jpg"
              alt="pant"
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
              src="/Jewelry Retouch/jewelry4.jpg"
              alt="jewelry"
              width={500}
              height={500}
              className="rounded-xl"
            />
          </div>
          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-[80px] font-bold">
            How We Do It?
            </h1>

            <p className="py-10 text-lg">
            A jewelry photo won&rsquo;t catch attention if it’s covered in dust or cluttered with unnecessary elements. Our expert team specializes in cleaning and perfecting your business photos, ensuring they’re polished and glossy. Using advanced, professional tools, we remove any unwanted elements and fine-tune every detail, leaving you with flawless, eye-catching images that reflect the quality of your jewelry.
            </p>
          </div>

          
        </div>
      </div>
      {/*section End */}
      <div className="hero bg-base-200 h-screen flex items-center">
        <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center justify-center gap-12 px-4 py-6 lg:px-6 lg:py-6">
        <div className="flex-1 flex justify-center hover:scale-105 transition duration-300">
            <Image
              src="/Jewelry Retouch/jewelry5.jpg"
              alt="jewelry"
              width={500}
              height={500}
              className="rounded-xl"
            />
          </div>
          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-[80px]  font-bold">
            How Can We <br/> Help?
            </h1>

            <p className="py-10 text-lg">
            We can give your product images a polished, professional look. For the past eight years, we&rsquo;ve been delivering high-quality image editing services. We can handle large volumes of work without sacrificing quality. Try our services with a free trial today.
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
        We offer high-quality background removal and image enhancement services to make your photos look
        professional and polished. Whether you&rsquo;re an eCommerce store, a photographer, or a business
        owner, our services are tailored to meet your needs.
      </p>
    </div>

    {/* Features Section */}
    <div className="grid w-[80%] m-auto pb-20 gap-10 md:grid-cols-3 text-center">
      {[
        { title: "Trustworthy", icon: "trustworthy-1.svg", text: "We have been working in this industry since 2015. We have built trust among our clients." },
        { title: "Expert", icon: "expert-2.svg", text: "Our team consists of skilled and experienced eCommerce retouchers with 8 years of expertise." },
        { title: "High Capacity", icon: "high-capacity-1.svg", text: "We can handle any volume and complexity of projects with exceptional proficiency." },
        { title: "Delivery On-Time", icon: "delivery-on-time-1.svg", text: "Your deadlines matter to us, and we’ll deliver your work on time." },
        { title: "Affordability", icon: "affordability-1.svg", text: "We offer competitive prices and value for money. Deals that are affordable and satisfactory." },
        { title: "Support", icon: "support-1.svg", text: "We’re here 24/7, dedicated to customer happiness and satisfaction." },
      ].map((feature, index) => (
        <div key={index} className="p-6 shadow-lg rounded-lg bg-white flex flex-col items-center hover:scale-105 transition duration-300">
          <Image src={`/Background Remove/${feature.icon}`} width={40} height={40} alt={feature.title} className="text-[#ADB5BD] mb-4" />
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
