import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { EngineeredSolutionCard } from '../../ui/EngineeredSolutionCard';

const productsData = [
  {
    id: 1,
    tag: "CRITICAL POWER",
    title: "Vertiv™ Liebert® EXL S1 UPS",
    scoreLabel: "EFFICIENCY RATING",
    scorePercentage: 97,
    description: "The Liebert EXL S1 delivers secure power while providing first class load protection and maximum energy saving for medium-large data centers and mission critical applications.",
    features: [
      "Dynamic Online Mode",
      "Advanced Touchscreen Display",
      "Optimized footprint",
      "Li-ion battery compatible"
    ],
    stats: [
      { label: "CAPACITY", value: "300-1200kW" },
      { label: "EFFICIENCY", value: "Up to 99%" }
    ],
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1_hS_Yx0t0j_mD1V8gOqH8F0K_9zZ0Zq0T5_9l9l0P5z_mD1V8gOqH8F0K_9zZ0Zq0T5_9l9l0P5z_mD1V8gOqH8F0K_9zZ0Zq0T5_9l9l0P5z_mD1V8gOqH8F0K_9zZ0Zq0T5_9l9l0P5z_mD1V8gOqH8F0K_9zZ0Zq0T5_9l9l", // placeholder
    imageAlt: "Uninterruptible Power Supply",
    primaryAction: { label: "REQUEST QUOTE", onClick: () => {} },
    secondaryAction: { label: "VIEW SPECS", onClick: () => {} }
  },
  {
    id: 2,
    tag: "THERMAL MANAGEMENT",
    title: "Liebert® PCW Chilled Water System",
    scoreLabel: "COOLING INDEX",
    scorePercentage: 92,
    description: "The Liebert PCW is designed to lead the market in cooling efficiency for data centers. It precisely controls temperature, humidity, and airflow, meeting the demands of high-density IT equipment.",
    features: [
      "EC Fans standard",
      "Aerodynamic internal design",
      "Smart control algorithms",
      "Chilled water operation"
    ],
    stats: [
      { label: "CAPACITY", value: "30-200kW" },
      { label: "COMPLIANCE", value: "ASHRAE TC 9.9" }
    ],
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1_hS_Yx0t0j_mD1V8gOqH8F0K_9zZ0Zq0T5_9l9l0P5z_mD1V8gOqH8F0K_9zZ0Zq0T5_9l9l0P5z_mD1V8gOqH8F0K_9zZ0Zq0T5_9l9l0P5z_mD1V8gOqH8F0K_9zZ0Zq0T5_9l9l0P5z_mD1V8gOqH8F0K_9zZ0Zq0T5_9l9l", // placeholder
    imageAlt: "Thermal Management System",
    primaryAction: { label: "REQUEST QUOTE", onClick: () => {} },
    secondaryAction: { label: "VIEW SPECS", onClick: () => {} }
  }
];

const categoryMap = {
  'ups': { title: 'Uninterruptible Power Supplies (UPS)', desc: 'Deliver secure power while providing first-class load protection.' },
  'dc-power': { title: 'DC Power Systems', desc: 'Highly reliable DC power solutions for telecommunications and industrial applications.' },
  'power-distribution': { title: 'Power Distribution', desc: 'Optimize power delivery to your critical IT equipment.' },
  'industrial-ac-dc': { title: 'Industrial AC and DC Systems', desc: 'Robust power systems for harsh industrial environments.' },
  'liquid-cooling': { title: 'Liquid Cooling Solutions', desc: 'Advanced liquid cooling for ultra-high-density compute.' },
  'enclosure-cooling': { title: 'Enclosure Cooling', desc: 'Precision cooling for electrical enclosures and cabinets.' },
  'integrated-solutions': { title: 'Integrated Solutions', desc: 'Fully integrated rack, power, and cooling solutions.' },
  'digital-infrastructure': { title: 'Digital Infrastructure Solutions', desc: 'Complete monitoring and management for your infrastructure.' }
};

