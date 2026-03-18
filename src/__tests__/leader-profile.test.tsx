import { render, screen } from "@testing-library/react";
import DoQuangThuanPage from "@/app/insights/leader/do-quang-thuan/page";

// Mock framer-motion
jest.mock("framer-motion", () => {
  const React = require("react");
  return {
    motion: {
      section: React.forwardRef(({ children, ...props }: any, ref: any) => {
        const { initial, whileInView, viewport, transition, ...rest } = props;
        return React.createElement("section", { ref, ...rest }, children);
      }),
    },
  };
});

// Mock next/font/google
jest.mock("next/font/google", () => ({
  Playfair_Display: () => ({ variable: "font-playfair" }),
  Inter: () => ({ className: "inter" }),
}));

describe("Leader Profile - Đỗ Quang Thuận", () => {
  it("renders the leader name", () => {
    render(<DoQuangThuanPage />);
    expect(screen.getByText("Đỗ Quang Thuận")).toBeInTheDocument();
  });

  it("renders the title and organization", () => {
    render(<DoQuangThuanPage />);
    expect(
      screen.getByText("Phó Tổng Giám đốc Cấp cao - Khối Dịch vụ Tài chính")
    ).toBeInTheDocument();
    expect(screen.getByText("MoMo")).toBeInTheDocument();
  });

  it("renders the initials avatar", () => {
    render(<DoQuangThuanPage />);
    expect(screen.getByText("ĐQT")).toBeInTheDocument();
  });

  it("renders the featured quote", () => {
    render(<DoQuangThuanPage />);
    expect(
      screen.getByText(/Tài chính không nên là đặc quyền của số ít/)
    ).toBeInTheDocument();
  });

  it("renders the bio introduction section", () => {
    render(<DoQuangThuanPage />);
    expect(screen.getByText("Giới thiệu")).toBeInTheDocument();
    expect(
      screen.getByText(/siêu ứng dụng tài chính hàng đầu Việt Nam/)
    ).toBeInTheDocument();
  });

  it("renders all achievement stat cards", () => {
    render(<DoQuangThuanPage />);
    expect(screen.getByText("10M+")).toBeInTheDocument();
    expect(screen.getByText("50+")).toBeInTheDocument();
    expect(screen.getByText("30K tỷ+")).toBeInTheDocument();
    expect(screen.getByText("150%")).toBeInTheDocument();
  });

  it("renders the milestones timeline", () => {
    render(<DoQuangThuanPage />);
    expect(screen.getByText("Cột mốc Sự nghiệp")).toBeInTheDocument();
    expect(screen.getByText("Gia nhập MoMo")).toBeInTheDocument();
    expect(screen.getByText("Ra mắt Tín dụng Tiêu dùng")).toBeInTheDocument();
    expect(screen.getByText("Hệ sinh thái Bảo hiểm số")).toBeInTheDocument();
    expect(screen.getByText("Cột mốc 10 triệu người dùng")).toBeInTheDocument();
  });

  it("renders vision sections", () => {
    render(<DoQuangThuanPage />);
    expect(screen.getByText("Tầm nhìn Chiến lược")).toBeInTheDocument();
    expect(
      screen.getByText("Bình dân hóa Dịch vụ Tài chính")
    ).toBeInTheDocument();
    expect(
      screen.getByText("AI và Dữ liệu trong Tài chính Cá nhân hóa")
    ).toBeInTheDocument();
    expect(screen.getByText("Tương lai Fintech Việt Nam")).toBeInTheDocument();
  });

  it("renders the conclusion section", () => {
    render(<DoQuangThuanPage />);
    expect(
      screen.getByText("Kiến trúc sư của Tài chính số Việt Nam")
    ).toBeInTheDocument();
    expect(
      screen.getByText(/fintech không chỉ là về công nghệ/)
    ).toBeInTheDocument();
  });

  it("renders the publication date", () => {
    render(<DoQuangThuanPage />);
    expect(screen.getByText("Tháng 3, 2024")).toBeInTheDocument();
  });
});
