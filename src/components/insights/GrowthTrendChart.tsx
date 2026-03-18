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
import useChartDimensions from "@/hooks/useChartDimensions";

export default function GrowthTrendChart() {
  const {
    chartHeight,
    margin,
    fontSize,
    isMobile,
    dotRadius,
    activeDotRadius,
    glassTooltipStyle,
  } = useChartDimensions();

  return (
    <ChartSection
      title="Xu hướng Tăng trưởng Giao dịch"
      description="Khối lượng giao dịch hàng năm (nghìn tỷ CNY)"
    >
      <ResponsiveContainer width="100%" height={chartHeight}>
        <LineChart data={growthTrendData} margin={margin}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis
            dataKey="name"
            tick={{ fill: "#64748b", fontSize }}
            interval={isMobile ? "preserveStartEnd" : 0}
          />
          <YAxis tick={{ fill: "#64748b", fontSize }} />
          <Tooltip
            contentStyle={glassTooltipStyle}
            formatter={(value) => [`${value} nghìn tỷ CNY`]}
          />
          <Legend wrapperStyle={{ fontSize }} />
          <Line
            type="monotone"
            dataKey="alipay"
            name="Alipay"
            stroke="#D82D8B"
            strokeWidth={isMobile ? 2 : 3}
            dot={{ r: dotRadius, fill: "#D82D8B" }}
            activeDot={{ r: activeDotRadius }}
          />
          <Line
            type="monotone"
            dataKey="wechatPay"
            name="WeChat Pay"
            stroke="#1A3058"
            strokeWidth={isMobile ? 2 : 3}
            dot={{ r: dotRadius, fill: "#1A3058" }}
            activeDot={{ r: activeDotRadius }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartSection>
  );
}
