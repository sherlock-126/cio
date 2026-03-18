import { render, screen } from "@testing-library/react";
import InsightsHubPage from "@/app/insights/page";

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

describe("Insights Hub Page", () => {
  it("renders the hub heading", () => {
    render(<InsightsHubPage />);
    expect(screen.getByText("Market Insights")).toBeInTheDocument();
  });

  it("renders MoMo Research label", () => {
    render(<InsightsHubPage />);
    expect(screen.getByText("MoMo Research")).toBeInTheDocument();
  });

  it("renders 3 report cards with correct titles", () => {
    render(<InsightsHubPage />);
    expect(
      screen.getByText("Fintech Trung Quốc: Alipay vs WeChat Pay")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Hệ sinh thái Fintech Việt Nam 2024")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Ông Đỗ Quang Thuận — Hồ sơ Lãnh đạo")
    ).toBeInTheDocument();
  });

  it("renders correct hrefs for each report card", () => {
    render(<InsightsHubPage />);
    const links = screen.getAllByRole("link");
    const hrefs = links.map((link) => link.getAttribute("href"));
    expect(hrefs).toContain("/insights/china-fintech");
    expect(hrefs).toContain("/insights/vietnam-fintech");
    expect(hrefs).toContain("/insights/leader/do-quang-thuan");
  });

  it("renders category tags", () => {
    render(<InsightsHubPage />);
    const marketTags = screen.getAllByText("Báo cáo Thị trường");
    expect(marketTags).toHaveLength(2);
    expect(screen.getByText("Hồ sơ Lãnh đạo")).toBeInTheDocument();
  });

  it("renders CTA text on all cards", () => {
    render(<InsightsHubPage />);
    const ctas = screen.getAllByText("Xem báo cáo");
    expect(ctas).toHaveLength(3);
  });
});
