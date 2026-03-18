import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/insights/AnimatedSection";

export const metadata: Metadata = {
  title: "Market Insights | MoMo Research",
  description:
    "Thư viện báo cáo phân tích thị trường Fintech — China Fintech, Vietnam Fintech Ecosystem, và hồ sơ lãnh đạo ngành.",
  openGraph: {
    title: "Market Insights | MoMo Research",
    description:
      "Thư viện báo cáo phân tích thị trường Fintech từ MoMo Research.",
    type: "website",
  },
};

const reports = [
  {
    title: "Fintech Trung Quốc: Alipay vs WeChat Pay Q1/2026",
    summary:
      "Phân tích chuyên sâu thị trường ví điện tử Trung Quốc Q1/2026 — so sánh thị phần, tăng trưởng giao dịch và hành vi người tiêu dùng.",
    href: "/insights/china-fintech",
    category: "Báo cáo Thị trường",
  },
  {
    title: "Hệ sinh thái Fintech Việt Nam Q1/2026",
    summary:
      "Toàn cảnh thị trường Fintech Việt Nam Q1/2026 — phân tích quy mô, đối thủ cạnh tranh, và xu hướng phát triển hệ sinh thái thanh toán số.",
    href: "/insights/vietnam-fintech",
    category: "Báo cáo Thị trường",
  },
  {
    title: "Ông Đỗ Quang Thuận — Hồ sơ Lãnh đạo",
    summary:
      "Hồ sơ lãnh đạo ngành Fintech Việt Nam — hành trình sự nghiệp, tầm nhìn chiến lược và đóng góp cho hệ sinh thái thanh toán số.",
    href: "/insights/leader/do-quang-thuan",
    category: "Hồ sơ Lãnh đạo",
  },
];

export default function InsightsHubPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold tracking-widest text-momo-pink uppercase mb-3">
            MoMo Research
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-navy-900 mb-4">
            Market Insights
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Thư viện báo cáo phân tích chuyên sâu về thị trường Fintech và thanh toán số khu vực Châu Á.
          </p>
          <div className="w-20 h-1 bg-momo-pink mx-auto mt-6 rounded-full" />
        </div>

        {/* Report Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reports.map((report, index) => (
            <AnimatedSection
              key={report.href}
              variant="scaleIn"
              delay={index * 0.15}
            >
              <Link
                href={report.href}
                className="glass-card-hover flex flex-col h-full group"
              >
                <span className="inline-block self-start text-xs font-semibold tracking-wider text-momo-pink uppercase mb-3 px-3 py-1 bg-pink-50 rounded-full">
                  {report.category}
                </span>
                <h2 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-momo-pink transition-colors">
                  {report.title}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed flex-grow mb-6">
                  {report.summary}
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-momo-pink">
                  Xem báo cáo
                  <svg
                    className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </main>
  );
}
