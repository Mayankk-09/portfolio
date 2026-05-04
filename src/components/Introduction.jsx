import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Introduction = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      "#bond",
      { x:"30vw", y: "100vh", opacity: 0, scale: 1 }, 
      { y: "0vh",x: "70vw", opacity: 1, scale: 2.0, duration: 1.5, ease: "power3.out" } // move to center + enlarge
    )
     .to("#bond", { y: "-50vh",x:"20vw", opacity: 0, scale: 0.5, duration: 1.5, ease: "power3.in" }); // shrink + fade out to top
    tl.from("#title", { opacity: 0, y: 50, duration: 1, ease: "power3.out" });
    tl.from(".para", { opacity: 0, y: 50, duration: 2, ease: "back.inOut", color: "#fad643" });
   
  }, []);

  return (
    <div>
      <div>
        <div className="flex justify-center my-10 text-white text-5xl font-extrabold">
          <h1 id="title">Mayank Khanna</h1>
        </div>
        <div className="mt-30 font-medium text-white text-lg w-1/3 ml-10">
          <p className="para">
            I am a curious and motivated B.tech student with a deep interest in
            science and technology. I enjoy exploring new concepts,
            experimenting with code and gaining hand- on experience in emerging
            technologies.
          </p>
        </div>
        
        <h1 id="bond" className="self-center text-white text-5xl font-bold">
          The Name Is Khanna
        </h1>
   
        <div className="my-10 text-white text-lg w-1/3 float-right mr-10 font-medium">
          <p className="para">
            Always eager to learn, I thrive on challenges and believe that every
            new experience contributes to both personal and professional growth.
            With a strong foundation in web development and a growing interest
            in full stack technologies. I am committed to building practical
            skills and staying updated with the evolving tech landscape.
          </p>
        </div>
      </div>

      {/* Animated text */}
    </div>
  );
};

export default Introduction;
