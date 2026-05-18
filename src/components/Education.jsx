import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Expand } from "lucide-react";

const educationData = [
  {
    title: "B.Tech CSE + Applied Mathematics",
    place: "Vivekananda Institute of Professional Studies",
    year: "2024 — 2028",
    desc: "CGPA — 8.2",
  },
  {
    title: "12th PCM",
    place: "St. Joseph Convent School",
    year: "2022",
    desc: "Physics • Chemistry • Mathematics",
  },
];

const certificates = [
  "/images/cert1.jpg",
  "/images/cert2.jpg",
  "/images/cert3.jpg",
  "/images/cert4.jpg",
  "/images/cert5.jpg",
  "/images/cert6.jpg",
  "/images/cert7.jpg",
];

const EducationAchievements = () => {
  const sectionRef = useRef(null);
  const notebookRef = useRef(null);
  const carouselRef = useRef(null);

  const [selectedImage, setSelectedImage] = useState(null);

  useGSAP(() => {
    // notebook animation
    gsap.from(notebookRef.current, {
      x: -120,
      opacity: 0,
      rotate: -4,
      duration: 1.4,
      ease: "power4.out",
    });

    // cards fade in
    gsap.from(".certificate-card", {
      y: 60,
      opacity: 0,
      stagger: 0.08,
      duration: 1,
      ease: "power4.out",
    });

    // ✅ FIXED smooth infinite scroll
    gsap.to(carouselRef.current, {
      yPercent: -50,
      duration: 40,
      ease: "linear",
      repeat: -1,
    });

    // floating notebook
    gsap.to(notebookRef.current, {
      y: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, { scope: sectionRef });

  return (
    <>
      <section
        ref={sectionRef}
        className="relative min-h-screen w-full bg-black overflow-hidden px-6 md:px-14 py-20"
      >
        {/* Ambient Glow */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-white/5 blur-[140px] rounded-full" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE — NOTEBOOK */}
          <div
            ref={notebookRef}
            className="relative w-full h-[760px] rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.5)] rotate-[-1deg]"
          >
            <div className="absolute inset-0 opacity-[0.06] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

            <div className="absolute inset-0 flex flex-col justify-evenly px-10">
              {[...Array(12)].map((_, idx) => (
                <div key={idx} className="w-full border-b border-white/5" />
              ))}
            </div>

            <div className="absolute left-16 top-0 h-full w-[1px] bg-red-400/20" />

            <div className="relative z-10 p-14 h-full flex flex-col">
              <div className="mb-16">
                <h1 className="text-white text-5xl md:text-6xl font-extralight tracking-[0.2em] uppercase">
                  Education
                </h1>
                <p className="text-white/40 mt-4 tracking-[0.2em] uppercase text-sm">
                  Academic Journey
                </p>
              </div>

              <div className="flex flex-col gap-16">
                {educationData.map((item, index) => (
                  <div key={index} className="relative pl-10">
                    <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-white/70" />

                    {index !== educationData.length - 1 && (
                      <div className="absolute left-[7px] top-7 w-[1px] h-[180px] bg-white/10" />
                    )}

                    <h2 className="text-white text-3xl font-light">
                      {item.title}
                    </h2>
                    <p className="text-white/50 mt-3 text-lg">{item.place}</p>
                    <p className="text-white/30 mt-2 tracking-[0.2em] uppercase text-sm">
                      {item.year}
                    </p>
                    <p className="text-white/70 mt-6 leading-relaxed max-w-[90%]">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — ACHIEVEMENTS (FIXED) */}
          <div className="relative h-[760px] overflow-hidden">

            {/* Heading (FIXED - stays on top) */}
            <div className="mb-10 relative z-20">
              <h1 className="text-white text-5xl md:text-6xl font-extralight tracking-[0.2em] uppercase">
                Achievements
              </h1>
              <p className="text-white/40 mt-4 tracking-[0.2em] uppercase text-sm">
                Certificates • Music • Tech
              </p>
            </div>

            {/* VIEWPORT WINDOW */}
            <div className="relative h-[620px] overflow-hidden">

              {/* TRACK */}
              <div
                ref={carouselRef}
                className="
                  absolute
                  left-1/2
                  top-0
                  -translate-x-1/2
                  flex
                  flex-col
                  items-center
                  gap-10
                "
              >
                {[...certificates, ...certificates].map((img, index) => (
                  <div
                    key={index}
                    className="certificate-card relative group w-[320px] h-[430px] rounded-[30px] overflow-hidden border border-white/10 bg-white/15 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.35)] hover:scale-[1.04] transition-all duration-500 cursor-pointer"
                    style={{
                      transform: `rotate(${index % 2 === 0 ? "-2deg" : "2deg"})`,
                    }}
                    onClick={() => setSelectedImage(img)}
                  >
                    <img
                      src={img}
                      alt="certificate"
                      className="absolute inset-0 w-full h-full object-cover brightness-110 contrast-110 group-hover:scale-105 transition-all duration-700"
                    />

                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-all duration-500" />

                    <div className="absolute bottom-5 right-5 w-12 h-12 rounded-full bg-black/30 border border-white/20 flex items-center justify-center backdrop-blur-xl">
                      <Expand className="text-white" size={20} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FULLSCREEN VIEW */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-10"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-w-[90%] max-h-[90%] rounded-[25px] border border-white/20 shadow-[0_20px_100px_rgba(0,0,0,0.7)]"
          />
        </div>
      )}
    </>
  );
};

export default EducationAchievements;