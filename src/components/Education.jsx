import React, { useEffect, useState } from 'react'
const images = [
         "/images/cert1.jpg",
         "/images/cert2.jpg",
         "/images/cert3.jpg",
         "/images/cert4.jpg",
         "/images/cert5.jpg",
         "/images/cert6.jpg",
         "/images/cert7.jpg"

]
const Education = () => {
  const [currentIndex , SetcurrentIndex] = useState(0);
  const[isFading, setisFading] = useState(false);
  useEffect(()=>{
         const intervalId = setInterval(()=>{
            setisFading(true);
            setTimeout(()=>{
              SetcurrentIndex((prevId) =>(prevId +1 )% images.length);
              setisFading(false);
            }, 500)
         },3000)
         return ()=> clearInterval(intervalId);
  },[])
  const handleImageError = (e) => {
        e.target.src = 'https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+Found';
        console.error('Error loading image:', e.target.src);
    };
    const nextIndex = (currentIndex + 1) % images.length;
  return (
    <div>
      <div className='min-h-screen bg-cover bg-fixed w-full bg-[url("https://wallpapers.com/images/file/image-background-02pncybdeif1jvym.jpg")] pt-10'>
        <div className="justify-self-center mx-8 my-10 p-6 rounded-lg bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-200 shadow-lg transition-all duration-500 hover:shadow-2xl">
  <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-400 to-blue-900 animate-gradient-x">
    MY EXPERIENCES
  </h1>
</div>
<div className='flex items-start'>
  <div className="h-auto w-80 p-1 mt-20 ml-28 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-200 shadow-lg hover:shadow-2xl transition-all duration-500">
  <div className="rounded-2xl overflow-hidden">
    <img
      src={images[(currentIndex-1 + images.length) % images.length]}
      alt="not found"
      className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
    />
  </div>
</div>
 <div className="h-auto w-80 p-1 mt-20 ml-28 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-200 shadow-lg hover:shadow-2xl transition-all duration-500">
  <div className="rounded-2xl overflow-hidden">
    <img
      src={images[currentIndex]}
      alt="not found"
      className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
    />
  </div>
</div>
<div className="h-auto w-80 p-1 mt-20 ml-28 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-200 shadow-lg hover:shadow-2xl transition-all duration-500">
  <div className="rounded-2xl overflow-hidden">
    <img
      src={images[nextIndex]}
      alt="not found"
      className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
    />
  </div>
</div>
</div>
       </div>
          </div>
        
  )
}

export default Education
