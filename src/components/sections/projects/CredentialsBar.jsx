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
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 px-6 md:px-12">
          {CREDS.map((c, i) => (
            <React.Fragment key={i}>
              <span className="font-label-caps text-[10px] text-secondary tracking-[0.2em]">
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
      <UnifiedCTA 
        heading="Have a complex project?"
        accent="Collaborate with our team."
        subtitle="We deliver turnkey industrial power, thermal systems, and PM lifecycle management."
        primaryText="CONTACT OUR TEAM"
        primaryTo="/contact?inquiry=quote"
        outlineText="VIEW COMPANY PROFILE"
        outlineTo="/about"
      />
    </>
  );
}
