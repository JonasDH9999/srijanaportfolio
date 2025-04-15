"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";

/** Minimal "className join" helper. */
function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ");
}

export function WordsPullUp({
  text,
  className = "",
  underlineBlue = false, // new boolean prop
}: {
  text: string;
  className?: string;
  underlineBlue?: boolean;
}) {
  const splittedText = text.split(" ");

  const pullupVariant = {
    initial: { y: 20, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.5,
      },
    }),
  };

  // We'll track if the element is in view, so we only animate once
  const ref = React.useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true });

  // If underlineBlue is true, add these classes to each word
  const underlineClasses = underlineBlue
    ? "underline underline-offset-0 decoration-blue-500 decoration-1"
    : "";

  return (
    /**
     * Return a <span> so text flows inline with its container.
     * "inline-flex flex-wrap" => words appear side by side and can wrap.
     */
    <span ref={ref} className="inline-flex flex-wrap">
      {splittedText.map((word, i) => (
        <motion.span
          key={i}
          variants={pullupVariant}
          initial="initial"
          animate={isInView ? "animate" : ""}
          custom={i}
          className={cn(
            "mr-2",            // spacing between words
            className,         // user-provided classes (font-size, etc.)
            underlineClasses   // optional blue underline classes
          )}
        >
          {/* If word is empty, insert a non-breaking space so we don't lose spacing */}
          {word === "" ? "\u00A0" : word}
        </motion.span>
      ))}
    </span>
  );
}
