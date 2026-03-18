"use client";

import { competitors } from "@/data/vietnamFintech";
import AnimatedSection from "../AnimatedSection";

export default function VNCompetitorComparison() {
  return (
    <AnimatedSection>
      <div className="glass-card">
        <h2 className="font-playfair text-2xl md:text-3xl font-bold text-navy-900 mb-8">
          So sánh Đối thủ Cạnh tranh
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {competitors.map((comp) => (
            <div
              key={comp.name}
              className="glass-card-hover"
              style={{ borderTop: `4px solid ${comp.color}` }}
            >
              <h3
                className="font-playfair text-xl font-bold mb-4"
                style={{ color: comp.color }}
              >
                {comp.name}
              </h3>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Người dùng</span>
                  <span className="font-semibold text-navy-900">
                    {comp.userCount}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">GMV</span>
                  <span className="font-semibold text-navy-900">
                    {comp.gmv}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">QR Coverage</span>
                  <span className="font-semibold text-navy-900">
                    {comp.qrCoverage}
                  </span>
                </div>
              </div>
              <div className="border-t border-slate-200 pt-4">
                <p className="text-xs uppercase tracking-wider text-slate-400 mb-2">
                  Điểm mạnh
                </p>
                <ul className="space-y-1">
                  {comp.strengths.map((s, i) => (
                    <li
                      key={i}
                      className="text-sm text-slate-600 flex items-start gap-2"
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: comp.color }}
                      />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
