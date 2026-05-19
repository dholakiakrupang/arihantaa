import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { EngineeredSolutionCard } from '../../ui/EngineeredSolutionCard';

const solutionsData = [
  {
    id: 1,
    tag: "POWER RELIABILITY",
    title: "Vertiv™ Liebert® EXM2 UPS",
    scoreLabel: "SUSTAINABILITY SCORE",
    scorePercentage: 94,
    description: "The EXM2 offers high efficiency in a compact footprint, specifically engineered for mid-size mission-critical applications across various industry verticals including healthcare and IT.",
    features: [
      "Double Conversion Mode",
      "Fault Tolerant Architecture",
      "Smart-Grid Ready",
      "Eco-Mode Operation"
    ],
    stats: [
      { label: "EFFICIENCY", value: "97.2%" },
      { label: "SCALABILITY", value: "100-250kW" }
    ],
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlxQ9YGTIYvCHzs6WUeGuO2z6SG8R9129zUlg7BAKU5KsklYR3VJnU3qQkofXZXDp23CReSGtRdB_lGMnFINFRrxwae52dn_ynKocpWipyAmQgO5uaQTWMObUCmj1CUfh6a9Fm3bMk6KHDdsjt3izo31zIv2_C_3QHTW_BpWU0Wtf19JTOuUJNE3XSXLmYkYv6XnuhfJrcKAc9qb9c8UadWB8PmGNuA4-pq-GxVbyOGUGMZ4eXgWNFxnREw_NGkvuSA5wOyc0aSNg",
    imageAlt: "Data Center Ecosystem",
    primaryAction: { label: "REQUEST CONSULTATION", onClick: () => {} },
    secondaryAction: { label: "DATASHEET", onClick: () => {} }
  },
  {
    id: 2,
    tag: "HT/LT INFRASTRUCTURE",
    title: "Custom Switchgear Solutions",
    scoreLabel: "DEPLOYMENT SCALE",
    scorePercentage: 85,
    description: "Bespoke electrical distribution panels engineered for heavy industrial loads, featuring integrated surge protection and advanced thermal monitoring.",
    features: [
      "High Interruption Capacity",
      "Modbus Connectivity",
      "Arc Flash Mitigation",
      "IP54 Rated Enclosures"
    ],
    stats: [
      { label: "RATED VOLTAGE", value: "Up to 33kV" },
      { label: "MONITORING", value: "IoT Enabled" }
    ],
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlxQ9YGTIYvCHzs6WUeGuO2z6SG8R9129zUlg7BAKU5KsklYR3VJnU3qQkofXZXDp23CReSGtRdB_lGMnFINFRrxwae52dn_ynKocpWipyAmQgO5uaQTWMObUCmj1CUfh6a9Fm3bMk6KHDdsjt3izo31zIv2_C_3QHTW_BpWU0Wtf19JTOuUJNE3XSXLmYkYv6XnuhfJrcKAc9qb9c8UadWB8PmGNuA4-pq-GxVbyOGUGMZ4eXgWNFxnREw_NGkvuSA5wOyc0aSNg",
    imageAlt: "Switchgear Solutions",
    primaryAction: { label: "REQUEST CONSULTATION", onClick: () => {} },
    secondaryAction: { label: "CASE STUDY", onClick: () => {} }
  }
];

const categoryMap = {
  'spare-parts': { title: 'Spare Parts & Management', desc: 'Genuine OEM and high-compatibility spare parts sourced globally.' },
  'preventive-maint': { title: 'Preventive Maintenance', desc: 'Structured, scheduled maintenance programmes to resolve potential failures.' },
  'performance-opt': { title: 'Performance Optimization', desc: 'Data-driven performance tuning that extracts maximum efficiency.' },
  'remote-services': { title: 'Remote Services', desc: '24/7 remote monitoring and support providing instant visibility.' },
  'project-commission': { title: 'Project & Commissioning', desc: 'End-to-end project management from design to handover.' },
  'industrial-maint': { title: 'Industrial Maintenance', desc: 'Specialised maintenance programmes for heavy industrial environments.' },
  'ups-battery': { title: 'UPS & Battery Services', desc: 'Comprehensive lifecycle management for UPS systems and battery banks.' },
  'generator': { title: 'Generator & Switchgear', desc: 'Full-spectrum generator and switchgear servicing to maintain reliable power.' },
  'liquid-cooling': { title: 'Liquid Cooling Services', desc: 'Advanced liquid cooling installation, commissioning, and maintenance.' }
};