export function EngineeredProducts() {
  const { categoryId } = useParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categoryInfo = categoryMap[categoryId] || { title: 'Product Catalog', desc: 'Explore our comprehensive range of industrial-grade infrastructure products, engineered for resilience and efficiency.' };

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

              {/* Filter Creative Popup */}
              <div className={`absolute top-full left-0 mt-3 w-full lg:w-[320px] bg-surface-container-lowest border border-outline shadow-2xl z-50 transition-all duration-400 origin-top flex flex-col ${isFilterOpen ? 'opacity-100 visible scale-100 translate-y-0' : 'opacity-0 invisible scale-95 -translate-y-2 pointer-events-none'}`}>
                
                <div className="p-6 bg-surface-container-lowest space-y-8 max-h-[60vh] overflow-y-auto">
                  
                  {/* Category 1 */}
                  <div>
                    <h4 className="font-headline text-[11px] font-bold uppercase tracking-widest text-on-surface/50 mb-4 flex items-center justify-between">
                      Critical Power
                      <span className="material-symbols-outlined text-[14px]">bolt</span>
                    </h4>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-4 h-4 border border-outline group-hover:border-accent flex items-center justify-center transition-colors"></div>
                        <span className="font-body text-[13px] text-on-surface group-hover:text-accent transition-colors">UPS Systems</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-4 h-4 border border-accent bg-accent flex items-center justify-center transition-colors">
                          <span className="material-symbols-outlined text-white text-[12px]">check</span>
                        </div>
                        <span className="font-body text-[13px] text-on-surface font-semibold">DC Power Systems</span>
                      </label>
                    </div>
                  </div>

                  {/* Category 2 */}
                  <div>
                    <h4 className="font-headline text-[11px] font-bold uppercase tracking-widest text-on-surface/50 mb-4 flex items-center justify-between">
                      Thermal Management
                      <span className="material-symbols-outlined text-[14px]">ac_unit</span>
                    </h4>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-4 h-4 rounded-full border border-outline group-hover:border-accent flex items-center justify-center transition-colors"></div>
                        <span className="font-body text-[13px] text-on-surface group-hover:text-accent transition-colors">Liquid Cooling</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-4 h-4 rounded-full border border-accent flex items-center justify-center transition-colors">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                        </div>
                        <span className="font-body text-[13px] text-on-surface font-semibold">Room Cooling</span>
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
                Showing <strong className="text-accent text-[17px]">24</strong> results for
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
                  <button className="w-full text-left px-5 py-3 text-[13px] font-body font-semibold text-on-surface hover:bg-surface-container hover:text-accent transition-colors border-b border-outline last:border-0">Critical Power</button>
                  <button className="w-full text-left px-5 py-3 text-[13px] font-body font-semibold text-on-surface hover:bg-surface-container hover:text-accent transition-colors border-b border-outline last:border-0">Thermal Management</button>
                  <button className="w-full text-left px-5 py-3 text-[13px] font-body font-semibold text-on-surface hover:bg-surface-container hover:text-accent transition-colors border-b border-outline last:border-0">Racks & Enclosures</button>
                  <button className="w-full text-left px-5 py-3 text-[13px] font-body font-semibold text-on-surface hover:bg-surface-container hover:text-accent transition-colors border-b border-outline last:border-0">Monitoring & Management</button>
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
                  placeholder="Find products..." 
                  title="Refine results"
                  className="w-full bg-transparent border-none py-2.5 pl-10 pr-4 text-[13px] font-body focus:outline-none focus:ring-0 placeholder:text-on-surface/40 text-on-surface transition-all" 
                />
              </div>

              {/* Sort By */}
              <div className="relative group/sort w-full sm:w-[170px]">
                <button className="flex items-center justify-between w-full border border-outline px-4 py-2 bg-surface-container-lowest hover:border-accent transition-colors rounded-none">
                  <div className="flex flex-col items-start">
                    <span className="font-headline text-[9px] font-bold uppercase tracking-widest text-on-surface/40">Sort By</span>
                    <span className="font-body text-[12px] font-semibold text-on-surface mt-[1px]">Popularity</span>
                  </div>
                  <span className="material-symbols-outlined text-[18px] text-on-surface/40 group-hover/sort:text-accent transition-transform duration-300 group-hover/sort:rotate-180">expand_more</span>
                </button>
                <div className="absolute top-full right-0 w-full bg-surface-container-lowest border border-outline mt-1 shadow-2xl opacity-0 invisible group-hover/sort:opacity-100 group-hover/sort:visible transition-all duration-300 transform origin-top scale-95 group-hover/sort:scale-100 z-50">
                  <button className="w-full text-left px-4 py-2.5 text-[12px] font-body hover:bg-surface-container hover:text-accent transition-colors border-b border-outline last:border-0 flex justify-between items-center bg-surface-container-low/50">
                    Popularity
                    <span className="material-symbols-outlined text-[14px] text-accent">check</span>
                  </button>
                  <button className="w-full text-left px-4 py-2.5 text-[12px] font-body hover:bg-surface-container hover:text-accent transition-colors border-b border-outline last:border-0">
                    A-Z
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 space-y-12 relative z-10">
        {productsData.map((product) => (
          <EngineeredSolutionCard key={product.id} {...product} />
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
