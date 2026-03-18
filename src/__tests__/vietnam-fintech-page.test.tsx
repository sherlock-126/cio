import { render, screen } from "@testing-library/react";
import VietnamFintechPage from "@/app/insights/vietnam-fintech/page";

// Mock recharts to avoid canvas/DOM issues in jsdom
jest.mock("recharts", () => {
  const React = require("react");
  const MockChart = ({ children, ...props }: any) =>
    React.createElement(
      "div",
      { "data-testid": "mock-chart", ...props },
      children
    );
  const MockComponent = (props: any) => React.createElement("div", props);
  return {
    ResponsiveContainer: ({ children }: any) =>
      React.createElement(
        "div",
        { "data-testid": "responsive-container" },
        children
      ),
    BarChart: MockChart,
    LineChart: MockChart,
    Bar: MockComponent,
    Line: MockComponent,
    XAxis: MockComponent,
    YAxis: MockComponent,
    CartesianGrid: MockComponent,
    Tooltip: MockComponent,
    Legend: MockComponent,
  };
});

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

describe("Vietnam Fintech Page", () => {
  it("renders the report title", () => {
    render(<VietnamFintechPage />);
    expect(
      screen.getByText("Hệ sinh thái Fintech Việt Nam 2024")
    ).toBeInTheDocument();
  });

  it("renders the subtitle", () => {
    render(<VietnamFintechPage />);
    expect(
      screen.getByText("Phân tích toàn diện: MoMo, ZaloPay, VNPay & ShopeePay")
    ).toBeInTheDocument();
  });

  it("renders MoMo Research author", () => {
    render(<VietnamFintechPage />);
    expect(screen.getAllByText("MoMo Research").length).toBeGreaterThan(0);
  });

  it("renders executive summary section", () => {
    render(<VietnamFintechPage />);
    expect(screen.getByText("Tóm tắt Điều hành")).toBeInTheDocument();
  });

  it("renders key findings", () => {
    render(<VietnamFintechPage />);
    expect(
      screen.getByText(/VNPay dẫn đầu về độ phủ QR code/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/MoMo là super-app tài chính toàn diện nhất/)
    ).toBeInTheDocument();
  });

  it("renders competitor comparison section with all 4 competitors", () => {
    render(<VietnamFintechPage />);
    expect(
      screen.getByText("So sánh Đối thủ Cạnh tranh")
    ).toBeInTheDocument();
    expect(screen.getByText("ZaloPay")).toBeInTheDocument();
    expect(screen.getByText("VNPay")).toBeInTheDocument();
    expect(screen.getByText("ShopeePay")).toBeInTheDocument();
  });

  it("renders market share chart heading", () => {
    render(<VietnamFintechPage />);
    expect(
      screen.getByText("Thị phần Thanh toán Di động Việt Nam")
    ).toBeInTheDocument();
  });

  it("renders BNPL growth chart heading", () => {
    render(<VietnamFintechPage />);
    expect(
      screen.getByText(/Tăng trưởng BNPL/)
    ).toBeInTheDocument();
  });

  it("renders conclusion section", () => {
    render(<VietnamFintechPage />);
    expect(screen.getByText("Kết luận & Triển vọng")).toBeInTheDocument();
  });

  it("renders chart containers", () => {
    render(<VietnamFintechPage />);
    const containers = screen.getAllByTestId("responsive-container");
    expect(containers).toHaveLength(2);
  });
});
