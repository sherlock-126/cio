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
import { bnplGrowthData } from "@/data/vietnamFintech";
import ChartSection from "../ChartSection";
import useChartDimensions from "@/hooks/useChartDimensions";

export default function VNBNPLGrowthChart() {
  const {
    chartHeight,
    margin,
    fontSize,
    isMobile,
    dotRadius,
    activeDotRadius,
    yAxisWidth,
    glassTooltipStyle,
  } = useChartDimensions();

  return (
    <ChartSection
      title="Tăng trưởng BNPL (Mua Trước Trả Sau) tại Việt Nam"
      description="Quy mô thị trường (tỷ USD) và tỷ lệ người dùng áp dụng (%)"
    >
      <ResponsiveContainer width="100%" height={chartHeight}>
        <LineChart data={bnplGrowthData} margin={margin}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis
            dataKey="year"
            tick={{ fill: "#64748b", fontSize }}
          />
          <YAxis
            yAxisId="left"
            tick={{ fill: "#64748b", fontSize }}
            width={yAxisWidth}
            label={
              isMobile
                ? undefined
                : {
                    value: "Tỷ USD",
                    angle: -90,
                    position: "insideLeft",
                    style: { fill: "#64748b" },
                  }
            }
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            tick={{ fill: "#64748b", fontSize }}
            unit="%"
            width={yAxisWidth}
            label={
              isMobile
                ? undefined
                : {
                    value: "% Người dùng",
                    angle: 90,
                    position: "insideRight",
                    style: { fill: "#64748b" },
                  }
            }
          />
          <Tooltip
            contentStyle={glassTooltipStyle}
            formatter={(value, name) => [
              name === "Quy mô thị trường" ? `$${value} tỷ` : `${value}%`,
            ]}
          />
          <Legend wrapperStyle={{ fontSize }} />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="marketSize"
            name="Quy mô thị trường"
            stroke="#D82D8B"
            strokeWidth={isMobile ? 2 : 3}
            dot={{ r: dotRadius, fill: "#D82D8B" }}
            activeDot={{ r: activeDotRadius }}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="userAdoption"
            name="Tỷ lệ áp dụng"
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
