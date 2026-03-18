"use client";

import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { consumerBehaviorData } from "@/data/chinaFintech";
import ChartSection from "./ChartSection";

export default function ConsumerBehaviorChart() {
  return (
    <ChartSection
      title="Hành vi Người tiêu dùng"
      description="So sánh điểm mạnh các tính năng giữa hai nền tảng (thang điểm 100)"
    >
      <ResponsiveContainer width="100%" height={450}>
        <RadarChart data={consumerBehaviorData}>
          <PolarGrid stroke="#e2e8f0" />
          <PolarAngleAxis
            dataKey="feature"
            tick={{ fill: "#64748b", fontSize: 13 }}
          />
          <PolarRadiusAxis
            angle={30}
            domain={[0, 100]}
            tick={{ fill: "#94a3b8" }}
          />
          <Tooltip
            contentStyle={{
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.2)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              backgroundColor: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(12px)",
              padding: "12px 16px",
            }}
          />
          <Radar
            name="Alipay"
            dataKey="alipay"
            stroke="#D82D8B"
            fill="#D82D8B"
            fillOpacity={0.15}
            strokeWidth={2}
          />
          <Radar
            name="WeChat Pay"
            dataKey="wechatPay"
            stroke="#1A3058"
            fill="#1A3058"
            fillOpacity={0.15}
            strokeWidth={2}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </ChartSection>
  );
}
