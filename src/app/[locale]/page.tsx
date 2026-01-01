import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { PageLayout } from '@/components/templates';
import { ExperienceCard } from '@/components/molecules';
import { GitHubStats } from '@/components/organisms';
import { ExternalLink, StatusIndicator } from '@/components/atoms';
import { experiences } from '@/lib/experiences';
import { getGitHubStats, getGitHubContributions } from '@/lib/github';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  // Fetch GitHub stats
  const [githubStats, contributions] = await Promise.all([
    getGitHubStats(),
    getGitHubContributions(),
  ]);

  const currentYear = new Date().getFullYear();
  const yearsActive = currentYear - 2018; // Started in 2018

  return (
    <PageLayout>
      <HomeContent
        githubStats={{
          contributions: contributions,
          totalStars: githubStats?.totalStars ?? null,
          yearsActive: yearsActive,
        }}
      />
    </PageLayout>
  );
}

function HomeContent({
  githubStats,
}: {
  githubStats: {
    contributions: number | null;
    totalStars: number | null;
    yearsActive: number | null;
  };
}) {
  const t = useTranslations('home');
  const visibleExperiences = experiences.filter((exp) => !exp.hide);
  const featuredExperiences = visibleExperiences.slice(0, 4);
  const totalExperiences = visibleExperiences.length;

  return (
    <div className="max-w-[640px] mx-auto px-4 space-y-12">
      {/* Hero Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <StatusIndicator />
          <h1 className="text-sm font-medium">
            {t('name')}
            <span className="text-muted-foreground"> / {t('role')}</span>
          </h1>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">{t('tagline')}</p>

        <div className="flex flex-col gap-2 pt-2">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm text-foreground hover:underline underline-offset-4"
          >
            {t('learnMore')} <ArrowRight className="h-3 w-3" />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-foreground hover:underline underline-offset-4"
          >
            {t('viewProjects')} <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </section>

      <Separator />

      {/* Connect Section */}
      <section className="space-y-4">
        <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          {t('connectWithMe')}
        </h2>
        <div className="flex flex-wrap gap-4">
          <ExternalLink href="mailto:gcgonzalez99@hotmail.com">
            {t('email')}
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/guigonzalezz/">
            LinkedIn
          </ExternalLink>
          <ExternalLink href="https://github.com/guigonzalezz">
            GitHub
          </ExternalLink>
          <ExternalLink href="https://www.instagram.com/ggonz4l3z/">
            Instagram
          </ExternalLink>
        </div>
      </section>

      <Separator />

      {/* Featured Experiences */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {t('featuredExperiences')}
          </h2>
          <Link
            href="/experiences"
            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            {t('viewAll', { count: totalExperiences })}
            <ArrowUpRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="space-y-1">
          {featuredExperiences.map((experience) => (
            <ExperienceCard
              key={experience.slug}
              experience={experience}
              variant="compact"
            />
          ))}
        </div>
      </section>

      <Separator />

      {/* GitHub Stats */}
      <section>
        <GitHubStats stats={githubStats} />
      </section>
    </div>
  );
}
