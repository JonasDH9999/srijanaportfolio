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

export default function DiorZine() {
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
          backgroundImage: "url('/images/diorzine/Diorzinehero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Faint overlay to darken hero */}
        <div
          className="absolute inset-0 bg-black-500 opacity-50"
          style={{ pointerEvents: "none" }}
        />
        {/* Fixed Header / Nav */}
        <div className="fixed top-0 z-50 w-full">
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
          Dior Zine
        </h2>
        <div className="pl-2 pr-2 md:p-8 flex flex-col md:flex-row w-full">
          <div className="w-full md:w-1/2">
            <ul className="md:space-y-2 md:text-4xl font-medium text-lg text-center md:text-left">
              <li>Editorial</li>
              <li>Layout</li>
              <li>Typography</li>
              <li>Print Design</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <p className="md:text-3xl font-medium mb-2 text-md text-center md:text-left mt-2 md:mt-0 p-8 md:p-0">
              This editorial project was developed as part of my graphic design
              class and focuses entirely on Christian Dior. From his life and
              legacy to his timeless pieces and lasting impact on fashion. The
              goal was to design a refined magazine layout that shows the
              timeless elegance that is associated with the Dior name.
            </p>
          </div>
        </div>
      </section>

      {/* Magazine Spread Video */}
      <section>
        <motion.video
          src="/videos/diorzine/Dior_Magazine_Spread_Animation.mp4"
          className={`object-cover ${
            isMobile ? "w-full bg-white" : "w-full mb-12 md:mb-0"
          }`}
          autoPlay
          loop
          muted
          width={1920}
          height={1080}
          onLoadedData={(e) => {
            const video = e.currentTarget;
            video.playbackRate = 1; // normal speed
            video.currentTime = 1;
          }}
        />

        {/* Main Dior content */}
        <section className="mb-20 mt-10">
          <div className="w-full md:w-2/5 p-8">
            <p className="md:text-3xl font-medium mb-2 text-md text-center md:text-left mb-70">
              One of the main challenges was creating something that felt
              visually in line with Dior’s aesthetic, while still feeling unique
              and personal. My approach was to design the magazine as an
              immersive experience, something that pulls you into Dior’s world
              from the very first page.
            </p>
          </div>

          {/* Cover.png */}
          <div
            className={`flex flex-col md:flex-row w-full md:w-2/5 pl-0 justify-between`}
          >
            <Image
              src="/images/diorzine/Cover.png"
              alt="DiorZine"
              width={1920}
              height={1080}
              className="mr-auto mt-2 mb-0 scale-150 w-full"
            />
          </div>

          {/* mock up 00 (1).png & 4. Contents.png */}
          <div className="flex flex-col md:flex-row w-full justify-between">
            {/* Left image */}
            <div className="w-full md:w-1/2">
              <div
                style={{
                  transform: isMobile ? "none" : "translateX(175px)",
                }}
              >
                <Image
                  src="/images/diorzine/mock up 00 (1).png"
                  alt="Contents"
                  width={1920}
                  height={1080}
                  className="w-full mr-auto h-full"
                />
              </div>
            </div>
            {/* Right image */}
            <div className="w-full md:w-1/2">
              <div
                style={{
                  transform: isMobile ? "none" : "translateX(-50px)",
                }}
              >
                <Image
                  src="/images/diorzine/4. Contents.png"
                  alt="Contents"
                  width={1920}
                  height={1080}
                  className="w-full ml-auto"
                />
              </div>
            </div>
          </div>

          {/* 5.png */}
          <div
            className={`flex flex-col md:flex-row w-full md:w-1/2 pl-6 justify-between`}
          >
            <Image
              src="/images/diorzine/5.png"
              alt="DiorZine"
              width={1920}
              height={1080}
              className="mr-auto mt-2 mb-4 scale-170 w-full"
            />
          </div>

          {/* 6.png */}
          <div
            className={`flex flex-col md:flex-row w-full md:w-1/2 ml-auto mt-20 mr-6 justify-between`}
          >
            <Image
              src="/images/diorzine/6.png"
              alt="DiorZine"
              width={1920}
              height={1080}
              className="mr-auto mt-2 mb-4 scale-170 w-full"
            />
          </div>

          {/* 7.png & 8.png */}
          <div className="flex flex-col md:flex-row w-full justify-between">
            {/* 7.png */}
            <div className="w-full md:w-1/2">
              <div
                style={{
                  transform: isMobile ? "none" : "translateX(20px)",
                }}
              >
                <Image
                  src="/images/diorzine/7.png"
                  alt="Contents"
                  width={1920}
                  height={1080}
                  className="w-full mr-auto h-full"
                />
              </div>
            </div>
            {/* 8.png */}
            <div className="w-full md:w-1/2">
              <div
                style={{
                  transform: isMobile ? "none" : "translateX(-195px)",
                }}
              >
                <Image
                  src="/images/diorzine/8.png"
                  alt="Contents"
                  width={1920}
                  height={1080}
                  className="w-full ml-auto"
                />
              </div>
            </div>
          </div>

          {/* 9_1.png & 9_2.png */}
          <div className="flex flex-col md:flex-row w-full justify-between">
            <div className="w-full md:w-1/2">
              <Image
                src="/images/diorzine/9_1.png"
                alt="Contents"
                width={1920}
                height={1080}
                className="w-full"
              />
            </div>
            <div className="w-full md:w-1/2">
              <Image
                src="/images/diorzine/9_2.png"
                alt="Contents"
                width={1920}
                height={1080}
                className="w-full"
              />
            </div>
          </div>

          {/* Mid text block */}
          <div className="w-full md:w-2/5 p-8 mb-20 mt-60">
            <p className="md:text-3xl font-medium mb-2 text-md text-center md:text-left">
              I designed each spread based on its subject, so that every page
              would evoke a feeling. Whether it was about his personal life, a
              specific collection or a key moment in his career. By letting the
              content lead the design, it helped me create a magazine that felt
              both cohesive and emotionally rich, while also staying true to
              Dior’s identity.
            </p>
          </div>

          {/* 10.png */}
          <div
            className={`flex flex-col md:flex-row w-full md:w-1/2 ml-auto mt-20 mr-6 justify-between`}
          >
            <Image
              src="/images/diorzine/10.png"
              alt="DiorZine"
              width={1920}
              height={1080}
              className="mr-auto mt-2 mb-24 scale-170 w-full"
            />
          </div>

          {/* 11.png */}
          <div
            className={`flex flex-col md:flex-row w-full md:w-1/2 pl-6 justify-between`}
          >
            <Image
              src="/images/diorzine/11.png"
              alt="DiorZine"
              width={1920}
              height={1080}
              className="mr-auto mt-2 mb-4 scale-170 w-full"
            />
          </div>

          {/* 12.png & 13.png */}
          <div className="flex flex-col md:flex-row w-full justify-between">
            {/* 12.png */}
            <div className="w-full md:w-1/2">
              <div
                style={{
                  transform: isMobile ? "none" : "translateX(175px)",
                }}
              >
                <Image
                  src="/images/diorzine/12.png"
                  alt="Contents"
                  width={1920}
                  height={1080}
                  className="w-full mr-auto h-full"
                />
              </div>
            </div>
            {/* 13.png */}
            <div className="w-full md:w-1/2">
              <div
                style={{
                  transform: isMobile ? "none" : "translateX(-50px)",
                }}
              >
                <Image
                  src="/images/diorzine/13.png"
                  alt="Contents"
                  width={1920}
                  height={1080}
                  className="w-full ml-auto"
                />
              </div>
            </div>
          </div>

          {/* CoverBack.png */}
          <div
            className={`flex flex-col md:flex-row w-full md:w-2/5 pl-0 ml-auto justify-between`}
          >
            <div
              style={{
                transform: isMobile ? "none" : "translateX(70px)",
              }}
            >
              <Image
                src="/images/diorzine/CoverBack.png"
                alt="DiorZine"
                width={1920}
                height={1080}
                className="mr-auto mt-2 mb-0 scale-150 w-full"
              />
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
              +32 483 32 92 41
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
