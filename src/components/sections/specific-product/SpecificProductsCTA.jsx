import { useParams } from 'react-router-dom';
import { UnifiedCTA } from '../UnifiedCTA';

const ctaContent = {
  'ups': {
    heading: 'Ready to size your UPS redundancy?',
    accent: 'Partner with our team.',
    desc: 'Our engineers will help you calculate system loads, capacity, and battery backup configurations.',
    item: 'UPS System Sizing'
  },
  'dc-power': {
    heading: 'Planning a high-reliability DC power setup?',
    accent: 'Enquire today.',
    desc: 'Get specialized support for telecom NOCs, rectifiers, and industrial batteries.',
    item: 'DC Power Systems'
  },
  'power-distribution': {
    heading: 'Need optimal power delivery configurations?',
    accent: 'Consult our team.',
    desc: 'Get smart PDU layout plans, busway calculations, and switchgear integrations.',
    item: 'Power Distribution Layout'
  },
  'industrial-ac-dc': {
    heading: 'Engineering for a harsh industrial facility?',
    accent: 'Talk to experts.',
    desc: 'We build rugged AC/DC systems compliant with complex utility resilience standards.',
    item: 'Industrial AC/DC Systems'
  },
  'liquid-cooling': {
    heading: 'Deploying high-density compute clusters?',
    accent: 'Adopt liquid cooling.',
    desc: 'We assist with CDUs, rear-door heat exchangers, and secondary loop design configurations.',
    item: 'Liquid Cooling CDUs'
  },
  'enclosure-cooling': {
    heading: 'Need precision climate control for panels?',
    accent: 'Talk to experts.',
    desc: 'Our enclosure coolers preserve technical circuitry against heat stress and dust ingress.',
    item: 'Enclosure Cooling Design'
  },
  'integrated-solutions': {
    heading: 'Planning a modular micro data center?',
    accent: 'Collaborate with us.',
    desc: 'We integrate server cabinets, in-row cooling, smart power, and digital fire suppression.',
    item: 'Integrated Micro Data Center'
  },
  'digital-infrastructure': {
    heading: 'Ready to implement remote DCIM telemetry?',
    accent: 'Enquire today.',
    desc: 'Deploy environmental sensors, smart monitoring gateheads, and early warnings.',
    item: 'Digital Infrastructure DCIM'
  }
};

export function SpecificProductsCTA() {
  const { categoryId } = useParams();
  const content = ctaContent[categoryId] || {
    heading: 'Ready to configure your technical system?',
    accent: 'Partner with us.',
    desc: 'Our engineering specialists are ready to consult on custom configurations and capacities.',
    item: 'Technical Equipment Specifications'
  };

  return (
    <UnifiedCTA 
      heading={content.heading}
      accent={content.accent}
      subtitle={content.desc}
      primaryText="START TECHNICAL BRIEF"
      primaryTo={`/contact?inquiry=quote&item=${encodeURIComponent(content.item)}`}
      outlineText="VIEW ALL PRODUCTS"
      outlineTo="/products"
    />
  );
}
