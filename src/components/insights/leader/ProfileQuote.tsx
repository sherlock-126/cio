"use client";

import AnimatedSection from "@/components/insights/AnimatedSection";
import { featuredQuote } from "@/data/leaderProfile";

export default function ProfileQuote() {
  return (
    <AnimatedSection variant="scaleIn">
      <div className="glass-card relative overflow-hidden">
        <span className="absolute top-4 left-6 text-6xl md:text-8xl text-momo-pink/20 font-playfair leading-none select-none">
          &ldquo;
        </span>
        <blockquote className="relative z-10 pt-8 md:pt-10">
          <p className="text-lg md:text-xl text-navy-900 font-playfair italic leading-relaxed">
            &ldquo;{featuredQuote.text}&rdquo;
          </p>
          <footer className="mt-4 text-sm text-navy-600 font-medium">
            &mdash; {featuredQuote.attribution}
          </footer>
        </blockquote>
      </div>
    </AnimatedSection>
  );
}
