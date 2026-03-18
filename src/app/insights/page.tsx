import type { Metadata } from "next";
import ReportHeader from "@/components/insights/ReportHeader";
import ExecutiveSummary from "@/components/insights/ExecutiveSummary";
import MarketShareChart from "@/components/insights/MarketShareChart";
import GrowthTrendChart from "@/components/insights/GrowthTrendChart";
import ConsumerBehaviorChart from "@/components/insights/ConsumerBehaviorChart";
import InsightConclusion from "@/components/insights/InsightConclusion";

export const metadata: Metadata = {
  title: "Fintech Trung Quốc: Alipay vs WeChat Pay | MoMo Research",
  description:
    "Báo cáo phân tích chuyên sâu thị trường Fintech và ví điện tử Trung Quốc — so sánh Alipay và WeChat Pay về thị phần, tăng trưởng và hành vi người tiêu dùng.",
  openGraph: {
    title: "Fintech Trung Quốc: Alipay vs WeChat Pay | MoMo Research",
    description:
      "Báo cáo phân tích chuyên sâu thị trường Fintech và ví điện tử Trung Quốc.",
    type: "article",
  },
};

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ReportHeader />
        <ExecutiveSummary />
        <MarketShareChart />
        <GrowthTrendChart />
        <ConsumerBehaviorChart />
        <InsightConclusion />
      </div>
    </main>
  );
}
