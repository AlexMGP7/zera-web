import React from 'react';

export default function GovernancePanel() {
  return (
    <section id="governance" className="section-reveal relative bg-[#050302] px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="sticky top-8 h-fit">
          <p className="section-kicker">What is ZERA?</p>
          <h2 className="soft-heading mt-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            A living governance system, not a static chain.
          </h2>
          <p className="mt-6 text-lg leading-8 text-stone-300">
            ZERA redefines decentralization by giving the community direct and autonomous control over protocol upgrades, treasury allocations, and network operations through transparent proposals and verifiable voting.
          </p>
        </div>
        <div className="governance-card-web relative grid gap-5 sm:grid-cols-2">
          <div className="web-connector connector-one" aria-hidden="true"></div>
          <div className="web-connector connector-two" aria-hidden="true"></div>
          <div className="web-connector connector-three" aria-hidden="true"></div>
          <article className="feature-card data-module group rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-amber-300/30 hover:bg-amber-300/[0.055]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-300/25 bg-amber-300/10 text-amber-200 shadow-[0_0_30px_rgba(255,128,0,0.12)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-vote h-6 w-6">
                <path d="m9 12 2 2 4-4"></path>
                <path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z"></path>
                <path d="M22 19H2"></path>
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-white">Collective Governance</h3>
            <p className="mt-3 leading-7 text-stone-400">
              Community participants vote on transparent proposals, allowing the protocol to adapt to network and market conditions without centralized gatekeeping.
            </p>
          </article>
          <article className="feature-card data-module group rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-amber-300/30 hover:bg-amber-300/[0.055]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-300/25 bg-amber-300/10 text-amber-200 shadow-[0_0_30px_rgba(255,128,0,0.12)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cpu h-6 w-6">
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
            </div>
            <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-white">Autonomous Execution</h3>
            <p className="mt-3 leading-7 text-stone-400">
              Approved governance actions execute on-chain through a self-enforcing engine, narrowing the gap between decision and protocol action.
            </p>
          </article>
          <article className="feature-card data-module group rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-amber-300/30 hover:bg-amber-300/[0.055]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-300/25 bg-amber-300/10 text-amber-200 shadow-[0_0_30px_rgba(255,128,0,0.12)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-landmark h-6 w-6">
                <line x1="3" x2="21" y1="22" y2="22"></line>
                <line x1="6" x2="6" y1="18" y2="11"></line>
                <line x1="10" x2="10" y1="18" y2="11"></line>
                <line x1="14" x2="14" y1="18" y2="11"></line>
                <line x1="18" x2="18" y1="18" y2="11"></line>
                <polygon points="12 2 20 7 4 7"></polygon>
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-white">Treasury Support</h3>
            <p className="mt-3 leading-7 text-stone-400">
              ZERA’s treasury is a public network vault governed by users and funded through network activity and future governance-defined mechanisms.
            </p>
          </article>
          <article className="feature-card data-module group rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-amber-300/30 hover:bg-amber-300/[0.055]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-300/25 bg-amber-300/10 text-amber-200 shadow-[0_0_30px_rgba(255,128,0,0.12)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wallet-cards h-6 w-6">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"></path>
                <path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"></path>
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-white">Multi-Asset Fees</h3>
            <p className="mt-3 leading-7 text-stone-400">
              Transaction fees can be paid using approved coins, improving accessibility beyond a single native-token fee model.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
