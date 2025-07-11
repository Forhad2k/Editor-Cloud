import Image from "next/image";
import BeforeAfterCard from "../BeforeAfterCard/page";
import FAQSection from '../faq/page';
import Link from "next/link";

export const metadata = {
  title: "Model Retouch Services",
  description: "Professional photo retouching enhances images by perfecting lighting, colors, and removing imperfections.",
};

export default function Home() {
  return (
    <>
      <div className="hero bg-[#F2F2F2] min-h-screen flex items-center">
        
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 px-4 py-6 lg:px-6 lg:py-12">
        <div className="shadow-lg rounded-lg overflow-hidden hover:scale-105 transition duration-300"> 
    <BeforeAfterCard
      beforeImage="/Model retouch/Before1.jpg"
      afterImage="/Model retouch/After1.jpg"
    />
  </div>
          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-[80px] font-bold">
            Model <span className="text-[#ADB5BD]">Retouch</span>
            </h1>
            <p className="py-6 text-2xl font-bold">
            Professional photo retouching enhances images by perfecting lighting, colors, and removing imperfections.
            </p>
            <p className="py-6 text-lg">
            Get top-tier, professional photo retouching services tailored to your needs. Our expert team uses cutting-edge techniques and the latest software to elevate your images, ensuring they reach their full potential with stunning, high-end results.​
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
        Model Retouch​ Services​
        </h1>
        <p className="text-lg md:w-[800px] m-auto mt-4 text-center ">
        Whether you&rsquo;re a photographer, business owner, or creative, professional photo retouching elevates your images to a polished standard. It showcases your commitment to quality, leaving a lasting impression on your audience.
        </p>
      </div>
      {/* title section end */}

      {/* Grid Section */}
      <div className="flex justify-center">
  <div className="grid w-full sm:max-w-[90%] md:max-w-[80%] pb-28 pt-16 h-auto items-center m-auto md:grid-cols-3 gap-10">
    
    {/* Left Column */}
    <div className="flex flex-col gap-7 items-start">
      <div className="p-6 w-full sm:w-[90%] md:w-[80%]">
        <h3 className="text-2xl font-bold mb-7">Regular Model Retouch​</h3>
        <p>
        Access top-tier photo retouching services with our skilled team. From color correction to image masking, we enhance images to perfection. Whether you&rsquo;re a photographer, business, or individual, we deliver exceptional results tailored to your needs.we have the expertise to meet them with precision and quality.​​
        </p>
      </div>
      <div className="p-6 w-full sm:w-[90%] md:w-[80%]">
        <h3 className="text-2xl font-bold mb-7">High-End Model Retouch​</h3>
        <p>
        Transform your photos into stunning works of art with our expert retouching services. We refine every detail, turning good images into captivating visuals that highlight beauty and professionalism. Our team enhances your photos while preserving their authenticity and charm. Join our satisfied clients and elevate your images from ordinary to extraordinary!
        </p>
      </div>
    </div>

    {/* Middle Column */}
    <div className="flex md:relative left-[-60] items-center h-50vh justify-center hover:scale-105 transition duration-300">
      <Image
        src="/Model retouch/model1.jpg"
        alt="model"
        width={400}
        height={400}
        className="w-[80%] md:w-[400px] rounded-xl"
      />
    </div>

    {/* Right Column */}
    <div className="flex flex-col gap-7 items-start">
      <div className="p-6 w-full sm:w-[90%] md:w-[80%]">
        <h3 className="text-2xl font-bold mb-7">Lingerie Model Retouch​</h3>
        <p>
        Our team specializes in premium Lingerie Model Retouch services, enhancing every detail of your lingerie photography. From removing wrinkles and blemishes to adjusting lighting and colors, we ensure your models look flawless. With expert retouching, your images will radiate beauty and confidence, captivating your audience. Trust us to create stunning, attention-grabbing visuals.
        </p>
      </div>
      <div className="p-6 w-full sm:w-[90%] md:w-[80%]">
        <h3 className="text-2xl font-bold mb-7">Calendar Model Retouch​</h3>
        <p>
        Calendar Model Retouch enhances model images for calendars by perfecting skin, brightening eyes, whitening teeth, and refining details. This process creates visually striking, flawless images that elevate the appeal of calendars, ensuring your models leave a lasting impression.
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
            Why Use<br />
            Model Retouch​
              <br />
              Services for
              <br />
              
            
              <p className="text-[#ADB5BD]">eCommerce?</p>
            </h1>

            <p className="py-6 text-lg">
            Model photo retouching is essential for flawless beauty and fashion images. It enhances the model&rsquo;s natural charm, refining every detail for a picture-perfect result. Whether for portfolios or commercial use, this process ensures the photos are captivating and professional.
            </p>

            <Link href="/start">
              <button className="bg-black text-[#ADB5BD] hover:bg-[#ADB5BD] hover:text-black px-5 py-3 rounded-xl transition duration-300">
                Get Started
              </button>
            </Link>

          </div>

          <div className="flex-1 flex h-50vh justify-center hover:scale-105 transition duration-300">
            <Image
              src="/Model retouch/model2.jpg"
              alt="model"
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
        OUR <span className="text-[#ADB5BD]">WORK</span>
        </h1>

        <p className="text-lg mt-4 text-center ">
        We are the leading Model Retouching Service provider, trusted by clients worldwide for our expertise and reliability. Experience the difference for yourself.​
        </p>
      </div>
      {/* title section end */}
      {/* Grid Section */}
      <div className="grid w-[80%] pb-28 pt-16 h-auto items-center m-auto gap-7 md:grid-cols-3">
  {/* Left Column */}
  <div className="flex flex-col gap-7 items-center">
    <div className="shadow-lg rounded-lg overflow-hidden w-full max-w-[400px] hover:scale-105 transition duration-300">
      <BeforeAfterCard
        beforeImage="/Model retouch/Before2.jpg"
        afterImage="/Model retouch/After2.jpg"
      />
       <h3 className=" text-center text-2xl  mt-8">Full Body Retouching​</h3>
      <p className="text-lg mt-3 p-3">
      Our model photo editing service goes beyond facial enhancements, offering virtual body shaping and fitness improvements. We smooth skin, contour the body, and address imperfections like scars or marks, ensuring a flawless, natural appearance from head to toe.
      </p>
    </div>
  </div>

  {/* Middle Column */}
  <div className="flex flex-col gap-7 items-center">
    <div className="shadow-lg rounded-lg overflow-hidden w-full max-w-[400px] hover:scale-105 transition duration-300">
      <BeforeAfterCard
        beforeImage="/Model retouch/Before3.jpg"
        afterImage="/Model retouch/After3.jpg"
      />
       <h3 className=" text-center text-2xl  mt-8">Advanced Retouching​</h3>
      <p className="text-lg mt-3 p-3">
      Advanced retouching goes beyond basic edits, utilizing various techniques to perfect model photos. Skin imperfections caused by heavy makeup or lighting are corrected, ensuring flawless results. Techniques used for alluring model photos include.
      </p>
    </div>
  </div>

  {/* Right Column */}
  <div className="flex flex-col gap-7 items-center">
    <div className="shadow-lg rounded-lg overflow-hidden w-full max-w-[400px] hover:scale-105 transition duration-300">
      <BeforeAfterCard
        beforeImage="/Model retouch/Before4.jpg"
        afterImage="/Model retouch/After4.jpg"
      />
      <h3 className=" text-center text-2xl  mt-8">Basic Retouching​</h3>
      <p className="text-lg mt-3 p-3">
      Basic retouching addresses minimal adjustments like stray hair, uneven skin tones, pimples, and red-eye. Techniques such as blemish removal, skin smoothing, and eye correction are used to create a polished, natural look, ensuring the model appears their best without heavy modifications.
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
            <h1 className="text-5xl md:text-[80px] font-bold">
            When To Use?
            </h1>

            <p className="py-10 text-lg">
            You run an e-commerce business and want to focus on growing your business rather than spending time in Photoshop. Maybe you&rsquo;re a busy photographer or work at an agency with tight client deadlines. You need your images to look their best, but sometimes the background is less than ideal.​
            </p>

            <Link href="/start">
              <button className="bg-black text-[#ADB5BD] hover:bg-[#ADB5BD] hover:text-black px-5 py-3 rounded-xl transition duration-300">
                Get Started
              </button>
            </Link>

          </div>

          <div className="flex-1 flex justify-center hover:scale-105 transition duration-300">
            <Image
              src="/Model retouch/model3.jpg"
              alt="model"
              width={500}
              height={500}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
      {/*section End */}
      {/*section Start */}
      <div className="hero bg-[#F2F2F2] md:h-100vh h-auto flex items-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 px-4 py-6 lg:px-6 lg:py-6">
        <div className="flex-1 flex justify-center hover:scale-105 transition duration-300">
            <Image
              src="/Model retouch/model4.jpg"
              alt="model"
              width={500}
              height={500}
              className="rounded-xl"
            />
          </div>
          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-[80px] font-bold">
            What Can We Help?
            </h1>

            <p className="py-10  text-lg">
            We do no longer declare that we are the most pocket-pleasant that you will be able to discover in today’s image editing industry. However on the other hand you may get the worthwhile talented work and professionally quick Image Editing Service where we can also save your valuable time.. Experience our service with a FREE TRIAL.
            </p>
          </div>

          
        </div>
      </div>
      {/*section End */}
      <div className="hero bg-[#F2F2F2] md:h-screen h-auto flex items-center">
        <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center justify-center gap-12 px-4 py-6 lg:px-6 lg:py-6">
        <div className="flex-1 flex justify-center hover:scale-105 transition duration-300">
            <Image
              src="/Model retouch/model5.jpg"
              alt="model"
              width={500}
              height={500}
              className="rounded-xl"
            />
          </div>
          {/* Text Section */}
          <div className="flex-1 text-center  lg:text-left">
            <h1 className="text-5xl md:text-[80px]  font-bold">
            Still, <br/> Hesitating?
            </h1>

            <p className="py-10 text-lg">
            Here to help! If you have any further questions regarding our services, our experienced team is here to help. Our promise is to make your experience smooth and the process of making a choice easy. We&rsquo;re grateful for your trust and can&rsquo;t wait to help you in any way we can. Feel free to reach out.​
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
