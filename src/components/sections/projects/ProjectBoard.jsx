import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projectCategories, projectBoardData } from '../../../data/projectsData';

function ProjectCard({ project, index }) {
  const isCompleted = project.status === 'Completed';

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.25, 1, 0.5, 1] }}
      className="group flex flex-col bg-surface border border-outline hover:border-secondary/30 transition-all duration-300 relative"
    >
      <Link to={`/projects/${project.id}`} className="absolute inset-0 z-20" aria-label={`View details for ${project.title}`} />
      {/* Image placeholder */}
      <div className="relative h-52 bg-surface-variant overflow-hidden">
        {/* Gradient overlay — gives depth to placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-secondary/25 group-hover:from-secondary/5 transition-all duration-500" />

        {/* Category badge */}
        <div className="absolute top-4 left-4 flex gap-2 z-10">
          <span className="bg-secondary text-surface font-label-caps text-[9px] tracking-[0.18em] px-2.5 py-1">
            {project.categoryLabel.toUpperCase()}
          </span>
          {project.isHighlighted && (
            <span className="bg-accent text-white font-label-caps text-[9px] tracking-[0.18em] px-2.5 py-1">
              FLAGSHIP
            </span>
          )}
        </div>

        {/* Status dot */}
        <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5">
          <div className={`w-2 h-2 rounded-full ${isCompleted ? 'bg-green-500' : 'bg-accent animate-pulse-ring'}`} />
          <span className="font-label-caps text-[9px] tracking-[0.15em] text-white/80">
            {project.status.toUpperCase()}
          </span>
        </div>

        {/* Hover: project number watermark */}
        <div className="absolute bottom-3 right-4 font-headline font-black text-[72px] leading-none text-secondary/10 select-none group-hover:text-accent/10 transition-colors">
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 space-y-4">
        {/* Location */}
        <div className="flex items-center gap-1.5 text-on-surface-variant">
          <span className="material-symbols-outlined text-[14px]">location_on</span>
          <span className="font-label-caps text-[10px] tracking-[0.16em]">{project.location.toUpperCase()}</span>
        </div>

        {/* Title */}
        <h3 className="font-headline text-xl font-semibold text-secondary group-hover:text-accent transition-colors duration-300 leading-tight">
          {project.title}
        </h3>

        {/* Meta row */}
        <div className="flex justify-between text-xs font-body text-on-surface-variant border-t border-outline pt-3">
          <span>{project.client}</span>
          <span className="font-semibold text-secondary">{project.value}</span>
        </div>

        {/* Progress bar */}
        <div className="space-y-1.5">
          <div className="w-full h-0.5 bg-surface-variant relative overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 h-full bg-accent"
              initial={{ width: 0 }}
              whileInView={{ width: `${project.progress}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: 'easeOut', delay: 0.2 }}
            />
          </div>
          <div className="flex justify-between font-label-caps text-[9px] text-on-surface-variant/60 tracking-[0.14em]">
            <span>{project.duration}</span>
            <span>{project.progress}% COMPLETE</span>
          </div>
        </div>

        {/* Arrow CTA */}
        <div className="pt-2 flex items-center justify-between">
          <span className="font-label-caps text-[10px] text-secondary/60 tracking-[0.16em]">VIEW DETAILS</span>
          <div className="w-7 h-7 border border-outline flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-300">
            <span className="material-symbols-outlined text-[16px] text-secondary group-hover:text-white transition-colors">arrow_forward</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectBoard() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = projectBoardData.filter(
    (p) => activeCategory === 'all' || p.category === activeCategory
  );

  return (
    <section className="bg-surface py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-accent" />
              <span className="font-label-caps text-[10px] text-accent tracking-[0.26em]">PROJECT PORTFOLIO</span>
            </div>
            <h2 className="font-headline font-black uppercase text-4xl md:text-5xl text-secondary tracking-tighter leading-none">
              All Projects
            </h2>
          </div>

          {/* Result count */}
          <p className="font-label-caps text-[10px] text-on-surface-variant/60 tracking-[0.16em]">
            SHOWING {filtered.length} OF {projectBoardData.length} PROJECTS
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex items-center gap-0 border-b border-outline mb-14 overflow-x-auto">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative shrink-0 pb-4 px-5 font-label-caps text-[11px] tracking-[0.16em] transition-colors duration-200 ${
                activeCategory === cat.id
                  ? 'text-accent'
                  : 'text-on-surface-variant hover:text-secondary'
              }`}
            >
              {cat.label.toUpperCase()}
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="filter-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                  transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
