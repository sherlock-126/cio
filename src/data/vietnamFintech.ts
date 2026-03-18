export const reportMeta = {
  title: "Hệ sinh thái Fintech Việt Nam Q1/2026",
  subtitle: "Phân tích toàn diện: MoMo, ZaloPay, VNPay & ShopeePay",
  date: "Tháng 3, 2026",
  author: "MoMo Research",
};

export interface Competitor {
  name: string;
  color: string;
  userCount: string;
  gmv: string;
  qrCoverage: string;
  strengths: string[];
}

export const competitors: Competitor[] = [
  {
    name: "MoMo",
    color: "#D82D8B",
    userCount: "42 triệu",
    gmv: "$22.8 tỷ",
    qrCoverage: "520,000+ điểm",
    strengths: [
      "Hệ sinh thái tài chính toàn diện nhất",
      "Tích hợp sâu dịch vụ công & thanh toán hóa đơn",
      "Đầu tư, bảo hiểm, tín dụng tiêu dùng",
      "Gamification & loyalty program mạnh",
    ],
  },
  {
    name: "ZaloPay",
    color: "#0068FF",
    userCount: "28 triệu",
    gmv: "$12.5 tỷ",
    qrCoverage: "260,000+ điểm",
    strengths: [
      "Tích hợp Zalo — 82 triệu người dùng nhắn tin",
      "Chuyển tiền xã hội (social payment) mạnh",
      "Thanh toán QR tại chuỗi F&B, retail",
      "Lì xì điện tử — viral marketing hiệu quả",
    ],
  },
  {
    name: "VNPay",
    color: "#1A3058",
    userCount: "55 triệu+",
    gmv: "$28.4 tỷ",
    qrCoverage: "720,000+ điểm",
    strengths: [
      "Mạng lưới QR code lớn nhất Việt Nam",
      "Đối tác với 48+ ngân hàng nội địa",
      "Payment gateway cho e-commerce",
      "Dẫn đầu thanh toán tại quầy (POS)",
    ],
  },
  {
    name: "ShopeePay",
    color: "#EE4D2D",
    userCount: "25 triệu",
    gmv: "$10.6 tỷ",
    qrCoverage: "180,000+ điểm",
    strengths: [
      "Tích hợp sâu Shopee — sàn TMĐT #1 Việt Nam",
      "Voucher & cashback liên tục thu hút Gen Z",
      "Thanh toán COD → digital chuyển đổi nhanh",
      "Cross-border payment với SEA markets",
    ],
  },
];

export interface MarketShareEntry {
  metric: string;
  momo: number;
  zalopay: number;
  vnpay: number;
  shopeepay: number;
}

export const marketShareData: MarketShareEntry[] = [
  { metric: "Người dùng (%)", momo: 28, zalopay: 19, vnpay: 37, shopeepay: 17 },
  { metric: "GMV (%)", momo: 31, zalopay: 17, vnpay: 38, shopeepay: 14 },
  { metric: "QR Coverage (%)", momo: 31, zalopay: 15, vnpay: 43, shopeepay: 11 },
  { metric: "Merchant (%)", momo: 27, zalopay: 16, vnpay: 40, shopeepay: 13 },
];

export interface BNPLGrowthEntry {
  year: string;
  marketSize: number;
  userAdoption: number;
}

export const bnplGrowthData: BNPLGrowthEntry[] = [
  { year: "2019", marketSize: 0.3, userAdoption: 2.1 },
  { year: "2020", marketSize: 0.8, userAdoption: 4.5 },
  { year: "2021", marketSize: 1.5, userAdoption: 8.2 },
  { year: "2022", marketSize: 2.8, userAdoption: 14.6 },
  { year: "2023", marketSize: 4.2, userAdoption: 21.3 },
  { year: "2024", marketSize: 6.5, userAdoption: 28.7 },
  { year: "2025", marketSize: 8.4, userAdoption: 34.2 },
  { year: "2026", marketSize: 10.2, userAdoption: 39.5 },
];

export const keyFindings = [
  "VNPay dẫn đầu về độ phủ QR code với hơn 720,000 điểm chấp nhận thanh toán, chiếm ~43% thị phần merchant tính đến Q1/2026.",
  "MoMo là super-app tài chính toàn diện nhất với 42 triệu người dùng, tích hợp đầu tư, bảo hiểm và tín dụng tiêu dùng.",
  "Thị trường BNPL Việt Nam tăng trưởng mạnh mẽ, dự kiến đạt $10.2 tỷ năm 2026 với 39.5% người dùng digital áp dụng.",
  "Cuộc đua chuyển từ 'số lượng người dùng' sang 'giá trị trọn đời khách hàng' — embedded finance là chiến trường mới.",
];

export const conclusion = {
  title: "Kết luận & Triển vọng",
  paragraphs: [
    "Hệ sinh thái Fintech Việt Nam đã bước vào giai đoạn trưởng thành với 4 đối thủ chính phân hóa rõ ràng: VNPay dẫn đầu thanh toán tại quầy nhờ mạng lưới ngân hàng, MoMo xây dựng super-app tài chính toàn diện với 42 triệu người dùng, ZaloPay tận dụng hiệu ứng mạng xã hội, và ShopeePay bám chặt hệ sinh thái e-commerce.",
    "BNPL (Mua Trước Trả Sau) là phân khúc tăng trưởng nhanh nhất, đạt $10.2 tỷ vào Q1/2026. Các quy định mới từ Ngân hàng Nhà nước về sandbox fintech và open banking đã mở ra cơ hội cho các mô hình kinh doanh mới, đặc biệt trong lending và wealth management.",
    "Chiến lược then chốt cho MoMo: tiếp tục mở rộng hệ sinh thái tài chính (embedded finance), đẩy mạnh BNPL với merchant network, và tăng cường data-driven personalization để nâng cao giá trị trọn đời khách hàng (CLV) trong bối cảnh cạnh tranh ngày càng gay gắt.",
  ],
};
