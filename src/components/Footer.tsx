import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-momo-pink mb-4">
              MoMo Research
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Khám phá thị trường, thấu hiểu khách hàng, dẫn đầu xu hướng cùng
              MoMo Market Research.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liên kết</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-momo-pink transition-colors">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-momo-pink transition-colors">
                  Dịch vụ
                </a>
              </li>
              <li>
                <a href="#process" className="text-gray-400 hover:text-momo-pink transition-colors">
                  Quy trình
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-momo-pink transition-colors">
                  Đội ngũ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liên hệ</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={18} className="text-momo-pink flex-shrink-0" />
                research@momo.vn
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={18} className="text-momo-pink flex-shrink-0" />
                (028) 9999 8888
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={18} className="text-momo-pink flex-shrink-0 mt-0.5" />
                Tầng 10, Toà nhà MoMo, Quận 1, TP. Hồ Chí Minh
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} MoMo Market Research. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
