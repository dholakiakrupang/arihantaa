import { UnifiedCTA } from '../../UnifiedCTA';

export function ProjectCTA() {
  return (
    <UnifiedCTA 
      heading="Have a similar project?"
      accent="Talk to our team."
      subtitle="We respond to all project enquiries within 1 business day."
      primaryText="CONTACT PROJECT TEAM"
      primaryTo="/contact?inquiry=quote"
      outlineText="VIEW ALL PROJECTS →"
      outlineTo="/projects"
    />
  );
}
