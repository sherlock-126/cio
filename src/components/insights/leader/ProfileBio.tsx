"use client";

import AnimatedSection from "@/components/insights/AnimatedSection";
import { bioIntro, achievements } from "@/data/leaderProfile";

export default function ProfileBio() {
  return (
    <AnimatedSection variant="fadeUp">
      <section>
        <h2 className="font-playfair text-2xl md:text-3xl font-bold text-navy-900 mb-6">
          Giới thiệu
        </h2>
        <div className="space-y-4 mb-10">
          {bioIntro.map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed">
              {paragraph.text}
            </p>
          ))}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="glass-card-hover text-center"
            >
              <p className="text-2xl md:text-3xl font-bold text-momo-pink mb-1">
                {achievement.value}
              </p>
              <p className="text-sm font-semibold text-navy-900 mb-1">
                {achievement.label}
              </p>
              <p className="text-xs text-gray-500">{achievement.description}</p>
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}
