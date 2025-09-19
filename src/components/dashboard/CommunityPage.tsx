import { CommunitySection } from "../CommunitySection";

interface CommunityPageProps {
  user: any;
}

export function CommunityPage({ user }: CommunityPageProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Community</h1>
        <p className="text-muted-foreground">Connect with fellow developers and learners</p>
      </div>
      <CommunitySection />
    </div>
  );
}
