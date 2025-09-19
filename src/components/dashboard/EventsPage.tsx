import { EventsSection } from "../EventsSection";

interface EventsPageProps {
  user: any;
}

export function EventsPage({ user }: EventsPageProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Events</h1>
        <p className="text-muted-foreground">Join workshops, webinars, and community events</p>
      </div>
      <EventsSection />
    </div>
  );
}
