import { StatCard } from '../ui/StatCard';

export function Stats() {
  const statsData = [
    { value: "29+", label: "YEARS OF RIGOR" },
    { value: "500+", label: "COMPLETED PROJECTS" },
    { value: "12", label: "GLOBAL FOOTPRINT" },
  ];

  return (
    <section className="bg-surface relative z-20">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 bg-surface-container-lowest shadow-2xl border border-outline-variant/30">
          
          {statsData.map((stat, i) => (
            <StatCard 
              key={i}
              value={stat.value}
              label={stat.label}
              delay={i * 0.1}
              centered={true}
            />
          ))}
          
        </div>
      </div>
    </section>
  );
}
