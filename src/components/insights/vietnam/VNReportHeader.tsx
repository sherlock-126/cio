import { reportMeta } from "@/data/vietnamFintech";

export default function VNReportHeader() {
  return (
    <header className="text-center">
      <p className="text-sm uppercase tracking-[0.2em] text-momo-pink font-semibold mb-4">
        {reportMeta.author}
      </p>
      <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight mb-6">
        {reportMeta.title}
      </h1>
      <p className="text-xl md:text-2xl text-slate-500 font-light mb-4">
        {reportMeta.subtitle}
      </p>
      <div className="w-16 h-1 bg-momo-pink mx-auto mb-4 rounded-full" />
      <p className="text-sm text-slate-400">{reportMeta.date}</p>
    </header>
  );
}
