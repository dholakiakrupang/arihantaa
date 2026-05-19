import { ServicesHero } from '../components/sections/services/ServicesHero';
import { ServicesStickyNav } from '../components/sections/services/ServicesStickyNav';
import { ServiceDetail } from '../components/sections/services/ServiceDetail';
import { ProcessSection } from '../components/sections/services/ProcessSection';
import { FinalCTA } from '../components/sections/services/FinalCTA';

export function Services() {
  const servicesData = [
    {
      id: "spare-parts",
      eyebrow: "01 / Spare Parts",
      title: "Spare Parts & Parts Management",
      description: ["Genuine OEM and high-compatibility spare parts sourced globally to minimise downtime across your critical infrastructure.", "Our inventory management system ensures the right part is available at the right time, reducing MTTR and operational costs significantly."],
      features: ["OEM Sourcing","Inventory Management","Emergency Dispatch","Cross-Brand Compatibility","Lifecycle Tracking","Quality Certification"],
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXTaHZF2s9EkzujqLkbFGry7vOKPsNt08rADHH8cldx-PLWVBfX6u0hGiYUoZNcAzNC7Ehmw_-X_0QdDoUMyXBrLLW4L3pc4TwlDscR-6KnEo4MAuCKMiAUOkXHJK7_poGE5pNs4aOMu6CiUavm8gA9runwJkVJYn8vVZtdTud_VMyk0H3whG-zl4t0dvS1KnNhOUcLUA4dQzngEUerTrLQRsMQJ-ii3RggnHmSOMnNymRLZzcoxHoPn8v4HmkDrrCIGwITFcCyr4",
      imageAlt: "Spare parts warehouse", isReversed: false, bgClass: "bg-surface"
    },
    {
      id: "preventive-maint",
      eyebrow: "02 / Maintenance",
      title: "Preventive Maintenance",
      description: ["Structured, scheduled maintenance programmes that identify and resolve potential failures before they impact operations.", "Our certified engineers follow OEM-aligned checklists to extend equipment life and maintain warranty validity across all systems."],
      features: ["Scheduled Inspections","Thermal Imaging","Load Testing","Battery Health Checks","Firmware Updates","Compliance Reports"],
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5FW8nf272gXSM_1xLQR9lKoi7xId3VLHIZFPFzZDDsZz-nkZBK2rLtsZtKJkruCgzVDafIT8sh-T2S4pquUpCFv5xVyBphjPjDfvrRtJhzcdElkAzpWf66KnClNbPqHBo7FDSKuqauWqmdmdjkPyWjklLYf1pyhqrHlKMFP7aTOT40qcirHI1QrKknjtv-vRFHkwL6Lqe96kLA6WOsS23v5Vqw3Ww0Ukxbs38PwDFBS-xum-nzeDdwKNE9LRjMiiG71SmAJODIrk",
      imageAlt: "Preventive maintenance engineer", isReversed: true, bgClass: "bg-surface-container-low"
    },
    {
      id: "performance-opt",
      eyebrow: "03 / Optimization",
      title: "Performance Optimization Services",
      description: ["Data-driven performance tuning that extracts maximum efficiency from existing power and cooling infrastructure.", "We use real-time telemetry and AI-assisted analytics to identify bottlenecks and implement precision improvements."],
      features: ["Efficiency Benchmarking","Load Balancing","PUE Improvement","Power Factor Correction","Capacity Planning","ROI Reporting"],
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAH-XlVfiUims4FuvWQyfp3g5yMEYAXu5W8L_8uYh3Ih-vc25CLSwk9L91FOzpyjX9h727SvBUjEjzTBhCUqwDEK-faQqg481UUBnRtczffpJoLP1anXLQSjSbywiM4hLy9c-vAl8gzbbFVe31jx7-8HSB9kHwjLH0vRwKB0OyvY4pt3NC36MyAoa6pk4iMwlo0D_85spL5SOVT7mbLmZ7U2qyW31OsCPbgwf07HCkxHWpuRz8t4jdBA3Ls1Smb_5Z8nhRvbQ7fLOY",
      imageAlt: "Performance optimization dashboard", isReversed: false, bgClass: "bg-surface"
    },
    {
      id: "remote-services",
      eyebrow: "04 / Remote",
      title: "Remote Services",
      description: ["24/7 remote monitoring and support providing instant visibility into your infrastructure health from anywhere in the world.", "Our NOC team responds to alerts in under 15 minutes, resolving up to 70% of issues without an on-site visit."],
      features: ["24/7 NOC Monitoring","Remote Diagnostics","Alert Management","Firmware Patching","SLA Reporting","Secure VPN Access"],
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBs7GWrmO_Y24aIx0d_M368iwbT45iHy_7DqpZ7nch4fGcArhsG3Sgv3kEZJrQgufY4RuhkBeG0nzAVuZdo9xFBim7nRUdHZtnsUXXvA4N-7-sezh59f9vX1KfadhdMLz0Uj-yIVnI5c3gseMueQqUedxsfbbqL5ecgnT83a3xHXTG3h3mwsSqZyjqYaqua9ahuVxPAZbAQY0-mdX7ZKunjvj7d0CRfydIP5nD9glow6KMU8SoKRHqFaWIZB41-0SRYLfF8zA12KHQ",
      imageAlt: "Remote monitoring operations centre", isReversed: true, bgClass: "bg-surface-container-low"
    },
    {
      id: "project-commission",
      eyebrow: "05 / Commissioning",
      title: "Project & Commissioning Services",
      description: ["End-to-end project management from design to handover, ensuring every system is commissioned to exacting standards.", "Our commissioning engineers validate each subsystem against design specifications before issuing certificates of completion."],
      features: ["Site Assessment","Project Management","System Integration","FAT & SAT Testing","As-Built Drawings","Handover Training"],
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWkM0313qH3jG3iM4OsZ2M-4GN1J7fRO0UJ14K2Q8XtcL-BJkvnDzsHuDmkTlvQ7wJvlRMCi5sG7QfE7O4oD8GnQP1KN8oQKFARjj_bGo59BlFAh9XVMMB9YZ01EjyV8JwgEEy9s224FQplLl56xyOPwCN6bucutiTWLo4Ouqxu1RQvNY6ukTThfapNJyVuB-OF7zjkVeR5IbbE-W3iSB9Uk-w3OiuJA2T0mSvBp4XTAdm7mZXGJqIVpuMcBTF2YyvDeXCPpZV_rw",
      imageAlt: "Project commissioning team", isReversed: false, bgClass: "bg-surface"
    },
    {
      id: "industrial-maint",
      eyebrow: "06 / Industrial",
      title: "Preventive Maintenance for Industrial",
      description: ["Specialised maintenance programmes for heavy industrial environments including manufacturing plants and process facilities.", "Our industrial-certified engineers handle high-voltage equipment, rotating machinery, and SCADA-integrated systems."],
      features: ["Vibration Analysis","Oil Sampling","Motor Testing","SCADA Maintenance","HV Equipment Service","Predictive Analytics"],
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_j1iuQ0YtLcldt8JSx_pL6Tr9jTReXCQyDLiBoT883DbJdFwpvS0uIH5j1tsqxDFBn9yn--_x5SDOgD2EF8M5dOAiaswQvtTy3wvyvWIlkT2x_gherOFwopyYImM1vR5Gkff_s4XV7nix9sUwMAJmmhp3xAlRN2ng0MXp71M7fTVapJOpPxVRGQTLUrmy0WqtMwCt-kxvdjV_FCyaK69cakhxd2A-NWvgzj88WdtSdwt2cLmkiF77x7b5r4E9f_OWFzysDvuHiXw",
      imageAlt: "Industrial maintenance engineer", isReversed: true, bgClass: "bg-surface-container-low"
    },
    {
      id: "ups-battery",
      eyebrow: "07 / UPS & Battery",
      title: "UPS & Battery Services",
      description: ["Comprehensive lifecycle management for UPS systems and battery banks ensuring maximum backup runtime and reliability.", "From capacity testing to full battery replacement, our certified technicians keep your power protection at peak performance."],
      features: ["Battery Testing","Capacity Verification","Cell Replacement","UPS Servicing","Runtime Calculation","Disposal Compliance"],
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXTaHZF2s9EkzujqLkbFGry7vOKPsNt08rADHH8cldx-PLWVBfX6u0hGiYUoZNcAzNC7Ehmw_-X_0QdDoUMyXBrLLW4L3pc4TwlDscR-6KnEo4MAuCKMiAUOkXHJK7_poGE5pNs4aOMu6CiUavm8gA9runwJkVJYn8vVZtdTud_VMyk0H3whG-zl4t0dvS1KnNhOUcLUA4dQzngEUerTrLQRsMQJ-ii3RggnHmSOMnNymRLZzcoxHoPn8v4HmkDrrCIGwITFcCyr4",
      imageAlt: "UPS battery bank servicing", isReversed: false, bgClass: "bg-surface"
    },
    {
      id: "generator",
      eyebrow: "08 / Generator",
      title: "Generator & Switchgear Services",
      description: ["Full-spectrum generator and switchgear servicing to maintain reliable emergency power and safe electrical distribution.", "Our engineers handle everything from routine load testing to complete overhauls of diesel generators and HV switchgear panels."],
      features: ["Load Bank Testing","Generator Overhaul","ATS Servicing","Switchgear Maintenance","Fuel Management","Exhaust Compliance"],
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5FW8nf272gXSM_1xLQR9lKoi7xId3VLHIZFPFzZDDsZz-nkZBK2rLtsZtKJkruCgzVDafIT8sh-T2S4pquUpCFv5xVyBphjPjDfvrRtJhzcdElkAzpWf66KnClNbPqHBo7FDSKuqauWqmdmdjkPyWjklLYf1pyhqrHlKMFP7aTOT40qcirHI1QrKknjtv-vRFHkwL6Lqe96kLA6WOsS23v5Vqw3Ww0Ukxbs38PwDFBS-xum-nzeDdwKNE9LRjMiiG71SmAJODIrk",
      imageAlt: "Industrial generator servicing", isReversed: true, bgClass: "bg-surface-container-low"
    },
    {
      id: "liquid-cooling",
      eyebrow: "09 / Liquid Cooling",
      title: "Liquid Cooling Services",
      description: ["Advanced liquid cooling installation, commissioning, and maintenance for ultra-high-density compute environments.", "We support direct liquid cooling (DLC), rear-door heat exchangers, and immersion cooling systems for next-generation data centres."],
      features: ["DLC Installation","Immersion Cooling","Coolant Management","Leak Detection","Thermal Monitoring","System Retrofitting"],
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBs7GWrmO_Y24aIx0d_M368iwbT45iHy_7DqpZ7nch4fGcArhsG3Sgv3kEZJrQgufY4RuhkBeG0nzAVuZdo9xFBim7nRUdHZtnsUXXvA4N-7-sezh59f9vX1KfadhdMLz0Uj-yIVnI5c3gseMueQqUedxsfbbqL5ecgnT83a3xHXTG3h3mwsSqZyjqYaqua9ahuVxPAZbAQY0-mdX7ZKunjvj7d0CRfydIP5nD9glow6KMU8SoKRHqFaWIZB41-0SRYLfF8zA12KHQ",
      imageAlt: "Liquid cooling infrastructure", isReversed: false, bgClass: "bg-surface"
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
      <ProcessSection />
      <FinalCTA />
    </>
  );
}
