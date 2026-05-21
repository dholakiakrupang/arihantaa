import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { cn } from '../../lib/utils';

export function EngineeredSolutionCard({
  id,
  categoryId,
  tag,
  title,
  scoreLabel,
  scorePercentage,
  description,
  features,
  stats,
  imageSrc,
  imageAlt,
  primaryAction,
  secondaryAction,
  index = 0,
  models = [],
  type = 'product', // 'product' | 'service'
  slaPlans = [] // for service variant
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [unitSystem, setUnitSystem] = useState('metric'); // 'metric' | 'imperial'

  const detailUrl = type === 'service' 
    ? `/services/${categoryId || 'spare-parts'}/${id}` 
    : `/products/${categoryId || 'ups'}/${id}`;

  const convertWeight = (weightStr, system) => {
    if (!weightStr) return '';
    if (system === 'metric') return weightStr;
    const numbers = weightStr.match(/\d+/g);
    if (!numbers) return weightStr;
    const converted = numbers.map(num => Math.round(parseInt(num, 10) * 2.20462));
    if (converted.length === 2) {
      return `${converted[0]}–${converted[1]} lbs`;
    } else if (converted.length === 1) {
      return `${converted[0]} lbs`;
    }
    return weightStr;
  };

  // Default models for demonstration if none are provided
  const displayModels = models.length > 0 ? models : [
    { 
      name: `${title} - Base`, 
      capacity: "6–40 kVA", 
      inputVoltage: "220V / 400V", 
      outputVoltage: "220V / 400V",
      efficiency: `${scorePercentage || 95}%`, 
      height: 1710, // mm
      width: 600, // mm
      depth: 850, // mm
      weight: "410–514 kg" 
    },
    { 
      name: `${title} - Pro`, 
      capacity: "10–40 kVA", 
      inputVoltage: "220V / 400V", 
      outputVoltage: "220V / 400V",
      efficiency: `${(scorePercentage || 95) + 2}%`, 
      height: 1710, // mm
      width: 600, // mm
      depth: 850, // mm
      weight: "430–523 kg" 
    }
  ];

  // Default SLA plans if none are provided (for service cards)
  const displaySlaPlans = (slaPlans && slaPlans.length > 0) ? slaPlans : [
    {
      parameter: "Response Window",
      bronze: "Next Business Day",
      silver: "Within 4 Hours",
      gold: "Within 2 Hours Guaranteed"
    },
    {
      parameter: "Support Coverage",
      bronze: "8x5 (Business Hours)",
      silver: "12x5 (Extended)",
      gold: "24x7x365 (Continuous NOC)"
    },
    {
      parameter: "Scheduled PM Visits",
      bronze: "1 Audit/Year",
      silver: "2 Audits/Year + Thermal Scan",
      gold: "4 Audits/Year + Full Diagnostics"
    }
  ];

  return (
    <motion.article 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1], delay: index * 0.05 }}
      className="bg-white border border-outline/30 flex flex-col relative w-full group shadow-md hover:shadow-xl hover:border-accent/40 transition-all duration-500 overflow-hidden"
    >
      {/* ── Main Layout (Split Image/Content) ────────────────────────────── */}
      <div className="flex flex-col lg:flex-row w-full min-h-[300px]">
        
        {/* 1. Image Column (Full Bleed) */}
        <Link 
          to={detailUrl} 
          className="w-full lg:w-[35%] relative overflow-hidden group/img min-h-[220px] lg:min-h-full bg-surface-container shrink-0 block cursor-pointer"
        >
          {imageSrc && (
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              src={imageSrc}
              alt={imageAlt || title}
              className="absolute inset-0 w-full h-full object-cover z-0 filter grayscale group-hover/img:grayscale-0 transition-all duration-500"
            />
          )}
          
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent z-10" />

          {/* Floating Tag */}
          {tag && (
            <div className="absolute top-5 left-5 z-20">
              <div className="bg-accent/90 backdrop-blur-md text-white font-label-caps text-[9px] tracking-[0.15em] px-3 py-1.5 uppercase font-bold border border-white/10">
                {tag}
              </div>
            </div>
          )}

          {/* Score Indicator overlaid on image bottom */}
          {scorePercentage && (
            <div className="absolute bottom-5 left-5 right-5 z-20 flex items-end justify-between">
              <div className="flex flex-col">
                <span className="font-label-caps text-[8px] text-white/70 tracking-[0.15em] uppercase mb-0.5">
                  {scoreLabel || (type === 'service' ? "SLA Quality Index" : "System Efficiency")}
                </span>
                <span className="font-headline text-[22px] font-bold text-white leading-none">
                  {scorePercentage}<span className="text-accent text-[14px]">%</span>
                </span>
              </div>
              {/* Minimalist Progress Line */}
              <div className="w-[70px] h-[2px] bg-white/25 overflow-hidden mb-1 rounded-full">
                <motion.div 
                  className="h-full bg-accent origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: scorePercentage / 100 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                />
              </div>
            </div>
          )}
        </Link>

        {/* 2. Content & Actions Column */}
        <div className="w-full lg:w-[65%] flex flex-col justify-between">
          
          {/* Content Area */}
          <div className="p-6 lg:p-8 flex-grow flex flex-col justify-center">
            {tag && (
              <span className="text-accent font-semibold tracking-[0.2em] text-[9px] mb-1.5 uppercase font-label-caps block">
                {tag}
              </span>
            )}

            <Link to={detailUrl} className="group/title block w-fit">
              <h3 className="font-headline text-[22px] lg:text-[25px] font-bold text-secondary mb-2.5 leading-tight group-hover/title:text-accent transition-colors duration-300">
                {title}
              </h3>
            </Link>
            
            <p className="font-body text-[13.5px] text-secondary/70 leading-relaxed mb-5 max-w-[95%]">
              {description}
            </p>

            {/* Structured Features Badges */}
            {features && features.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-5">
                {features.slice(0, 4).map((feature, idx) => (
                  <span key={idx} className="font-label-caps text-[8.5px] uppercase tracking-[0.08em] px-2.5 py-1 border border-outline/30 bg-surface-container-lowest text-secondary/80 hover:border-accent hover:text-accent transition-colors duration-300 cursor-default">
                    {feature}
                  </span>
                ))}
              </div>
            )}

            {/* Quick Stats Grid */}
            {stats && stats.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-outline/20">
                {stats.slice(0, 4).map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="font-label-caps text-[8px] text-secondary/40 tracking-[0.12em] uppercase mb-0.5">{stat.label}</span>
                    <span className="font-headline text-[13px] font-bold text-secondary">{stat.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Action Bar */}
          <div className="border-t border-outline/20 bg-surface-container-lowest flex flex-col sm:flex-row justify-between items-stretch min-h-[52px]">
            
            {/* Expand Models Button (Drawer Toggle) */}
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex-grow sm:flex-grow-0 flex items-center justify-center gap-1.5 px-6 py-3.5 sm:py-0 border-b sm:border-b-0 sm:border-r border-outline/20 hover:bg-surface-container-low transition-colors group/exp"
            >
              <span className="font-label-caps text-[9px] font-bold text-secondary tracking-[0.12em] group-hover/exp:text-accent transition-colors uppercase">
                {type === 'service'
                  ? (isExpanded ? 'Hide SLA Info' : 'Quick SLA Tiers')
                  : (isExpanded ? 'Hide Specs' : 'Quick Tech Specs')}
              </span>
              <motion.span 
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="material-symbols-outlined text-[15px] text-secondary group-hover/exp:text-accent transition-colors"
              >
                expand_more
              </motion.span>
            </button>

            {/* Actions Group (Brochure, Support, View Detail) */}
            <div className="flex flex-col sm:flex-row items-stretch">
              {/* BROCHURE — text only, icon reveals on hover (absolute, no shift) */}
              <Link 
                to={type === 'service' ? `${detailUrl}#inquiries` : `${detailUrl}#downloads`}
                className="group/brochure relative flex items-center justify-center gap-0 border-0 border-b sm:border-b-0 sm:border-r border-outline/20 px-6 py-3.5 sm:py-0 min-h-[44px] transition-colors duration-300 overflow-hidden bg-transparent"
              >
                <span className="relative flex items-center">
                  {/* Icon — absolutely positioned to left, hidden by default */}
                  <span 
                    className="material-symbols-outlined text-[13px] text-accent absolute right-full mr-1.5 opacity-0 -translate-x-1.5 group-hover/brochure:opacity-100 group-hover/brochure:translate-x-0 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  >
                    download
                  </span>
                  <span className="font-label-caps text-[9.5px] tracking-[0.2em] font-semibold text-secondary group-hover/brochure:text-accent transition-colors duration-300 leading-none uppercase select-none">
                    BROCHURE
                  </span>
                </span>
              </Link>

              {/* SUPPORT — text only, icon reveals on hover (absolute, no shift) */}
              <Link 
                to={`/contact?inquiry=support&item=${encodeURIComponent(title)}`}
                className="group/support relative flex items-center justify-center gap-0 border-0 border-b sm:border-b-0 sm:border-r border-outline/20 px-6 py-3.5 sm:py-0 min-h-[44px] transition-colors duration-300 overflow-hidden bg-transparent"
              >
                <span className="relative flex items-center">
                  <span className="font-label-caps text-[9.5px] tracking-[0.2em] font-semibold text-secondary group-hover/support:text-accent transition-colors duration-300 leading-none uppercase select-none">
                    SUPPORT
                  </span>
                  {/* Icon — absolutely positioned to right, hidden by default */}
                  <span 
                    className="material-symbols-outlined text-[13px] text-accent absolute left-full ml-1.5 opacity-0 translate-x-1.5 group-hover/support:opacity-100 group-hover/support:translate-x-0 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  >
                    support_agent
                  </span>
                </span>
              </Link>

              {/* VIEW DETAIL — primary orange with full text animation */}
              <Button 
                to={detailUrl}
                variant="primary" 
                theme="light" 
                icon="arrow_forward"
                iconPosition="right"
                noTextAnimation={false}
                className="rounded-none border-0 h-auto py-3.5 sm:py-0 px-8 text-[10px]"
              >
                VIEW DETAIL
              </Button>
            </div>

          </div>
        </div>
      </div>

      {/* ── Expanded Models Data Table (Full Width Bottom) ────────────────── */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            className="overflow-hidden border-t border-outline/20 bg-surface-container-lowest"
          >
            <div className="p-5 lg:p-6">
              <div className="flex items-center justify-between mb-3.5">
                <h4 className="font-headline text-[13.5px] font-bold text-secondary">
                  {type === 'service' ? 'Service SLA Tiers Overview' : 'Technical Specifications Highlights'}
                </h4>
                {type !== 'service' && (
                  <div className="flex border border-outline bg-white font-body text-[9px] font-bold shadow-sm">
                    <button 
                      onClick={() => setUnitSystem('metric')}
                      className={`px-2.5 py-1 transition-colors ${unitSystem === 'metric' ? 'bg-secondary text-white' : 'text-secondary hover:bg-surface-container'}`}
                    >
                      Metric
                    </button>
                    <button 
                      onClick={() => setUnitSystem('imperial')}
                      className={`px-2.5 py-1 transition-colors ${unitSystem === 'imperial' ? 'bg-secondary text-white' : 'text-secondary hover:bg-surface-container'}`}
                    >
                      Imperial
                    </button>
                  </div>
                )}
              </div>
              
              <div className="w-full overflow-x-auto border border-outline/20 rounded-sm scrollbar-thin">
                {type === 'service' ? (
                  <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                      <tr className="bg-surface text-secondary font-label-caps text-[8.5px] tracking-[0.1em] uppercase border-b border-outline/20">
                        <th className="py-2.5 px-3.5 w-[25%]">Service Parameter</th>
                        <th className="py-2.5 px-3.5 w-[25%]">Bronze Standard</th>
                        <th className="py-2.5 px-3.5 w-[25%]">Silver Priority</th>
                        <th className="py-2.5 px-3.5 w-[25%] text-accent">Gold Enterprise</th>
                      </tr>
                    </thead>
                    <tbody>
                      {displaySlaPlans.map((plan, idx) => (
                        <tr key={idx} className="border-b border-outline/10 last:border-0 hover:bg-surface transition-colors">
                          <td className="py-2.5 px-3.5 font-headline text-[11.5px] font-semibold text-secondary">{plan.parameter}</td>
                          <td className="py-2.5 px-3.5 font-body text-[11.5px] text-secondary/70">{plan.bronze}</td>
                          <td className="py-2.5 px-3.5 font-body text-[11.5px] text-secondary/70">{plan.silver}</td>
                          <td className="py-2.5 px-3.5 font-body text-[11.5px] font-medium text-accent bg-accent/[0.03]">{plan.gold}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                      <tr className="bg-surface text-secondary font-label-caps text-[8.5px] tracking-[0.1em] uppercase border-b border-outline/20">
                        <th className="py-2.5 px-3.5">Model ID</th>
                        <th className="py-2.5 px-3.5">Capacity</th>
                        <th className="py-2.5 px-3.5">Input Voltage</th>
                        <th className="py-2.5 px-3.5">Output Voltage</th>
                        <th className="py-2.5 px-3.5">Efficiency</th>
                        <th className="py-2.5 px-3.5">Dimensions (H x W x D)</th>
                        <th className="py-2.5 px-3.5">Weight</th>
                      </tr>
                    </thead>
                    <tbody>
                      {displayModels.map((model, idx) => {
                        const h = typeof model.height === 'number'
                          ? (unitSystem === 'metric' ? `${model.height} mm` : `${(model.height / 25.4).toFixed(1)} in`)
                          : model.height;
                        const w = typeof model.width === 'number'
                          ? (unitSystem === 'metric' ? `${model.width} mm` : `${(model.width / 25.4).toFixed(1)} in`)
                          : model.width;
                        const d = typeof model.depth === 'number'
                          ? (unitSystem === 'metric' ? `${model.depth} mm` : `${(model.depth / 25.4).toFixed(1)} in`)
                          : model.depth;
                        return (
                          <tr key={idx} className="border-b border-outline/10 last:border-0 hover:bg-surface transition-colors">
                            <td className="py-2.5 px-3.5 font-headline text-[11.5px] font-semibold text-accent">{model.name}</td>
                            <td className="py-2.5 px-3.5 font-body text-[11.5px] text-secondary/70">{model.capacity || "N/A"}</td>
                            <td className="py-2.5 px-3.5 font-body text-[11.5px] text-secondary/70">{model.inputVoltage || model.voltage || "N/A"}</td>
                            <td className="py-2.5 px-3.5 font-body text-[11.5px] text-secondary/70">{model.outputVoltage || model.voltage || "N/A"}</td>
                            <td className="py-2.5 px-3.5 font-body text-[11.5px] text-secondary/70">{model.efficiency}</td>
                            <td className="py-2.5 px-3.5 font-body text-[11.5px] text-secondary/70 whitespace-nowrap">{`${h} × ${w} × ${d}`}</td>
                            <td className="py-2.5 px-3.5 font-body text-[11.5px] text-secondary/70">
                              {convertWeight(model.weight, unitSystem)}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
