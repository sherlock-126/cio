import type { Metadata } from "next";
import ProfileHeader from "@/components/insights/leader/ProfileHeader";
import ProfileQuote from "@/components/insights/leader/ProfileQuote";
import ProfileBio from "@/components/insights/leader/ProfileBio";
import ProfileMilestones from "@/components/insights/leader/ProfileMilestones";
import ProfileVision from "@/components/insights/leader/ProfileVision";
import ProfileConclusion from "@/components/insights/leader/ProfileConclusion";

export const metadata: Metadata = {
  title: "Đỗ Quang Thuận - Kiến trúc sư Tài chính số | MoMo Insights",
  description:
    "Profile lãnh đạo: Đỗ Quang Thuận, Phó Tổng Giám đốc Cấp cao Khối Dịch vụ Tài chính MoMo. Tầm nhìn bình dân hóa dịch vụ tài chính cho người Việt.",
  openGraph: {
    type: "profile",
    title: "Đỗ Quang Thuận - Kiến trúc sư Tài chính số",
    description:
      "Phó Tổng Giám đốc Cấp cao Khối Dịch vụ Tài chính MoMo - Người tiên phong bình dân hóa dịch vụ tài chính Việt Nam.",
  },
};

export default function DoQuangThuanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <ProfileHeader />
        <div className="space-y-12 md:space-y-20">
          <ProfileQuote />
          <ProfileBio />
          <ProfileMilestones />
          <ProfileVision />
          <ProfileConclusion />
        </div>
      </div>
    </div>
  );
}
