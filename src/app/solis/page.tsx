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

export default function Solis() {
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
      <main
        className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-between p-0 m-0 relative"
        style={{
          backgroundImage: "url('/images/solis/SolisHero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/images/solis/Hero logo.png"
            alt="Overlay Image"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
        {/* Faint overlay to darken hero */}
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
          Solis
        </h2>
        <div className="pl-2 pr-2 md:p-8 flex flex-col md:flex-row w-full">
          <div className="w-full md:w-1/2">
            <ul className="md:space-y-2 md:text-4xl font-medium text-lg text-center md:text-left">
              <li>Brand Identity</li>
              <li>Packaging</li>
              <li>Logo Design</li>
              <li>Digital Content</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <p className="md:text-3xl font-medium mb-2 text-md text-center md:text-left mt-2 md:mt-0 p-8 md:p-0">
              Solis is a self-initiated passion project I created from scratch.
              It is a playful and approachable suncare brand made for everyday
              use. The products are designed to protect, sooth and hydrate.
            </p>
          </div>
        </div>
      </section>

      {/* Magazine Spread Video */}
      <section>
        <Image
          src="/images/solis/All_products.png"
          alt="Bleed Festival Logo"
          width={1920}
          height={1080}
          className="w-[100%] mx-auto mt-2 mb-4 p-8"
        />
        <div className="flex flex-col md:flex-row ml-8 mt-20 mr-6 justify-between gap-16">
          {/* Left column */}
          <div className="flex-1">
            <div className="h-full">
              <Image
                src="/images/solis/Lipstick_2.png"
                alt="DiorZine"
                width={1920}
                height={1080}
                className={`object-contain ${
                  isMobile ? "w-full bg-white" : "h-full object-contain"
                }`}
              />
            </div>
          </div>
          {/* Right column */}
          <div className="flex flex-col flex-1 justify-between">
            <div
              style={{
                transform: "translate(-10%, -20%)",
              }}
            >
              <Image
                src="/images/solis/Lipstick.png"
                alt="DiorZine"
                width={1920}
                height={1080}
                className={`object-contain ${
                  isMobile ? "w-full bg-white" : "w-3/5"
                }`}
              />
            </div>
            <div>
              <motion.video
                src="/videos/solis/StarAnimation1.mp4"
                className={`object-contain ${
                  isMobile ? "w-full bg-white" : "w-2/4 ml-0"
                }`}
                autoPlay
                loop
                muted
                width={1920}
                height={1080}
                onLoadedData={(e) => {
                  const video = e.currentTarget;
                  video.playbackRate = 1; // Set playback speed to 50% (slower)
                  video.currentTime = 1;
                }}
              />
            </div>
          </div>
        </div>

        <section className="mb-0 mt-80">
          <div className="w-full md:w-2/5 p-8">
            <p className="md:text-3xl font-medium mb-2 text-md text-center md:text-left mb-20">
              The goal was to create a suncare brand that feels both fun and
              reliable. I wanted it to come across as warm, inclusive and easy
              to connect with, not cold or clinical like some sunscreen brands.
            </p>
          </div>

          <div className="flex flex-col md:flex-row w-full justify-between">
            {/* Left image */}
            <div className="w-full md:w-1/3 relative z-20">
              <div
                style={{
                  transform: isMobile ? "none" : "translateX(250px)",
                }}
              >
                <Image
                  src="/images/solis/Sunscreenmist.png"
                  alt="Contents"
                  width={1920}
                  height={1080}
                  className="w-full h-full z-50"
                />
              </div>
            </div>
            {/* Right image */}
            <div className="w-full md:w-1/2 relative -ml-10 z-10">
              <div
                style={{
                  transform: isMobile
                    ? "none"
                    : "translateX(-60px) translateY(80px)",
                }}
              >
                <Image
                  src="/images/solis/Sunscreenmist2.png"
                  alt="Contents"
                  width={1920}
                  height={1080}
                  className="w-full ml-auto scale-105"
                />
              </div>
            </div>
          </div>

          {/* 5.png */}
          <div
            className={`flex flex-col md:flex-row w-full md:w-1/2 pl-6 justify-between`}
          >
            <Image
              src="/images/solis/socials.png"
              alt="DiorZine"
              width={1920}
              height={1080}
              className="mr-auto mt-2 mb-4 scale-130 w-full md:ml-50 z-50"
            />
          </div>

          {/* Mid text block */}
          <div className="w-full md:w-6/12 pr-8 mb-20 mt-80 ml-auto">
            <p className="md:text-3xl font-medium mb-2 text-md text-center md:text-left">
              One of the biggest challenges was finding the right balance
              between trustworthy and playful. I didn’t want it to feel too
              medical, but also not overly childish. To solve this, I designed a
              fun, bold logo with soft rounded typography, used bright colours
              and added sun inspired icons. The result is a brand that feels
              modern, playful and inviting, while still communicating care and
              protection.
            </p>
          </div>

            {/* 10.png with motion video */}
            <div
            className={`relative flex flex-col md:flex-row w-full md:w-6/12 ml-auto mt-20 pr-8 justify-between`}
            >
            {/* Motion video */}
            <motion.video
              src="/videos/solis/StarAnimation2.mp4"
              className="absolute right-2/3 bottom-1/10 transform -translate-x-1/2 -translate-y-1/3 w-2/5 z-10"
              autoPlay
              loop
              muted
              width={1920}
              height={1080}
              onLoadedData={(e) => {
              const video = e.currentTarget;
              video.playbackRate = 1; // Set playback speed
              video.currentTime = 1;
              }}
            />
            {/* Image */}
            <Image
              src="/images/solis/Sunscreenlotion1.png"
              alt="DiorZine"
              width={1920}
              height={1080}
              className="mr-auto mt-2 mb-24 w-full object-contain"
            />
            </div>


            <div
            className="flex flex-col md:flex-row ml-8 mt-0 mr-6 justify-between gap-0 z-50"
            style={{
              transform: "translateY(-150px)",
            }}
            >
          {/* Left column */}
          <div className="w-full md:w-1/2">
            <div className="h-full">
              <Image
                src="/images/solis/Some_products.png"
                alt="DiorZine"
                width={1920}
                height={1080}
                className={`object-cover ${
                  isMobile ? "w-full bg-white" : "ml-8 w-2/3 scale-110"
                }`}
              />
            </div>
          </div>
          {/* Right column */}
          <div className="w-full md:w-1/2">
            <div
              style={{
                transform: "translateX(-150px)",
              }}
            >
              <Image
                src="/images/solis/Aftersunlotion2.png"
                alt="DiorZine"
                width={1920}
                height={1080}
                className={`object-cover ${
                  isMobile ? "w-full bg-white" : "w-2/3 scale-110"
                }`}
              />
            </div>
            
          </div>
        </div>
        </section>
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
              +32 93 32 92 41
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
