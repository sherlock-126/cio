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

export default function VNBNPLGrowthChart() {
  return (
    <ChartSection
      title="Tăng trưởng BNPL (Mua Trước Trả Sau) tại Việt Nam"
      description="Quy mô thị trường (tỷ USD) và tỷ lệ người dùng áp dụng (%)"
    >
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={bnplGrowthData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="year" tick={{ fill: "#64748b" }} />
          <YAxis
            yAxisId="left"
            tick={{ fill: "#64748b" }}
            label={{
              value: "Tỷ USD",
              angle: -90,
              position: "insideLeft",
              style: { fill: "#64748b" },
            }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            tick={{ fill: "#64748b" }}
            unit="%"
            label={{
              value: "% Người dùng",
              angle: 90,
              position: "insideRight",
              style: { fill: "#64748b" },
            }}
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
            formatter={(value, name) => [
              name === "Quy mô thị trường" ? `$${value} tỷ` : `${value}%`,
            ]}
          />
          <Legend />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="marketSize"
            name="Quy mô thị trường"
            stroke="#D82D8B"
            strokeWidth={3}
            dot={{ r: 5, fill: "#D82D8B" }}
            activeDot={{ r: 10 }}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="userAdoption"
            name="Tỷ lệ áp dụng"
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
