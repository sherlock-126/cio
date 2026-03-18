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
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="name" tick={{ fill: "#6b7280" }} />
          <YAxis tick={{ fill: "#6b7280" }} />
          <Tooltip
            contentStyle={{
              borderRadius: "8px",
              border: "none",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
            formatter={(value) => [`${value} nghìn tỷ CNY`]}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="alipay"
            name="Alipay"
            stroke="#1677FF"
            strokeWidth={3}
            dot={{ r: 5, fill: "#1677FF" }}
            activeDot={{ r: 7 }}
          />
          <Line
            type="monotone"
            dataKey="wechatPay"
            name="WeChat Pay"
            stroke="#07C160"
            strokeWidth={3}
            dot={{ r: 5, fill: "#07C160" }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartSection>
  );
}
