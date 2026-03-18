const teamMembers = [
  {
    name: "Nguyễn Minh Anh",
    role: "Research Lead",
    initials: "MA",
  },
  {
    name: "Trần Đức Huy",
    role: "Senior Researcher",
    initials: "DH",
  },
  {
    name: "Lê Thị Hồng",
    role: "UX Researcher",
    initials: "TH",
  },
  {
    name: "Phạm Quốc Bảo",
    role: "Data Analyst",
    initials: "QB",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Đội Ngũ Của Chúng Tôi
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Đội ngũ chuyên gia giàu kinh nghiệm trong lĩnh vực nghiên cứu thị
            trường.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-momo-pink to-momo-pink-dark flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                {member.initials}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-momo-pink font-medium mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
