import React from 'react';

export default function Footer() {
  return (
    <footer class="border-t border-amber-300/10 bg-[#030201] px-5 py-12 sm:px-8 lg:px-12">
      <div class="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div class="flex items-center gap-4">
          <img
            alt="ZERA coin logo"
            class="h-12 w-12 rounded-full object-cover shadow-[0_0_30px_rgba(255,121,0,0.35)]"
            src="/images/Orange logo png.png"
          />
          <div>
            <p class="font-display text-lg font-bold tracking-[0.04em] text-white">
              ZERA Network
            </p>
            <p class="mt-1 text-sm text-stone-500">
              Community-governed blockchain infrastructure.
            </p>
          </div>
        </div>
        <div class="flex flex-wrap gap-3">
          <a href="https://zerascan.io/address/4Yg2ZeYrzMjVBXvU2YWtuZ7CzWR9atnQCD35TQj1kKcH" target="_blank" rel="noreferrer" class="footer-link">
            View Treasury
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-arrow-up-right h-4 w-4" aria-hidden="true">
              <path d="M7 7h10v10"></path>
              <path d="M7 17 17 7"></path>
            </svg>
          </a>
          <a href="https://t.me/zeranetwork" target="_blank" rel="noreferrer" class="footer-link">
            Join Community
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-arrow-up-right h-4 w-4" aria-hidden="true">
              <path d="M7 7h10v10"></path>
              <path d="M7 17 17 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
