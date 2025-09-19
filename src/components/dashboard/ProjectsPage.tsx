import { ProjectsSection } from "../ProjectsSection";

interface ProjectsPageProps {
  user: any;
}

export function ProjectsPage({ user }: ProjectsPageProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-muted-foreground">Explore and showcase your work</p>
      </div>
      <ProjectsSection />
    </div>
  );
}
