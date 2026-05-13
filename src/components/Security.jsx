import React from 'react';

export default function Security() {
  return (
    <section class="section-reveal relative overflow-hidden bg-black px-5 py-24 sm:px-8 lg:px-12">
      <div class="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(255,115,0,0.16),transparent_52%)]"></div>
      <div class="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div class="relative overflow-hidden rounded-[2.5rem]">
          <img
            alt="Futuristic ZERA governance interface"
            class="rounded-[2.5rem] border border-amber-300/15 object-cover shadow-[0_0_80px_rgba(255,105,0,0.14)]"
            src="https://d2xsxph8kpxj0f.cloudfront.net/106585986/PRggdwghVAesZmMSd9BWAa/zera-governance-panel-GgFgVv45fz8LMX93yNFeND.webp"
          />
          <div class="ledger-scan-overlay" aria-hidden="true"></div>
          <div class="validator-block-stream" aria-hidden="true">
            <span></span><span></span><span></span><span></span><span></span>
          </div>
          <div class="absolute -bottom-0 left-6 rounded-3xl border border-amber-300/20 bg-black/70 p-5 backdrop-blur-xl">
            <p class="text-xs font-bold uppercase tracking-[0.22em] text-amber-200">SolidProof Milestone</p>
            <p class="mt-2 max-w-xs text-sm leading-6 text-stone-300">
              ZERA Network and bridge audit milestones support trust and reliability across the infrastructure.
            </p>
          </div>
        </div>
        <div>
          <p class="section-kicker">Security and Interoperability</p>
          <h2 class="soft-heading mt-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            Audited rails for a cross-chain ecosystem.
          </h2>
          <p class="mt-6 text-lg leading-8 text-stone-300">
            The Solana bridge expands access to Solana’s DeFi ecosystem and enables fast, low-cost cross-chain movement. Network explorers and public resources make ZERA activity visible for builders and participants.
          </p>
          <div class="mt-8 grid gap-3 sm:grid-cols-2">
            <a href="https://cdn.zerafile.io/governance/v3_ZeraNetwork_ChainAudit_Solidproof-imynpgfXidqC.pdf" target="_blank" rel="noreferrer" class="resource-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-shield-check h-5 w-5">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              Network Audit
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-arrow-up-right h-4 w-4" aria-hidden="true">
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </a>
            <a href="https://app.solidproof.io/projects/zera-bridge?audit=465105c0-cb0f-43f1-addf-6512b9827500" target="_blank" rel="noreferrer" class="resource-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-file-check2 h-5 w-5">
                <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <path d="m3 15 2 2 4-4"></path>
              </svg>
              Bridge Audit
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-arrow-up-right h-4 w-4" aria-hidden="true">
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </a>
            <a href="https://zerascan.io" target="_blank" rel="noreferrer" class="resource-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-earth h-5 w-5">
                <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path>
                <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path>
                <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
              zerascan.io
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-arrow-up-right h-4 w-4" aria-hidden="true">
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </a>
            <a href="https://visionhub.ch/" target="_blank" rel="noreferrer" class="resource-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-wallet-cards h-5 w-5">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"></path>
                <path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"></path>
              </svg>
              Vision Hub
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-arrow-up-right h-4 w-4" aria-hidden="true">
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
