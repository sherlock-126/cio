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
import useChartDimensions from "@/hooks/useChartDimensions";

export default function ConsumerBehaviorChart() {
  const { chartHeight, fontSize, isMobile, glassTooltipStyle } =
    useChartDimensions();

  const radarHeight = isMobile ? 300 : chartHeight + 50;

  return (
    <ChartSection
      title="Hành vi Người tiêu dùng"
      description="So sánh điểm mạnh các tính năng giữa hai nền tảng (thang điểm 100)"
    >
      <ResponsiveContainer width="100%" height={radarHeight}>
        <RadarChart
          data={consumerBehaviorData}
          outerRadius={isMobile ? "60%" : "80%"}
        >
          <PolarGrid stroke="#e2e8f0" />
          <PolarAngleAxis
            dataKey="feature"
            tick={{ fill: "#64748b", fontSize }}
          />
          <PolarRadiusAxis
            angle={30}
            domain={[0, 100]}
            tick={{ fill: "#94a3b8", fontSize: isMobile ? 9 : 12 }}
          />
          <Tooltip contentStyle={glassTooltipStyle} />
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
          <Legend wrapperStyle={{ fontSize }} />
        </RadarChart>
      </ResponsiveContainer>
    </ChartSection>
  );
}
