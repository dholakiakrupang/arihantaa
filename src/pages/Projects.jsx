import React from 'react';
import { ProjectsHero } from '../components/sections/projects/ProjectsHero';
import { LiveStatsBar } from '../components/sections/projects/LiveStatsBar';
import { ProjectBoard } from '../components/sections/projects/ProjectBoard';
import { CurrentPipeline } from '../components/sections/projects/CurrentPipeline';
import { SectorSummaryStrip } from '../components/sections/projects/SectorSummaryStrip';

import { CredentialsBar } from '../components/sections/projects/CredentialsBar';

export function Projects() {
  return (
    <>
      {/* SEO */}
      <title>Projects | Arihantaa Powertech — Critical Infrastructure Portfolio</title>

      <main>
        <ProjectsHero />
        <LiveStatsBar />
        <ProjectBoard />
        <CurrentPipeline />
        <SectorSummaryStrip />

        <CredentialsBar />
      </main>
    </>
  );
}
