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

export function SolutionsCapitalGoods() {
  const capitalGoodsList = [
    {
      title: "L&T TTA Panels",
      desc: "Type-tested switchgear assembly designs produced via our strategic JV partnership with Synchro Electricals.",
      icon: "dashboard",
      link: "/products/lt-tta-panel",
    },
    {
      title: "Lucy Electric RMU",
      desc: "Ring Main Units for Medium Voltage ring network setups offering safety, performance, and robustness.",
      icon: "switch_video",
      link: "/products/lucy-rmu",
    },
    {
      title: "Lucy Electric CSS",
      desc: "Compact Secondary Substations combining transformers, HV switchgear, and LV distribution boards in modular packages.",
      icon: "settings_input_composite",
      link: "/products/lucy-css",
    },
    {
      title: "Vertiv Liebert UPS Systems",
      desc: "Authorized supply and engineering alignment for Liebert online uninterruptible power systems.",
      icon: "battery_charging_full",
      link: "/partners/vertiv",
    },
    {
      title: "Vertiv PDU",
      desc: "Power Distribution Units offering advanced metering and circuit monitoring for critical data infrastructure.",
      icon: "electrical_services",
      link: "/partners/vertiv",
    },
    {
      title: "Diesel Generator Sets",
      desc: "Backup power generation systems from leading OEMs, configured for automatic power transfer configurations.",
      icon: "power",
    },
    {
      title: "HT/LT Switchgear & Panels",
      desc: "High Tension and Low Tension switchgear, breaker frames, and custom distribution panels.",
      icon: "grid_view",
    },
    {
      title: "Transformers",
      desc: "Dry-type and oil-filled distribution transformers for industrial step-down substations.",
      icon: "bolt",
    },
    {
      title: "Cables & Cable Accessories",
      desc: "HT/LT power cables, control wiring, terminators, joints, and cable containment grids.",
      icon: "cable",
    },
    {
      title: "Bus Ducts & Busbar Systems",
      desc: "High-amp copper and aluminum busbar trunking systems for bulk power transmission layouts.",
      icon: "view_stream",
    },
    {
      title: "Earthing & Lightning Protection",
      desc: "Maintenance-free chemical earthing grids and lightning terminals compliant with IEC parameters.",
      icon: "security",
    },
    {
      title: "Spare Parts & AMC Consumables",
      desc: "Genuine spare parts, relay modules, breaker contacts, and filter media contracts.",
      icon: "build",
    },
  ];

  return (
    <div className="font-body selection:bg-accent selection:text-white bg-surface pt-[80px]">
      {styleTag}

      {/* ── Page Hero ────────────────────────────────────────── */}
      <section className="relative w-full bg-[#080808] overflow-hidden">
        <div className="max-w-[1920px] mx-auto relative w-full flex flex-col lg:block">
        {/* Full-bleed right image panel */}
        <motion.div
          className="relative w-full h-[240px] sm:h-[320px] md:h-[400px] lg:h-full mt-10 lg:mt-0 z-10 order-2 lg:order-none lg:absolute lg:top-0 lg:right-0 lg:w-[50%] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.img
            src="/images/products/Services-Generator-Switchgear-Services.png"
            alt="Capital Goods Logistics & Supply"
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
                ONE ACCOUNTABLE SOURCE
              </span>
            </div>
            <p className="font-headline text-[20px] font-black uppercase text-white leading-tight tracking-tight max-w-[260px]">
              Consolidated Infrastructure
            </p>
          </motion.div>
        </motion.div>

        {/* Vertical divider */}
        <div
          aria-hidden
          className="hidden lg:block absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent z-20 pointer-events-none"
        />

        {/* Left content */}
        <div className="relative z-10 max-w-[1440px] mx-auto w-full flex flex-col px-8 md:px-16 order-1 lg:order-none justify-center">
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
                  Capital Goods
                </span>
              </nav>

              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-accent" />
                <span className="font-label-caps text-[10px] text-accent tracking-[0.28em] uppercase font-bold">
                  CAPITAL GOODS SUPPLY
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-headline font-black uppercase leading-[1.0] tracking-tighter mb-7 text-[28px] sm:text-[38px] md:text-[48px] lg:text-[54px] text-white">
                All Capital Goods, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/60">
                  One Roof.
                </span>
              </h1>

              {/* Sub-heading */}
              <p className="font-headline text-[16px] sm:text-[20px] text-accent font-bold uppercase mb-4 tracking-tight leading-tight">
                Why approach six different vendors for one project?
              </p>

              {/* Description */}
              <p className="font-body text-base md:text-lg text-white/50 leading-relaxed font-light w-full mb-9">
                Arihantaa Powertech consolidates switchgear, UPS,
                transformers, RMU systems, and generators under one purchase
                order. We eliminate procurement division coordination gaps,
                saving time, mitigating layout compatibility risks, and
                providing single-point accountability.
              </p>

              {/* CTA Row */}
              <div className="flex flex-wrap items-center gap-5">
                <Link to="/contact?inquiry=quote&item=Consolidated%20Product%20Quote">
                  <Button
                    variant="primary"
                    theme="dark"
                    size="lg"
                    className="rounded-none shadow-sm text-[10px] tracking-[0.2em] font-bold"
                  >
                    GET A CONSOLIDATED PRODUCT QUOTE
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* ── Client Benefits Section ────────────────────────── */}
      <section className="py-24 md:py-32 bg-surface border-b border-outline-variant/30 relative overflow-hidden">
        <div className="absolute top-16 right-16 pointer-events-none select-none z-0">
          <span className="text-[120px] md:text-[200px] font-headline font-black text-outline-variant/10 leading-none tracking-tighter uppercase whitespace-nowrap">
            VALUE
          </span>
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left side: Grid of benefits */}
            <div className="w-full lg:w-[50%] grid grid-cols-1 sm:grid-cols-2 gap-8 order-2 lg:order-none">
              <div className="bg-white p-6 border border-outline-variant/20 relative group hover:border-accent/40 transition-colors">
                <span className="material-symbols-outlined text-accent text-[28px] mb-4 block">
                  receipt_long
                </span>
                <h4 className="font-headline text-sm font-bold text-on-surface uppercase mb-2">
                  One Purchase Order
                </h4>
                <p className="font-body text-[13px] text-secondary leading-relaxed">
                  Streamline your legal contracting and administrative workflows
                  by routing all equipment through a single PO.
                </p>
              </div>
              <div className="bg-white p-6 border border-outline-variant/20 relative group hover:border-accent/40 transition-colors">
                <span className="material-symbols-outlined text-accent text-[28px] mb-4 block">
                  assignment_ind
                </span>
                <h4 className="font-headline text-sm font-bold text-on-surface uppercase mb-2">
                  Single Accountability
                </h4>
                <p className="font-body text-[13px] text-secondary leading-relaxed">
                  No blame shifting. If there is a layout mismatch or
                  configuration issue, we resolve it internally.
                </p>
              </div>
              <div className="bg-white p-6 border border-outline-variant/20 relative group hover:border-accent/40 transition-colors">
                <span className="material-symbols-outlined text-accent text-[28px] mb-4 block">
                  local_shipping
                </span>
                <h4 className="font-headline text-sm font-bold text-on-surface uppercase mb-2">
                  Coordinated Logistics
                </h4>
                <p className="font-body text-[13px] text-secondary leading-relaxed">
                  We schedule manufacturing and transport runs to align with
                  site progress, minimizing site storage requirements.
                </p>
              </div>
              <div className="bg-white p-6 border border-outline-variant/20 relative group hover:border-accent/40 transition-colors">
                <span className="material-symbols-outlined text-accent text-[28px] mb-4 block">
                  workspace_premium
                </span>
                <h4 className="font-headline text-sm font-bold text-on-surface uppercase mb-2">
                  Uniform Quality
                </h4>
                <p className="font-body text-[13px] text-secondary leading-relaxed">
                  Every component is inspected to ensure it meets ISO 9001:2015
                  engineering specifications.
                </p>
              </div>
            </div>

            {/* Right side: Core messaging explanation */}
            <div className="w-full lg:w-[50%] space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-[2px] w-8 bg-accent" />
                <span className="font-label-caps text-[11px] text-accent tracking-[0.2em] uppercase font-bold">
                  CLIENT BENEFIT
                </span>
              </div>

              <h2 className="font-headline text-3xl md:text-5xl font-black text-on-surface uppercase tracking-tight leading-[1.05]">
                Eliminate the <br />
                Coordination Cost
              </h2>

              <p className="font-body text-base text-secondary leading-relaxed font-light">
                Arihantaa Powertech eliminates the coordination cost of working
                with multiple vendors — saving your procurement team time,
                reducing risk, and delivering a consistent quality standard
                across every product on your project.
              </p>

              <p className="font-body text-base text-secondary leading-relaxed font-light">
                Whether deploying MV switchgear or configuring critical backup
                power chains for data centers, we align dimensions, cable
                termination heights, and communication telemetry parameters
                prior to shipment, preventing on-site delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Equipment Inventory Section ────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-surface-container-low border-b border-outline-variant/30">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16">
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-8 bg-accent" />
                <span className="font-label-caps text-[11px] text-accent tracking-[0.2em] uppercase font-bold">
                  EQUIPMENT PORTFOLIO
                </span>
              </div>
              <h2 className="font-headline text-3xl md:text-5xl font-black text-on-surface uppercase tracking-tight">
                Consolidated Capital Goods
              </h2>
            </div>
            <p className="font-body text-base text-secondary max-w-sm leading-relaxed">
              Our engineering scope bridges the gap between top manufacturers
              and site-ready operations.
            </p>
          </div>

          {/* Zero-gap columns layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-outline-variant/30 bg-white gap-0 shadow-md">
            {capitalGoodsList.map((item, idx) => {
              const CardContent = (
                <div className="space-y-4">
                  <span className="material-symbols-outlined text-accent text-[28px] md:text-[32px] group-hover:scale-110 transition-transform duration-300 block">
                    {item.icon}
                  </span>
                  <h4 className="font-headline text-[17px] text-on-surface font-extrabold uppercase tracking-tight group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="font-body text-[13.5px] leading-relaxed text-secondary font-light">
                    {item.desc}
                  </p>
                </div>
              );

              const cardClass =
                "border-r border-b border-outline-variant/30 p-8 hover:bg-accent/[0.01] transition-all duration-300 group flex flex-col justify-between min-h-[220px]";

              if (item.link) {
                return (
                  <Link key={idx} to={item.link} className={cardClass}>
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
        heading="Ready to consolidate your procurement?"
        subtitle="Get in touch for a unified quotation across L&T switchgear, Lucy RMUs, transformers, and backup generators."
        primaryText="GET A CONSOLIDATED PRODUCT QUOTE"
        primaryTo="/contact?inquiry=quote&item=Consolidated%20Product%20Quote"
        outlineText="EXPLORE ALL PRODUCTS"
        outlineTo="/products"
        uppercase={true}
      />
    </div>
  );
}
