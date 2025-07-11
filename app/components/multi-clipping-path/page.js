import Image from "next/image";
import BeforeAfterCard from "../BeforeAfterCard/page";
import FAQSection from '../faq/page';
import Link from "next/link";

export const metadata = {
  title: "Clipping Path Services",
  description: "Handcrafted clipping paths result in images that are remarkably clear and sharp. Our clipping path services provide meticulously hand-drawn paths, ensuring crisp, clear, and polished images.",
};
export default function Home() {
  return (
    <>
      <div className="hero bg-[#F2F2F2] min-h-screen flex items-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 px-4 py-6 lg:px-6 lg:py-12">
          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-[80px] font-bold">
            Clipping <span className="text-[#ADB5BD]">Path Services</span>
            </h1>
            <p className="py-6 text-2xl font-bold">
            Handcrafted clipping paths result in images that are remarkably clear and sharp.
            </p>
            <p className="py-6 text-lg">
            Our clipping path services provide meticulously hand-drawn paths, ensuring crisp, clear, and polished images. Whether for e-commerce, photography, or photo studios, Editors Cloud combines skilled expertise and advanced technology to deliver exceptional, tailored clipping path services with unmatched precision and quality.
            </p>

            <Link href="/start">
              <button className="bg-black text-[#ADB5BD] hover:bg-[#ADB5BD] hover:text-black px-5 py-3 rounded-xl transition duration-300">
                Get Started
              </button>
            </Link>
          </div>

          {/* Before After Card Section */}
          <div className="shadow-lg rounded-lg overflow-hidden hover:scale-105 transition duration-300"> 
    <BeforeAfterCard
      beforeImage="/Multi Clipping Path/Before1.jpg"
      afterImage="/Multi Clipping Path/After1.jpg"
    />
  </div>
        </div>
      </div>
      {/* title section */}
      <div className="text-center w-2/3 m-auto pt-28">
        <h1 className="text-5xl md:text-[80px] text-center  text-[#ADB5BD] font-bold">
          Professional
        </h1>
        <h1 className="text-5xl md:text-[80px] text-center font-bold">
        Clipping Path Services
        </h1>
        <p className="text-lg mt-4 text-center ">
        Clipping path service uses the Photoshop pen tool to draw precise lines around objects, allowing for targeted edits like background removal, color correction, photo retouching, and adding shadow effects. It&rsquo;s a key tool in photo editing to refine and enhance images.
        </p>
      </div>
      {/* title section end */}

      {/* Grid Section */}
      <div className="grid md:w-[80%] pb-28 pt-16 h-auto items-center m-auto  md:grid-cols-3">
        {/* Left Column */}
        <div className="flex flex-col gap-7">
          <div className="p-6 w-[80%]">
            <h3 className="text-2xl font-bold mb-7 ">Image Clipping</h3>
            <p>
            Image clipping is the process of removing or altering an image&rsquo;s background, enhancing the quality and overall appearance of your photos.
            </p>
          </div>
          <div className="p-6 w-[80%]">
            <h3 className="text-2xl font-bold mb-7">Multiple Clipping Path</h3>
            <p>
            As a provider of multiple clipping path services, we create numerous paths to isolate and edit different sections of an image with precision.
            </p>
          </div>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col items-center justify-center w-full">
          <div className=" flex justify-center hover:scale-105 transition duration-300">
            <Image
              src="/Multi Clipping Path/chair.jpg"
              alt="chair"
              width={500}
              height={500}
              className="pr-10 mr-3"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-7">
          <div className="p-6 w-[80%]">
            <h3 className="text-2xl font-bold mb-7 ">Deep Etching</h3>
            <p>
            Deep etching sharpens and refines images by removing or altering their backgrounds, making it perfect for emphasizing specific objects.
            </p>
          </div>
          <div className="p-6 w-[80%]">
            <h3 className="text-2xl font-bold mb-7">Photo Cut-out</h3>
            <p>
            Photo cut-outs are versatile tools that can be used for a variety of purposes, such as designing product images, creating collages, making stickers, and enhancing social media posts.
            </p>
          </div>
        </div>
      </div>
      <div className="hero bg-[#F2F2F2] min-h-screen flex items-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 px-4 py-6 lg:px-6 lg:py-12">
          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-[80px] font-bold">
            Why is <br />
            Clipping Path
              <br />
              Service
              <br />
            
              <p className="text-[#ADB5BD]">Necessary?</p>
            </h1>

            <p className="py-6 text-lg">
            Clipping paths go beyond just background removal—they allow you to highlight specific product features and create precise cutouts of objects in a photo. As the leading clipping path service provider, we manually craft each clipping path, ensuring pixel-perfect accuracy and smooth edges. Give us a try with a FREE TRIAL.
            </p>

            <Link href="/start">
              <button className="bg-black text-[#ADB5BD] hover:bg-[#ADB5BD] hover:text-black px-5 py-3 rounded-xl transition duration-300">
                Get Started
              </button>
            </Link>
          </div>

          <div className="flex-1 flex justify-center hover:scale-105 transition duration-300">
            <Image
              src="/Multi Clipping Path/bike.jpg"
              alt="chair"
              width={500}
              height={500}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
      {/* title section */}
      <div className="text-center md:w-2/3 m-auto p-14  md:p-28">
        <h1 className="text-5xl  md:text-[80px] text-center font-bold">
        OUR PREVIOUS <span className="text-[#ADB5BD]">WORK</span>
        </h1>

        <p className="text-lg mt-4 text-center ">
        We are the top clipping path service provider, trusted by clients worldwide for our expertise and reliability. Experience the difference for yourself.
        </p>
      </div>
      {/* title section end */}
      {/* Grid Section */}
      <div className="grid w-[80%] pb-28 pt-16 h-auto items-center m-auto gap-7 md:grid-cols-3">
  {/* Left Column */}
  <div className="flex flex-col gap-7 items-center">
    <div className="shadow-lg rounded-lg overflow-hidden w-full max-w-[400px] hover:scale-105 transition duration-300">
      <BeforeAfterCard
        beforeImage="/Multi Clipping Path/Before2.jpg"
        afterImage="/Multi Clipping Path/After2.jpg"
      />
       <h3 className=" text-center text-2xl  mt-8">Multiple Clipping Path</h3>
      <p className="text-lg mt-3 p-3">
      Shiny jewelry often has many reflections when photographed. In this piece, unwanted reflections were removed to give it a more expensive look.
      </p>
    </div>
  </div>

  {/* Middle Column */}
  <div className="flex flex-col gap-7 items-center">
    <div className="shadow-lg rounded-lg overflow-hidden w-full max-w-[400px] hover:scale-105 transition duration-300 ">
      <BeforeAfterCard
        beforeImage="/Multi Clipping Path/Before3.jpg"
        afterImage="/Multi Clipping Path/After3.jpg"
      />
       <h3 className=" text-center text-2xl  mt-8">Image Clipping</h3>
      <p className="text-lg mt-3 p-3">
      At the time this jewelry image was taken, some dust was captured on the piece. We removed the dust and made it look more refined and polished.
      </p>
    </div>
  </div>

  {/* Right Column */}
  <div className="flex flex-col gap-7 items-center">
    <div className="shadow-lg rounded-lg overflow-hidden w-full max-w-[400px] hover:scale-105 transition duration-300">
      <BeforeAfterCard
        beforeImage="/Multi Clipping Path/Before4.jpg"
        afterImage="/Multi Clipping Path/After4.jpg"
      />
      <h3 className=" text-center text-2xl  mt-8">Photo Cut-out​</h3>
      <p className="text-lg mt-3 p-3">
      Shadows give the product a natural look. However, due to a two-sided light source, shadows might not be captured properly. We create and adjust them using Photoshop.
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
            Still Not Convinced?
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
              src="/Multi Clipping Path/bag.jpg"
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
              src="/Multi Clipping Path/model.jpg"
              alt="model"
              width={500}
              height={500}
              className="rounded-xl"
            />
          </div>
          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-[80px] font-bold">
            When To Use?
            </h1>

            <p className="py-10 text-lg">
            You run an online store and want to focus on growing your business rather than spending hours in Photoshop, or you work for an agency with tight client deadlines. You need top-notch product images, but the sheer volume is overwhelming and time-consuming to enhance on your own.
            </p>
          </div>

          
        </div>
      </div>
      {/*section End */}
      <div className="hero bg-[#F2F2F2] h-screen flex items-center">
        <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center justify-center gap-12 px-4 py-6 lg:px-6 lg:py-6">
        <div className="flex-1 flex justify-center h-[694px] hover:scale-105 transition duration-300">
            <Image
              src="/Multi Clipping Path/model2.jpg"
              alt="model"
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
