import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CREDS = [
  'ISO 9001:2015 Certified',
  'PF Registered',
  'EC License: GBC/1909',
  'GST Active — 9 States',
  'Bank Solvency: ₹7 Cr',
  'Established 1995',
];

export function CredentialsBar() {
  return (
    <>
      {/* Credentials strip */}
      <section className="bg-surface border-t border-outline py-5 overflow-hidden">
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 px-6 md:px-12">
          {CREDS.map((c, i) => (
            <React.Fragment key={i}>
              <span className="font-label-caps text-[10px] text-on-surface-variant tracking-[0.2em]">
                {c.toUpperCase()}
              </span>
              {i < CREDS.length - 1 && (
                <span className="text-accent text-[10px] hidden md:inline">/</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-surface py-24 px-6 md:px-12 lg:px-20 border-t border-outline">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">

            {/* Text */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-6 h-px bg-accent" />
                <span className="font-label-caps text-[10px] text-accent tracking-[0.26em]">WORK WITH US</span>
              </div>
              <h2 className="font-headline font-black uppercase text-4xl md:text-5xl lg:text-6xl text-secondary tracking-tighter leading-[0.95]">
                Have a project<br />that demands<br />precision?
              </h2>
              <p className="font-body text-on-surface-variant text-sm max-w-md leading-relaxed font-light">
                Whether it's a critical data center, hospital campus, or airport — our team brings 30 years of infrastructure expertise to every engagement.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-4">
              <Link to="/about" className="group flex items-center justify-between gap-8 bg-secondary text-surface font-label-caps text-[11px] tracking-[0.18em] px-8 py-5 hover:bg-accent transition-colors duration-300">
                VIEW COMPANY PROFILE
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              <Link to="/contact" className="group flex items-center justify-between gap-8 border border-outline text-secondary font-label-caps text-[11px] tracking-[0.18em] px-8 py-5 hover:border-secondary transition-colors duration-300">
                CONTACT OUR TEAM
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
