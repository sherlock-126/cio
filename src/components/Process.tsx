const steps = [
  {
    step: "01",
    title: "Xác định mục tiêu",
    description: "Thảo luận và xác định rõ câu hỏi nghiên cứu, mục tiêu, và phạm vi dự án.",
  },
  {
    step: "02",
    title: "Thiết kế nghiên cứu",
    description: "Lựa chọn phương pháp phù hợp, xây dựng bảng hỏi và kế hoạch thu thập dữ liệu.",
  },
  {
    step: "03",
    title: "Thu thập dữ liệu",
    description: "Triển khai nghiên cứu thực địa, khảo sát, phỏng vấn và thu thập dữ liệu.",
  },
  {
    step: "04",
    title: "Phân tích & Báo cáo",
    description: "Phân tích dữ liệu, rút ra insight và trình bày báo cáo với khuyến nghị hành động.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Quy Trình Làm Việc
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Quy trình nghiên cứu bài bản, minh bạch từ đầu đến cuối.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={item.step} className="relative">
              <div className="text-5xl font-bold text-momo-pink/20 mb-2">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 w-8 h-0.5 bg-momo-pink/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
