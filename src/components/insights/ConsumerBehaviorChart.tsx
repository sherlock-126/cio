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
          <PolarGrid stroke="#e5e7eb" />
          <PolarAngleAxis
            dataKey="feature"
            tick={{ fill: "#6b7280", fontSize: 13 }}
          />
          <PolarRadiusAxis
            angle={30}
            domain={[0, 100]}
            tick={{ fill: "#9ca3af" }}
          />
          <Tooltip
            contentStyle={{
              borderRadius: "8px",
              border: "none",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          />
          <Radar
            name="Alipay"
            dataKey="alipay"
            stroke="#1677FF"
            fill="#1677FF"
            fillOpacity={0.2}
            strokeWidth={2}
          />
          <Radar
            name="WeChat Pay"
            dataKey="wechatPay"
            stroke="#07C160"
            fill="#07C160"
            fillOpacity={0.2}
            strokeWidth={2}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </ChartSection>
  );
}
