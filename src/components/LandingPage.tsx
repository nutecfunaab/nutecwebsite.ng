import { Navigation } from "./Navigation";
import { ScrollProgress } from "./ScrollProgress";
import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";
import { FeaturesOverview } from "./FeaturesOverview";
import { AuthSection } from "./AuthSection";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";

interface LandingPageProps {
  onLogin: (userData: any) => void;
}

export function LandingPage({ onLogin }: LandingPageProps) {
  return (
    <>
      <ScrollProgress />
      <Navigation onLogin={onLogin} />
      <main>
        <HeroSection onLogin={onLogin} />
        <AboutSection />
        <FeaturesOverview />
        <AuthSection onLogin={onLogin} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}