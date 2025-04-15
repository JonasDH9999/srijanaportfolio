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

export default function BleedFestival() {
  // Detect if we're on a mobile screen
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const mainSectionHeight =
        document.querySelector("main")?.offsetHeight || 0;
      setIsScrolled(window.scrollY > mainSectionHeight * 0.7); // Trigger a bit sooner
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="top" className="w-full overflow-x-hidden flex flex-col">
      <main
        className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-between p-0 m-0"
        style={{
          backgroundImage: "url('/images/bleedfestival/Hero_Poster.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Header / Nav */}
        <div className="fixed top-0 z-50 w-full">
          <header
            className={`w-full flex flex-row justify-between items-center px-8 py-4 transition-colors duration-300 ${
              isScrolled ? "bg-white" : "bg-transparent"
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
          Bleed Festival
        </h2>
        <div className="pl-2 pr-2 md:p-8 flex flex-col md:flex-row w-full">
          <div className="w-full md:w-1/2">
            <ul className="md:space-y-2 md:text-4xl font-medium text-lg text-center md:text-left">
              <li>Brand identity</li>
              <li>Graphic Design</li>
              <li>Digital Content</li>
              <li>Event Branding</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <p className="md:text-3xl font-medium mb-2 text-md text-center md:text-left mt-2 md:mt-0 p-8 md:p-0">
              As part of my graphic design studies, I developed the branding for
              BLEED, a fictional festival that focuses on fashion and
              technology. The project aimed to create a visual identity that
              blends fashion technology and brutalism.
            </p>
          </div>
        </div>
      </section>

      {/* Logos / Flags Section */}
      <section className="mb-12 md:mb-80">
        <Image
          src="/images/bleedfestival/BleedLogo.png"
          alt="Bleed Festival Logo"
          width={1920}
          height={1080}
          className="w-[100%] mx-auto mt-2 mb-4 p-8"
        />
        <div className="flex flex-col md:flex-row justify-between w-full">
          <Image
            src="/images/bleedfestival/Flag_black.png"
            alt="Bleed Festival Logo"
            width={1920}
            height={1080}
            className="w-full md:w-1/2 p-8"
          />
          <Image
            src="/images/bleedfestival/Flag_white.png"
            alt="Bleed Festival Logo"
            width={1920}
            height={1080}
            className="w-full md:w-1/2 p-8"
          />
        </div>
      </section>

      {/* Dynamic Moving Logo Section */}
      <section className="mb-20">
        <div className="w-full md:w-2/5 p-8">
          <p className="md:text-3xl font-medium mb-2 text-md text-center md:text-left">
            For this project, I created a dynamic ‘moving’ logo and a full range
            of brand applications, including posters, social media graphics,
            merchandise, and badges. Every decision was made to ensure
            consistency and a strong visual presence across different channels.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between w-full p-8 gap-8">
          <motion.video
            src="/videos/bleedfestival/Logos_animation.mp4"
            className={`object-cover ${isMobile ? "w-full bg-white" : "w-1/2"}`}
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
          <Image
            src="/images/bleedfestival/Wristbands.png"
            alt="Bleed Festival Poster"
            width={1080}
            height={1920}
            className="w-full md:w-1/2 ml-auto mt-2 mb-4"
          />
        </div>
        <motion.video
          src="/videos/bleedfestival/Badges_card_animation.mp4"
          className={`object-cover ${
            isMobile ? "w-full mt-30" : "w-2/5 ml-auto mt-30"
          }`}
          autoPlay
          loop
          muted
          width={1920}
          height={1080}
          style={{ objectPosition: "center" }}
          onLoadedData={(e) => {
            const video = e.currentTarget;
            video.playbackRate = 1; // 50% speed
            video.currentTime = 1;
          }}
        />
      </section>

      {/* Wristbands Section */}
      <section>
        <div className="w-full md:w-4/9 ml-2 md:ml-auto pr-10">
          <p className="md:text-3xl font-medium mb-2 text-md text-justify">
            The main challenge for this project was combining three different
            themes into one cohesive visual style. I didn’t want the design to
            feel chaotic or overdone, so I focused on keeping it bold yet clean.
            To show the fashion and brutalist aspect, I used strong, structured
            typography and visual elements. In the end I added layout shifts to
            bring a sense of movement and a more futuristic and modern feel.
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-4" id="wristbands">
          {[  
            {
              src: "/images/bleedfestival/Official wristbands speaker.png",
              alt: "Bleed Festival Poster Speaker",
              initialX: "-40%",
            },
            {
              src: "/images/bleedfestival/Official wristbands visitor.png",
              alt: "Bleed Festival Poster Visitor",
              initialX: "40%",
            },
            {
              src: "/images/bleedfestival/Official wristbands staff.png",
              alt: "Bleed Festival Poster Staff",
              initialX: "-40%",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ x: item.initialX }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1.8 }}
              viewport={{ once: false, amount: 0.2 }}
              className={`w-full ${isMobile ? "scale-120" : ""}`}
            >
              <Image
              src={item.src}
              alt={item.alt}
              width={1920}
              height={1080}
              className="w-full ml-auto mt-2 mb-4"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Festival Poster Section */}
      <section className="mt-12 md:mt-60">
        <div className="mt-8 w-full md:w-1/2 mr-auto p-8">
          <Image
            src="/images/bleedfestival/Festival_1.png"
            alt="Bleed Festival Poster"
            width={1920}
            height={1080}
            className="w-full mt-2 mb-4"
          />
          <Image
            src="/images/bleedfestival/Festival_2.png"
            alt="Bleed Festival Poster"
            width={1920}
            height={1080}
            className="w-full ml-auto mt-2 mb-4"
          />
          <Image
            src="/images/bleedfestival/Festival_3.png"
            alt="Bleed Festival Poster"
            width={1920}
            height={1080}
            className="w-full ml-auto mt-2 mb-4"
          />
          <Image
            src="/images/bleedfestival/Festival_4.png"
            alt="Bleed Festival Poster"
            width={1920}
            height={1080}
            className="w-full ml-auto mt-2 mb-4"
          />
        </div>
      </section>

      {/* Social Media Stories Video */}
      <section className="mt-12 md:mt-60 mb-12 md:mb-60">
        <motion.video
          src="/videos/bleedfestival/Social_media_stories.mp4"
          className={`object-cover ${
            isMobile ? "w-full mt-30" : "w-2/5 ml-auto mt-30 p-8"
          }`}
          autoPlay
          loop
          muted
          width={1920}
          height={1080}
          style={{ objectPosition: "center" }}
          onLoadedData={(e) => {
            const video = e.currentTarget;
            video.playbackRate = 1; 
            video.currentTime = 1;
          }}
        />
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
