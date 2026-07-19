import { Nav } from '@/components/layout/Nav';
import { Hero } from '@/components/home/Hero';
import { HomeReveal } from '@/components/home/HomeReveal';
import { Pillars } from '@/components/home/Pillars';
import { Programs } from '@/components/home/Programs';
import { Testimonials } from '@/components/home/Testimonials';
import { ImpactStats } from '@/components/home/ImpactStats';
import { NepalMap } from '@/components/home/NepalMap';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { RecentPosts } from '@/components/home/RecentPosts';
import { PartnersStrip } from '@/components/home/PartnersStrip';
import { SponsorsStrip } from '@/components/home/SponsorsStrip';
import { getHighlightedPosts, truncateWords } from '@/lib/posts';

/**
 * Home page. Layout chain from _layouts/home.html: Nav (reveal mode), Hero, then the
 * #homepageRemainingContent reveal wrapper with the nine sections in fixed order:
 * pillars, programs, testimonials, impact, nepal_map, services, highlight, clients, sponsors.
 */
export default function Home() {
  const highlighted = getHighlightedPosts(3).map((p) => ({
    title: p.title,
    url: p.url,
    dateFormatted: p.dateFormatted,
    image: p.image,
    excerpt: truncateWords(p.excerpt, 28),
  }));

  return (
    <>
      <Nav reveal />
      <Hero />
      <HomeReveal>
        <Pillars />
        <Programs />
        <Testimonials />
        <ImpactStats />
        <NepalMap />
        <ServicesGrid />
        <RecentPosts posts={highlighted} />
        <PartnersStrip />
        <SponsorsStrip />
      </HomeReveal>
    </>
  );
}
