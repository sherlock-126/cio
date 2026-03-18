"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { marketShareData } from "@/data/chinaFintech";
import ChartSection from "./ChartSection";

export default function MarketShareChart() {
  return (
    <ChartSection
      title="Thị phần Thanh toán Di động"
      description="So sánh thị phần Alipay và WeChat Pay theo năm (%)"
    >
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={marketShareData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="name" tick={{ fill: "#64748b" }} />
          <YAxis tick={{ fill: "#64748b" }} unit="%" />
          <Tooltip
            contentStyle={{
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.2)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              backgroundColor: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(12px)",
              padding: "12px 16px",
            }}
            formatter={(value) => [`${value}%`]}
          />
          <Legend />
          <Bar
            dataKey="alipay"
            name="Alipay"
            fill="#D82D8B"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="wechatPay"
            name="WeChat Pay"
            fill="#1A3058"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartSection>
  );
}
