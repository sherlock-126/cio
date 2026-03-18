import { conclusion } from "@/data/chinaFintech";
import AnimatedSection from "./AnimatedSection";

export default function InsightConclusion() {
  return (
    <AnimatedSection className="mb-16">
      <h2 className="font-playfair text-2xl md:text-3xl font-bold text-gray-900 mb-8">
        {conclusion.title}
      </h2>
      <div className="space-y-6">
        {conclusion.paragraphs.map((paragraph, i) => (
          <p key={i} className="text-gray-700 leading-relaxed text-lg">
            {paragraph}
          </p>
        ))}
      </div>
    </AnimatedSection>
  );
}
