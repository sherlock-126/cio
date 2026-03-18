import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

// Mock next/font/google
jest.mock("next/font/google", () => ({
  Inter: () => ({ className: "inter" }),
}));

describe("Home Page", () => {
  it("renders the hero headline", () => {
    render(<Home />);
    expect(screen.getByText(/Khám Phá Thị Trường/)).toBeInTheDocument();
    expect(screen.getByText(/Thấu Hiểu Khách Hàng/)).toBeInTheDocument();
  });

  it("renders the navbar with brand name", () => {
    render(<Home />);
    const brandLinks = screen.getAllByText("MoMo Research");
    expect(brandLinks.length).toBeGreaterThanOrEqual(1);
  });

  it("renders all navigation links", () => {
    render(<Home />);
    const aboutLinks = screen.getAllByText("Giới thiệu");
    expect(aboutLinks.length).toBeGreaterThanOrEqual(1);
    const serviceLinks = screen.getAllByText("Dịch vụ");
    expect(serviceLinks.length).toBeGreaterThanOrEqual(1);
    const processLinks = screen.getAllByText("Quy trình");
    expect(processLinks.length).toBeGreaterThanOrEqual(1);
    const teamLinks = screen.getAllByText("Đội ngũ");
    expect(teamLinks.length).toBeGreaterThanOrEqual(1);
  });

  it("renders all four service cards", () => {
    render(<Home />);
    expect(screen.getByText("Nghiên cứu Định tính")).toBeInTheDocument();
    expect(screen.getByText("Nghiên cứu Định lượng")).toBeInTheDocument();
    expect(screen.getByText("UX Research")).toBeInTheDocument();
    expect(screen.getByText("Trend Analysis")).toBeInTheDocument();
  });

  it("renders the about section with stats", () => {
    render(<Home />);
    expect(screen.getByText("Về Chúng Tôi")).toBeInTheDocument();
    expect(screen.getByText("50+")).toBeInTheDocument();
    expect(screen.getByText("10M+")).toBeInTheDocument();
  });

  it("renders process steps", () => {
    render(<Home />);
    expect(screen.getByText("Xác định mục tiêu")).toBeInTheDocument();
    expect(screen.getByText("Thiết kế nghiên cứu")).toBeInTheDocument();
    expect(screen.getByText("Thu thập dữ liệu")).toBeInTheDocument();
    expect(screen.getByText("Phân tích & Báo cáo")).toBeInTheDocument();
  });

  it("renders team members", () => {
    render(<Home />);
    expect(screen.getByText("Nguyễn Minh Anh")).toBeInTheDocument();
    expect(screen.getByText("Trần Đức Huy")).toBeInTheDocument();
    expect(screen.getByText("Lê Thị Hồng")).toBeInTheDocument();
    expect(screen.getByText("Phạm Quốc Bảo")).toBeInTheDocument();
  });

  it("renders footer with contact info", () => {
    render(<Home />);
    expect(screen.getByText("research@momo.vn")).toBeInTheDocument();
    expect(screen.getByText("(028) 9999 8888")).toBeInTheDocument();
  });
});
