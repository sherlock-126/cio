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

export default function VNMarketShareChart() {
  return (
    <ChartSection
      title="Thị phần Thanh toán Di động Việt Nam"
      description="So sánh thị phần 4 ví điện tử hàng đầu theo từng chỉ số (%)"
    >
      <div className="min-w-[600px]">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={marketShareData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="metric" tick={{ fill: "#64748b" }} />
            <YAxis tick={{ fill: "#64748b" }} unit="%" />
            <Tooltip
              contentStyle={{
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.2)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                backgroundColor: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(12px)",
                padding: "12px 16px",
              }}
              formatter={(value) => [`${value}%`]}
            />
            <Legend />
            <Bar
              dataKey="momo"
              name="MoMo"
              fill="#D82D8B"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="zalopay"
              name="ZaloPay"
              fill="#0068FF"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="vnpay"
              name="VNPay"
              fill="#1A3058"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="shopeepay"
              name="ShopeePay"
              fill="#EE4D2D"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartSection>
  );
}
