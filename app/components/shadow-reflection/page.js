import Image from "next/image";
import BeforeAfterCard from "../BeforeAfterCard/page";
import FAQSection from '../faq/page';
import Link from "next/link";

export const metadata = {
  title: "Shadow Reflection Services",
  description: "Create Shadow & Reflection and give your photos a polished, professional look.",
};

export default function Home() {
  return (
    <>
      <div className="hero bg-[#F2F2F2] min-h-screen flex items-center">
        
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 px-4 py-6 lg:px-6 lg:py-12">
        <div className="shadow-lg rounded-lg overflow-hidden hover:scale-105 transition duration-300"> 
    <BeforeAfterCard
      beforeImage="/Shadow Reflection/Before1.jpg"
      afterImage="/Shadow Reflection/After1.jpg"
    />
  </div>
          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-[80px] font-bold">
            Shadow <span className="text-[#ADB5BD]">Reflection</span>
            </h1>
            <p className="py-6 text-2xl font-bold">
            Create Shadow & Reflection and give your photos a polished, professional look.
            </p>
            <p className="py-6 text-lg">
            A realistic product shadow enhances your image, making it more attractive and clearer, which can drive potential customers to purchase. High-quality product images with well-crafted shadows can significantly boost your sales. In architectural and interior design images, shadows create a sense of depth and realism, bringing the visuals to life. Start your free trial today.
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
        shadow Creation Services
        </h1>
        <p className="text-lg md:w-[800px] m-auto mt-4 text-center ">
        Say goodbye to unwanted backgrounds. We&rsquo;ll remove any background from any photo, no matter how complex or challenging. We can also replace it with a background of your choice or make it transparent.
        </p>
      </div>
      {/* title section end */}

      {/* Grid Section */}
      <div className="flex justify-center">
  <div className="grid w-full sm:max-w-[90%] md:max-w-[80%] pb-28 pt-16 h-auto items-center m-auto md:grid-cols-3 gap-10">
    
    {/* Left Column */}
    <div className="flex flex-col gap-7 items-start">
      <div className="p-6 w-full sm:w-[90%] md:w-[80%]">
        <h3 className="text-2xl font-bold mb-7">Drop shadow</h3>
        <p>
        A drop shadow is placed below the subject to provide cues about the surface, distance, and light&rsquo;s intensity and direction. Typically placed near the edge of the subject, drop shadows add a layer of depth and realism to the image, making it feel more grounded.
        </p>
      </div>
      <div className="p-6 w-full sm:w-[90%] md:w-[80%]">
        <h3 className="text-2xl font-bold mb-7">Reflection Shadow</h3>
        <p>
        A reflection shadow is cast on a shiny surface, creating a mirrored image of the subject. This effect not only enhances the visual appeal of the image but also elevates its overall attractiveness. While this can be achieved during the shoot, it’s often easier and more cost-effective to create it during post-processing.
        </p>
      </div>
    </div>

    {/* Middle Column */}
    <div className="flex md:relative left-[-60] items-center justify-center hover:scale-105 transition duration-300">
      <Image
        src="/Shadow Reflection/ring.jpg"
        alt="ring"
        width={500}
        height={500}
        className="w-[80%] md:w-[500px] rounded-xl"
      />
    </div>

    {/* Right Column */}
    <div className="flex flex-col gap-7 items-start">
      <div className="p-6 w-full sm:w-[90%] md:w-[80%]">
        <h3 className="text-2xl font-bold mb-7">Natural Shadow Creation</h3>
        <p>
        A natural shadow is the shadow an object casts in light, revealing its dimensions and texture.It’s essential for making an image look realistic. Natural shadows also set the mood of the object, with shadows from different angles creating various atmospheric effects.​
        </p>
      </div>
      <div className="p-6 w-full sm:w-[90%] md:w-[80%]">
        <h3 className="text-2xl font-bold mb-7">Floating shadow</h3>
        <p>
        A floating shadow is positioned at a distance from the main subject, giving the impression that the subject is hovering above the surface. The shadow is placed below the subject, often requiring background changes to achieve the desired effect. The direction of the light is crucial for accurately positioning the floating shadow.
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
            Why Use <br />
            Shadow
              <br />
              Creation
              <br />
              
            
              <p className="text-[#ADB5BD]">Services?</p>
            </h1>

            <p className="py-6 text-lg">
            In the digital era, e-commerce thrives on image editing, which is crucial for growing your online business. As buyers can’t physically touch products, they depend on images to assess them. Adding shadows to product images can greatly enhance their appeal and help convert potential customers.
            </p>

            <Link href="/start">
              <button className="bg-black text-[#ADB5BD] hover:bg-[#ADB5BD] hover:text-black px-5 py-3 rounded-xl transition duration-300">
                Get Started
              </button>
            </Link>

          </div>

          <div className="flex-1 flex justify-center hover:scale-105 transition duration-300">
            <Image
              src="/Shadow Reflection/car.jpg"
              alt="car"
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
        Editors Cloud excels in shadow creation due to years of experience. Our well-trained team produces top-notch images for our clients and stays updated with the latest trends and software.
        </p>
      </div>
      {/* title section end */}
      {/* Grid Section */}
      <div className="grid w-[80%] pb-28 pt-16 h-auto items-center m-auto gap-7 md:grid-cols-3">
  {/* Left Column */}
  <div className="flex flex-col gap-7 items-center">
    <div className="shadow-lg rounded-lg overflow-hidden w-full max-w-[400px] hover:scale-105 transition duration-300">
      <BeforeAfterCard
        beforeImage="/Shadow Reflection/Before2.jpg"
        afterImage="/Shadow Reflection/After2.jpg"
      />
       <h3 className=" text-center text-2xl  mt-8">Natural Shadow Creation</h3>
      <p className="text-lg mt-3 p-3">
      In some product photos, the background surface doesn’t reflect on the bottom area. Instead, a product or natural shadow is applied, significantly enhancing the 3D quality of the product. This improvement makes the product more attractive to customers, increasing its visual appeal and potential for sales.
      </p>
    </div>
  </div>

  {/* Middle Column */}
  <div className="flex flex-col gap-7 items-center">
    <div className="shadow-lg rounded-lg overflow-hidden w-full max-w-[400px] hover:scale-105 transition duration-300">
      <BeforeAfterCard
        beforeImage="/Shadow Reflection/Before3.jpg"
        afterImage="/Shadow Reflection/After3.jpg"
      />
       <h3 className=" text-center text-2xl  mt-8">Reflection Shadow</h3>
      <p className="text-lg mt-3 p-3">
      A reflection shadow is used for products that reflect their background surface, such as glass bottles, medicine containers, plastic bottles, ceramic items, and electronic equipment like ovens, TVs, and mobiles. This effect highlights the reflective nature of these items, enhancing their visual appeal in photographs.
      </p>
    </div>
  </div>

  {/* Right Column */}
  <div className="flex flex-col gap-7 items-center">
    <div className="shadow-lg rounded-lg overflow-hidden w-full max-w-[400px] hover:scale-105 transition duration-300">
      <BeforeAfterCard
        beforeImage="/Shadow Reflection/Before4.jpg"
        afterImage="/Shadow Reflection/After4.jpg"
      />
      <h3 className=" text-center text-2xl  mt-8">Drop shadow</h3>
      <p className="text-lg mt-3 p-3">
      Image drop shadows can be created using Photoshop filters to add a realistic touch. By adjusting the shadow angle, opacity, and glow, you can simulate a lifelike shadow effect on the rear side of the product. This technique offers a cost-effective solution for enhancing your product images.
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
              src="/Shadow Reflection/chair.jpg"
              alt="chair"
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
              src="/Shadow Reflection/table.jpg"
              alt="table"
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
            We deliver the best quality work, consistently impressing you with our effort. It’s hard not to trust us for shadow creation! Editors Cloud excels in shadow creation due to years of experience. Our well-trained team produces top-notch images for our clients and stays updated with the latest trends and software.
            </p>
          </div>

          
        </div>
      </div>
      {/*section End */}
      <div className="hero bg-[#F2F2F2] h-screen flex items-center">
        <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center justify-center gap-12 px-4 py-6 lg:px-6 lg:py-6">
        <div className="flex-1 flex justify-center hover:scale-105 transition duration-300">
            <Image
              src="/Shadow Reflection/ring2.jpg"
              alt="ring"
              width={500}
              height={500}
              className="rounded-xl"
            />
          </div>
          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-[80px]  font-bold">
            How Can We  <br/> Help?
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
