import React from 'react';
import { UnifiedCTA } from '../UnifiedCTA';

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
      <section className="bg-surface border-t border-outline-variant/30 py-5 overflow-hidden">
        <div className="grid grid-cols-2 md:flex md:flex-nowrap justify-items-center md:justify-center items-center gap-x-4 md:gap-x-1.5 lg:gap-x-5 gap-y-3 px-4 md:px-5 lg:px-6 max-w-[1440px] mx-auto text-center">
          {CREDS.map((c, i) => (
            <React.Fragment key={i}>
              <span className="font-label-caps text-[8.5px] sm:text-[9.5px] md:text-[8px] lg:text-[10px] text-secondary tracking-[0.12em] md:tracking-[0.12em] lg:tracking-[0.2em] whitespace-nowrap">
                {c.toUpperCase()}
              </span>
              {i < CREDS.length - 1 && (
                <span className="hidden md:inline text-accent text-[9px] md:text-[10px] mx-0.5 md:mx-0.5 lg:mx-2">/</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <UnifiedCTA
        heading="Have a complex project?"
        accent="Collaborate with our team."
        subtitle="We deliver turnkey industrial power, thermal systems, and PM lifecycle management."
        primaryText="CONTACT OUR TEAM"
        primaryTo="/contact?inquiry=quote&item=Complex%20Project%20Collaboration"
        outlineText="VIEW COMPANY PROFILE"
        outlineTo="/about"
      />
    </>
  );
}
