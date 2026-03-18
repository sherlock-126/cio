export interface ProfileMeta {
  name: string;
  title: string;
  organization: string;
  date: string;
  initials: string;
}

export interface FeaturedQuote {
  text: string;
  attribution: string;
}

export interface BioParagraph {
  text: string;
}

export interface Achievement {
  label: string;
  value: string;
  description: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface VisionSection {
  title: string;
  paragraphs: string[];
}

export interface Conclusion {
  title: string;
  paragraphs: string[];
}

export const profileMeta: ProfileMeta = {
  name: "Đỗ Quang Thuận",
  title: "Phó Tổng Giám đốc Cấp cao - Khối Dịch vụ Tài chính",
  organization: "MoMo",
  date: "Tháng 3, 2024",
  initials: "ĐQT",
};

export const featuredQuote: FeaturedQuote = {
  text: "Tài chính không nên là đặc quyền của số ít. Công nghệ cho phép chúng ta mang dịch vụ tài chính đến mọi người Việt Nam, bất kể họ ở đâu hay thu nhập bao nhiêu.",
  attribution: "Đỗ Quang Thuận, Phó TGĐ Cấp cao MoMo",
};

export const bioIntro: BioParagraph[] = [
  {
    text: "Anh Đỗ Quang Thuận là Phó Tổng Giám đốc Cấp cao phụ trách Khối Dịch vụ Tài chính tại MoMo - siêu ứng dụng tài chính hàng đầu Việt Nam với hơn 31 triệu người dùng. Với hơn 15 năm kinh nghiệm trong lĩnh vực tài chính số và công nghệ, anh là một trong những kiến trúc sư chủ chốt đằng sau chiến lược 'bình dân hóa' dịch vụ tài chính của MoMo.",
  },
  {
    text: "Dưới sự dẫn dắt của anh Thuận, Khối Dịch vụ Tài chính MoMo đã phát triển từ một nền tảng thanh toán di động đơn thuần thành một hệ sinh thái tài chính toàn diện, bao gồm tín dụng tiêu dùng, bảo hiểm số, đầu tư và tiết kiệm - phục vụ đặc biệt cho phân khúc khách hàng chưa được ngân hàng phục vụ đầy đủ.",
  },
];

export const achievements: Achievement[] = [
  {
    label: "Người dùng Tài chính",
    value: "10M+",
    description: "Người dùng sử dụng dịch vụ tài chính trên MoMo",
  },
  {
    label: "Đối tác Tài chính",
    value: "50+",
    description: "Ngân hàng và tổ chức tài chính hợp tác",
  },
  {
    label: "Giải ngân Tín dụng",
    value: "30K tỷ+",
    description: "Tổng giá trị giải ngân tín dụng tiêu dùng",
  },
  {
    label: "Tăng trưởng YoY",
    value: "150%",
    description: "Tăng trưởng doanh thu dịch vụ tài chính 2023",
  },
];

export const milestones: Milestone[] = [
  {
    year: "2016",
    title: "Gia nhập MoMo",
    description:
      "Tham gia MoMo với vai trò lãnh đạo phát triển mảng dịch vụ tài chính, đặt nền móng cho chiến lược tài chính số dài hạn.",
  },
  {
    year: "2018",
    title: "Ra mắt Tín dụng Tiêu dùng",
    description:
      'Triển khai sản phẩm tín dụng tiêu dùng đầu tiên trên MoMo, áp dụng mô hình credit scoring dựa trên dữ liệu hành vi - mở ra kỷ nguyên "vay không cần tài sản đảm bảo" cho hàng triệu người.',
  },
  {
    year: "2020",
    title: "Hệ sinh thái Bảo hiểm số",
    description:
      "Xây dựng nền tảng phân phối bảo hiểm số đầu tiên tại Việt Nam trên ứng dụng di động, hợp tác với các công ty bảo hiểm hàng đầu để cung cấp sản phẩm micro-insurance.",
  },
  {
    year: "2021",
    title: "Nền tảng Đầu tư & Tiết kiệm",
    description:
      "Ra mắt các sản phẩm đầu tư và tiết kiệm số, cho phép người dùng bắt đầu đầu tư chỉ từ 10.000 VNĐ - phá vỡ rào cản gia nhập thị trường tài chính.",
  },
  {
    year: "2022",
    title: "Phó TGĐ Cấp cao",
    description:
      "Được bổ nhiệm Phó Tổng Giám đốc Cấp cao phụ trách toàn bộ Khối Dịch vụ Tài chính, phản ánh sự tin tưởng vào tầm nhìn và năng lực lãnh đạo.",
  },
  {
    year: "2023",
    title: "Cột mốc 10 triệu người dùng",
    description:
      "Khối Dịch vụ Tài chính đạt mốc 10 triệu người dùng hoạt động, doanh thu tăng trưởng 150% YoY, khẳng định vị thế dẫn đầu fintech tại Việt Nam.",
  },
];

export const visionSections: VisionSection[] = [
  {
    title: "Bình dân hóa Dịch vụ Tài chính",
    paragraphs: [
      "Tầm nhìn cốt lõi của anh Thuận xoay quanh việc xóa bỏ khoảng cách tài chính cho hơn 60% người Việt Nam chưa được phục vụ đầy đủ bởi hệ thống ngân hàng truyền thống. Thay vì yêu cầu người dùng đến ngân hàng, anh tin rằng dịch vụ tài chính cần đến với người dùng thông qua chiếc điện thoại di động.",
      "Mô hình của anh dựa trên ba trụ cột: Tiếp cận (Accessibility) - mọi dịch vụ tài chính đều có thể sử dụng trên điện thoại di động; Chi phí thấp (Affordability) - loại bỏ chi phí trung gian nhờ công nghệ; và Đơn giản (Simplicity) - trải nghiệm người dùng trực quan, không yêu cầu kiến thức tài chính chuyên sâu.",
    ],
  },
  {
    title: "AI và Dữ liệu trong Tài chính Cá nhân hóa",
    paragraphs: [
      "Anh Thuận là người tiên phong ứng dụng AI và phân tích dữ liệu hành vi để cá nhân hóa dịch vụ tài chính. Hệ thống credit scoring của MoMo sử dụng hơn 1.000 biến hành vi để đánh giá khả năng tín dụng - cho phép phê duyệt khoản vay trong vòng 5 phút mà không cần hồ sơ giấy tờ phức tạp.",
      "Chiến lược dữ liệu này không chỉ giúp MoMo quản lý rủi ro hiệu quả với tỷ lệ nợ xấu dưới 3%, mà còn mở ra cơ hội tài chính cho nhóm khách hàng mà ngân hàng truyền thống từ chối phục vụ.",
    ],
  },
  {
    title: "Tương lai Fintech Việt Nam",
    paragraphs: [
      "Nhìn về phía trước, anh Thuận đặt mục tiêu biến MoMo thành nền tảng tài chính toàn diện (comprehensive financial platform) phục vụ 50 triệu người Việt Nam vào năm 2026. Chiến lược bao gồm mở rộng sang các sản phẩm quản lý tài sản, bảo hiểm nhân thọ số, và các giải pháp tài chính cho doanh nghiệp vừa và nhỏ (SME).",
      "Anh tin rằng Việt Nam đang ở điểm chuyển giao quan trọng, nơi sự kết hợp giữa dân số trẻ, tỷ lệ sử dụng smartphone cao, và chính sách hỗ trợ từ Chính phủ sẽ tạo ra 'khoảnh khắc vàng' cho fintech - và MoMo sẵn sàng dẫn dắt cuộc cách mạng tài chính này.",
    ],
  },
];

export const conclusion: Conclusion = {
  title: "Kiến trúc sư của Tài chính số Việt Nam",
  paragraphs: [
    "Anh Đỗ Quang Thuận đại diện cho thế hệ lãnh đạo mới của ngành tài chính Việt Nam - những người không chỉ hiểu công nghệ mà còn thấu hiểu nhu cầu thực sự của hàng triệu người dân chưa được phục vụ. Hành trình của anh tại MoMo minh chứng rằng fintech không chỉ là về công nghệ, mà là về tác động xã hội.",
    "Với tầm nhìn rõ ràng, chiến lược thực thi bài bản, và cam kết không ngừng với sứ mệnh 'bình dân hóa' tài chính, anh Thuận tiếp tục là một trong những nhân vật có ảnh hưởng nhất trong hệ sinh thái fintech Việt Nam - người kiến trúc sư đang định hình tương lai tài chính số cho hơn 100 triệu người Việt.",
  ],
};
