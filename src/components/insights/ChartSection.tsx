"use client";

import { ReactNode } from "react";
import AnimatedSection from "./AnimatedSection";

interface ChartSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export default function ChartSection({
  title,
  description,
  children,
}: ChartSectionProps) {
  return (
    <AnimatedSection variant="scaleIn">
      <div className="glass-card">
        <h2 className="font-playfair text-2xl md:text-3xl font-bold text-navy-900 mb-3">
          {title}
        </h2>
        {description && (
          <p className="text-slate-500 mb-8 text-lg">{description}</p>
        )}
        <div className="w-full">{children}</div>
      </div>
    </AnimatedSection>
  );
}
