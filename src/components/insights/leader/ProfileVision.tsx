"use client";

import AnimatedSection from "@/components/insights/AnimatedSection";
import { visionSections } from "@/data/leaderProfile";

export default function ProfileVision() {
  return (
    <AnimatedSection variant="fadeUp">
      <section>
        <h2 className="font-playfair text-2xl md:text-3xl font-bold text-navy-900 mb-8">
          Tầm nhìn Chiến lược
        </h2>
        <div className="space-y-8">
          {visionSections.map((section, index) => (
            <div
              key={index}
              className="border-l-4 border-momo-pink pl-6"
            >
              <h3 className="text-xl font-semibold text-navy-900 mb-3">
                {section.title}
              </h3>
              <div className="space-y-3">
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}
