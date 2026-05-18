import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ChevronDown } from "lucide-react";

const decks = [
  {
    season: "Spring",
    title: "Frontend",

    cardBg: "https://images.pexels.com/photos/31108432/pexels-photo-31108432/free-photo-of-serene-cherry-blossom-by-tranquil-lake.jpeg",
    panelBg: "https://static.vecteezy.com/system/resources/previews/057/975/109/non_2x/cherry-blossoms-bloom-beautifully-in-spring-photo.jpeg",

    skills: [
      "React",
      "JavaScript",
      "Tailwind",
      "GSAP",
      "HTML",
      "CSS",
    ],
  },

  {
    season: "Summer",
    title: "Backend",

    cardBg: "https://images.pexels.com/photos/19293151/pexels-photo-19293151.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200",
    panelBg: "https://media.istockphoto.com/id/580110718/photo/sunflower-field-at-sunset-in-modena.jpg?s=612x612&w=0&k=20&c=7lfmVUicXluo7pVAfGYWQCeVY6o-jn8hMSGxSiKUhkg=",

    skills: [
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Socket.IO",
      "REST APIs",
    ],
  },

  {
    season: "Autumn",
    title: "Tools",

    cardBg: "https://media.istockphoto.com/id/1461568911/photo/afternoon-sycamore-leaves.jpg?s=612x612&w=0&k=20&c=ZSGf2hEkgnWcmwOJu8aFJdJklFOMF6C6-OsT0YtKbmM=",
    panelBg: "https://assets.artifactuprising.com/assets/campaigns/2022/Q3/09-26+Fall+Photo+Tips+Blog/Hero_Fall-Photo-Tips.jpg",

    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Vercel",
      "VS Code",
      "Firebase",
    ],
  },

  {
    season: "Winter",
    title: "Soft Skills",

    cardBg: "https://images.unsplash.com/photo-1457269449834-928af64c684d?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ludGVyfGVufDB8fDB8fHww",
    panelBg: "https://png.pngtree.com/background/20250119/original/pngtree-stunning-winter-flower-landscape-in-hd-8k-capturing-the-beauty-of-picture-image_15889499.jpg",

    skills: [
      "Communication",
      "Leadership",
      "Creativity",
      "Teamwork",
      "Adaptability",
      "Problem Solving",
    ],
  },
];

