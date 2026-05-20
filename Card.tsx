import type { ReactNode } from 'react';

export function Card({ title, kicker, children }: { title: string; kicker?: string; children: ReactNode }) {
  return (
    <section className="border border-white/10 bg-white/[0.035] p-5 shadow-line backdrop-blur-md">
      {kicker && <p className="mb-2 text-[10px] uppercase tracking-[0.28em] text-white/40">{kicker}</p>}
      <h3 className="mb-4 text-sm font-semibold tracking-wide text-white">{title}</h3>
      {children}
    </section>
  );
}
