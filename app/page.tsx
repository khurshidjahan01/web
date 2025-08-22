import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Publications from '@/components/sections/publications';
import Experience from '@/components/sections/experience';
import Skills from '@/components/sections/skills';
import Mentorship from '@/components/sections/mentorship';
import Achievements from '@/components/sections/achievements';
import Blog from '@/components/sections/blog';
import Contact from '@/components/sections/contact';
import Navigation from '@/components/navigation';

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <About />
      <Publications />
      <Experience />
      <Skills />
      <Mentorship />
      <Achievements />
      <Blog />
      <Contact />
    </main>
  );
}