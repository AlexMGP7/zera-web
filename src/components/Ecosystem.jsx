import React from 'react';

export default function Ecosystem() {
  return (
    <section id="ecosystem" class="section-reveal relative bg-[#050302] px-5 py-24 sm:px-8 lg:px-12">
      <div class="mx-auto max-w-7xl">
        <div class="max-w-3xl">
          <p class="section-kicker">Discover ZERA</p>
          <h2 class="soft-heading mt-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            Cross-chain access points for the network.
          </h2>
        </div>
        <div class="ecosystem-chain-track" aria-hidden="true">
          <span></span><span></span><span></span><span></span>
        </div>
        <div class="mt-10 grid gap-5 lg:grid-cols-3">
          <a href="https://zerascan.io/token/$ZRA+0000" target="_blank" rel="noreferrer" class="resource-card data-module group rounded-[2rem] border border-amber-300/12 bg-black/45 p-7 transition duration-300 hover:-translate-y-1 hover:border-amber-200/35 hover:bg-amber-300/[0.055]">
            <p class="text-xs font-bold uppercase tracking-[0.22em] text-amber-200">Native ZERA</p>
            <h3 class="mt-5 font-display text-2xl font-bold tracking-[-0.02em] text-white">Network Coin</h3>
            <p class="mt-3 min-h-16 leading-7 text-stone-400">The native coin that powers the ZERA Network.</p>
            <span class="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-amber-200">
              View resource
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-arrow-up-right h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1">
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </span>
          </a>
          <a href="https://solscan.io/token/9zVugUbpn27zvSfBwkhYAG4yvnxdy58ZFS5Rt89zaP15" target="_blank" rel="noreferrer" class="resource-card data-module group rounded-[2rem] border border-amber-300/12 bg-black/45 p-7 transition duration-300 hover:-translate-y-1 hover:border-amber-200/35 hover:bg-amber-300/[0.055]">
            <p class="text-xs font-bold uppercase tracking-[0.22em] text-amber-200">Wrapped ZERA (SOL)</p>
            <h3 class="mt-5 font-display text-2xl font-bold tracking-[-0.02em] text-white">Solana Access</h3>
            <p class="mt-3 min-h-16 leading-7 text-stone-400">A wrapped version of ZERA on the Solana Network.</p>
            <span class="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-amber-200">
              View resource
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-arrow-up-right h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1">
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </span>
          </a>
          <a href="https://www.dextools.io/app/solana/pair-explorer/CpaXrJhnLesjnBt893WaBbNkYAEQvpqFZmGExvvA1njg" target="_blank" rel="noreferrer" class="resource-card data-module group rounded-[2rem] border border-amber-300/12 bg-black/45 p-7 transition duration-300 hover:-translate-y-1 hover:border-amber-200/35 hover:bg-amber-300/[0.055]">
            <p class="text-xs font-bold uppercase tracking-[0.22em] text-amber-200">Raydium Pool</p>
            <h3 class="mt-5 font-display text-2xl font-bold tracking-[-0.02em] text-white">Liquidity Entry</h3>
            <p class="mt-3 min-h-16 leading-7 text-stone-400">A quick start for entering the ZERA ecosystem.</p>
            <span class="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-amber-200">
              View resource
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-arrow-up-right h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1">
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
