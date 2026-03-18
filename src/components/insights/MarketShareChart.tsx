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
import useChartDimensions from "@/hooks/useChartDimensions";

export default function MarketShareChart() {
  const { chartHeight, margin, fontSize, isMobile, glassTooltipStyle } =
    useChartDimensions();

  return (
    <ChartSection
      title="Thị phần Thanh toán Di động"
      description="So sánh thị phần Alipay và WeChat Pay theo năm (%)"
    >
      <ResponsiveContainer width="100%" height={chartHeight}>
        <BarChart data={marketShareData} margin={margin}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis
            dataKey="name"
            tick={{ fill: "#64748b", fontSize }}
            interval={isMobile ? "preserveStartEnd" : 0}
          />
          <YAxis tick={{ fill: "#64748b", fontSize }} unit="%" />
          <Tooltip
            contentStyle={glassTooltipStyle}
            formatter={(value) => [`${value}%`]}
          />
          <Legend wrapperStyle={{ fontSize }} />
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
