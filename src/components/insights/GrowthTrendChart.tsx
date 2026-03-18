"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { growthTrendData } from "@/data/chinaFintech";
import ChartSection from "./ChartSection";

export default function GrowthTrendChart() {
  return (
    <ChartSection
      title="Xu hướng Tăng trưởng Giao dịch"
      description="Khối lượng giao dịch hàng năm (nghìn tỷ CNY)"
    >
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={growthTrendData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="name" tick={{ fill: "#64748b" }} />
          <YAxis tick={{ fill: "#64748b" }} />
          <Tooltip
            contentStyle={{
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.2)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              backgroundColor: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(12px)",
              padding: "12px 16px",
            }}
            formatter={(value) => [`${value} nghìn tỷ CNY`]}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="alipay"
            name="Alipay"
            stroke="#D82D8B"
            strokeWidth={3}
            dot={{ r: 5, fill: "#D82D8B" }}
            activeDot={{ r: 10 }}
          />
          <Line
            type="monotone"
            dataKey="wechatPay"
            name="WeChat Pay"
            stroke="#1A3058"
            strokeWidth={3}
            dot={{ r: 5, fill: "#1A3058" }}
            activeDot={{ r: 10 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartSection>
  );
}
