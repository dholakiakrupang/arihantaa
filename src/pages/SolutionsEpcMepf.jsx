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

export function SolutionsEpcMepf() {
  const epcServices = [
    {
      name: "Turnkey Electrical Infrastructure Projects",
      desc: "End-to-end grid integration and power distribution setup from planning to final switch-on.",
    },
    {
      name: "HT/LT Works & Substation Erection",
      desc: "Design, foundation, and commissioning of up to 66kV outdoor and indoor substations.",
    },
    {
      name: "Diesel Generator Installation & Commissioning",
      desc: "Placement, exhaust routing, acoustic synchronization, and fuel grid hookups.",
    },
    {
      name: "Building Electrification & Internal Works",
      desc: "Power distribution boards, internal cabling runs, cable trays, and terminal switch installation.",
    },
    {
      name: "UPS & Critical Power Installation",
      desc: "SITC of Liebert UPS units, battery banks, bypass cabinets, and static transfer switches.",
    },
    {
      name: "Government & PSU Projects (Class A JV)",
      desc: "Statutory compliant electrical works executed via our gov-approved Class A Licensed parent alliance.",
    },
  ];

  const mepfServices = [
    {
      name: "M — Mechanical & HVAC",
      desc: "Precision temperature control, chiller plants, AHUs, ventilation ducting, and LEED energy modeling.",
    },
    {
      name: "E — Electrical Systems",
      desc: "HT/LT load profiling, lighting layout optimization, UPS chains, BMS monitoring, and solar grids.",
    },
    {
      name: "P — Plumbing & PHE",
      desc: "Water supply networks, sanitary drainage, rainwater harvesting, STPs, and water treatment plans.",
    },
    {
      name: "F — Fire Protection",
      desc: "Sprinkler installations, high-pressure hydrants, clean-agent suppression, alarms — NBC and TAC compliant.",
    },
  ];

  const lifecycleSteps = [
    {
      num: "01",
      name: "Feasibility Study",
      desc: "Evaluating site electrical capacity, grid connectivity potential, and basic load profiles.",
      icon: "analytics",
    },
    {
      num: "02",
      name: "Engineering Design",
      desc: "Creating BIM coordinates, single-line diagrams, schematic runs, and thermal load maps.",
      icon: "architecture",
    },
    {
      num: "03",
      name: "BOQ & Tender Docs",
      desc: "Compiling precise Bills of Quantity and technical tender sheets to prevent budget overruns.",
      icon: "description",
    },
    {
      num: "04",
      name: "Procurement & Supply",
      desc: "Routing hardware directly from certified OEMs including Vertiv, L&T, and Lucy Electric.",
      icon: "local_shipping",
    },
    {
      num: "05",
      name: "Site Execution",
      desc: "On-site installation supervised by our certified engineers under strict safety standards.",
      icon: "construction",
    },
    {
      num: "06",
      name: "Testing & Inspection",
      desc: "Conducting relays calibration, insulation resistance, and factory acceptance validation.",
      icon: "rule",
    },
    {
      num: "07",
      name: "Commissioning",
      desc: "SLA synchronization, load tests under backup conditions, and grid synchronization.",
      icon: "bolt",
    },
    {
      num: "08",
      name: "Handover & AMC",
      desc: "Passing as-built documentation, operator manuals, and starting preventative AMC runs.",
      icon: "handshake",
    },
  ];

  const targetSectors = [
    { name: "Data Centres", icon: "dns" },
    { name: "Hospitals & Healthcare", icon: "local_hospital" },
    { name: "Industrial Plants", icon: "precision_manufacturing" },
    { name: "Government Buildings", icon: "account_balance" },
    { name: "Smart Cities", icon: "emoji_transportation" },
    { name: "Renewable Energy", icon: "solar_power" },
    { name: "Commercial Complexes", icon: "corporate_fare" },
    { name: "Residential Townships", icon: "location_city" },
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
            src="/images/philosophy-rigor.png"
            alt="Engineering Site Execution"
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
                ALIGNED DESIGN & BUILD
              </span>
            </div>
            <p className="font-headline text-[20px] font-black uppercase text-white leading-tight tracking-tight max-w-[260px]">
              Turnkey Project Delivery
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
                  EPC & MEPF
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
                Complete Project Solutions <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/60">
                  — EPC & MEPF under one roof.
                </span>
              </h1>

              {/* Sub-text */}
              <p className="font-body text-[14px] sm:text-[15.5px] leading-relaxed text-white/50 mb-9 max-w-xl">
                When your engineering consultant and your EPC contractor are
                the same company, design intent and site execution are
                always aligned.{" "}
                <span className="text-white font-semibold">
                  No gaps. No blame shifting. No rework.
                </span>
              </p>

              {/* CTA Row */}
              <div className="flex flex-wrap items-center gap-5">
                <Link to="/contact?inquiry=project&item=EPC%20and%20MEPF%20Project">
                  <Button
                    variant="primary"
                    theme="dark"
                    size="lg"
                    className="rounded-none shadow-sm text-[10px] tracking-[0.2em] font-bold"
                  >
                    DISCUSS YOUR PROJECT WITH US
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* ── Differentiator / Core Message ────────────────────────── */}
      <section className="py-24 md:py-32 bg-surface border-b border-outline-variant/30 relative overflow-hidden">
        <div className="absolute top-16 right-16 pointer-events-none select-none z-0">
          <span className="text-[120px] md:text-[200px] font-headline font-black text-outline-variant/10 leading-none tracking-tighter uppercase whitespace-nowrap">
            ALIGN
          </span>
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-8 bg-accent" />
              <span className="font-label-caps text-[11px] text-accent tracking-[0.2em] uppercase font-bold">
                THE DIFFERENTIATOR
              </span>
            </div>

            <h2 className="font-headline text-3xl md:text-5xl font-black text-on-surface uppercase tracking-tight leading-[1.05]">
              Most companies do EPC OR MEPF.
              <br />
              <span className="text-accent">Arihantaa does both</span> — from
              the same team.
            </h2>

            <p className="font-body text-base md:text-lg text-secondary leading-relaxed font-light">
              By consolidating mechanical/plumbing design consultancy (MEPF) and
              electrical physical delivery (EPC) within a single engineering
              coordinate, we eliminate the classic layout translation errors
              between architects, consultants, and trade sub-contractors. We
              compile consolidated drawings (BIM coordinate plans) that match
              physical hardware dimensions exactly, mitigating site rework from
              day one.
            </p>
          </div>
        </div>
      </section>

      {/* ── Services Grid Section (EPC & MEPF Scope) ────────────────────────── */}
      <section className="py-24 md:py-32 bg-surface-container-low border-b border-outline-variant/30">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16">
          {/* Section Header */}
          <div className="mb-16 md:mb-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-6 bg-accent" />
              <span className="font-label-caps text-[10px] text-accent tracking-[0.25em] uppercase font-bold">
                CAPABILITIES | WORK SCOPE
              </span>
            </div>
            <h2 className="font-headline text-[32px] md:text-[48px] font-black text-on-surface uppercase tracking-tight">
              Scope of Delivery.
            </h2>
            <p className="font-body text-[14.5px] text-secondary leading-relaxed mt-2 max-w-xl">
              Turnkey high-voltage physical execution matched with precision
              mechanical, plumbing, and safety design engineering.
            </p>
          </div>

          {/* Zero-Gap Single-Pixel Grid Container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-l border-outline-variant/30 bg-white shadow-sm gap-0">
            {/* EPC Services Column Block */}
            <div className="flex flex-col h-full border-r border-outline-variant/30">
              <div className="p-8 md:p-10 bg-surface-container-lowest/50 border-b border-outline-variant/30 flex items-center justify-between">
                <h3 className="font-headline text-xl md:text-2xl font-black text-on-surface uppercase tracking-tight">
                  EPC Turnkey Execution
                </h3>
                <span className="font-label-caps text-[8px] bg-accent/10 border border-accent/20 text-accent px-2 py-0.5 font-bold uppercase tracking-wider">
                  PHYSICAL DELIVERY
                </span>
              </div>
              <div className="flex-grow flex flex-col">
                {epcServices.map((service, idx) => (
                  <div
                    key={idx}
                    className="p-8 border-b border-outline-variant/30 bg-white hover:bg-accent/[0.005] transition-colors duration-300 flex items-start gap-6 group flex-grow"
                  >
                    {/* Monospace Ticker Code */}
                    <span className="font-mono text-xs text-accent font-bold pt-1 select-none">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div className="space-y-1.5 flex-grow">
                      <h4 className="font-headline text-[15px] font-bold text-on-surface uppercase group-hover:text-accent transition-colors duration-300">
                        {service.name}
                      </h4>
                      <p className="font-body text-[13.5px] text-secondary leading-relaxed font-light">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* MEPF Services Column Block */}
            <div className="flex flex-col h-full">
              <div className="p-8 md:p-10 bg-surface-container-lowest/50 border-b border-outline-variant/30 flex items-center justify-between">
                <h3 className="font-headline text-xl md:text-2xl font-black text-on-surface uppercase tracking-tight">
                  MEPF Design Consultancy
                </h3>
                <span className="font-label-caps text-[8px] bg-white/[0.02] border border-outline-variant/30 text-secondary px-2 py-0.5 font-bold uppercase tracking-wider">
                  ENGINEERING DESIGN
                </span>
              </div>
              <div className="flex-grow flex flex-col">
                {mepfServices.map((service, idx) => {
                  // M, E, P, F letter extraction
                  const letter = service.name.charAt(0);
                  const restOfName = service.name.substring(1);
                  return (
                    <div
                      key={idx}
                      className="p-8 border-b border-outline-variant/30 bg-white hover:bg-accent/[0.005] transition-colors duration-300 flex items-start gap-6 group flex-grow"
                    >
                      {/* Big Monospace Letter Watermark indicator */}
                      <span className="font-headline text-3xl font-black text-accent/20 group-hover:text-accent/40 transition-colors duration-300 select-none w-8 text-center leading-none">
                        {letter}
                      </span>
                      <div className="space-y-1.5 flex-grow">
                        <h4 className="font-headline text-[15px] font-bold text-on-surface uppercase group-hover:text-accent transition-colors duration-300">
                          <span className="text-accent">{letter}</span>
                          {restOfName}
                        </h4>
                        <p className="font-body text-[13.5px] text-secondary leading-relaxed font-light">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Visual Timeline Section (EPC Lifecycle) ────────────────────────── */}
      <section className="py-24 md:py-32 bg-surface border-b border-outline-variant/30 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16">
          <div className="mb-16 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="h-[2px] w-8 bg-accent" />
              <span className="font-label-caps text-[11px] text-accent tracking-[0.2em] uppercase font-bold">
                EXECUTION TIMELINE
              </span>
            </div>
            <h2 className="font-headline text-3xl md:text-5xl font-black text-on-surface uppercase tracking-tight">
              EPC Project Lifecycle
            </h2>
            <p className="font-body text-[15px] text-secondary leading-relaxed mt-2 max-w-xl mx-auto md:mx-0">
              We manage the entire engineering, procurement, and deployment
              timeline internally to guarantee strict alignment.
            </p>
          </div>

          {/* Premium Vertical Timeline */}
          <div className="relative mt-20 max-w-5xl mx-auto">
            {/* Central Vertical Connector Line */}
            <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent/10 via-accent/40 to-accent/10 -translate-x-1/2 pointer-events-none" />

            <div className="space-y-12 md:space-y-16">
              {lifecycleSteps.map((step, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    key={idx}
                    className={`flex flex-col md:flex-row items-start relative w-full ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: idx * 0.05 }}
                  >
                    {/* Centered Timeline Marker dot */}
                    <div className="absolute left-[24px] md:left-1/2 top-1.5 -translate-x-1/2 w-8 h-8 rounded-full bg-surface border-2 border-accent flex items-center justify-center z-20 shadow-[0_0_15px_rgba(255,107,0,0.1)] hover:scale-110 hover:shadow-[0_0_20px_rgba(255,107,0,0.3)] transition-all duration-300">
                      <span className="material-symbols-outlined text-[16px] text-accent font-bold select-none">
                        {step.icon}
                      </span>
                    </div>

                    {/* Card Side */}
                    <div
                      className={`w-full md:w-[45%] pl-12 md:pl-0 ${
                        isEven
                          ? "md:pr-12 md:text-right"
                          : "md:pl-12 md:text-left"
                      }`}
                    >
                      <div className="bg-[#fafafa] dark:bg-[#121212] border border-outline-variant/30 hover:border-accent/40 p-6 md:p-8 rounded-none transition-all duration-400 hover:shadow-lg relative overflow-hidden group">
                        {/* Glow overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="relative z-10">
                          <div
                            className={`flex justify-between items-center mb-3 pb-2 border-b border-outline-variant/10 ${
                              isEven ? "flex-row-reverse" : "flex-row"
                            }`}
                          >
                            <span className="font-mono text-[11px] text-accent font-bold uppercase tracking-widest">
                              Step {step.num}
                            </span>
                            <span className="font-mono text-xs font-bold text-secondary/45 select-none">
                              {step.num}/08
                            </span>
                          </div>
                          <h4 className="font-headline text-[17px] font-black uppercase text-on-surface mb-3 group-hover:text-accent transition-colors duration-300">
                            {step.name}
                          </h4>
                          <p className="font-body text-[13.5px] leading-relaxed text-secondary font-light max-w-md inline-block">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Spacer Column for alignment */}
                    <div className="hidden md:block w-[45%]" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Target Sectors Section ────────────────────────── */}
      <section className="py-24 md:py-32 bg-surface-container-low border-b border-outline-variant/30">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16">
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-8 bg-accent" />
                <span className="font-label-caps text-[11px] text-accent tracking-[0.2em] uppercase font-bold">
                  MARKETS WE SERVE
                </span>
              </div>
              <h2 className="font-headline text-3xl md:text-5xl font-black text-on-surface uppercase tracking-tight">
                EPC + MEPF Target Sectors
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border-t border-l border-outline-variant/30 bg-white gap-0 shadow-md">
            {targetSectors.map((sector, idx) => (
              <div
                key={idx}
                className="border-r border-b border-outline-variant/30 p-8 text-center hover:bg-accent/[0.01] transition-all duration-300 group flex flex-col items-center justify-center min-h-[140px]"
              >
                <span className="material-symbols-outlined text-accent text-[32px] group-hover:scale-110 transition-transform duration-300 block mb-3">
                  {sector.icon}
                </span>
                <span className="font-headline text-sm font-bold text-on-surface uppercase tracking-tight">
                  {sector.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <UnifiedCTA
        heading="Ready to discuss your project?"
        subtitle="Connect with our technical design and turnkey execution engineers for a detailed feasibility brief."
        primaryText="DISCUSS YOUR PROJECT WITH US"
        primaryTo="/contact?inquiry=project&item=EPC%20and%20MEPF%20Project"
        outlineText="EXPLORE SOLUTIONS"
        outlineTo="/services"
        uppercase={true}
      />
    </div>
  );
}
