"use client";

import { useState } from "react";
import Image from "next/image";
import { profileMeta, featuredQuote } from "@/data/leaderProfile";

export default function ProfileHeader() {
  const [imgError, setImgError] = useState(false);

  return (
    <header className="py-12 md:py-16">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        {/* Photo / Initials Avatar */}
        <div className="flex-shrink-0">
          {!imgError ? (
            <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/leaders/do-quang-thuan-v2.jpg"
                alt={profileMeta.name}
                fill
                className="object-cover"
                onError={() => setImgError(true)}
                priority
              />
            </div>
          ) : (
            <div className="w-32 h-32 md:w-44 md:h-44 rounded-2xl bg-gradient-to-br from-momo-pink to-navy-800 flex items-center justify-center shadow-xl">
              <span className="text-white text-3xl md:text-4xl font-bold tracking-wide">
                {profileMeta.initials}
              </span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="text-center md:text-left flex-1">
          <h1 className="font-playfair text-3xl md:text-5xl font-bold text-navy-900 mb-4">
            {profileMeta.name}
          </h1>
          <p className="text-lg md:text-xl text-navy-700 mb-2">
            {profileMeta.title}
          </p>
          <p className="text-momo-pink font-semibold mb-4">
            {profileMeta.organization}
          </p>
          <div className="w-16 h-1 bg-momo-pink mx-auto md:mx-0 mb-4" />
          <p className="text-sm text-gray-500 mb-6">{profileMeta.date}</p>

          {/* Featured Quote */}
          <blockquote className="border-l-4 border-momo-pink pl-4 italic text-slate-600 text-sm md:text-base leading-relaxed max-w-xl">
            &ldquo;{featuredQuote.text}&rdquo;
          </blockquote>
        </div>
      </div>
    </header>
  );
}
