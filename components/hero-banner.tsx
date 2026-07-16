'use client';

import { ArrowRight, Sun } from 'lucide-react';

type HeroBannerProps = {
  onStart: () => void;
};

export function HeroBanner({ onStart }: HeroBannerProps) {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0F766E] via-[#0D9488] to-[#115E59] px-6 py-10 text-white shadow-xl md:px-10 md:py-14">
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#F59E0B]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
      <div className="relative mx-auto max-w-2xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur">
          <Sun className="h-3.5 w-3.5 text-[#FCD34D]" aria-hidden />
          SunSize
        </div>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          Scopri in 60 secondi quanto risparmi davvero con il fotovoltaico
        </h1>
        <p className="mt-4 text-base leading-relaxed text-white/90 md:text-lg">
          Carica la bolletta → tempo di rientro reale + detrazione 50%
        </p>
        <button
          type="button"
          onClick={onStart}
          className="mt-8 inline-flex min-h-[3.25rem] w-full items-center justify-center gap-2 rounded-2xl bg-[#F59E0B] px-8 py-3.5 text-base font-semibold text-slate-900 shadow-lg hover:bg-[#FBBF24] focus-visible:ring-2 focus-visible:ring-white sm:h-12 sm:rounded-full md:w-auto"
        >
          Calcola il mio rientro gratis
          <ArrowRight className="h-5 w-5" aria-hidden />
        </button>
      </div>
    </section>
  );
}
