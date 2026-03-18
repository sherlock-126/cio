"use client";

import { useState, useEffect } from "react";

type Breakpoint = "mobile" | "tablet" | "desktop";

interface ChartDimensions {
  breakpoint: Breakpoint;
  isMobile: boolean;
  isTablet: boolean;
  chartHeight: number;
  margin: { top: number; right: number; bottom: number; left: number };
  fontSize: number;
  dotRadius: number;
  activeDotRadius: number;
  yAxisWidth: number;
  glassTooltipStyle: React.CSSProperties;
}

function getBreakpoint(width: number): Breakpoint {
  if (width < 480) return "mobile";
  if (width < 768) return "tablet";
  return "desktop";
}

function getDimensions(bp: Breakpoint): ChartDimensions {
  const isMobile = bp === "mobile";
  const isTablet = bp === "tablet";

  const chartHeight = isMobile ? 280 : isTablet ? 350 : 400;
  const fontSize = isMobile ? 10 : isTablet ? 12 : 13;
  const dotRadius = isMobile ? 3 : 5;
  const activeDotRadius = isMobile ? 6 : 10;
  const yAxisWidth = isMobile ? 30 : 60;

  const margin = isMobile
    ? { top: 10, right: 10, bottom: 20, left: 5 }
    : isTablet
      ? { top: 15, right: 20, bottom: 10, left: 10 }
      : { top: 20, right: 30, bottom: 5, left: 20 };

  const glassTooltipStyle: React.CSSProperties = {
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.2)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
    backgroundColor: "rgba(255,255,255,0.85)",
    backdropFilter: "blur(12px)",
    padding: isMobile ? "8px 10px" : "12px 16px",
    fontSize: isMobile ? "12px" : "14px",
    maxWidth: isMobile ? "200px" : "none",
  };

  return {
    breakpoint: bp,
    isMobile,
    isTablet,
    chartHeight,
    margin,
    fontSize,
    dotRadius,
    activeDotRadius,
    yAxisWidth,
    glassTooltipStyle,
  };
}

export default function useChartDimensions(): ChartDimensions {
  const [dimensions, setDimensions] = useState<ChartDimensions>(
    getDimensions("desktop")
  );

  useEffect(() => {
    function handleResize() {
      setDimensions(getDimensions(getBreakpoint(window.innerWidth)));
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return dimensions;
}