const Skills = () => {
  const [activeDeck, setActiveDeck] = useState(0);

  const sectionRef = useRef(null);
  const deckRefs = useRef([]);
  const skillsPanelRef = useRef(null);

  useGSAP(() => {
    // Initial deck entrance
    gsap.from(deckRefs.current, {
      y: 80,
      opacity: 0,
      stagger: 0.12,
      duration: 1.2,
      ease: "power4.out",
    });

    // Initial active deck
    gsap.set(deckRefs.current[0], {
      y: -12,
      opacity: 1,
    });

    // Initial skills animation
    gsap.from(skillsPanelRef.current.children, {
      y: 40,
      opacity: 0,
      stagger: 0.08,
      duration: 0.7,
      ease: "power3.out",
      delay: 0.4,
    });
  }, { scope: sectionRef });

  const handleDeckClick = (index) => {
    if (index === activeDeck) return;

    // Reset decks
    gsap.to(deckRefs.current, {
      y: 0,
      opacity: 0.8,
      duration: 0.4,
      ease: "power2.out",
    });

    // Active deck lift
    gsap.to(deckRefs.current[index], {
      y: -12,
      opacity: 1,
      duration: 0.5,
      ease: "power3.out",
    });

    // Animate old skills out
    gsap.to(skillsPanelRef.current.children, {
      y: 30,
      opacity: 0,
      stagger: 0.03,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        setActiveDeck(index);

        requestAnimationFrame(() => {
          gsap.fromTo(
            skillsPanelRef.current.children,
            {
              y: 50,
              opacity: 0,
              scale: 0.85,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              stagger: 0.08,
              duration: 0.7,
              ease: "power3.out",
            }
          );
        });
      },
    });
  };

  return (
    <section
      ref={sectionRef}
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        px-6
        md:px-12
        py-20
        bg-cover
        bg-center
      "
      style={{
        backgroundImage: `url('/images/main-bg.jpg')`,
      }}
    >
      {/* Global Overlay */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-[2px]" />

      {/* Ambient Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-white/10 blur-[140px] rounded-full" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div
          className="
            relative
            h-36
            rounded-[35px]
            border border-white/20
            overflow-hidden
            flex items-center justify-center
            mb-20
            backdrop-blur-xl
          "
          style={{
            backgroundImage: `
              linear-gradient(
                to bottom,
                rgba(0,0,0,0.35),
                rgba(0,0,0,0.65)
              ),
              url('https://static.vecteezy.com/system/resources/thumbnails/033/133/435/small/ai-generative-collage-of-four-seasons-winter-autumn-spring-and-winter-photo.jpg')
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1
            className="
              text-white
              text-5xl md:text-7xl
              tracking-[0.4em]
              uppercase
              font-extralight
            "
          >
            Skills
          </h1>
        </div>

        {/* Deck Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 items-start">

          {decks.map((deck, index) => {
            const isActive = activeDeck === index;

            return (
              <div
                key={index}
                ref={(el) => (deckRefs.current[index] = el)}
                className={`
                  relative
                  flex items-start
                  transition-all
                  duration-500
                  ${
                    isActive
                      ? "opacity-100 scale-100"
                      : "opacity-80 scale-[0.98]"
                  }
                `}
              >
                {/* Stack Layer 3 */}
                <div
                  className="
                    absolute
                    top-2 left-2
                    w-full h-full
                    rounded-[30px]
                    bg-white/5
                    border border-white/10
                  "
                />

                {/* Stack Layer 2 */}
                <div
                  className="
                    absolute
                    top-1 left-1
                    w-full h-full
                    rounded-[30px]
                    bg-white/10
                    border border-white/10
                  "
                />

                {/* Main Card */}
                <button
                  onClick={() => handleDeckClick(index)}
                  className="
                    relative
                    w-full
                    h-[220px]
                    rounded-[30px]
                    overflow-hidden
                    border border-white/20
                    backdrop-blur-xl
                    p-8
                    text-left
                    transition-all
                    duration-500
                    shadow-[0_10px_40px_rgba(0,0,0,0.4)]
                  "
                  style={{
                    backgroundImage: `
                      linear-gradient(
                        to bottom,
                        rgba(0,0,0,0.35),
                        rgba(0,0,0,0.7)
                      ),
                      url(${deck.cardBg})
                    `,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Texture */}
                  <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between">

                    <div>
                      <p className="text-white/60 uppercase tracking-[0.3em] text-xs mb-4">
                        {deck.season}
                      </p>

                      <h2 className="text-white text-2xl md:text-3xl font-light min-h-[80px] leading-tight">
                        {deck.title}
                      </h2>
                    </div>

                    <ChevronDown
                      className={`
                        text-white transition-all duration-500
                        ${isActive ? "rotate-180" : ""}
                      `}
                      size={30}
                    />
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* Fixed Skills Panel */}
        <div
          className="
            relative
            h-[320px]
            rounded-[35px]
            border border-white/20
            backdrop-blur-xl
            p-10
            overflow-hidden
          "
          style={{
            backgroundImage: `
              linear-gradient(
                to bottom right,
                rgba(0,0,0,0.45),
                rgba(0,0,0,0.75)
              ),
              url(${decks[activeDeck].panelBg})
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Glow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />

          {/* Skills */}
          <div
            ref={skillsPanelRef}
            className="
              relative z-10
              flex flex-wrap gap-5
              content-start
            "
          >
            {decks[activeDeck].skills.map((skill, idx) => (
              <div
                key={idx}
                className="
                  px-6 py-4
                  rounded-full
                  border border-white/20
                  bg-white/10
                  backdrop-blur-xl
                  text-white
                  tracking-wide
                  text-sm md:text-base
                  hover:bg-white/20
                  hover:scale-105
                  transition-all
                  duration-300
                  shadow-[0_0_20px_rgba(255,255,255,0.05)]
                "
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;