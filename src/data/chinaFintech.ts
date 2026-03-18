export const reportMeta = {
  title: "Thị trường Fintech & Ví điện tử Trung Quốc 2024",
  subtitle: "Phân tích chuyên sâu: Alipay vs WeChat Pay",
  date: "Tháng 3, 2024",
  author: "MoMo Research",
};

export interface MarketShareEntry {
  name: string;
  alipay: number;
  wechatPay: number;
}

export const marketShareData: MarketShareEntry[] = [
  { name: "2019", alipay: 54.4, wechatPay: 39.5 },
  { name: "2020", alipay: 55.0, wechatPay: 38.8 },
  { name: "2021", alipay: 54.5, wechatPay: 38.6 },
  { name: "2022", alipay: 53.8, wechatPay: 39.2 },
  { name: "2023", alipay: 52.5, wechatPay: 40.1 },
  { name: "2024", alipay: 51.8, wechatPay: 41.0 },
];

export interface GrowthTrendEntry {
  name: string;
  alipay: number;
  wechatPay: number;
}

export const growthTrendData: GrowthTrendEntry[] = [
  { name: "2018", alipay: 28.5, wechatPay: 15.2 },
  { name: "2019", alipay: 35.8, wechatPay: 22.4 },
  { name: "2020", alipay: 56.0, wechatPay: 38.6 },
  { name: "2021", alipay: 72.3, wechatPay: 55.1 },
  { name: "2022", alipay: 85.4, wechatPay: 68.7 },
  { name: "2023", alipay: 98.7, wechatPay: 82.3 },
  { name: "2024", alipay: 118.2, wechatPay: 96.5 },
];

export interface ConsumerBehaviorEntry {
  feature: string;
  alipay: number;
  wechatPay: number;
}

export const consumerBehaviorData: ConsumerBehaviorEntry[] = [
  { feature: "Thanh toán", alipay: 92, wechatPay: 95 },
  { feature: "Đầu tư", alipay: 88, wechatPay: 45 },
  { feature: "Bảo hiểm", alipay: 82, wechatPay: 35 },
  { feature: "Mạng xã hội", alipay: 30, wechatPay: 98 },
  { feature: "E-commerce", alipay: 90, wechatPay: 72 },
  { feature: "Tín dụng", alipay: 85, wechatPay: 65 },
];

export const keyFindings = [
  "Alipay duy trì vị trí dẫn đầu với ~52% thị phần thanh toán di động, nhưng khoảng cách đang thu hẹp.",
  "WeChat Pay tăng trưởng mạnh nhờ tích hợp sâu vào hệ sinh thái mạng xã hội với hơn 1.3 tỷ người dùng.",
  "Tổng giá trị giao dịch thanh toán di động Trung Quốc đạt hơn 214 nghìn tỷ CNY trong năm 2024.",
  "Xu hướng tài chính nhúng (embedded finance) đang định hình lại cạnh tranh — cả hai nền tảng mở rộng sang bảo hiểm, đầu tư và tín dụng tiêu dùng.",
];

export const conclusion = {
  title: "Kết luận & Triển vọng",
  paragraphs: [
    "Thị trường thanh toán di động Trung Quốc tiếp tục là cuộc đua song mã giữa Alipay và WeChat Pay. Trong khi Alipay dẫn đầu về thị phần và hệ sinh thái tài chính, WeChat Pay đang thu hẹp khoảng cách nhờ lợi thế mạng xã hội và tần suất sử dụng hàng ngày cao hơn.",
    "Nhìn về phía trước, sự cạnh tranh sẽ dịch chuyển từ thanh toán thuần túy sang các dịch vụ tài chính giá trị gia tăng. Các quy định mới của PBOC về bảo vệ dữ liệu và interoperability sẽ tạo ra cơ hội cho các đối thủ mới, đồng thời thúc đẩy đổi mới trong trải nghiệm người dùng.",
    "Đối với thị trường Việt Nam, bài học quan trọng là: thành công trong fintech không chỉ đến từ công nghệ mà còn từ khả năng xây dựng hệ sinh thái toàn diện xung quanh nhu cầu tài chính hàng ngày của người dùng.",
  ],
};
