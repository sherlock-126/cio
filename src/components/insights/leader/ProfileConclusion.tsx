"use client";

import AnimatedSection from "@/components/insights/AnimatedSection";
import { conclusion } from "@/data/leaderProfile";

export default function ProfileConclusion() {
  return (
    <AnimatedSection variant="scaleIn">
      <div className="glass-card border-t-4 border-t-momo-pink">
        <h2 className="font-playfair text-2xl md:text-3xl font-bold text-navy-900 mb-6">
          {conclusion.title}
        </h2>
        <div className="space-y-4">
          {conclusion.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