export function EngineeredSolutions() {
  const { categoryId } = useParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const categoryInfo = categoryMap[categoryId] || { title: 'Engineered Solutions', desc: 'Our portfolio of high-performance infrastructure services, designed for integration into mission-critical environments.' };

  return (
    <section className="py-[120px]">
      {/* Title & Paragraph */}
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-12 mb-12 gap-8">
          <div className="col-span-12 md:col-span-8">
            <h2 className="font-headline text-[56px] leading-[1.1] font-bold tracking-tighter text-on-surface mb-6 capitalize">
              {categoryInfo.title}
            </h2>
            <p className="font-body text-body-lg text-on-surface/70 max-w-[680px]">
              {categoryInfo.desc}
            </p>
          </div>
        </div>
      </div>

      {/* Smart Navigation */}
      <div className="sticky top-16 md:top-20 z-40 backdrop-blur-xl border-y border-outline bg-background/80 mb-16 transition-all duration-300">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-6 w-full">
            
            {/* 1st Item: Filter Icon Button & Popup */}
            <div className="relative w-full lg:w-auto order-2 lg:order-1 flex justify-start">
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={`flex items-center gap-2.5 px-5 py-3 border transition-all duration-300 w-full lg:w-auto justify-center ${isFilterOpen ? 'bg-accent border-accent text-on-primary shadow-lg shadow-accent/20' : 'bg-surface-container-lowest border-outline text-on-surface hover:border-accent hover:text-accent group'}`}
              >
                <div className="relative w-4 h-4 flex items-center justify-center">
                  <span className={`material-symbols-outlined absolute transition-all duration-300 text-[16px] ${isFilterOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}>filter_alt</span>
                  <span className={`material-symbols-outlined absolute transition-all duration-300 text-[16px] ${isFilterOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}>close</span>
                </div>
                <span className="font-headline text-[12px] font-bold uppercase tracking-widest mt-[1px]">
                  Filters
                </span>
              </button>

              {/* Filter Creative Popup (Smaller, Positioned directly below) */}
              <div className={`absolute top-full left-0 mt-3 w-full lg:w-[320px] bg-surface-container-lowest border border-outline shadow-2xl z-50 transition-all duration-400 origin-top flex flex-col ${isFilterOpen ? 'opacity-100 visible scale-100 translate-y-0' : 'opacity-0 invisible scale-95 -translate-y-2 pointer-events-none'}`}>
                
                <div className="p-6 bg-surface-container-lowest space-y-8 max-h-[60vh] overflow-y-auto">
                  
                  {/* Category 1 */}
                  <div>
                    <h4 className="font-headline text-[11px] font-bold uppercase tracking-widest text-on-surface/50 mb-4 flex items-center justify-between">
                      Infrastructure
                      <span className="material-symbols-outlined text-[14px]">bolt</span>
                    </h4>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-4 h-4 border border-outline group-hover:border-accent flex items-center justify-center transition-colors"></div>
                        <span className="font-body text-[13px] text-on-surface group-hover:text-accent transition-colors">High Voltage</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-4 h-4 border border-accent bg-accent flex items-center justify-center transition-colors">
                          <span className="material-symbols-outlined text-white text-[12px]">check</span>
                        </div>
                        <span className="font-body text-[13px] text-on-surface font-semibold">Low Voltage</span>
                      </label>
                    </div>
                  </div>

                  {/* Category 2 */}
                  <div>
                    <h4 className="font-headline text-[11px] font-bold uppercase tracking-widest text-on-surface/50 mb-4 flex items-center justify-between">
                      Efficiency Rating
                      <span className="material-symbols-outlined text-[14px]">speed</span>
                    </h4>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-4 h-4 rounded-full border border-outline group-hover:border-accent flex items-center justify-center transition-colors"></div>
                        <span className="font-body text-[13px] text-on-surface group-hover:text-accent transition-colors">Standard (90%+)</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-4 h-4 rounded-full border border-accent flex items-center justify-center transition-colors">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                        </div>
                        <span className="font-body text-[13px] text-on-surface font-semibold">Ultra High (97%+)</span>
                      </label>
                    </div>
                  </div>

                </div>

                <div className="p-4 border-t border-outline bg-surface flex justify-between gap-3">
                  <button 
                    onClick={() => setIsFilterOpen(false)}
                    className="label-caps px-4 py-2.5 w-full border border-outline hover:bg-surface-container transition-colors uppercase font-bold text-[10px]"
                  >
                    Clear
                  </button>
                  <button 
                    onClick={() => setIsFilterOpen(false)}
                    className="label-caps px-4 py-2.5 w-full bg-accent text-on-primary hover:bg-accent/90 transition-colors uppercase font-bold text-[10px] shadow-md shadow-accent/20"
                  >
                    Apply
                  </button>
                </div>

              </div>
            </div>

            {/* 2nd Item: Perfectly Centered Results Count & Category Selector */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-3 w-full order-1 lg:order-2 text-center lg:text-left">
              <span className="font-headline text-[15px] text-on-surface/70 tracking-tight flex items-center gap-1.5 justify-center">
                Showing <strong className="text-accent text-[17px]">2</strong> results for
              </span>
              
              {/* Category Selector */}
              <div className="relative group inline-block">
                <button className="flex items-center gap-1.5 pb-0.5 border-b-2 border-accent hover:border-on-surface transition-all group-hover:px-1">
                  <span className="font-headline text-[17px] font-bold text-accent group-hover:text-on-surface transition-colors whitespace-nowrap">
                    {categoryInfo.title}
                  </span>
                  <span className="material-symbols-outlined text-[18px] text-accent group-hover:text-on-surface transition-colors group-hover:rotate-180 duration-300">expand_more</span>
                </button>
                {/* Dropdown menu */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[240px] bg-surface-container-lowest border border-outline shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100 z-50 text-left">
                  <button className="w-full text-left px-5 py-3 text-[13px] font-body font-semibold text-on-surface hover:bg-surface-container hover:text-accent transition-colors border-b border-outline last:border-0">Power Reliability</button>
                  <button className="w-full text-left px-5 py-3 text-[13px] font-body font-semibold text-on-surface hover:bg-surface-container hover:text-accent transition-colors border-b border-outline last:border-0">HT/LT Infrastructure</button>
                  <button className="w-full text-left px-5 py-3 text-[13px] font-body font-semibold text-on-surface hover:bg-surface-container hover:text-accent transition-colors border-b border-outline last:border-0">Data Center Core</button>
                </div>
              </div>
            </div>

            {/* 3rd Item: Search and Sort */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-4 w-full order-3">
              
              {/* Premium Expanding Search Bar */}
              <div className="relative group/search flex items-center bg-surface-container-lowest border border-outline rounded-none overflow-hidden transition-all duration-500 w-full lg:w-48 focus-within:lg:w-[260px] shadow-sm hover:shadow-md focus-within:shadow-accent/10 focus-within:border-accent">
                <span className="material-symbols-outlined absolute left-3.5 text-on-surface/40 text-[18px] group-focus-within/search:text-accent transition-colors duration-300 z-10 pointer-events-none">search</span>
                <input 
                  type="text" 
                  placeholder="Refine search..." 
                  title="Refine results"
                  className="w-full bg-transparent border-none py-2.5 pl-10 pr-4 text-[13px] font-body focus:outline-none focus:ring-0 placeholder:text-on-surface/40 text-on-surface transition-all" 
                />
              </div>

              {/* Sort By */}
              <div className="relative group/sort w-full sm:w-[170px]">
                <button className="flex items-center justify-between w-full border border-outline px-4 py-2 bg-surface-container-lowest hover:border-accent transition-colors rounded-none">
                  <div className="flex flex-col items-start">
                    <span className="font-headline text-[9px] font-bold uppercase tracking-widest text-on-surface/40">Sort By</span>
                    <span className="font-body text-[12px] font-semibold text-on-surface mt-[1px]">Latest Engineering</span>
                  </div>
                  <span className="material-symbols-outlined text-[18px] text-on-surface/40 group-hover/sort:text-accent transition-transform duration-300 group-hover/sort:rotate-180">expand_more</span>
                </button>
                <div className="absolute top-full right-0 w-full bg-surface-container-lowest border border-outline mt-1 shadow-2xl opacity-0 invisible group-hover/sort:opacity-100 group-hover/sort:visible transition-all duration-300 transform origin-top scale-95 group-hover/sort:scale-100 z-50">
                  <button className="w-full text-left px-4 py-2.5 text-[12px] font-body hover:bg-surface-container hover:text-accent transition-colors border-b border-outline last:border-0 flex justify-between items-center bg-surface-container-low/50">
                    Latest Engineering
                    <span className="material-symbols-outlined text-[14px] text-accent">check</span>
                  </button>
                  <button className="w-full text-left px-4 py-2.5 text-[12px] font-body hover:bg-surface-container hover:text-accent transition-colors border-b border-outline last:border-0">
                    Energy Efficiency
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 space-y-12 relative z-10">
        {solutionsData.map((solution) => (
          <EngineeredSolutionCard key={solution.id} {...solution} />
        ))}
      </div>

      {/* Pagination */}
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 mt-20 flex items-center justify-center gap-8 relative z-10">
        <button className="w-12 h-12 flex items-center justify-center border border-outline hover:bg-surface-container transition-colors" aria-label="Previous page">
          <span className="material-symbols-outlined">arrow_left_alt</span>
        </button>
        <div className="flex items-center gap-4">
          <span className="font-headline font-bold text-accent text-xl">01</span>
          <div className="w-24 h-[1px] bg-outline relative">
            <div className="absolute inset-y-0 left-0 w-1/3 bg-accent h-[2px] -mt-[0.5px]"></div>
          </div>
          <span className="font-headline text-on-surface/50 text-xl">03</span>
        </div>
        <button className="w-12 h-12 flex items-center justify-center border border-outline hover:bg-surface-container transition-colors" aria-label="Next page">
          <span className="material-symbols-outlined">arrow_right_alt</span>
        </button>
      </div>
    </section>
  );
}
