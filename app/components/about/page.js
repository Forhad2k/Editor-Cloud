
import Image  from 'next/image';


function About() {

  return (
    <div className='flex items-center justify-center gap-5 h-screen w-full'> 
      <div className='w-1/2 items-start'>
        <h1 className='text-5xl text-bold my-5 '>About Us</h1>
    
        <p >At Editor Cloud, we specialize in high-quality post-production services tailored to meet the needs of e-commerce businesses. Our expertise spans across a variety of post-production processes, including photo editing, color correction, retouching, background removal, and more. With a dedicated team of skilled professionals, we transform raw footage and images into polished, market-ready content that enhances your brand&rsquo;s visual appeal.

Our commitment to excellence ensures that every project we handle meets the highest standards, making us a trusted partner for e-commerce brands, photographers, and businesses looking to present their products in the best light possible. We understand the importance of captivating visuals in driving sales and customer engagement, which is why we focus on precision, detail, and timely delivery.

Whether you&rsquo;re a small start-up or an established enterprise, Editor Cloud offers a range of services designed to suit your needs. We leverage the latest technologies and industry techniques to help you elevate your brand and achieve your business goals.

Let us take care of your post-production needs, so you can focus on growing your business and reaching new heights!</p>
      </div>
      <div>
        <Image src='/about/avatar.jpg' alt="About Us" width={500} height={500}/>
      </div>
    </div>
  )
}

export default About
