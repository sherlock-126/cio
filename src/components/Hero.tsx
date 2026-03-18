import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-momo-pink to-momo-pink-dark text-white pt-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Khám Phá Thị Trường,
          <br />
          Thấu Hiểu Khách Hàng
        </h1>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Đội ngũ Market Research của MoMo cung cấp các nghiên cứu chuyên sâu,
          giúp doanh nghiệp đưa ra quyết định dựa trên dữ liệu và insight thực
          tế.
        </p>
        <a
          href="#services"
          className="inline-flex items-center gap-2 bg-white text-momo-pink font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
        >
          Khám phá dịch vụ
          <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
}
