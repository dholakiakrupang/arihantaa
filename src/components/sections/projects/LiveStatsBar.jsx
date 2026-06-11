import { StatCard } from '../../ui/StatCard';

const STATS = [
  { value: '₹315 Cr+', label: 'Active Work in Hand', icon: 'trending_up' },
  { value: '1995', label: 'Year Established', icon: 'history' },
  { value: '22+', label: 'Active Projects', icon: 'construction' },
  { value: '10,000+', label: 'Installations Delivered', icon: 'bolt' },
  { value: '9 States', label: 'GST Active Presence', icon: 'location_on' },
];

export function LiveStatsBar() {
  return (
    <section className="bg-surface overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border-t border-l border-outline-variant/30 gap-0">
          {STATS.map((stat, i) => (
            <StatCard
              key={i}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              delay={i * 0.08}
              centered={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
