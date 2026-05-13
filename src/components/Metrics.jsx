import React from 'react';

export default function Metrics() {
  return (
    <section className="relative overflow-hidden border-y border-amber-300/10 bg-black px-5 py-8 sm:px-8 lg:px-12">
      <div className="metric-chain-line" aria-hidden="true">
        <span></span><span></span><span></span>
      </div>
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
        <div className="metric-card data-module rounded-[2rem] border border-amber-300/12 bg-[linear-gradient(135deg,rgba(255,132,0,0.13),rgba(255,255,255,0.03))] p-7 backdrop-blur-xl">
          <div className="font-display text-4xl font-black tracking-[-0.04em] text-amber-200 sm:text-5xl">3000+</div>
          <div className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-stone-400">Transactions per second</div>
        </div>
        <div className="metric-card data-module rounded-[2rem] border border-amber-300/12 bg-[linear-gradient(135deg,rgba(255,132,0,0.13),rgba(255,255,255,0.03))] p-7 backdrop-blur-xl">
          <div className="font-display text-4xl font-black tracking-[-0.04em] text-amber-200 sm:text-5xl">800+</div>
          <div className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-stone-400">Wallets created</div>
        </div>
        <div className="metric-card data-module rounded-[2rem] border border-amber-300/12 bg-[linear-gradient(135deg,rgba(255,132,0,0.13),rgba(255,255,255,0.03))] p-7 backdrop-blur-xl">
          <div className="font-display text-4xl font-black tracking-[-0.04em] text-amber-200 sm:text-5xl">$0.004</div>
          <div className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-stone-400">Network fees from</div>
        </div>
      </div>
    </section>
  );
}
