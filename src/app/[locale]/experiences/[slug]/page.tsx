import { setRequestLocale } from 'next-intl/server';
import { useTranslations, useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { PageLayout } from '@/components/templates';
import { ImagePlaceholder } from '@/components/atoms';
import { Breadcrumb } from '@/components/molecules';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { MapPin } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { getExperienceBySlug, experiences, technologyLabels } from '@/lib/experiences';

export function generateStaticParams() {
  return experiences.map((exp) => ({
    slug: exp.slug,
  }));
}

export default async function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const experience = getExperienceBySlug(slug);

  if (!experience) {
    notFound();
  }

  return (
    <PageLayout>
      <ExperienceDetailContent slug={slug} />
    </PageLayout>
  );
}

function ExperienceDetailContent({ slug }: { slug: string }) {
  const locale = useLocale() as 'en' | 'pt' | 'de' | 'ru';
  const t = useTranslations('experiences');
  const navT = useTranslations('navigation');

  const experience = getExperienceBySlug(slug);

  if (!experience) {
    return null;
  }

  const title = experience.titles[locale];
  const description = experience.descriptions[locale];
  const highlights = experience.highlights[locale];
  const location = experience.locationCity[locale];

  return (
    <div className="max-w-[640px] mx-auto px-4 space-y-8">
      {/* Breadcrumb */}
      <Breadcrumb
        currentPage={title}
        parentPage={{
          href: '/experiences',
          label: navT('experiences').toLowerCase(),
        }}
      />

      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-2xl font-serif font-semibold">{title}</h1>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          {location}
        </div>

        {/* Sector */}
        <Badge variant="outline" className="text-xs">
          {t(`sectors.${experience.sector}`)}
        </Badge>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5">
          {experience.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {technologyLabels[tech] || tech}
            </Badge>
          ))}
        </div>
      </header>

      <Separator />

      {/* Description */}
      <section className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </section>

      {/* Screenshot Placeholder */}
      <section>
        <ImagePlaceholder className="w-full" aspectRatio="video" />
      </section>

      <Separator />

      {/* Highlights */}
      <section className="space-y-4">
        <h2 className="text-lg font-serif font-medium">Highlights</h2>
        <ul className="space-y-3">
          {highlights.map((highlight, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-sm text-muted-foreground"
            >
              <span className="text-foreground font-medium shrink-0">
                {String(index + 1).padStart(2, '0')}.
              </span>
              <span className="leading-relaxed">{highlight}</span>
            </li>
          ))}
        </ul>
      </section>

      <Separator />

      {/* Back Link */}
      <Link
        href="/experiences"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        ← {t('backToList')}
      </Link>
    </div>
  );
}
