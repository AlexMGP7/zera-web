import React from 'react';

export default function Hero() {
  return (
    <section class="hero-shell relative isolate min-h-screen px-5 py-6 sm:px-8 lg:px-12">
      <div
        class="absolute inset-0 -z-30 bg-cover bg-center opacity-70"
        style={{
          backgroundImage: 'url("https://d2xsxph8kpxj0f.cloudfront.net/106585986/PRggdwghVAesZmMSd9BWAa/zera-cyber-treasury-hero-6G9uDnxEq75Jdev5E868o4.webp")'
        }}
      ></div>
      <div class="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_52%_42%,rgba(255,123,16,0.22),transparent_30%),linear-gradient(90deg,rgba(3,2,1,0.92),rgba(3,2,1,0.52)_44%,rgba(3,2,1,0.93))]"></div>
      <div class="copper-grid absolute inset-0 -z-10 opacity-45"></div>
      
      <nav class="page-reveal mx-auto flex max-w-7xl items-center justify-between rounded-full border border-amber-300/15 bg-black/35 px-4 py-3 shadow-[0_0_60px_rgba(255,116,0,0.08)] backdrop-blur-xl">
        <a href="#top" class="flex items-center gap-3" aria-label="ZERA home">
          <img
            alt="ZERA coin logo"
            class="h-10 w-10 rounded-full border border-amber-300/30 object-cover shadow-[0_0_24px_rgba(255,121,0,0.45)]"
            src="/images/Orange logo png.png"
          />
          <span class="font-display text-sm font-bold uppercase tracking-[0.28em] text-amber-100">ZERA</span>
        </a>
        <div class="hidden items-center gap-7 text-xs font-semibold uppercase tracking-[0.22em] text-stone-300 md:flex">
          <a href="#governance" class="transition hover:text-amber-300">Governance</a>
          <a href="#ecosystem" class="transition hover:text-amber-300">Ecosystem</a>
          <a href="#build" class="transition hover:text-amber-300">Build</a>
        </div>
        <a
          href="https://t.me/zeranetwork"
          target="_blank"
          rel="noreferrer"
          class="inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-amber-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-200 transition hover:border-amber-200 hover:bg-amber-300/20 hover:text-white"
        >
          Join
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-arrow-up-right h-4 w-4" aria-hidden="true">
            <path d="M7 7h10v10"></path>
            <path d="M7 17 17 7"></path>
          </svg>
        </a>
      </nav>

      <div class="ledger-rain" aria-hidden="true">
        <span></span><span></span><span></span><span></span><span></span><span></span>
      </div>

      <div id="top" class="mx-auto grid max-w-7xl items-center gap-10 pb-20 pt-12 md:min-h-[calc(100vh-96px)] md:grid-cols-[1.02fr_0.98fr] lg:gap-12 lg:pt-10">
        <div class="hero-copy-flow relative order-2 md:order-1">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-black/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-amber-200 shadow-[0_0_35px_rgba(255,128,0,0.12)] backdrop-blur-xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-sparkles h-4 w-4">
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
              <path d="M20 3v4"></path>
              <path d="M22 5h-4"></path>
              <path d="M4 17v2"></path>
              <path d="M5 18H3"></path>
            </svg>
            Community-Governed. Treasury-Supported.
          </div>
          <h1 class="hero-title max-w-4xl text-5xl font-extrabold text-white sm:text-6xl lg:text-7xl xl:text-[5.7rem]">
            Governance that <span class="accent-word">executes</span> at network speed.
          </h1>
          <p class="mt-7 max-w-2xl text-lg leading-8 text-stone-300 sm:text-xl">
            ZERA Network is a modern, governance-first blockchain platform designed for high-performance, developer-friendly Web3 applications. When the community votes, the protocol can act autonomously through transparent on-chain execution.
          </p>
          <div class="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="https://t.me/zeranetwork" target="_blank" rel="noreferrer" class="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-300 via-orange-500 to-amber-600 px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-black shadow-[0_0_45px_rgba(255,123,0,0.32)] transition hover:scale-[1.025] hover:shadow-[0_0_75px_rgba(255,123,0,0.48)]">
              Join Community
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-arrow-up-right h-4 w-4" aria-hidden="true">
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </a>
            <a href="http://chatgpt.com/g/g-68a96e8daadc8191945582a504f0efe1-zera-gpt" target="_blank" rel="noreferrer" class="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-stone-100 backdrop-blur-xl transition hover:border-amber-300/40 hover:bg-amber-300/10 hover:text-amber-100">
              Try Zera GPT
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-arrow-up-right h-4 w-4" aria-hidden="true">
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="relative order-1 mb-28 flex min-h-[380px] items-center justify-center md:order-2 md:mb-0 lg:min-h-[440px]">
          <div class="blockchain-node-field" aria-hidden="true">
            <span class="chain-node node-a"></span><span class="chain-node node-b"></span><span class="chain-node node-c"></span><span class="chain-node node-d"></span><span class="chain-node node-e"></span><span class="chain-link link-ab"></span><span class="chain-link link-bc"></span><span class="chain-link link-cd"></span><span class="chain-link link-de"></span><span class="tx-packet packet-one"></span><span class="tx-packet packet-two"></span><span class="tx-packet packet-three"></span>
          </div>
          <div class="confirmation-blocks" aria-hidden="true">
            <span>01</span><span>02</span><span>03</span><span>04</span>
          </div>
          <div class="governance-flow governance-flow-one"></div>
          <div class="governance-flow governance-flow-two"></div>
          <div class="treasury-pulse"></div>
          <div class="logo-stage absolute h-[min(68vw,560px)] w-[min(68vw,560px)] rounded-full"></div>
          <div class="orbit-ring orbit-ring-one"></div>
          <div class="orbit-ring orbit-ring-two"></div>
          <img
            alt="Orange ZERA coin logo"
            class="zera-logo-pop relative z-10 h-[min(54vw,390px)] w-[min(54vw,390px)] rounded-full object-cover shadow-[0_0_36px_rgba(255,118,0,0.5),0_0_120px_rgba(255,94,0,0.38)]"
            src="/images/Orange logo png.png"
          />
          <div class="absolute -bottom-24 left-1/2 z-20 w-[min(86vw,280px)] -translate-x-1/2 rounded-3xl border border-amber-200/20 bg-black/70 p-5 shadow-[0_0_45px_rgba(255,123,0,0.16)] backdrop-blur-2xl md:bottom-2 md:left-auto md:right-0 md:max-w-[250px] md:translate-x-0 md:bg-black/55 lg:right-8">
            <p class="text-xs font-bold uppercase tracking-[0.22em] text-amber-200">Self-enforcing engine</p>
            <p class="mt-2 text-sm leading-6 text-stone-300">Proposal approval can move directly into transparent network action.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
