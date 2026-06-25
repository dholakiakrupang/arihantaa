import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { UnifiedCTA } from "../components/sections/UnifiedCTA";

const styleTag = (
  <style>{`
    .material-symbols-outlined {
      font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    }
  `}</style>
);

export function PartnershipVertiv() {
  const vertivProducts = [
    {
      title: "Liebert UPS Systems (All Models)",
      desc: "Double-conversion online UPS systems providing seamless critical power backup from small micro systems to multi-megawatt configurations.",
      icon: "battery_charging_full",
      link: "/products/ups",
    },
    {
      title: "Thermal Management & Precision Cooling",
      desc: "State-of-the-art DX and Chilled Water cooling systems engineered to maintain temperature and humidity parameters in data centers.",
      icon: "ac_unit",
      link: "/products/enclosure-cooling",
    },
    {
      title: "DCIM & Remote Monitoring",
      desc: "Centralized software frameworks offering real-time visibility into infrastructure operations and environmental conditions.",
      icon: "settings_remote",
      link: "/products/digital-infrastructure",
    },
    {
      title: "Batteries & Accessories",
      desc: "Long-life OEM battery packs, racks, transition cabinets, and safety-compliant termination switches.",
      icon: "battery_full",
      link: "/contact?inquiry=quote&item=Vertiv%20Batteries%20%26%20Accessories",
    },
    {
      title: "AMC & After-sales Contracts",
      desc: "Preventative maintenance agreements, 24/7 service response SLA, and factory-trained engineer support cycles.",
      icon: "handshake",
      link: "/contact?inquiry=quote&item=Vertiv%20AMC%20Contract",
    },
  ];

  return (
    <div className="font-body selection:bg-accent selection:text-white bg-surface pt-[56px] sm:pt-[64px] md:pt-[80px]">
      {styleTag}

      {/* ── Page Hero ────────────────────────────────────────── */}
      <section className="relative w-full bg-[#080808] overflow-hidden">
        <div className="relative max-w-[1440px] mx-auto w-full flex flex-col px-8 md:px-16">
        {/* Full-bleed right image panel */}
        <motion.div
          className="relative w-full h-[240px] sm:h-[320px] md:h-[400px] lg:h-full mt-10 lg:mt-0 z-10 order-2 lg:order-none lg:absolute lg:top-0 lg:right-16 lg:w-[48%] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.img
            src="/images/project-data-center.png"
            alt="Data Centre Power Systems"
            className="absolute inset-0 w-full h-full object-cover object-center"
            initial={{ scale: 1.06 }}
            animate={{ scale: 1.02 }}
            transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
          />
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(to right, rgba(8,8,8,0.78) 0%, rgba(8,8,8,0.2) 30%, transparent 60%)",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(to top, rgba(8,8,8,0.90) 0%, rgba(8,8,8,0.3) 28%, transparent 55%)",
            }}
          />
          <div
            className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(to bottom, rgba(8,8,8,0.82) 0%, transparent 100%)",
            }}
          />

          {/* Image label overlay */}
          <motion.div
            className="absolute left-6 bottom-6 lg:left-10 lg:bottom-[100px] z-20"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-px bg-accent" />
              <span className="font-label-caps text-[9px] text-accent tracking-[0.22em] uppercase font-bold">
                AUTHORIZED OEM PARTNER
              </span>
            </div>
            <p className="font-headline text-[20px] font-black uppercase text-white leading-tight tracking-tight max-w-[260px]">
              Critical Digital Infrastructure
            </p>
          </motion.div>
        </motion.div>

        {/* Vertical divider */}
        <div
          aria-hidden
          className="hidden lg:block absolute top-0 left-[52%] w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent z-20 pointer-events-none"
        />

        {/* Left content */}
        <div className="relative z-10 flex flex-col flex-grow order-1 lg:order-none justify-center">
          <div className="w-full lg:w-[52%] flex flex-col justify-center py-12 lg:py-20 lg:pr-16">
            <div className="flex flex-col gap-0">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 mb-6">
                <Link
                  to="/"
                  className="font-label-caps text-[10px] text-accent tracking-[0.2em] uppercase hover:opacity-70 transition-opacity"
                >
                  Home
                </Link>
                <span className="material-symbols-outlined text-white/35 text-[14px]">
                  chevron_right
                </span>
                <Link
                  to="/services"
                  className="font-label-caps text-[10px] text-white/35 tracking-[0.2em] uppercase hover:text-white transition-colors duration-300"
                >
                  Solutions
                </Link>
                <span className="material-symbols-outlined text-white/35 text-[14px]">
                  chevron_right
                </span>
                <span className="font-label-caps text-[10px] text-accent tracking-[0.2em] uppercase font-bold">
                  Vertiv
                </span>
              </nav>

              {/* Badge & Eyebrow */}
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <div className="px-3 py-1 border border-accent/30 bg-accent/10 select-none rounded-none text-accent font-label-caps text-[9px] tracking-widest uppercase font-bold flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  Vertiv Authorised Channel Partner
                </div>
              </div>

              {/* Headline */}
              <h1 className="font-headline font-black uppercase leading-[1.0] tracking-tighter mb-7 text-[28px] sm:text-[38px] md:text-[48px] lg:text-[54px] text-white">
                Arihantaa Powertech <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/60">
                  — Vertiv Authorised Partner
                </span>
              </h1>

              {/* Description */}
              <p className="font-body text-base md:text-lg text-white/50 leading-relaxed font-light w-full mb-9">
                All Vertiv products supplied by Arihantaa Powertech come
                with full OEM warranty, factory-trained installation
                support, authorised spare parts, and direct Vertiv service
                escalation. We are not a general reseller — we are an
                authorised channel partner with trained engineers and
                genuine supply chain routing.
              </p>

              {/* CTA Row */}
              <div className="flex flex-wrap items-center gap-5">
                <Link to="/contact?inquiry=quote&item=Vertiv%20UPS%20and%20Thermal%20Systems">
                  <Button
                    variant="primary"
                    theme="dark"
                    size="lg"
                    className="rounded-none shadow-sm text-[10px] tracking-[0.2em] font-bold"
                  >
                    ENQUIRE ABOUT VERTIV PRODUCTS
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* ── Trust Signal & Certificate Scan Section ────────────────────────── */}
      <section className="py-24 md:py-32 bg-surface border-b border-outline-variant/30 relative overflow-hidden">
        <div className="absolute top-16 right-16 pointer-events-none select-none z-0">
          <span className="text-[120px] md:text-[200px] font-headline font-black text-outline-variant/10 leading-none tracking-tighter uppercase whitespace-nowrap">
            TRUST
          </span>
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left side: Text explanation */}
            <div className="w-full lg:w-[48%] space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-[2px] w-8 bg-accent" />
                <span className="font-label-caps text-[11px] text-accent tracking-[0.2em] uppercase font-bold">
                  TRUST SIGNAL
                </span>
              </div>

              <h2 className="font-headline text-3xl md:text-5xl font-black text-on-surface uppercase tracking-tight leading-[1.05]">
                Verified Channel <br />
                Credibility
              </h2>

              <p className="font-body text-base text-secondary leading-relaxed font-light">
                As an official channel partner, Arihantaa Powertech undergoes
                direct technical evaluation and factory authorization from
                Vertiv. Our engineers are certified directly by the OEM to
                deploy, configure, and maintain Liebert UPS systems,
                distribution infrastructure, and precision cooling units.
              </p>

              <div className="space-y-4 pt-4 border-t border-outline-variant/20">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-accent text-[24px]">
                    verified
                  </span>
                  <div>
                    <h4 className="font-headline text-sm font-bold text-on-surface uppercase">
                      Direct OEM Routing
                    </h4>
                    <p className="font-body text-[13px] text-secondary mt-1">
                      Direct warranty validation and escalation protocol route
                      to Vertiv corporate service support.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-accent text-[24px]">
                    engineering
                  </span>
                  <div>
                    <h4 className="font-headline text-sm font-bold text-on-surface uppercase">
                      Factory-Trained Engineers
                    </h4>
                    <p className="font-body text-[13px] text-secondary mt-1">
                      Our on-site installation team has passed official product
                      training benchmarks at Vertiv facilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Interactive Certification Certificate Scan Card */}
            <div className="w-full lg:w-[52%] flex justify-center">
              <div className="relative w-full max-w-[480px] bg-gradient-to-br from-white to-neutral-50 p-8 md:p-12 border-2 border-accent/25 hover:border-accent transition-all duration-500 shadow-2xl rounded-none relative group select-none overflow-hidden">
                {/* Certificate Border Details */}
                <div className="absolute inset-2 border border-accent/15 pointer-events-none" />

                {/* Corner details */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-accent" />
                <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-accent" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-accent" />
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-accent" />

                {/* Certificate Header */}
                <div className="text-center pb-8 border-b border-accent/10">
                  <span className="font-headline text-[13px] font-black text-neutral-400 tracking-[0.2em] uppercase block mb-1">
                    Certificate of Partnership
                  </span>
                  <div className="h-[2px] w-12 bg-accent mx-auto my-3" />
                  <span className="font-headline text-[24px] font-black text-neutral-900 tracking-[0.1em] uppercase block">
                    VERTIV™
                  </span>
                </div>

                {/* Certificate Content */}
                <div className="py-8 space-y-6 text-center">
                  <p className="font-label-caps text-[10px] text-neutral-400 tracking-wider uppercase font-bold">
                    This is to certify that
                  </p>
                  <h3 className="font-headline text-[22px] font-black text-neutral-900 uppercase tracking-tight">
                    ARIHANTAA POWERTECH
                  </h3>
                  <p className="font-body text-[13.5px] leading-relaxed text-neutral-600 max-w-sm mx-auto">
                    is appointed as an{" "}
                    <span className="text-accent font-bold">
                      Authorised Channel Partner
                    </span>{" "}
                    in India, eligible to supply, install, and support critical
                    infrastructure solutions.
                  </p>
                </div>

                {/* Certificate Footer */}
                <div className="pt-6 border-t border-accent/10 flex items-center justify-between text-neutral-500">
                  <div className="text-left">
                    <span className="font-label-caps text-[7.5px] tracking-wider uppercase block">
                      Partnership Level
                    </span>
                    <span className="font-headline text-[11px] font-bold text-neutral-900 uppercase">
                      CHANNEL PARTNER
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-label-caps text-[7.5px] tracking-wider uppercase block">
                      Status
                    </span>
                    <span className="font-headline text-[11px] font-bold text-accent uppercase flex items-center gap-1.5 justify-end">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                      ACTIVE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Products List Section ────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-surface-container-low border-b border-outline-variant/30">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16">
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-8 bg-accent" />
                <span className="font-label-caps text-[11px] text-accent tracking-[0.2em] uppercase font-bold">
                  VERTIV CATALOG
                </span>
              </div>
              <h2 className="font-headline text-3xl md:text-5xl font-black text-on-surface uppercase tracking-tight">
                Authorised Solutions & Products
              </h2>
            </div>
            <p className="font-body text-base text-secondary max-w-sm leading-relaxed">
              We offer full-cycle supply, setup, and maintenance agreements
              across all Vertiv systems.
            </p>
          </div>

          {/* Zero-gap columns layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-outline-variant/30 bg-white gap-0 shadow-md">
            {vertivProducts.map((prod, idx) => {
              const CardContent = (
                <div className="space-y-4">
                  <span className="material-symbols-outlined text-accent text-[28px] md:text-[32px] group-hover:scale-110 transition-transform duration-300 block">
                    {prod.icon}
                  </span>
                  <h4 className="font-headline text-[17px] text-on-surface font-extrabold uppercase tracking-tight group-hover:text-accent transition-colors duration-300">
                    {prod.title}
                  </h4>
                  <p className="font-body text-[13.5px] leading-relaxed text-secondary font-light">
                    {prod.desc}
                  </p>
                </div>
              );

              const cardClass =
                "border-r border-b border-outline-variant/30 p-8 hover:bg-accent/[0.01] transition-all duration-300 group flex flex-col justify-between min-h-[220px]";

              if (prod.link) {
                return (
                  <Link key={idx} to={prod.link} className={cardClass}>
                    {CardContent}
                  </Link>
                );
              }

              return (
                <div key={idx} className={cardClass}>
                  {CardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <UnifiedCTA
        heading="Ready to secure your critical facilities?"
        subtitle="Talk to our team about Liebert UPS systems, precision cooling, and technical maintenance contracts."
        primaryText="ENQUIRE ABOUT VERTIV PRODUCTS"
        primaryTo="/contact?inquiry=quote&item=Vertiv%20UPS%20and%20Thermal%20Systems"
        outlineText="VIEW PRODUCT CATALOG"
        outlineTo="/products"
        uppercase={true}
      />
    </div>
  );
}
