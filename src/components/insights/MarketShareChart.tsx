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

export default function MarketShareChart() {
  return (
    <ChartSection
      title="Thị phần Thanh toán Di động"
      description="So sánh thị phần Alipay và WeChat Pay theo năm (%)"
    >
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={marketShareData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="name" tick={{ fill: "#6b7280" }} />
          <YAxis tick={{ fill: "#6b7280" }} unit="%" />
          <Tooltip
            contentStyle={{
              borderRadius: "8px",
              border: "none",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
            formatter={(value) => [`${value}%`]}
          />
          <Legend />
          <Bar
            dataKey="alipay"
            name="Alipay"
            fill="#1677FF"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="wechatPay"
            name="WeChat Pay"
            fill="#07C160"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartSection>
  );
}
