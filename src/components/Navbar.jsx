import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="
        relative
        z-50
        w-full
        px-4
        md:px-8
        pt-4
      "
    >
      <div
        className="
          flex
          items-center
          justify-between
          rounded-2xl
          border
          border-white/10
          bg-black/40
          backdrop-blur-xl
          px-5
          md:px-7
          py-3
          shadow-[0_10px_40px_rgba(0,0,0,0.35)]
        "
      >

        {/* LEFT */}
        <div className="flex flex-col leading-tight">

          <h1
            className="
              text-white
              text-lg
              md:text-xl
              font-light
              tracking-[0.22em]
              uppercase
            "
          >
            Mayank Khanna
          </h1>

          <p
            className="
              text-green-400/60
              text-[9px]
              md:text-[10px]
              tracking-[0.28em]
              uppercase
              mt-1
              font-mono
            "
          >
            Developer System
          </p>

        </div>

        {/* CENTER */}
        <div
          className="
            hidden
            lg:flex
            items-center
            gap-2
          "
        >
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

          <p
            className="
              text-white/35
              uppercase
              tracking-[0.3em]
              text-[10px]
              font-mono
            "
          >
            Online
          </p>
        </div>

        {/* RIGHT */}
        <div
          className="
            flex
            items-center
            gap-4
            md:gap-6
          "
        >

          <Link
            to="/"
            className="
              text-white/70
              hover:text-green-400
              transition-all
              duration-300
              uppercase
              tracking-[0.18em]
              text-[11px]
              md:text-xs
            "
          >
            Home
          </Link>

          <Link
            to="/work"
            className="
              text-white/70
              hover:text-green-400
              transition-all
              duration-300
              uppercase
              tracking-[0.18em]
              text-[11px]
              md:text-xs
            "
          >
            Work
          </Link>

          <Link
            to="/contact"
            className="
              text-white/70
              hover:text-green-400
              transition-all
              duration-300
              uppercase
              tracking-[0.18em]
              text-[11px]
              md:text-xs
            "
          >
            Contact
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;