import { Users, BarChart3, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, value: "50+", label: "Dự án nghiên cứu mỗi năm" },
  { icon: BarChart3, value: "10M+", label: "Người dùng được phân tích" },
  { icon: TrendingUp, value: "5+", label: "Năm kinh nghiệm" },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Về Chúng Tôi
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            MoMo Market Research là đội ngũ nghiên cứu thị trường chuyên nghiệp
            thuộc MoMo. Chúng tôi kết hợp phương pháp nghiên cứu hiện đại với
            hiểu biết sâu sắc về thị trường Việt Nam để mang lại các insight có
            giá trị cho doanh nghiệp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-momo-pink/10 mb-4">
                <stat.icon className="text-momo-pink" size={28} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
