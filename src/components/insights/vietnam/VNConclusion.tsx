import { conclusion } from "@/data/vietnamFintech";
import AnimatedSection from "../AnimatedSection";

export default function VNConclusion() {
  return (
    <AnimatedSection variant="scaleIn">
      <div className="glass-card border-t-4 border-t-momo-pink">
        <h2 className="font-playfair text-2xl md:text-3xl font-bold text-navy-900 mb-8">
          {conclusion.title}
        </h2>
        <div className="space-y-6">
          {conclusion.paragraphs.map((paragraph, i) => (
            <p key={i} className="text-slate-700 leading-relaxed text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
