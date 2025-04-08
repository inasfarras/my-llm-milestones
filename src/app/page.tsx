import Navigation from '@/components/layout/Navigation';
import HeroSection from '@/components/home/HeroSection';
import ProjectGrid from '@/components/home/ProjectGrid';

export default function Home() {
  return (
    <main className="min-h-screen bg-background-dark">
      <Navigation />
      <HeroSection />
      <ProjectGrid />
    </main>
  );
}
