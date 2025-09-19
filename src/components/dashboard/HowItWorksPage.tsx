import { HowItWorksSection } from "../HowItWorksSection";

interface HowItWorksPageProps {
  user: any;
}

export function HowItWorksPage({ user }: HowItWorksPageProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">How It Works</h1>
        <p className="text-muted-foreground">Learn how to get the most out of our platform</p>
      </div>
      <HowItWorksSection />
    </div>
  );
}
