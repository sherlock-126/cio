import type { Metadata } from "next";
import VNReportHeader from "@/components/insights/vietnam/VNReportHeader";
import VNExecutiveSummary from "@/components/insights/vietnam/VNExecutiveSummary";
import VNCompetitorComparison from "@/components/insights/vietnam/VNCompetitorComparison";
import VNMarketShareChart from "@/components/insights/vietnam/VNMarketShareChart";
import VNBNPLGrowthChart from "@/components/insights/vietnam/VNBNPLGrowthChart";
import VNConclusion from "@/components/insights/vietnam/VNConclusion";

export const metadata: Metadata = {
  title: "Hệ sinh thái Fintech Việt Nam 2024 | MoMo Research",
  description:
    "Phân tích toàn diện thị trường Fintech Việt Nam — so sánh MoMo, ZaloPay, VNPay, ShopeePay về thị phần, GMV, QR coverage và tăng trưởng BNPL.",
  openGraph: {
    title: "Hệ sinh thái Fintech Việt Nam 2024 | MoMo Research",
    description:
      "Phân tích toàn diện thị trường Fintech Việt Nam — MoMo, ZaloPay, VNPay, ShopeePay.",
    type: "article",
  },
};

export default function VietnamFintechPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-20">
        <VNReportHeader />
        <VNExecutiveSummary />
        <VNCompetitorComparison />
        <VNMarketShareChart />
        <VNBNPLGrowthChart />
        <VNConclusion />
      </div>
    </main>
  );
}
