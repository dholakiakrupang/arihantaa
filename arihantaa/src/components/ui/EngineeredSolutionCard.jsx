import React from 'react';

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
  secondaryAction
}) {
  return (
    <article className="grid grid-cols-12 bg-surface-container-lowest border border-outline hover:border-accent/50 transition-colors duration-300 group">
      <div className="col-span-12 lg:col-span-5 relative h-[300px] lg:h-auto overflow-hidden">
        <img 
          alt={imageAlt} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          src={imageSrc}
        />
        <div className="absolute top-6 left-6 bg-accent text-on-primary label-caps px-4 py-2">
          {tag}
        </div>
      </div>
      <div className="col-span-12 lg:col-span-7 p-10 lg:p-14 flex flex-col justify-between">
        <div>
          <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-6 gap-4">
            <h3 className="font-headline text-[32px] leading-[1.2] font-semibold text-on-surface">{title}</h3>
            <div className="hidden sm:block text-right flex-shrink-0">
              <div className="label-caps text-on-surface/50 mb-2 uppercase">{scoreLabel}</div>
              <div className="w-32 h-1 bg-surface-container">
                <div className="h-full bg-accent" style={{ width: `${scorePercentage}%` }}></div>
              </div>
            </div>
          </div>
          <p className="font-body text-[16px] leading-[1.6] text-on-surface/70 mb-8 max-w-[600px]">
            {description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-accent"></div>
                <span className="font-body text-sm text-on-surface-variant">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-end justify-between gap-8 pt-8 border-t border-outline">
          <div className="flex gap-12 flex-wrap">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className="label-caps text-on-surface/50 mb-2 uppercase">{stat.label}</div>
                <div className="font-headline text-[32px] leading-[1.2] font-bold text-on-surface">{stat.value}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 mt-4 sm:mt-0">
            {secondaryAction && (
              <button 
                onClick={secondaryAction.onClick}
                className="label-caps border border-outline px-6 py-3 hover:bg-surface-container transition-colors uppercase"
              >
                {secondaryAction.label}
              </button>
            )}
            {primaryAction && (
              <button 
                onClick={primaryAction.onClick}
                className="label-caps bg-accent text-on-primary px-6 py-3 hover:bg-accent/90 transition-colors uppercase"
              >
                {primaryAction.label}
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
