"use client"; 
// Because we'll use client-side animations (Framer Motion)

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {


  return (
    <div className="w-full overflow-x-hidden text-black flex flex-col">

      {/* Header / Nav */}
      <header className="sticky top-0 z-[9999] flex justify-between items-center bg-white">
      <h1 className="font-bold text-2xl">SRIJANA CHRISTIAENS</h1>
        <nav className="space-x-4">
          <a href="#projects" className="hover:underline font-semibold text-lg">PROJECTS</a>
          <a href="#about" className="hover:underline font-semibold text-lg">ABOUT ME</a>
        </nav>
      </header>

      {/* Main content area */}
      <main
        className="flex flex-col justify-end gap-4 sm:gap-8 items-start"
        style={{ height: "calc(95vh - 4rem)" }}
      >
        <div className="flex flex-row">
          {/* Left text section */}
          <motion.div
            
            initial={{ x: 50, y:0, opacity: 0 }}
            animate={{ x: 0, y:-350, opacity: 1 }}
            transition={{ duration: 1 }}
            /* Scroll-based transform for upward motion */
            
            className="flex-1 flex flex-col justify-center max-w-[65%]"
          >
            <h2
              className="sm:text-3xl font-medium mb-2"
              style={{ fontSize: "2.5rem" }}
            >
              I am Srijana, a graphic design student &amp; freelancer based in
              Belgium. I turn ideas into visuals that tell a story. Whether it’s
              a logo, branding, UX design, or any other creative project, I infuse
              every creation with meaning and emotion.
            </h2>
          </motion.div>

          {/* Right image section */}
          <motion.div
            
            initial={{ x: 0, y: 0, opacity: 1 }}
            animate={{ x: 680, y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            /* Scroll-based scale */
            className="absolute left-3/8 -translate-y-40"
          >
            <Image
              src="/images/home/srijana.png"
              width={300}
              height={300}
              alt="Srijana"
              className="object-cover rounded shadow-lg"
            />
          </motion.div>
        </div>

        <div className="mt-4 text-gray-500 text-2xl flex items-start justify-start mb-4 font-medium">
          ↓ scroll for projects
        </div>
      </main>

      {/* Extra space for scrolling to see the effect */}
      <section className="relative w-full h-screen" id="projects">
        <motion.video
          src="/videos/home/Bleed_animation_homepage.mp4"
          className="absolute top-0 left-0 w-full object-contain"
          autoPlay
          loop
          muted
          style={{
        objectPosition: "center",
          }}
          onLoadedData={(e) => {
        const video = e.currentTarget;
        video.currentTime = 1; // Set the video to the first second
          }}
        />
      </section>
    </div>
  );
}
