import { profileMeta } from "@/data/leaderProfile";

export default function ProfileHeader() {
  return (
    <header className="text-center py-12 md:py-16">
      <div className="mx-auto mb-8 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-momo-pink to-navy-800 flex items-center justify-center shadow-lg">
        <span className="text-white text-2xl md:text-3xl font-bold tracking-wide">
          {profileMeta.initials}
        </span>
      </div>
      <h1 className="font-playfair text-3xl md:text-5xl font-bold text-navy-900 mb-4">
        {profileMeta.name}
      </h1>
      <p className="text-lg md:text-xl text-navy-700 mb-2">
        {profileMeta.title}
      </p>
      <p className="text-momo-pink font-semibold">{profileMeta.organization}</p>
      <div className="w-16 h-1 bg-momo-pink mx-auto mt-6" />
      <p className="text-sm text-gray-500 mt-4">{profileMeta.date}</p>
    </header>
  );
}
