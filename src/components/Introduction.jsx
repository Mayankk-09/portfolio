import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Introduction = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Boot screen animation
    tl.from(".boot-line", {
      opacity: 0,
      y: 20,
      stagger: 0.35,
      duration: 0.6,
      ease: "power2.out",
    });

    // Fade boot screen out
    tl.to("#boot-screen", {
      opacity: 0,
      duration: 1,
      delay: 0.8,
      pointerEvents: "none",
    });

    // Main panel reveal
    tl.from("#main-panel", {
      opacity: 0,
      scale: 0.92,
      duration: 1.4,
      ease: "power4.out",
    });

    // Image reveal
    tl.from("#profile-image", {
      opacity: 0,
      x: 80,
      duration: 1,
      ease: "power3.out",
    }, "-=0.7");

    // Text reveal
    tl.from(".intro-item", {
      opacity: 0,
      y: 40,
      stagger: 0.18,
      duration: 1,
      ease: "power3.out",
    }, "-=0.8");

    // Floating motion
    gsap.to("#main-panel", {
      y: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Scan line
    gsap.to("#scan-line", {
      top: "100%",
      duration: 4,
      repeat: -1,
      ease: "none",
    });

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="
        relative
        min-h-screen
        bg-black
        overflow-hidden
        flex
        items-center
        justify-center
        px-6
        md:px-16
      "
    >

      {/* Background Grid */}
      <div
        className="
          absolute inset-0 opacity-[0.05]
          bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />

      {/* Ambient Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-green-500/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/10 blur-[140px] rounded-full" />

      {/* BOOT SCREEN */}
      <div
        id="boot-screen"
        className="
          absolute
          inset-0
          z-50
          bg-black
          flex
          flex-col
          justify-center
          px-8
          md:px-20
          font-mono
        "
      >
        <div className="space-y-5 text-green-400 text-sm md:text-lg">

          <p className="boot-line">
            {'>'} INITIALIZING PROFILE SYSTEM...
          </p>

          <p className="boot-line">
            {'>'} LOADING DEVELOPER DATA...
          </p>

          <p className="boot-line">
            {'>'} FETCHING INTERACTIVE MODULES...
          </p>

          <p className="boot-line">
            {'>'} ACCESSING ARCHIVE...
          </p>

          <p className="boot-line">
            {'>'} SYSTEM READY
          </p>

        </div>
      </div>

      {/* MAIN PANEL */}
      <div
        id="main-panel"
        className="
          relative
          w-full
          max-w-7xl
          h-[85vh]
          rounded-[40px]
          border
          border-white/10
          bg-white/5
          backdrop-blur-2xl
          overflow-hidden
          shadow-[0_20px_100px_rgba(0,0,0,0.6)]
        "
      >

        {/* Hacker Texture */}
        <div
          className="
            absolute inset-0 opacity-[0.03]
            bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]
          "
        />

        {/* Scan Line */}
        <div
          id="scan-line"
          className="
            absolute
            left-0
            w-full
            h-[2px]
            bg-green-400/30
            blur-sm
            top-0
            z-20
          "
        />

        {/* Inner Layout */}
        <div className="relative z-10 h-full grid grid-cols-1 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div
            className="
              flex
              flex-col
              justify-center
              px-10
              md:px-20
              py-16
            "
          >

            {/* Top Label */}
            <p
              className="
                intro-item
                text-green-400/70
                uppercase
                tracking-[0.4em]
                text-xs
                mb-6
                font-mono
              "
            >
              Developer Profile
            </p>

            {/* Name */}
            <h1
              className="
                intro-item
                text-white
                text-5xl
                md:text-7xl
                font-extralight
                leading-tight
              "
            >
              Mayank
              <br />
              Khanna
            </h1>

            {/* Subtitle */}
            <p
              className="
                intro-item
                mt-8
                text-white/50
                uppercase
                tracking-[0.3em]
                text-sm
              "
            >
              Full Stack Developer • Creative Technologist
            </p>

            {/* Description */}
            <p
              className="
                intro-item
                mt-10
                text-white/70
                leading-relaxed
                text-lg
                max-w-xl
              "
            >
              Full stack developer exploring software engineering,
immersive web technologies, and modern digital systems
through continuous learning and hands-on building.
            </p>

            {/* Data Boxes */}
            <div className="intro-item flex flex-wrap gap-5 mt-12">

              <div
                className="
                  px-5 py-4
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                  backdrop-blur-xl
                "
              >
                <p className="text-white/40 text-xs uppercase tracking-[0.2em]">
                  Location
                </p>

                <h3 className="text-white mt-2">
                  Delhi, India
                </h3>
              </div>

              <div
                className="
                  px-5 py-4
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                  backdrop-blur-xl
                "
              >
                <p className="text-white/40 text-xs uppercase tracking-[0.2em]">
                  Focus
                </p>

                <h3 className="text-white mt-2">
                  MERN • AI • FULLSTACK
                </h3>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            className="
              relative
              flex
              items-center
              justify-center
              p-10
            "
          >

            {/* Outer Ring */}
            <div
              className="
                absolute
                w-[420px]
                h-[420px]
                rounded-full
                border border-white/10
              "
            />

            {/* Glow */}
            <div
              className="
                absolute
                w-[300px]
                h-[300px]
                rounded-full
                bg-green-500/10
                blur-[100px]
              "
            />

            {/* Image Container */}
            <div
              id="profile-image"
              className="
                relative
                w-[320px]
                h-[420px]
                rounded-[35px]
                overflow-hidden
                border border-white/10
                bg-white/5
                backdrop-blur-2xl
                shadow-[0_20px_80px_rgba(0,0,0,0.5)]
              "
            >

              {/* Replace this image */}
              <img
                src="/images/mayank.png"
                alt="profile"
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-contain
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* Bottom Tag */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  p-6
                  backdrop-blur-xl
                  bg-black/20
                  border-t border-white/10
                "
              >
                <p className="text-green-400/70 text-xs tracking-[0.3em] uppercase font-mono">
                  Status
                </p>

                <h3 className="text-white mt-2 text-xl">
                  Building Modern Web Experiences
                </h3>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;