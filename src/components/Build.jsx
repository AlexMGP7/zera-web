import React from 'react';

export default function Build() {
  return (
    <section id="build" className="section-reveal relative overflow-hidden bg-black px-5 py-24 sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(255,136,0,0.16),transparent_34%),radial-gradient(circle_at_80%_76%,rgba(255,88,0,0.12),transparent_34%)]"></div>
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-[2.5rem] border border-amber-300/15 bg-white/[0.035] p-8 backdrop-blur-xl sm:p-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-boxes h-10 w-10 text-amber-200">
            <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path>
            <path d="m7 16.5-4.74-2.85"></path>
            <path d="m7 16.5 5-3"></path>
            <path d="M7 16.5v5.17"></path>
            <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path>
            <path d="m17 16.5-5-3"></path>
            <path d="m17 16.5 4.74-2.85"></path>
            <path d="M17 16.5v5.17"></path>
            <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path>
            <path d="M12 8 7.26 5.15"></path>
            <path d="m12 8 4.74-2.85"></path>
            <path d="M12 13.5V8"></path>
          </svg>
          <h2 className="soft-heading mt-7 text-4xl font-extrabold text-white sm:text-5xl">
            Build dApps and integrate ZERA.
          </h2>
          <p className="mt-6 text-lg leading-8 text-stone-300">
            Developers can build decentralized applications on top of ZERA’s infrastructure using its WASM smart contract engine, while the network’s governance and treasury model provide a community-directed support layer.
          </p>
          <a href="https://t.me/zeranetwork" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-300 px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:bg-white">
            Start Building Today
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-4 w-4" aria-hidden="true">
              <path d="M7 7h10v10"></path>
              <path d="M7 17 17 7"></path>
            </svg>
          </a>
        </div>
        <div className="build-validator-grid relative grid gap-4 sm:grid-cols-2">
          <div className="validator-rail" aria-hidden="true">
            <span></span>
          </div>
          <div className="overview-tile data-module rounded-[1.75rem] border border-white/10 bg-black/55 p-6 backdrop-blur-xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gauge mb-5 h-7 w-7 text-amber-200">
              <path d="m12 14 4-4"></path>
              <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
            </svg>
            <p className="font-semibold leading-7 text-stone-200">Transparent performance tracking</p>
          </div>
          <div className="overview-tile data-module rounded-[1.75rem] border border-white/10 bg-black/55 p-6 backdrop-blur-xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-network mb-5 h-7 w-7 text-amber-200">
              <rect x="16" y="16" width="6" height="6" rx="1"></rect>
              <rect x="2" y="16" width="6" height="6" rx="1"></rect>
              <rect x="9" y="2" width="6" height="6" rx="1"></rect>
              <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path>
              <path d="M12 12V8"></path>
            </svg>
            <p className="font-semibold leading-7 text-stone-200">Real-time network insights</p>
          </div>
          <div className="overview-tile data-module rounded-[1.75rem] border border-white/10 bg-black/55 p-6 backdrop-blur-xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock-keyhole mb-5 h-7 w-7 text-amber-200">
              <circle cx="12" cy="16" r="1"></circle>
              <rect x="3" y="10" width="18" height="12" rx="2"></rect>
              <path d="M7 10V7a5 5 0 0 1 10 0v3"></path>
            </svg>
            <p className="font-semibold leading-7 text-stone-200">Security audit milestones</p>
          </div>
          <div className="overview-tile data-module rounded-[1.75rem] border border-white/10 bg-black/55 p-6 backdrop-blur-xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap mb-5 h-7 w-7 text-amber-200">
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
            </svg>
            <p className="font-semibold leading-7 text-stone-200">Solana bridge interoperability</p>
          </div>
          <div className="overview-tile data-module rounded-[1.75rem] border border-white/10 bg-black/55 p-6 backdrop-blur-xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cpu mb-5 h-7 w-7 text-amber-200">
              <rect width="16" height="16" x="4" y="4" rx="2"></rect>
              <rect width="6" height="6" x="9" y="9" rx="1"></rect>
              <path d="M15 2v2"></path>
              <path d="M15 20v2"></path>
              <path d="M2 15h2"></path>
              <path d="M2 9h2"></path>
              <path d="M20 15h2"></path>
              <path d="M20 9h2"></path>
              <path d="M9 2v2"></path>
              <path d="M9 20v2"></path>
            </svg>
            <p className="font-semibold leading-7 text-stone-200">WASM-powered smart contracts</p>
          </div>
          <div className="overview-tile data-module rounded-[1.75rem] border border-white/10 bg-black/55 p-6 backdrop-blur-xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-earth mb-5 h-7 w-7 text-amber-200">
              <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path>
              <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path>
              <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path>
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
            <p className="font-semibold leading-7 text-stone-200">Developer-friendly Web3 applications</p>
          </div>
        </div>
      </div>
    </section>
  );
}
