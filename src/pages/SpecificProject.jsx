import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ProjectDetailHero } from '../components/sections/projects/detail/ProjectDetailHero';
import { ProjectStatStrip } from '../components/sections/projects/detail/ProjectStatStrip';
import { ProjectEditorial } from '../components/sections/projects/detail/ProjectEditorial';
import { ProjectCTA } from '../components/sections/projects/detail/ProjectCTA';
import { projectDetailsData } from '../data/projectDetailsData';

// Shared page transition animation
const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] }
};

export function SpecificProject() {
  const { projectId } = useParams();

  // Scroll to top immediately on project change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  // Lookup project details from database; fallback to p2 (Haridwar Medical Campus)
  const project = projectDetailsData[projectId] || projectDetailsData['p2'];

  return (
    <motion.div
      {...pageTransition}
      className="bg-surface min-h-screen"
    >
      <ProjectDetailHero project={project} />
      <ProjectStatStrip stats={project.stats} />
      <ProjectEditorial editorial={project.editorial} />
      <ProjectCTA />
    </motion.div>
  );
}
