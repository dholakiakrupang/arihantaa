import { ServicesHero } from "../components/sections/services/ServicesHero";
import { ServicesStickyNav } from "../components/sections/services/ServicesStickyNav";
import { ServiceDetail } from "../components/sections/services/ServiceDetail";
import { EpcLifecycleSection } from "../components/sections/services/EpcLifecycleSection";
import { ProcessSection } from "../components/sections/services/ProcessSection";
import { UnifiedCTA } from "../components/sections/UnifiedCTA";

export function Services() {
  const servicesData = [
    {
      id: "mepf-consultancy",
      eyebrow: "01 / SERVICE",
      title: "MEPF Consultancy",
      description: [
        "Integrated Mechanical, Electrical, Plumbing, and Fire Protection consultancy services for government, industrial, commercial, healthcare, and smart city projects across India.",
        "From precision HVAC load modeling and electrical load profiling to plumbing network design and NBC-compliant fire protection — all coordinated under BIM Level 2 frameworks.",
      ],
      features: [
        "Mechanical & HVAC System Design",
        "Electrical Load Profiling & Optimization",
        "Plumbing & PHE Infrastructure",
        "Fire Protection (NBC & TAC Compliant)",
        "BIM Level 2 Coordination",
        "LEED & IGBC Energy Modeling",
      ],
      imageSrc: "/images/philosophy-rigor.png",
      imageAlt: "MEPF consultancy services",
      isReversed: false,
      bgClass: "bg-surface",
      serviceTo: "/solutions/epc-mepf",
    },
    {
      id: "epc-project-solutions",
      eyebrow: "02 / SERVICE",
      title: "EPC Project Solutions",
      description: [
        "Turnkey design-build electrical EPC contracting with Class A Electrical Execution License for government, PSU, and private sector infrastructure projects.",
        "From HT/LT substation erection up to 66kV to building electrification — complete site execution supervised by certified engineers under strict safety and quality standards.",
      ],
      features: [
        "Class A Electrical Execution License",
        "HT/LT Substations up to 66kV",
        "Turnkey Electrical Infrastructure",
        "DG Installation & Commissioning",
        "Government & PSU Projects",
        "Building Electrification Works",
      ],
      imageSrc: "/images/project-industrial.png",
      imageAlt: "EPC contracting execution",
      isReversed: true,
      bgClass: "bg-surface-container-low",
      serviceTo: "/solutions/epc-mepf",
    },
    {
      id: "vertiv-partner",
      eyebrow: "03 / SERVICE",
      title: "Vertiv Partner",
      description: [
        "Authorized Vertiv Channel Partner supplying enterprise-grade Liebert online double-conversion UPS networks, modular DC systems, and high-density precision thermal coolers.",
        "Engineering alignment, certified deployment support, and preventive AMC contract operations directly synchronized with Vertiv's official global standards.",
      ],
      features: [
        "Authorized Vertiv Channel Partner",
        "Liebert Online Double-Conversion UPS",
        "Modular Telecom DC Power Systems",
        "Precision Cooling & Thermal Management",
        "Factory Acceptance Testing Support",
        "Preventive Maintenance AMC Contracts",
      ],
      imageSrc: "/images/project-data-center.png",
      imageAlt: "Vertiv Authorized Partner",
      isReversed: false,
      bgClass: "bg-surface",
      serviceTo: "/partners/vertiv",
    },
    {
      id: "capital-goods-supply",
      eyebrow: "04 / SERVICE",
      title: "Capital Goods Supply",
      description: [
        "Consolidated capital goods procurement covering high-voltage switchgear panel boards, ring main units, compact substations, power transformers, and custom structural enclosures.",
        "Direct OEM supply channels and Virtual JV arrangements (including L&T panels with Synchro Electricals) designed to reduce project lead times and billing overheads.",
      ],
      features: [
        "L&T Switchgear Panels (Virtual JV)",
        "Lucy Electric RMU Switchgear Boards",
        "Lucy Electric CSS Compact Substations",
        "HT/LT Distribution Transformers",
        "IP-Rated Custom Enclosure Frames",
        "Consolidated Purchase Order Billing",
      ],
      imageSrc: "/images/products/Services-Generator-Switchgear-Services.png",
      imageAlt: "Capital Goods Supply",
      isReversed: true,
      bgClass: "bg-surface-container-low",
      serviceTo: "/solutions/capital-goods",
    },
  ];

  return (
    <>
      <ServicesHero />
      <ServicesStickyNav />

      <div id="services">
        {servicesData.map((service) => (
          <ServiceDetail key={service.id} {...service} />
        ))}
      </div>

      <EpcLifecycleSection />

      <ProcessSection />

      <UnifiedCTA
        heading="Ready to discuss your project?"
        subtitle="Get in touch for a free consultation."
        primaryText="CONTACT US"
        primaryTo="/contact"
        outlineText="VIEW PRODUCTS"
        outlineTo="/products"
        uppercase={true}
      />
    </>
  );
}
