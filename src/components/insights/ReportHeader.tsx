import { reportMeta } from "@/data/chinaFintech";

export default function ReportHeader() {
  return (
    <header className="mb-16 text-center">
      <p className="text-sm uppercase tracking-widest text-momo-pink font-medium mb-4">
        {reportMeta.author}
      </p>
      <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
        {reportMeta.title}
      </h1>
      <p className="text-xl md:text-2xl text-gray-500 font-light mb-4">
        {reportMeta.subtitle}
      </p>
      <p className="text-sm text-gray-400">{reportMeta.date}</p>
    </header>
  );
}
