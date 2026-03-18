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
    <AnimatedSection className="mb-16">
      <h2 className="font-playfair text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        {title}
      </h2>
      {description && (
        <p className="text-gray-500 mb-8 text-lg">{description}</p>
      )}
      <div className="overflow-x-auto">
        <div className="min-w-[500px]">{children}</div>
      </div>
    </AnimatedSection>
  );
}
