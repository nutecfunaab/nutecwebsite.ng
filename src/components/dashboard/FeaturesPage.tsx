import { FeaturesSection } from "../FeaturesSection";

interface FeaturesPageProps {
  user: any;
}

export function FeaturesPage({ user }: FeaturesPageProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Features</h1>
        <p className="text-muted-foreground">Discover all the amazing features we offer</p>
      </div>
      <FeaturesSection />
    </div>
  );
}
