import { render, screen } from "@testing-library/react";
import ChinaFintechPage from "@/app/insights/china-fintech/page";

// Mock recharts to avoid canvas/DOM issues in jsdom
jest.mock("recharts", () => {
  const React = require("react");
  const MockChart = ({ children, ...props }: any) =>
    React.createElement("div", { "data-testid": "mock-chart", ...props }, children);
  const MockComponent = (props: any) =>
    React.createElement("div", props);
  return {
    ResponsiveContainer: ({ children }: any) =>
      React.createElement("div", { "data-testid": "responsive-container" }, children),
    BarChart: MockChart,
    LineChart: MockChart,
    RadarChart: MockChart,
    Bar: MockComponent,
    Line: MockComponent,
    Radar: MockComponent,
    XAxis: MockComponent,
    YAxis: MockComponent,
    CartesianGrid: MockComponent,
    Tooltip: MockComponent,
    Legend: MockComponent,
    PolarGrid: MockComponent,
    PolarAngleAxis: MockComponent,
    PolarRadiusAxis: MockComponent,
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

describe("China Fintech Page", () => {
  it("renders the report title", () => {
    render(<ChinaFintechPage />);
    expect(
      screen.getByText("Thị trường Fintech & Ví điện tử Trung Quốc 2024")
    ).toBeInTheDocument();
  });

  it("renders the subtitle", () => {
    render(<ChinaFintechPage />);
    expect(
      screen.getByText("Phân tích chuyên sâu: Alipay vs WeChat Pay")
    ).toBeInTheDocument();
  });

  it("renders executive summary section", () => {
    render(<ChinaFintechPage />);
    expect(screen.getByText("Tóm tắt Điều hành")).toBeInTheDocument();
  });

  it("renders key findings", () => {
    render(<ChinaFintechPage />);
    expect(
      screen.getByText(/Alipay duy trì vị trí dẫn đầu/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/WeChat Pay tăng trưởng mạnh/)
    ).toBeInTheDocument();
  });

  it("renders all chart section headings", () => {
    render(<ChinaFintechPage />);
    expect(
      screen.getByText("Thị phần Thanh toán Di động")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Xu hướng Tăng trưởng Giao dịch")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Hành vi Người tiêu dùng")
    ).toBeInTheDocument();
  });

  it("renders conclusion section", () => {
    render(<ChinaFintechPage />);
    expect(
      screen.getByText("Kết luận & Triển vọng")
    ).toBeInTheDocument();
  });

  it("renders chart containers", () => {
    render(<ChinaFintechPage />);
    const containers = screen.getAllByTestId("responsive-container");
    expect(containers).toHaveLength(3);
  });

  it("renders MoMo Research author", () => {
    render(<ChinaFintechPage />);
    expect(screen.getByText("MoMo Research")).toBeInTheDocument();
  });
});
