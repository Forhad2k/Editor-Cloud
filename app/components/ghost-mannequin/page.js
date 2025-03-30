import Image from "next/image";
import BeforeAfterCard from "../BeforeAfterCard/page";
import FAQSection from '../faq/page';
import Link from "next/link";

export const metadata = {
  title: "Ghost Mannequin Services",
  description: "Ghost mannequin services to create professional product images that showcase your products in the best light.",
};
export default function Home() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen flex items-center">
        
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 px-4 py-6 lg:px-6 lg:py-12">
        <div className="shadow-lg rounded-lg overflow-hidden hover:scale-105 transition duration-300"> 
    <BeforeAfterCard
      beforeImage="/Ghost Mannequin/Before1.jpg"
      afterImage="/Ghost Mannequin/After1.jpg"
    />
  </div>
          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-[80px] font-bold">
            Ghost <span className="text-[#ADB5BD]">Mannequin</span>
            </h1>
            <p className="py-6 text-2xl font-bold">
            Creating a ghost or invisible mannequin effect for clothing and accessories.
            </p>
            <p className="py-6 text-lg">
            High-quality clothing photos capture your buyer’s attention. Add a 3D effect to your 2D images for a more dynamic look. Professionally edited, affordably priced, and delivered on time, our services will make your clothing images stand out. Boost your confidence—start your FREE TRIAL today.
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
        Ghost Mannequin Services
        </h1>
        <p className="text-lg md:w-[800px] m-auto mt-4 text-center ">
        The Ghost Mannequin effect involves removing the dummy model from a photo during post-production, making the clothes appear as if they&rsquo;re being worn by an invisible person. This technique highlights the garment&rsquo;s shape, giving customers a clear view of how it will look when worn.
        </p>
      </div>
      {/* title section end */}

      {/* Grid Section */}
      <div className="flex justify-center">
  <div className="grid w-full sm:max-w-[90%] md:max-w-[80%] pb-28 pt-16 h-auto items-center m-auto md:grid-cols-3 gap-10">
    
    {/* Left Column */}
    <div className="flex flex-col gap-7 items-start">
      <div className="p-6 w-full sm:w-[90%] md:w-[80%]">
        <h3 className="text-2xl font-bold mb-7">3D Ghost Mannequin Effect</h3>
        <p>
        Once the mannequin is removed, the clothing appears as if it&rsquo;s being worn by a real person, transforming the garment from a flat 2D image into a lifelike 3D visual. These realistic images are far more engaging and are proven to boost sales.
        </p>
      </div>
      <div className="p-6 w-full sm:w-[90%] md:w-[80%]">
        <h3 className="text-2xl font-bold mb-7">Ghost Mannequin Bottom Joint</h3>
        <p>
        When a dress is photographed on a mannequin, the back of the garment is hidden. To showcase the back portion of the dress after removing the mannequin, it&rsquo;s essential to include the covered parts of the garment as well.
        </p>
      </div>
    </div>

    {/* Middle Column */}
    <div className="flex md:relative left-[-60] items-center h-50vh justify-center hover:scale-105 transition duration-300">
      <Image
        src="/Ghost Mannequin/cloth1.jpg"
        alt="cloth"
        width={400}
        height={400}
        className="w-[80%] md:w-[500px] rounded-xl"
      />
    </div>

    {/* Right Column */}
    <div className="flex flex-col gap-7 items-start">
      <div className="p-6 w-full sm:w-[90%] md:w-[80%]">
        <h3 className="text-2xl font-bold mb-7">Ghost Mannequin Shadow Effect</h3>
        <p>
        The ghost mannequin shadow effect adds realistic shadows to your product, enhancing their visual appeal. This technique significantly improves the image&rsquo;s interaction by creating a more lifelike and engaging presentation of the product.
        </p>
      </div>
      <div className="p-6 w-full sm:w-[90%] md:w-[80%]">
        <h3 className="text-2xl font-bold mb-7">Ghost Mannequin Neck Joint</h3>
        <p>
        After the mannequin is removed, the neck joint service adds the back neck section, including the brand tag. During the photo shoot, the rear part of the garment is hidden behind the mannequin. In post-production, this section is seamlessly added to create a complete and professional-looking image.
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
            Why Use Ghost <br />
            Mannequin
              <br />
              Services for
              <br />
              
            
              <p className="text-[#ADB5BD]">eCommerce?</p>
            </h1>

            <p className="py-6 text-lg">
            Enhance the appeal of your e-commerce product photos with our ghost mannequin photo editing services. High-quality images like these can elevate your online store&rsquo;s success. Experience the difference—claim your FREE TRIAL today.
            </p>

            <Link href="/start">
              <button className="bg-black text-[#ADB5BD] hover:bg-[#ADB5BD] hover:text-black px-5 py-3 rounded-xl transition duration-300">
                Get Started
              </button>
            </Link>

          </div>

          <div className="flex-1 flex h-50vh justify-center hover:scale-105 transition duration-300">
            <Image
              src="/Ghost Mannequin/cloth2.jpg"
              alt="cloth"
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
        We are the leading Ghost Mannequin Service provider, trusted by clients worldwide for our expertise and reliability. Experience the difference for yourself.
        </p>
      </div>
      {/* title section end */}
      {/* Grid Section */}
      <div className="grid w-[80%] pb-28 pt-16 h-auto items-center m-auto gap-7 md:grid-cols-3">
  {/* Left Column */}
  <div className="flex flex-col gap-7 items-center">
    <div className="shadow-lg rounded-lg overflow-hidden w-full max-w-[400px] hover:scale-105 transition duration-300">
      <BeforeAfterCard
        beforeImage="/Ghost Mannequin/Before2.jpg"
        afterImage="/Ghost Mannequin/After2.jpg"
      />
       <h3 className=" text-center text-2xl  mt-8">3D Ghost Mannequin</h3>
      <p className="text-lg mt-3 p-3">
      You want your apparel to look its best online, but lack a model? We can make your garments appear as if worn by a ghost mannequin in 3D, showcasing the shape and fit of your items without any distractions.
      </p>
    </div>
  </div>

  {/* Middle Column */}
  <div className="flex flex-col gap-7 items-center">
    <div className="shadow-lg rounded-lg overflow-hidden w-full max-w-[400px] hover:scale-105 transition duration-300">
      <BeforeAfterCard
        beforeImage="/Ghost Mannequin/Before3.jpg"
        afterImage="/Ghost Mannequin/After3.jpg"
      />
       <h3 className=" text-center text-2xl  mt-8">Bottom Joint</h3>
      <p className="text-lg mt-3 p-3">
      You have top-quality clothing and want to showcase it in your eCommerce store, but don’t have a model? We can create a 3D ghost mannequin effect for your garments, allowing you to display the style and fit of your items without any issues.
      </p>
    </div>
  </div>

  {/* Right Column */}
  <div className="flex flex-col gap-7 items-center">
    <div className="shadow-lg rounded-lg overflow-hidden w-full max-w-[400px] hover:scale-105 transition duration-300">
      <BeforeAfterCard
        beforeImage="/Ghost Mannequin/Before4.jpg"
        afterImage="/Ghost Mannequin/After4.jpg"
      />
      <h3 className=" text-center text-2xl  mt-8">Neck Joint</h3>
      <p className="text-lg mt-3 p-3">
      To showcase your product online without the cost of a model, you can still feature your clothes professionally. We can create a 3D ghost mannequin effect to present your garments in a polished and realistic way.
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
            When To Use?
            </h1>

            <p className="py-10 text-lg">
            You run an e-commerce business and want to focus on growing your business rather than spending time in Photoshop. Maybe you&rsquo;re a busy photographer or work at an agency with tight client deadlines. You need your images to look their best, but sometimes the background is less than ideal.
            </p>

            <Link href="/start">
              <button className="bg-black text-[#ADB5BD] hover:bg-[#ADB5BD] hover:text-black px-5 py-3 rounded-xl transition duration-300">
                Get Started
              </button>
            </Link>

          </div>

          <div className="flex-1 flex justify-center hover:scale-105 transition duration-300">
            <Image
              src="/Ghost Mannequin/pant.jpg"
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
              src="/Ghost Mannequin/cloth3.jpg"
              alt="cloth"
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

            <p className="py-10 text-lg">
            We can help by giving your clothes a professional 3D ghost mannequin appearance. With eight years of experience, we handle large volumes of work without compromising on quality. Experience our service with a FREE TRIAL.
            </p>
          </div>

          
        </div>
      </div>
      {/*section End */}
      <div className="hero bg-base-200 h-screen flex items-center">
        <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center justify-center gap-12 px-4 py-6 lg:px-6 lg:py-6">
        <div className="flex-1 flex justify-center hover:scale-105 transition duration-300">
            <Image
              src="/Ghost Mannequin/cloth4.jpg"
              alt="cloth"
              width={500}
              height={500}
              className="rounded-xl"
            />
          </div>
          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-[80px]  font-bold">
            Still, <br/> Hesitating?
            </h1>

            <p className="py-10 text-lg">
            Here to help! If you have any further questions regarding our services, our experienced team is here to help. Our promise is to make your experience smooth and the process of making a choice easy. We&rsquo;re grateful for your trust and can&rsquo;t wait to help you in any way we can. Feel free to reach out.
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
