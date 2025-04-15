"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/** A simple hook to detect if screen is below a certain width (default 768px). */
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, [breakpoint]);

  return isMobile;
}

export default function Seewees() {
  // Detect if we're on a mobile screen
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const mainSectionHeight =
        document.querySelector("main")?.offsetHeight || 0;
      // Trigger "scrolled" styling a bit sooner (70% of main)
      setIsScrolled(window.scrollY > mainSectionHeight * 0.7);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="top" className="w-full overflow-x-hidden flex flex-col">
      {/* Hero / Header */}
      <main
        className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-between p-0 m-0 relative"
        style={{
          backgroundImage: "url('/images/seewees/Hero.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay Image (centered) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/images/seewees/Herologo.png"
            alt="Overlay Image"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>

        {/* Faint overlay */}
        <div
          className="absolute inset-0 bg-black-500 opacity-50"
          style={{ pointerEvents: "none" }}
        />

        {/* Fixed Header / Nav */}
        <div className="fixed top-0 z-500 w-full">
          <header
            className={`w-full flex flex-row justify-between items-center px-8 py-4 transition-colors duration-300 ${
              isScrolled ? "bg-white text-unset" : "bg-transparent text-white"
            }`}
          >
            <Link href="/" className="font-bold text-2xl">
              {isMobile ? "SC" : "SRIJANA CHRISTIAENS"}
            </Link>
            <nav className="space-x-4">
              <Link
                href="/#projects"
                className="hover:underline font-semibold text-lg"
              >
                PROJECTS
              </Link>
              <Link
                href="/#about"
                className="hover:underline font-semibold text-lg"
              >
                ABOUT ME
              </Link>
            </nav>
          </header>
        </div>
      </main>

      {/* Intro Section */}
      <section className="mt-12 md:mt-80">
        <h2 className="md:text-5xl font-medium mb-4 text-xl text-center md:text-left md:pl-8">
          Seewees
        </h2>
        <div className="pl-2 pr-2 md:p-8 flex flex-col md:flex-row w-full">
          <div className="w-full md:w-1/2">
            <ul className="md:space-y-2 md:text-4xl font-medium text-lg text-center md:text-left">
              <li>Logo Design</li>
              <li>Packaging</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <p className="md:text-3xl font-medium mb-2 text-md text-center md:text-left mt-2 md:mt-0 p-8 md:p-0">
              Seewees is a conceptual snack brand, developed during my graphic
              design coursework. The product is seaweed rice crisps, and the
              brand aims to feel fresh and modern. Seewees was designed to stand
              out on shelves and feel different from traditional health snacks.
            </p>
          </div>
        </div>
      </section>

      {/* Two Videos Section */}
      <section>
        {/* 1st video: Chilli */}
        <motion.video
          src="/videos/seewees/Animation2Chilli.mp4"
          width={1920}
          height={1080}
          // On desktop, your original: w-[50%], mt-8, mb-4, p-8
          // On mobile, stack full width with p-8
          className={`${
            isMobile ? "w-full p-8 object-contain" : "w-[50%] mt-8 mb-4 p-8"
          }`}
          autoPlay
          loop
          muted
          onLoadedData={(e) => {
            const video = e.currentTarget;
            video.playbackRate = 1; // normal speed
            video.currentTime = 1;
          }}
        />

        {/* 2nd video: Wasabi */}
        <motion.video
          src="/videos/seewees/Animation1Wasabi.mp4"
          width={1920}
          height={1080}
          // On desktop, w-[50%] + ml-auto + transform: translateY(-40%)
          // On mobile, stack full width with p-8, no transform
          className={`${
            isMobile
              ? "w-full p-8 object-contain"
              : "w-[50%] mb-0 p-8 ml-auto object-contain"
          }`}
          style={{
            transform: isMobile ? "none" : "translateY(-40%)",
          }}
          autoPlay
          loop
          muted
          onLoadedData={(e) => {
            const video = e.currentTarget;
            video.playbackRate = 1; // normal speed
            video.currentTime = 1;
          }}
        />

        {/* Info block */}
        <section className="mb-0 mt-0">
          <div className="w-full md:w-4/9 p-8">
            <p className="md:text-3xl font-medium mb-2 text-md text-center md:text-left mb-20">
              I developed the logo and packaging design, using the idea of
              “underwater flow” as a visual anchor. The challenge was to capture
              the fluid, tangled feeling of seaweed in the design while keeping
              it clean and readable. To solve this, I created a flowing
              wordmark, explored bold colour palettes and refined the layout for
              a playful but clear look that shows the brand’s oceanic and
              snackable essence.
            </p>
          </div>
        </section>

        {/* Two Images (Wasabi + Chilli) */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8 md:w-2/3 ml-auto">
          {/* Wasabi */}
          <Image
            src="/images/seewees/Seewees_Wasabi.png"
            alt="Overlay Image"
            width={500}
            height={500}
            // Desktop retains md:translate-x-52, md:scale-110
            // Mobile becomes w-full p-8
            className={`object-contain ${
              isMobile ? "w-full p-8" : "md:translate-x-52 md:scale-110"
            }`}
          />
          {/* Chilli */}
          <Image
            src="/images/seewees/Seewees_Chilli.png"
            alt="Overlay Image"
            width={500}
            height={500}
            className={`object-contain ${
              isMobile ? "w-full p-8" : "md:ml-auto md:scale-110"
            }`}
          />
        </div>
      </section>

      {/* BLACK FOOTER */}
      <footer className="bg-black text-white p-8 flex flex-col justify-between items-center z-20 relative">
        {/* Arrow-up link to return to the top */}
        <div className="flex justify-end items-center w-full mb-24">
          <a
            href="#top"
            className="rounded-full p-2 border border-white hover:bg-gray-800 transition-colors"
            aria-label="Back to top"
          >
            {/* Simple SVG arrow up icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </a>
        </div>
        {/* Contact label / info */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full mt-4">
          <div className="text-4xl">Contact</div>
          <div
            className={`flex flex-col ${
              isMobile ? "items-center text-center" : "items-end"
            } gap-2 text-xl md:text-4xl mb-8 mt-16`}
          >
            <a
              href="mailto:Srijchri@student.arteveldehs.be"
              className="hover:underline"
            >
              Srijchri@student.arteveldehs.be
            </a>
            <a href="tel:+3293329241" className="hover:underline">
              +32 483 32 92 41
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
