import { ServicesHero } from '../components/sections/services/ServicesHero';
import { ServicesStickyNav } from '../components/sections/services/ServicesStickyNav';
import { ServiceDetail } from '../components/sections/services/ServiceDetail';
import { ProcessSection } from '../components/sections/services/ProcessSection';
import { UnifiedCTA } from '../components/sections/UnifiedCTA';

export function Services() {
  const servicesData = [
    {
      id: "electrical-infra",
      eyebrow: "01 / Supply & SITC",
      title: "Electrical Infrastructure & Supply",
      description: [
        "Supply, commissioning and support of critical electrical components through trusted joint-venture and brand partnerships.",
        "We deliver L&T TTA Panels, Lucy RMU, and Lucy CSS assemblies with full technical alignment, ensuring high compliance and lifetime backup."
      ],
      features: ["L&T Brand TTA Panels", "Lucy Brand RMU (11kV/33kV)", "Lucy Brand CSS Substations", "Brand Supply & Erection", "Joint-Venture Partnerships", "Technical SITC Operations"],
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXTaHZF2s9EkzujqLkbFGry7vOKPsNt08rADHH8cldx-PLWVBfX6u0hGiYUoZNcAzNC7Ehmw_-X_0QdDoUMyXBrLLW4L3pc4TwlDscR-6KnEo4MAuCKMiAUOkXHJK7_poGE5pNs4aOMu6CiUavm8gA9runwJkVJYn8vVZtdTud_VMyk0H3whG-zl4t0dvS1KnNhOUcLUA4dQzngEUerTrLQRsMQJ-ii3RggnHmSOMnNymRLZzcoxHoPn8v4HmkDrrCIGwITFcCyr4",
      imageAlt: "Electrical infrastructure distribution panel", isReversed: false, bgClass: "bg-surface"
    },
    {
      id: "mepf-consultancy",
      eyebrow: "02 / Design & Consulting",
      title: "MEPF Consultancy",
      description: [
        "Integrated Mechanical, Electrical, Plumbing, and Fire Protection engineering designs tailored for complex projects.",
        "Our engineering team delivers code-compliant, BIM-ready models from concept layout to final commissioning, strictly adhering to NBC and LEED standards."
      ],
      features: ["Mechanical HVAC Systems", "HT/LT Electrical Distribution", "Plumbing & Drainage Design", "Fire Protection & Suppression", "NBC Code Compliance", "LEED & GRIHA Green Building"],
      tags: [
        "Residential & Housing",
        "Commercial & IT Parks",
        "Hospitals & Healthcare",
        "Hotels & Hospitality",
        "Industrial Facilities",
        "Educational Institutions",
        "Data Centres",
        "Infrastructure Projects"
      ],
      imageSrc: "/images/project-hospital.png",
      imageAlt: "MEP engineering design dashboard", isReversed: true, bgClass: "bg-surface-container-low"
    },
    {
      id: "epc-contracting",
      eyebrow: "03 / Execution",
      title: "EPC Contracting",
      description: [
        "Large-scale government and institutional project execution delivered via a virtual joint venture with a Class A Licensed Contractor.",
        "We manage full-scope procurement, site deployment, and installation with single-point accountability and strict compliance guidelines."
      ],
      features: ["Government Tender Execution", "Institutional Project Delivery", "Virtual JV Synergy", "Class A Licensed Partnering", "Full-Scope Procurement", "Grid Integration Erection"],
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWkM0313qH3jG3iM4OsZ2M-4GN1J7fRO0UJ14K2Q8XtcL-BJkvnDzsHuDmkTlvQ7wJvlRMCi5sG7QfE7O4oD8GnQP1KN8oQKFARjj_bGo59BlFAh9XVMMB9YZ01EjyV8JwgEEy9s224FQplLl56xyOPwCN6bucutiTWLo4Ouqxu1RQvNY6ukTThfapNJyVuB-OF7zjkVeR5IbbE-W3iSB9Uk-w3OiuJA2T0mSvBp4XTAdm7mZXGJqIVpuMcBTF2YyvDeXCPpZV_rw",
      imageAlt: "EPC project execution site", isReversed: false, bgClass: "bg-surface"
    },
    {
      id: "project-supervision",
      eyebrow: "04 / On-Site Supervision",
      title: "Project Supervision & Commissioning",
      description: [
        "On-site technical supervision, testing, commissioning support, and comprehensive handover documentation.",
        "Our certified engineers conduct factory acceptance tests (FAT), site acceptance tests (SAT), and relay calibration to guarantee system integrity."
      ],
      features: ["On-Site Technical Supervision", "FAT & SAT Testing Support", "Relay Calibration & Setting", "Handover Documentation", "As-Built Drawing Verification", "SLA & DLP Maintenance Support"],
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5FW8nf272gXSM_1xLQR9lKoi7xId3VLHIZFPFzZDDsZz-nkZBK2rLtsZtKJkruCgzVDafIT8sh-T2S4pquUpCFv5xVyBphjPjDfvrRtJhzcdElkAzpWf66KnClNbPqHBo7FDSKuqauWqmdmdjkPyWjklLYf1pyhqrHlKMFP7aTOT40qcirHI1QrKknjtv-vRFHkwL6Lqe96kLA6WOsS23v5Vqw3Ww0Ukxbs38PwDFBS-xum-nzeDdwKNE9LRjMiiG71SmAJODIrk",
      imageAlt: "Technical commissioning and testing", isReversed: true, bgClass: "bg-surface-container-low"
    }
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

      <ProcessSection />

      <UnifiedCTA 
        heading="Ready to discuss your project?"
        accent="Get in touch for a free consultation on products, MEPF design, or EPC contracting."
        subtitle="Talk to our senior engineering specialists about specifications, layouts, and load requirements."
        primaryText="GET FREE CONSULTATION"
        primaryTo="/contact"
        outlineText="EXPLORE COMPLETED PROJECTS"
        outlineTo="/projects"
        uppercase={true}
      />
    </>
  );
}
