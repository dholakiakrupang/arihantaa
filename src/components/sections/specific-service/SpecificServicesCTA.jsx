import { useParams } from 'react-router-dom';
import { UnifiedCTA } from '../UnifiedCTA';

const ctaContent = {
  'spare-parts': {
    heading: 'Need genuine OEM spare parts quickly?',
    accent: 'Source with us.',
    desc: 'Our logistics network supplies high-compatibility switches, replacement filters, and batteries.',
    item: 'Spare Parts Sourcing'
  },
  'preventive-maint': {
    heading: 'Want to minimize infrastructure downtime?',
    accent: 'Schedule maintenance.',
    desc: 'We configure preventive custom SLA inspections, thermal imaging checks, and grid resilience logs.',
    item: 'Preventive Maintenance SLA'
  },
  'performance-opt': {
    heading: 'Ready to optimize your facility efficiency?',
    accent: 'Consult our experts.',
    desc: 'We analyze power paths, compute thermal loads, and tune cooling parameters to extract high PUE metrics.',
    item: 'Performance Optimization Consultation'
  },
  'remote-services': {
    heading: 'Need 24/7 dynamic remote monitoring?',
    accent: 'Deploy remote DCIM.',
    desc: 'Get instant notifications, smart telemetry gateway boards, and remote technical diagnostics.',
    item: 'Remote Monitoring Telemetry'
  },
  'project-commission': {
    heading: 'Planning a critical design-build project?',
    accent: 'Partner with us.',
    desc: 'Our senior project managers drive scheduling, installation audits, safety compliance, and commissioning.',
    item: 'Project Commissioning Brief'
  },
  'industrial-maint': {
    heading: 'Operating a heavy industrial process facility?',
    accent: 'Talk to experts.',
    desc: 'Our specialized technicians carry out rugged heavy-voltage switchgear and harsh environment audits.',
    item: 'Industrial Maintenance Audit'
  },
  'ups-battery': {
    heading: 'Need battery bank testing or replacement?',
    accent: 'Request service.',
    desc: 'We manage full battery load bank testing, capacity audits, and safe disposal compliance.',
    item: 'UPS & Battery Maintenance'
  },
  'generator': {
    heading: 'Looking to maintain your standby power setup?',
    accent: 'Schedule servicing.',
    desc: 'We audit diesel engine governors, fuel tanks, ATS switchboards, and synchronization controllers.',
    item: 'Generator & Switchgear Servicing'
  },
  'liquid-cooling': {
    heading: 'Maintaining high-density liquid cooling loops?',
    accent: 'Consult our team.',
    desc: 'We manage glycol concentration audits, secondary loop flushing, and dynamic CDU diagnostic support.',
    item: 'Liquid Cooling Loop Maintenance'
  }
};

export function SpecificServicesCTA() {
  const { categoryId } = useParams();
  const content = ctaContent[categoryId] || {
    heading: 'Need custom technical service or layout support?',
    accent: 'Talk to experts.',
    desc: 'Our engineers compile layout drawings, preventative maintenance contracts, and safety protocols.',
    item: 'Custom Engineering Service'
  };

  return (
    <UnifiedCTA 
      heading={content.heading}
      accent={content.accent}
      subtitle={content.desc}
      primaryText="CONSULT AN EXPERT"
      primaryTo={`/contact?inquiry=support&item=${encodeURIComponent(content.item)}`}
      outlineText="VIEW ALL SERVICES"
      outlineTo="/services"
    />
  );
}
