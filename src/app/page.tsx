"use client";

import React, { useRef, useEffect, useState } from "react";
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

function FadeInSection({
  children,
  delayClass = "",
}: {
  children: React.ReactNode;
  delayClass?: string;
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      // 1) Always have .fade-slide-up-base to start hidden
      // 2) If isVisible => also add .fade-slide-up-visible
      // 3) If you want a delay, add that class too
      className={`overflow-hidden fade-slide-up-base ${
        isVisible ? `fade-slide-up-visible ${delayClass}` : ""
      }`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  // -------------- NEW: Curtains scroll logic --------------
  useEffect(() => {
    const SCROLL_START = 0; // Where curtains start opening
    const SCROLL_END = 1500; // Where curtains are fully open
    const MAX_TRANSLATE = 500; // How many px each curtain slides outward

    function handleScroll() {
      const scrollY = window.scrollY;

      // progress from 0..1
      const progress = Math.min(
        Math.max((scrollY - SCROLL_START) / (SCROLL_END - SCROLL_START), 0),
        1
      );

      const translateAmount = progress * MAX_TRANSLATE;

      const leftCurtain = document.querySelector(".curtain-left");
      const rightCurtain = document.querySelector(".curtain-right");

      if (leftCurtain && rightCurtain) {
        (
          leftCurtain as HTMLElement
        ).style.transform = `translateX(-${translateAmount}px)`;
        (
          rightCurtain as HTMLElement
        ).style.transform = `translateX(${translateAmount}px)`;
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
      {/* Main content area */}
      {/* Main content area */}
      <main
        id="about"
        className="
    min-h-screen 
    flex 
    flex-col 
    mt-12 
    md:mt-25 
    justify-start 
    md:justify-start 
    items-start
  "
        style={{ height: "calc(95vh - 4rem)" }}
      >
        {/* BUILDING BRIDGES */}
        <div className="w-full mx-auto flex justify-center">
          <div className="overflow-hidden">
            {/* 
        For mobile: text-[3rem]
        For desktop: text-[9rem] (original)
      */}
            <div
              className="
        text-[3rem] 
        md:text-[9rem] 
        font-medium 
        tracking-wider 
        leading-tight 
        slide-up
      "
            >
              <span>BUILDING</span>
              <span>&nbsp;BRIDGES</span>
            </div>
          </div>
        </div>

        {/* BETWEEN */}
        <div className="overflow-hidden w-full ml-0 md:ml-25">
          <div
            className="
      text-[3rem] 
      md:text-[9rem] 
      font-medium 
      tracking-wider 
      leading-tight 
      slide-up 
      delay-1
    "
          >
            <span className="underline underline-offset-0 decoration-blue-500 decoration-1">
              BETWEEN
            </span>
          </div>
        </div>

        {/* Wrap row in flex-col for mobile, row for desktop */}
        <div className="flex flex-col md:flex-row gap-12 mx-auto">
          <div className="flex flex-col gap-4 items-start justify-start w-full md:w-1/2">
            {/* "I am Srijana..." paragraph */}
            <div className="overflow-hidden">
              {/* 
          For mobile: text-[1.2rem] (or so)
          For desktop: text-[1.8rem] (original)
        */}
              <div
                className="
          ml-0 
          md:ml-25 
          mt-8 
          text-[1.2rem] 
          md:text-[1.8rem] 
          slide-up 
          delay-2
        "
              >
                <span className="w-full inline-flex justify-end">
                  I am Srijana, a graphic design student
                  and&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                freelancer based in Belgium. I turn ideas into visuals that tell
                a story. Whether it&#39;s a logo, brand identity, UI/UX design,
                or any other creative project, I design with meaning and
                emotion.
              </div>
            </div>

            {/* Unchanged image */}
            <div className="ml-0 md:ml-25 slide-up delay-2">
              <Image
                src="/images/home/nFXwF.png"
                alt="Arrow Down"
                width={60}
                height={60}
                className="object-contain multiply-white"
              />
            </div>
          </div>

          <div>
            {/* STORIES & DESIGN */}
            {/* 
        For mobile: text-[4rem] or [5rem] 
        For desktop: text-[9rem] and [9.5rem] (original)
      */}
            <div
              className="
          w-full 
          md:w-2/2 
          text-[4rem] 
          md:text-[9rem] 
          font-medium 
          tracking-wider 
          leading-tight 
          italic
        "
              style={{ transform: "translateY(-20px)" }}
            >
              <div className="overflow-hidden">
                <div className="slide-up delay-3">
                  <span
                    className="
              text-[4.5rem] 
              md:text-[9.5rem]
            "
                  >
                    STORIES
                    <br />
                    <span
                      className="
                text-[3.5rem] 
                md:text-[8.5rem]
              "
                    >
                      & DESIGN
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Projects Section */}
      <section id="projects">
        {/* ---------- Bleed Festival with the new curtains ---------- */}
        <Link href="/bleedfestival">
          <article
            className={`w-full flex flex-col cursor-pointer ${
              isMobile ? "p-0 mb-14" : "pb-0 mb-0 mt-10"
            }`}
            id="bleed"
          >
            <div
              id="curtains"
              className="relative w-full "
              // Use min-h if you want to ensure enough vertical space for the effect
              // style={{ minHeight: "70vh" }}
            >
              {/* LEFT CURTAIN */}
              <div
                className="curtain-left absolute bottom-45 w-[15%] bg-white z-50 h-full"
                style={{
                  left: 0,
                  transform: isMobile ? undefined : "translateY(-50px)",
                  transition: "transform 0.7s linear",
                }}
              ></div>

              {/* RIGHT CURTAIN */}
              <div
                className="curtain-right absolute bottom-45 w-[15%] bg-white z-50 h-full"
                style={{
                  right: 0,
                  transform: isMobile ? undefined : "translateY(-50px)",
                  transition: "transform 1s linear",
                }}
              ></div>

              {/* The video (no longer using `motion.video`) */}
              <video
                src="/videos/home/Bleed_animation_homepage.mp4"
                className={`object-contain ${isMobile ? "w-full" : "p-8 pb-2"}`}
                autoPlay={true}
                muted
                loop={true}
                controls={false}
                playsInline={true}
                preload="auto"
                style={{
                  objectPosition: "center",
                  transform: isMobile ? undefined : "translateY(-200px)",
                }}
              />

              {/* Headings */}
              <div
                className={`flex justify-between ${
                  isMobile ? "p-4" : "p-8 pt-0 mt-0"
                }`}
                style={{
                  transform: isMobile ? undefined : "translateY(-200px)",
                }}
              >
                <h2 className="text-lg md:text-3xl font-medium">
                  BLEED FESTIVAL
                </h2>
                <h2 className="text-lg md:text-3xl font-medium text-gray-400">
                  {isMobile
                    ? "Event Branding"
                    : "Brand Identity - Event Branding"}
                </h2>
              </div>
            </div>
          </article>
        </Link>
        {/* -------------- End Bleed Festival -------------- */}

        {/* Dior Zine & Solis */}
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-8 w-full">
          <Link
            href="/diorzine"
            // On mobile => w-full, no extra margin
            // Desktop => your original widths and margin
            className="w-full md:w-[100%] md:ml-24"
          >
            <FadeInSection delayClass="delay-0">
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
            </FadeInSection>
          </Link>

          <Link
            href="/solis"
            // On mobile => w-full, no margin
            // Desktop => w-60%, margin-left 44, margin-top ~120
            className="w-full md:w-[60%] md:ml-44 md:mt-120"
          >
            <FadeInSection delayClass="delay-0">
                <article className="cursor-pointer p-4">
                <video
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
            </FadeInSection>
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
            <FadeInSection delayClass="delay-0">
                <article
                className="pb-0 flex flex-col mb-0 cursor-pointer"
                id="bleed"
                >
                <video
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
            </FadeInSection>
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
              +32 483 32 92 41
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
