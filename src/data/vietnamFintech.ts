export const reportMeta = {
  title: "Hệ sinh thái Fintech Việt Nam 2024",
  subtitle: "Phân tích toàn diện: MoMo, ZaloPay, VNPay & ShopeePay",
  date: "Tháng 3, 2024",
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
    userCount: "31 triệu",
    gmv: "$14.5 tỷ",
    qrCoverage: "350,000+ điểm",
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
    userCount: "20 triệu",
    gmv: "$8.2 tỷ",
    qrCoverage: "180,000+ điểm",
    strengths: [
      "Tích hợp Zalo — 75 triệu người dùng nhắn tin",
      "Chuyển tiền xã hội (social payment) mạnh",
      "Thanh toán QR tại chuỗi F&B, retail",
      "Lì xì điện tử — viral marketing hiệu quả",
    ],
  },
  {
    name: "VNPay",
    color: "#1A3058",
    userCount: "40 triệu+",
    gmv: "$18.7 tỷ",
    qrCoverage: "500,000+ điểm",
    strengths: [
      "Mạng lưới QR code lớn nhất Việt Nam",
      "Đối tác với 40+ ngân hàng nội địa",
      "Payment gateway cho e-commerce",
      "Dẫn đầu thanh toán tại quầy (POS)",
    ],
  },
  {
    name: "ShopeePay",
    color: "#EE4D2D",
    userCount: "18 triệu",
    gmv: "$6.8 tỷ",
    qrCoverage: "120,000+ điểm",
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
  { metric: "Người dùng (%)", momo: 28, zalopay: 18, vnpay: 36, shopeepay: 16 },
  { metric: "GMV (%)", momo: 30, zalopay: 17, vnpay: 39, shopeepay: 14 },
  { metric: "QR Coverage (%)", momo: 27, zalopay: 14, vnpay: 40, shopeepay: 10 },
  { metric: "Merchant (%)", momo: 25, zalopay: 15, vnpay: 42, shopeepay: 12 },
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
];

export const keyFindings = [
  "VNPay dẫn đầu về độ phủ QR code với hơn 500,000 điểm chấp nhận thanh toán, chiếm ~40% thị phần merchant.",
  "MoMo là super-app tài chính toàn diện nhất với 31 triệu người dùng, tích hợp đầu tư, bảo hiểm và tín dụng tiêu dùng.",
  "Thị trường BNPL Việt Nam tăng trưởng 55% CAGR, đạt $6.5 tỷ năm 2024 với 28.7% người dùng digital đã sử dụng.",
  "Cuộc đua chuyển từ 'số lượng người dùng' sang 'giá trị trọn đời khách hàng' — embedded finance là chiến trường mới.",
];

export const conclusion = {
  title: "Kết luận & Triển vọng",
  paragraphs: [
    "Hệ sinh thái Fintech Việt Nam đang bước vào giai đoạn trưởng thành với 4 đối thủ chính phân hóa rõ ràng: VNPay dẫn đầu thanh toán tại quầy nhờ mạng lưới ngân hàng, MoMo xây dựng super-app tài chính toàn diện, ZaloPay tận dụng hiệu ứng mạng xã hội, và ShopeePay bám chặt hệ sinh thái e-commerce.",
    "BNPL (Mua Trước Trả Sau) là phân khúc tăng trưởng nhanh nhất, dự kiến đạt $10 tỷ vào 2026. Các quy định mới từ Ngân hàng Nhà nước về sandbox fintech và open banking sẽ mở ra cơ hội cho các mô hình kinh doanh mới, đặc biệt trong lending và wealth management.",
    "Chiến lược then chốt cho MoMo: tiếp tục mở rộng hệ sinh thái tài chính (embedded finance), đẩy mạnh BNPL với merchant network, và tăng cường data-driven personalization để nâng cao giá trị trọn đời khách hàng (CLV) trong bối cảnh cạnh tranh ngày càng gay gắt.",
  ],
};
