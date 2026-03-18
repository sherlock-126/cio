import { MessageSquare, BarChart, Lightbulb, Search } from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "Nghiên cứu Định tính",
    description:
      "Phỏng vấn sâu, focus group, và ethnography giúp khám phá insight ẩn sau hành vi người dùng.",
  },
  {
    icon: BarChart,
    title: "Nghiên cứu Định lượng",
    description:
      "Khảo sát quy mô lớn, phân tích thống kê, và đo lường hiệu quả sản phẩm bằng dữ liệu.",
  },
  {
    icon: Search,
    title: "UX Research",
    description:
      "Usability testing, A/B testing, và đánh giá trải nghiệm người dùng để tối ưu sản phẩm.",
  },
  {
    icon: Lightbulb,
    title: "Trend Analysis",
    description:
      "Phân tích xu hướng thị trường, hành vi tiêu dùng, và dự báo cơ hội kinh doanh mới.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Dịch Vụ Nghiên Cứu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Chúng tôi cung cấp đa dạng phương pháp nghiên cứu để đáp ứng mọi
            nhu cầu của doanh nghiệp.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-momo-pink/10 mb-4">
                <service.icon className="text-momo-pink" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
