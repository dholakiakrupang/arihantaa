import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function EngineeredSolutionCard({
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
  models = []
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [unitSystem, setUnitSystem] = useState('metric'); // 'metric' | 'imperial'

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
      efficiency: `${scorePercentage}%`, 
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
      efficiency: `${scorePercentage + 2}%`, 
      height: 1710, // mm
      width: 600, // mm
      depth: 850, // mm
      weight: "430–523 kg" 
    },
    { 
      name: `${title} - Max`, 
      capacity: "40–120 kVA", 
      inputVoltage: "400V", 
      outputVoltage: "400V",
      efficiency: `${scorePercentage + 3}%`, 
      height: 2250, // mm
      width: 800, // mm
      depth: 850, // mm
      weight: "510–680 kg" 
    }
  ];

  return (
    <motion.article 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1], delay: index * 0.1 }}
      className="bg-surface-container-lowest border border-outline flex flex-col relative w-full group shadow-md hover:shadow-2xl hover:border-accent/50 transition-all duration-500 overflow-hidden"
    >
      {/* ── Main Layout (Split Image/Content) ────────────────────────────── */}
      <div className="flex flex-col lg:flex-row w-full min-h-[320px]">
        
        {/* 1. Image Column (Full Bleed) */}
        <div className="w-full lg:w-[35%] relative overflow-hidden group/img min-h-[250px] lg:min-h-full bg-surface-container">
          
          <motion.img 
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src={imageSrc}
            alt={imageAlt}
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

          {/* Floating Tag */}
          {tag && (
            <div className="absolute top-6 left-6 z-20">
              <div className="bg-accent/90 backdrop-blur-md text-white font-label-caps text-[10px] tracking-[0.2em] px-4 py-2 uppercase shadow-lg shadow-black/20 border border-white/10">
                {tag}
              </div>
            </div>
          )}

          {/* Score Indicator overlaid on image bottom */}
          <div className="absolute bottom-6 left-6 right-6 z-20 flex items-end justify-between">
            <div className="flex flex-col">
              <span className="font-label-caps text-[9px] text-white/70 tracking-[0.2em] uppercase mb-1">
                {scoreLabel || "System Efficiency"}
              </span>
              <span className="font-headline text-[32px] font-light text-white leading-none">
                {scorePercentage}<span className="text-accent text-[20px]">%</span>
              </span>
            </div>
            {/* Minimalist Progress Line */}
            <div className="w-[100px] h-[2px] bg-white/20 overflow-hidden mb-2 rounded-full">
              <motion.div 
                className="h-full bg-accent origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: scorePercentage / 100 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
              />
            </div>
          </div>
        </div>

        {/* 2. Content & Actions Column */}
        <div className="w-full lg:w-[65%] flex flex-col">
          
          {/* Content Area */}
          <div className="p-8 lg:p-10 flex-grow flex flex-col justify-center">
            
            <h3 className="font-headline text-[26px] lg:text-[32px] font-bold text-secondary mb-4 leading-tight group-hover:text-accent transition-colors duration-400">
              {title}
            </h3>
            
            <p className="font-body text-[15px] text-secondary/70 leading-relaxed mb-8 max-w-[90%]">
              {description}
            </p>

            {/* Structured Features Badges */}
            {features && features.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {features.map((feature, idx) => (
                  <span key={idx} className="font-label-caps text-[10px] uppercase tracking-[0.1em] px-3 py-1.5 border border-outline/60 bg-surface text-secondary/80 hover:border-accent hover:text-accent transition-colors cursor-default">
                    {feature}
                  </span>
                ))}
              </div>
            )}

            {/* Quick Stats Grid */}
            {stats && stats.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-outline/50">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="font-label-caps text-[9px] text-secondary/50 tracking-[0.15em] uppercase mb-1">{stat.label}</span>
                    <span className="font-headline text-[16px] font-bold text-secondary">{stat.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Action Bar */}
          <div className="mt-auto border-t border-outline/50 bg-surface flex flex-col sm:flex-row justify-between items-stretch min-h-[70px]">
            
            {/* Expand Models Button */}
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex-grow sm:flex-grow-0 flex items-center justify-center gap-2 px-8 py-4 sm:py-0 border-b sm:border-b-0 sm:border-r border-outline/50 hover:bg-surface-container-low transition-colors group/exp"
            >
              <span className="font-label-caps text-[11px] font-bold text-secondary tracking-[0.15em] group-hover/exp:text-accent transition-colors uppercase">
                Explore Models ({displayModels.length})
              </span>
              <motion.span 
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="material-symbols-outlined text-[18px] text-secondary group-hover/exp:text-accent transition-colors"
              >
                expand_more
              </motion.span>
            </button>

            {/* Primary/Secondary Actions */}
            <div className="flex flex-col sm:flex-row">
              {secondaryAction && (
                <button 
                  onClick={secondaryAction.onClick}
                  className="px-8 py-4 sm:py-0 font-label-caps text-[11px] font-bold text-secondary tracking-[0.15em] uppercase hover:text-accent hover:bg-surface-container-low transition-colors border-b sm:border-b-0 sm:border-r border-outline/50"
                >
                  {secondaryAction.label || "Datasheet"}
                </button>
              )}
              {primaryAction && (
                <button 
                  onClick={primaryAction.onClick}
                  className="px-8 py-4 sm:py-0 bg-accent text-white font-label-caps text-[11px] font-bold tracking-[0.15em] uppercase hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 group/btn"
                >
                  {primaryAction.label || "Request Quote"}
                  <span className="material-symbols-outlined text-[14px] group-hover/btn:translate-x-1 transition-transform">east</span>
                </button>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* ── Expanded Models Data Table ──────────────────────────────────────── */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            className="overflow-hidden border-t-2 border-accent bg-surface-container-lowest"
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-headline text-[18px] font-bold text-secondary">Technical Specifications</h4>
                <div className="flex border border-outline bg-white font-body text-[11px] font-semibold shadow-sm">
                  <button 
                    onClick={() => setUnitSystem('metric')}
                    className={`px-4 py-1.5 transition-colors ${unitSystem === 'metric' ? 'bg-secondary text-white' : 'text-secondary hover:bg-surface-container'}`}
                  >
                    Metric
                  </button>
                  <button 
                    onClick={() => setUnitSystem('imperial')}
                    className={`px-4 py-1.5 transition-colors ${unitSystem === 'imperial' ? 'bg-secondary text-white' : 'text-secondary hover:bg-surface-container'}`}
                  >
                    Imperial
                  </button>
                </div>
              </div>
              
              <div className="w-full overflow-x-auto border border-outline/50 rounded-sm">
                <table className="w-full text-left border-collapse min-w-[1000px]">
                  <thead>
                    <tr className="bg-surface text-secondary font-label-caps text-[10px] tracking-[0.15em] uppercase border-b border-outline">
                      <th className="py-4 px-6">Model ID</th>
                      <th className="py-4 px-6">Power Rating / Capacity</th>
                      <th className="py-4 px-6">Input Voltage</th>
                      <th className="py-4 px-6">Output Voltage</th>
                      <th className="py-4 px-6">Efficiency</th>
                      <th className="py-4 px-6">Height</th>
                      <th className="py-4 px-6">Width</th>
                      <th className="py-4 px-6">Depth</th>
                      <th className="py-4 px-6">Weight</th>
                    </tr>
                  </thead>
                  <tbody>
                    {displayModels.map((model, idx) => (
                      <tr key={idx} className="border-b border-outline/50 last:border-0 hover:bg-surface-container transition-colors group/row">
                        <td className="py-4 px-6 font-headline text-[13px] font-semibold text-accent">{model.name}</td>
                        <td className="py-4 px-6 font-body text-[13px] text-secondary/80">{model.capacity || "N/A"}</td>
                        <td className="py-4 px-6 font-body text-[13px] text-secondary/80">{model.inputVoltage || model.voltage || "N/A"}</td>
                        <td className="py-4 px-6 font-body text-[13px] text-secondary/80">{model.outputVoltage || model.voltage || "N/A"}</td>
                        <td className="py-4 px-6 font-body text-[13px] text-secondary/80">{model.efficiency}</td>
                        <td className="py-4 px-6 font-body text-[13px] text-secondary/80">
                          {unitSystem === 'metric' 
                            ? (typeof model.height === 'number' ? `${model.height} mm` : model.height) 
                            : (typeof model.height === 'number' ? `${(model.height / 25.4).toFixed(1)} in` : model.height)}
                        </td>
                        <td className="py-4 px-6 font-body text-[13px] text-secondary/80">
                          {unitSystem === 'metric' 
                            ? (typeof model.width === 'number' ? `${model.width} mm` : model.width) 
                            : (typeof model.width === 'number' ? `${(model.width / 25.4).toFixed(1)} in` : model.width)}
                        </td>
                        <td className="py-4 px-6 font-body text-[13px] text-secondary/80">
                          {unitSystem === 'metric' 
                            ? (typeof model.depth === 'number' ? `${model.depth} mm` : model.depth) 
                            : (typeof model.depth === 'number' ? `${(model.depth / 25.4).toFixed(1)} in` : model.depth)}
                        </td>
                        <td className="py-4 px-6 font-body text-[13px] text-secondary/80">
                          {convertWeight(model.weight, unitSystem)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
