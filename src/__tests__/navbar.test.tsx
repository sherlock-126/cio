import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "@/components/Navbar";

describe("Navbar", () => {
  it("renders the brand name", () => {
    render(<Navbar />);
    expect(screen.getByText("MoMo Research")).toBeInTheDocument();
  });

  it("toggles mobile menu on hamburger click", () => {
    render(<Navbar />);
    const menuButton = screen.getByLabelText("Mở menu");
    fireEvent.click(menuButton);

    // Mobile menu should be visible with nav links
    const aboutLinks = screen.getAllByText("Giới thiệu");
    expect(aboutLinks.length).toBeGreaterThanOrEqual(2); // desktop + mobile

    // Close menu
    const closeButton = screen.getByLabelText("Đóng menu");
    fireEvent.click(closeButton);
  });

  it("closes mobile menu when a link is clicked", () => {
    render(<Navbar />);
    const menuButton = screen.getByLabelText("Mở menu");
    fireEvent.click(menuButton);

    // Click a mobile link
    const mobileLinks = screen.getAllByText("Dịch vụ");
    const mobileLink = mobileLinks[mobileLinks.length - 1];
    fireEvent.click(mobileLink);

    // Menu should close - hamburger button should be back
    expect(screen.getByLabelText("Mở menu")).toBeInTheDocument();
  });
});
