import { motion } from "framer-motion";

export function Partnerships({ isHome = false }) {
  const partners = [
    {
      title: "Class A Licensed Contractor",
      subtitle: "Parent Company Alliance",
      badge: "Virtual JV Alliance",
      icon: "verified_user",
      desc: "Arihantaa Powertech has entered into a strategic Virtual Joint Venture with a Class A Government-Licensed Electrical Contractor — our parent company partnership. This alliance enables us to undertake large-scale government and institutional electrical infrastructure projects, ensuring full statutory compliance, financial credibility, and execution capability at every scale.",
      stats: [
        { label: "Compliance", value: "Class 'A'" },
        { label: "Operations", value: "Pan-India" },
        { label: "Voltage class", value: "Up to 66kV" },
      ],
      link: null,
    },
    {
      title: "Synchro Electricals Pvt. Ltd.",
      subtitle: "TTA Panel Manufacturing & Supply",
      badge: "Virtual JV Alliance",
      icon: "handshake",
      desc: "Arihantaa Powertech has a Virtual Joint Venture with Synchro Electricals Pvt. Ltd. — one of India's trusted electrical panel manufacturers with 30+ premium products and 500+ delivered projects powering 5GW+ solar capacity across India. Through this alliance, we offer L&T Brand TTA Panels backed by Synchro's ISO-standard manufacturing and technical support.",
      stats: [
        { label: "Premium Products", value: "30+" },
        { label: "Delivered Projects", value: "500+" },
        { label: "Solar Capacity", value: "5GW+" },
      ],
      link: "https://synchroelectricals.com",
    },
  ];

  if (isHome) {
    // Creative homepage design: Asymmetric layout, ambient dark lighting, premium interactive hover glow.
    return (
      <section
        id="partnerships"
        className="py-16 sm:py-20 md:py-28 lg:py-32 bg-inverse-surface text-white relative overflow-hidden"
      >
        {/* Ambient Glow */}
        <div className="absolute top-1/4 right-0 w-[40%] h-[40%] max-w-[768px] max-h-[768px] rounded-full bg-accent/10 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-[40%] h-[40%] max-w-[768px] max-h-[768px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-16 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-16 md:mb-24">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-8 bg-accent" />
                <span className="font-label-caps text-[11px] text-accent tracking-[0.22em] uppercase font-bold">
                  Strategic Synergy
                </span>
              </div>
              <h2 className="font-headline text-[30px] sm:text-[38px] md:text-[48px] lg:text-[60px] leading-[1.05] sm:leading-[1.0] font-black tracking-tighter uppercase">
                Strategic <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">
                  Partnerships.
                </span>
              </h2>
            </div>
            <p className="font-body text-[13px] sm:text-[14px] md:text-[15px] text-white/60 max-w-sm leading-relaxed">
              Amplifying our capabilities through key joint ventures and
              alliances to deliver scale, speed, and technical compliance across
              India.
            </p>
          </div>

          {/* Creative Grid layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {partners.map((partner, idx) => {
              const CardTag = partner.link ? "a" : "div";
              return (
                <motion.div
                  key={idx}
                  className="relative flex flex-col justify-between border border-white/10 bg-white/[0.02] hover:border-accent/30 hover:bg-white/[0.03] transition-all duration-500 rounded-none overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.65,
                    delay: idx * 0.15,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                >
                  <CardTag
                    href={partner.link || undefined}
                    target={partner.link ? "_blank" : undefined}
                    rel={partner.link ? "noopener noreferrer" : undefined}
                    className={`group p-5 sm:p-8 md:p-12 flex flex-col justify-between h-full w-full ${partner.link ? "cursor-pointer" : "cursor-default"}`}
                  >
                    {/* Top-right arrow badge — appears on hover if link exists */}
                    {partner.link && (
                      <div
                        className="absolute top-0 right-0 w-14 h-14 bg-accent z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                      >
                        <span
                          className="material-symbols-outlined text-on-primary absolute top-2 right-2 !text-[16px]"
                          style={{ fontSize: "16px" }}
                        >
                          arrow_outward
                        </span>
                      </div>
                    )}

                    <div>
                      <div className="flex items-center justify-between mb-5 sm:mb-6 md:mb-8">
                        <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-accent text-[32px]">
                            {partner.icon}
                          </span>
                          <span className="font-label-caps text-[9px] bg-accent/10 border border-accent/20 text-accent px-2.5 py-1 uppercase tracking-wider font-bold">
                            {partner.badge}
                          </span>
                        </div>
                      </div>

                      <h3 className="font-headline text-xl sm:text-2xl md:text-3xl font-black text-white mb-1.5 sm:mb-2 group-hover:text-accent transition-colors duration-300 uppercase">
                        {partner.title}
                      </h3>
                      <p className="font-label-caps text-[9px] sm:text-[10px] text-white/40 tracking-widest uppercase mb-4 sm:mb-6 font-bold">
                        {partner.subtitle}
                      </p>

                      <p className="font-body text-[13px] sm:text-[14px] text-white/60 leading-relaxed mb-6 sm:mb-8 md:mb-10 group-hover:text-white/80 transition-colors duration-300">
                        {partner.desc}
                      </p>
                    </div>

                    {/* Specs Table inside the card */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 border border-white/10 mt-auto bg-black/20">
                      {partner.stats.map((stat, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-2.5 sm:p-3 md:p-4 flex flex-row sm:flex-col justify-between sm:justify-start gap-1 sm:gap-1.5 border-b sm:border-b-0 sm:border-r border-white/10 last:border-0 hover:bg-accent/[0.02] transition-colors duration-300"
                        >
                          <span className="font-label-caps text-[7.5px] sm:text-[8px] text-white/40 tracking-wider uppercase font-bold">
                            {stat.label}
                          </span>
                          <span className="font-headline text-[13px] sm:text-[14px] md:text-[15px] font-black text-white">
                            {stat.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardTag>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  // Standard clean About page version
  return (
    <section
      id="partnerships"
      className="py-16 md:py-24 bg-surface border-t border-outline-variant/30"
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-[2px] w-8 bg-accent" />
          <span className="font-label-caps text-[11px] text-accent tracking-[0.22em] uppercase font-bold">
            Alliances
          </span>
        </div>
        <h2 className="font-headline text-4xl md:text-6xl font-bold mb-16 uppercase tracking-tight">
          Strategic Partnerships
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-l border-outline-variant/30 gap-0">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              className="border-r border-b border-outline-variant/30 p-8 md:p-12 hover:bg-accent/[0.01] transition-all duration-300 flex flex-col justify-between bg-surface rounded-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-accent text-[30px]">
                      {partner.icon}
                    </span>
                    <span className="font-label-caps text-[9px] bg-accent/5 border border-accent/15 text-accent px-2.5 py-1 uppercase tracking-wider font-bold whitespace-nowrap">
                      {partner.badge}
                    </span>
                  </div>
                  {partner.link && (
                    <a
                      href={partner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary/50 hover:text-accent transition-colors duration-300 flex items-center gap-1.5"
                    >
                      <span className="font-label-caps text-[9px] tracking-wider uppercase font-bold">
                        Website
                      </span>
                      <span className="material-symbols-outlined text-sm">
                        open_in_new
                      </span>
                    </a>
                  )}
                </div>

                <h3 className="font-headline text-[22px] md:text-[28px] font-black text-on-surface mb-1 uppercase tracking-tight">
                  {partner.title}
                </h3>
                <p className="font-label-caps text-[10px] text-secondary/60 tracking-widest uppercase mb-5 font-bold">
                  {partner.subtitle}
                </p>
                <p className="font-body text-[14px] text-secondary leading-relaxed mb-8">
                  {partner.desc}
                </p>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 border border-outline-variant/20 bg-surface-container-low/50 mt-auto">
                {partner.stats.map((stat, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 sm:p-4 flex flex-row sm:flex-col justify-between sm:justify-start gap-1 sm:gap-1.5 border-b sm:border-b-0 sm:border-r border-outline-variant/20 last:border-0 hover:bg-accent/[0.015] transition-colors duration-300"
                  >
                    <span className="font-label-caps text-[8px] text-secondary/50 tracking-wider uppercase block font-bold">
                      {stat.label}
                    </span>
                    <span className="font-body text-[13px] sm:text-[14px] font-bold text-on-surface">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
