import React from "react";

import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import Education from "./components/Education";

const Homepage = () => {
  return (
    <main className="bg-black overflow-x-hidden">

      {/* HERO SECTION */}
      <section
        className="
          relative
          min-h-screen
          w-full
          overflow-hidden
        "
      >

        {/* Optional Background Image */}
        <div
          className="
            absolute
            inset-0
            bg-cover
            bg-center
            opacity-20
          "
          style={{
            backgroundImage:
              "url('/images/hero-bg.jpg')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10">

          <Navbar />

          <Introduction />

        </div>
      </section>

      {/* SKILLS */}
      <section className="relative z-20">
        <Skills />
      </section>

      {/* EDUCATION + ACHIEVEMENTS */}
      <section className="relative z-20">
        <Education />
      </section>

    </main>
  );
};

export default Homepage;