import { keyFindings } from "@/data/chinaFintech";
import AnimatedSection from "./AnimatedSection";

export default function ExecutiveSummary() {
  return (
    <AnimatedSection className="mb-16">
      <h2 className="font-playfair text-2xl md:text-3xl font-bold text-gray-900 mb-8">
        Tóm tắt Điều hành
      </h2>
      <div className="border-l-4 border-momo-pink pl-6 space-y-4">
        {keyFindings.map((finding, i) => (
          <p key={i} className="text-gray-700 leading-relaxed text-lg">
            {finding}
          </p>
        ))}
      </div>
    </AnimatedSection>
  );
}
