import { renderHook, act } from "@testing-library/react";
import useChartDimensions from "@/hooks/useChartDimensions";

describe("useChartDimensions", () => {
  const originalInnerWidth = window.innerWidth;

  function setWidth(w: number) {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: w,
    });
    window.dispatchEvent(new Event("resize"));
  }

  afterEach(() => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: originalInnerWidth,
    });
  });

  it("returns desktop dimensions by default after mount at 1024px", () => {
    setWidth(1024);
    const { result } = renderHook(() => useChartDimensions());
    expect(result.current.breakpoint).toBe("desktop");
    expect(result.current.isMobile).toBe(false);
    expect(result.current.chartHeight).toBe(400);
    expect(result.current.fontSize).toBe(13);
    expect(result.current.dotRadius).toBe(5);
  });

  it("returns mobile dimensions at 375px", () => {
    setWidth(375);
    const { result } = renderHook(() => useChartDimensions());
    expect(result.current.breakpoint).toBe("mobile");
    expect(result.current.isMobile).toBe(true);
    expect(result.current.chartHeight).toBe(280);
    expect(result.current.fontSize).toBe(10);
    expect(result.current.dotRadius).toBe(3);
    expect(result.current.yAxisWidth).toBe(30);
  });

  it("returns tablet dimensions at 600px", () => {
    setWidth(600);
    const { result } = renderHook(() => useChartDimensions());
    expect(result.current.breakpoint).toBe("tablet");
    expect(result.current.isTablet).toBe(true);
    expect(result.current.chartHeight).toBe(350);
  });

  it("updates dimensions on window resize", () => {
    setWidth(1024);
    const { result } = renderHook(() => useChartDimensions());
    expect(result.current.breakpoint).toBe("desktop");

    act(() => setWidth(375));
    expect(result.current.breakpoint).toBe("mobile");
    expect(result.current.isMobile).toBe(true);
  });

  it("provides glassmorphism tooltip style", () => {
    setWidth(1024);
    const { result } = renderHook(() => useChartDimensions());
    expect(result.current.glassTooltipStyle).toBeDefined();
    expect(result.current.glassTooltipStyle.backdropFilter).toBe("blur(12px)");
    expect(result.current.glassTooltipStyle.borderRadius).toBe("16px");
  });

  it("provides smaller tooltip on mobile", () => {
    setWidth(375);
    const { result } = renderHook(() => useChartDimensions());
    expect(result.current.glassTooltipStyle.fontSize).toBe("12px");
    expect(result.current.glassTooltipStyle.maxWidth).toBe("200px");
  });
});
