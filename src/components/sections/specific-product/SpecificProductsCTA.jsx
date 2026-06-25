import { useParams } from 'react-router-dom';
import { UnifiedCTA } from '../UnifiedCTA';

const ctaContent = {
  'ups': {
    heading: 'Ready to size your UPS redundancy?',
    accent: 'Partner with our team.',
    desc: 'Our engineers will help you calculate system loads, capacity, and battery backup configurations.',
    item: 'UPS System Sizing'
  },
  'lt-tta-panel': {
    heading: 'Need a Triple Throw Automatic Transfer Switch?',
    accent: 'Request a quote.',
    desc: 'Get L&T TTA Panels from 63A to 4000A — supplied through our Virtual JV with Synchro Electricals.',
    item: 'L&T TTA Panel Quote'
  },
  'lucy-rmu': {
    heading: 'Looking for compact medium voltage switchgear?',
    accent: 'Enquire today.',
    desc: 'Lucy Electric Ring Main Units — sealed, maintenance-free, IEC 62271-200 compliant.',
    item: 'Lucy RMU Enquiry'
  },
  'lucy-css': {
    heading: 'Need a factory-assembled compact substation?',
    accent: 'Talk to our team.',
    desc: 'Lucy Electric CSS integrating MV switchgear, transformer, and LV distribution in one enclosure.',
    item: 'Lucy CSS Enquiry'
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
