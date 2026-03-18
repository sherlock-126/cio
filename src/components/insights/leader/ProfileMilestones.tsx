"use client";

import AnimatedSection from "@/components/insights/AnimatedSection";
import { milestones } from "@/data/leaderProfile";

export default function ProfileMilestones() {
  return (
    <AnimatedSection variant="fadeUp">
      <section>
        <h2 className="font-playfair text-2xl md:text-3xl font-bold text-navy-900 mb-8">
          Cột mốc Sự nghiệp
        </h2>
        <div className="relative border-l-2 border-momo-pink ml-4 md:ml-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative pl-8 pb-10 last:pb-0">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-momo-pink border-2 border-white shadow" />
              <span className="text-sm font-bold text-momo-pink">
                {milestone.year}
              </span>
              <h3 className="text-lg font-semibold text-navy-900 mt-1">
                {milestone.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mt-1">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}
