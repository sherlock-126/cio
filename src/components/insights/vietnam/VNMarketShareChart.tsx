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
import { marketShareData } from "@/data/vietnamFintech";
import ChartSection from "../ChartSection";
import useChartDimensions from "@/hooks/useChartDimensions";

export default function VNMarketShareChart() {
  const { chartHeight, margin, fontSize, isMobile, yAxisWidth, glassTooltipStyle } =
    useChartDimensions();

  const bottomMargin = isMobile ? 60 : margin.bottom;

  return (
    <ChartSection
      title="Thị phần Thanh toán Di động Việt Nam"
      description="So sánh thị phần 4 ví điện tử hàng đầu theo từng chỉ số (%)"
    >
      <ResponsiveContainer width="100%" height={isMobile ? 320 : chartHeight}>
        <BarChart
          data={marketShareData}
          margin={{ ...margin, bottom: bottomMargin }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis
            dataKey="metric"
            tick={{ fill: "#64748b", fontSize }}
            angle={isMobile ? -35 : 0}
            textAnchor={isMobile ? "end" : "middle"}
            interval={0}
          />
          <YAxis tick={{ fill: "#64748b", fontSize }} unit="%" width={yAxisWidth} />
          <Tooltip
            contentStyle={glassTooltipStyle}
            formatter={(value) => [`${value}%`]}
          />
          <Legend wrapperStyle={{ fontSize }} />
          <Bar
            dataKey="momo"
            name="MoMo"
            fill="#D82D8B"
            radius={[4, 4, 0, 0]}
            stackId={isMobile ? "a" : undefined}
          />
          <Bar
            dataKey="zalopay"
            name="ZaloPay"
            fill="#0068FF"
            radius={[4, 4, 0, 0]}
            stackId={isMobile ? "a" : undefined}
          />
          <Bar
            dataKey="vnpay"
            name="VNPay"
            fill="#1A3058"
            radius={[4, 4, 0, 0]}
            stackId={isMobile ? "a" : undefined}
          />
          <Bar
            dataKey="shopeepay"
            name="ShopeePay"
            fill="#EE4D2D"
            radius={[4, 4, 0, 0]}
            stackId={isMobile ? "a" : undefined}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartSection>
  );
}
