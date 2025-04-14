"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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

export default function Home() {
  // On page load/refresh, remove any URL hash and scroll to top
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      window.history.replaceState(
        {},
        document.title,
        window.location.pathname + window.location.search
      );
      window.scrollTo(0, 0);
    }
  }, []);

  // Detect if we're on a mobile screen
  const isMobile = useIsMobile();

  return (
    <div id="top" className="w-full overflow-x-hidden flex flex-col">
      {/* Header / Nav */}
      <div className="fixed top-0 z-50 w-full">
        <header className="w-full flex flex-row justify-between items-center bg-white px-8 py-4">
          <Link href="/" className="font-bold text-2xl">
            {isMobile ? "SC" : "SRIJANA CHRISTIAENS"}
          </Link>
          <nav className="space-x-4">
            <a
              href="#projects"
              className="hover:underline font-semibold text-lg"
            >
              PROJECTS
            </a>
            <a href="#about" className="hover:underline font-semibold text-lg">
              ABOUT ME
            </a>
          </nav>
        </header>
      </div>

      {/* Main content area */}
      <main
        id="about"
        className="min-h-screen flex flex-col justify-end gap-4 sm:gap-8 items-start p-8"
        style={{ height: "calc(95vh - 4rem)" }}
      >
        {/* Container with text & image */}
        <div className="flex flex-col md:flex-row relative w-full ">
          {/* Image section (first in DOM so it appears top-left on mobile) */}
          <motion.div
            initial={{ x: 0, y: 0, opacity: 1 }}
            // On mobile, x=0 so it doesn’t fly off-screen
            // On desktop, x=640 as before
            animate={isMobile ? { x: 0, opacity: 1 } : { x: 640, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            // Only absolute-positioned on md+ (desktop)
            // On mobile, center the image
            className={`${
              isMobile
          ? "mx-auto mb-4"
          : "md:absolute md:left-1/2 md:-translate-x-1/2 md:-translate-y-40"
            }`}
          >
            <Image
              src="/images/home/srijana.png"
              width={isMobile ? 200 : 300}
              height={isMobile ? 200 : 300}
              alt="Srijana"
              className="object-cover rounded shadow-lg"
            />
          </motion.div>

          {/* Text section (second in DOM so it wraps around floated image on mobile) */}
          <motion.div
            initial={{ x: 0, y: 0, opacity: 1 }}
            // Simpler animation on mobile; your original big upward shift on desktop
            animate={
              isMobile
                ? { x: 0, y: 0, opacity: 1 }
                : { x: 0, y: -350, opacity: 1 }
            }
            transition={{ duration: 1, delay: 1 }}
            className={`flex-1 flex flex-col justify-center ${
              isMobile ? "max-w-full" : "max-w-[65%]"
            }`}
          >
            <h2 className="md:text-3xl font-medium mb-2 text-lg text-center md:text-left">
              I am Srijana, a graphic design student &amp; freelancer based in
              Belgium. I turn ideas into visuals that tell a story. Whether it’s
              a logo, branding, UX design, or any other creative project, I
              infuse every creation with meaning and emotion.
            </h2>
          </motion.div>
        </div>

        {/* Scroll prompt */}
        <Link
          href="#projects"
          className={`${isMobile ? "w-full flex justify-center" : ""}`}
        >
          <motion.div
            className={`mt-4 text-gray-500 text-2xl flex items-center ${
              isMobile ? "w-full text-center justify-center" : "justify-start"
            } mb-4 font-medium`}
            animate={{ opacity: [1, 0.8, 1], scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            scroll for projects
          </motion.div>
        </Link>
      </main>

      {/* Projects Section */}
      <section id="projects">
        <Link href="/bleedfestival">
            <article
            className={`w-full flex flex-col mb-24 cursor-pointer ${
              isMobile ? "p-0" : "pb-0"
            }`}
            id="bleed"
            >
            <motion.video
              src="/videos/home/Bleed_animation_homepage.mp4"
              className={`object-contain ${
              isMobile ? "w-full" : "p-8 pb-2"
              }`}
              autoPlay
              loop
              muted
              style={{ objectPosition: "center" }}
              onLoadedData={(e) => {
              const video = e.currentTarget;
              video.currentTime = 1;
              }}
            />
            <div
              className={`flex justify-between ${
              isMobile ? "p-4" : "p-8 pt-0 mt-0"
              }`}
            >
              <h2 className="text-lg md:text-3xl font-medium">BLEED FESTIVAL</h2>
              <h2 className="text-lg md:text-3xl font-medium text-gray-400">
              Brand Identity - Event Branding
              </h2>
            </div>
            </article>
        </Link>

        {/* Dior Zine & Solis */}
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-8 w-full">
          <Link
            href="/diorzine"
            // On mobile => w-full, no extra margin
            // Desktop => your original widths and margin
            className="w-full md:w-[100%] md:ml-24"
          >
            <article className="cursor-pointer p-4 flex flex-col justify-end">
              <Image
                src="/images/home/Diorzine_homepage.png"
                alt="Diorzine"
                className="object-contain"
                width={1000}
                height={600}
              />
              <div className="flex justify-between mt-2">
                <h2 className="text-lg md:text-3xl font-medium">DIOR ZINE</h2>
                <h2 className="text-lg md:text-3xl font-medium text-gray-400">
                  Editorial
                </h2>
              </div>
            </article>
          </Link>

          <Link
            href="/solis"
            // On mobile => w-full, no margin
            // Desktop => w-60%, margin-left 44, margin-top ~120
            className="w-full md:w-[60%] md:ml-44 md:mt-120"
          >
            <article className="cursor-pointer p-4">
              <motion.video
                src="/videos/home/Solis_animation_homepage.mp4"
                className="w-full object-contain"
                autoPlay
                loop
                muted
                style={{ objectPosition: "center" }}
                onLoadedData={(e) => {
                  const video = e.currentTarget;
                  video.currentTime = 1;
                }}
              />
              <div className="flex justify-between mt-2">
                <h2 className="text-lg md:text-3xl font-medium">SOLIS</h2>
                <h2 className="text-lg md:text-3xl font-medium text-gray-400">
                  Packaging - Brand Identity
                </h2>
              </div>
            </article>
          </Link>
        </div>

        {/* Seewees */}
        <div className="grid grid-cols-1 md:grid-cols-[57%_40%] gap-8 w-full">
          <Link
            href="/seewees"
            // On mobile => w-full, no margin
            // Desktop => w-60%, margin-left auto
            className="w-full md:w-[60%] md:ml-auto mb-24"
          >
            <article
              className="pb-0 flex flex-col mb-0 cursor-pointer"
              id="bleed"
            >
              <motion.video
                src="/videos/seewees/Animation2Chilli.mp4"
                className="object-contain p-8 pb-2"
                autoPlay
                loop
                muted
                style={{ objectPosition: "center" }}
                onLoadedData={(e) => {
                  const video = e.currentTarget;
                  video.currentTime = 1;
                }}
              />
              <div className="flex justify-between p-8 pt-0 mt-0">
                <h2 className="text-lg md:text-3xl font-medium">SEEWEES</h2>
                <h2 className="text-lg md:text-3xl font-medium text-gray-400">
                  Packaging - Logo
                </h2>
              </div>
            </article>
          </Link>
        </div>
      </section>

      {/* BLACK FOOTER */}
      <footer className="bg-black text-white p-8 flex flex-col justify-between items-center">
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
        <div className="flex flex-col md:flex-row justify-between items-center w-full mt-4 ">
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
              +32 93 32 92 41
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
