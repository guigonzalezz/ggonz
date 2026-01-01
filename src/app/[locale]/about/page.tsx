import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { PageLayout } from '@/components/templates';
import { ImagePlaceholder } from '@/components/atoms';
import { Breadcrumb } from '@/components/molecules';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <PageLayout>
      <AboutContent />
    </PageLayout>
  );
}

function AboutContent() {
  const t = useTranslations('about');
  const navT = useTranslations('navigation');

  const techStack = {
    frontend: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'HTML/CSS', 'SASS'],
    backend: ['Node.js', 'NestJS', 'Express', 'Java', 'Spring Boot', 'PHP'],
    mobile: ['React Native', 'NativeScript'],
    devops: ['Docker', 'Kubernetes', 'GCP', 'Azure', 'AWS', 'Vercel'],
    databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'BigQuery'],
    tools: ['Git', 'Jest', 'Swagger', 'Storybook', 'LangChain', 'PowerBI'],
  };

  const languages = [
    { name: t('languages.portuguese'), level: 'C2', label: t('languages.native') },
    { name: t('languages.english'), level: 'C1', label: t('languages.advanced') },
    { name: t('languages.german'), level: 'A1', label: t('languages.beginner') },
  ];

  return (
    <div className="max-w-[640px] mx-auto px-4 space-y-12">
      {/* Breadcrumb */}
      <Breadcrumb currentPage={navT('about').toLowerCase()} />

      {/* Header */}
      <header className="space-y-2">
        <h1 className="text-2xl font-serif font-semibold">{t('title')}</h1>
        <p className="text-muted-foreground">{t('subtitle')}</p>
      </header>

      {/* Intro */}
      <section className="space-y-4">
        <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {t('intro.p2')}
          </p>
        </div>
      </section>

      {/* Photos Grid */}
      <section className="space-y-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <ImagePlaceholder className="col-span-1" aspectRatio="square" />
          <ImagePlaceholder className="col-span-1" aspectRatio="square" />
          <ImagePlaceholder className="col-span-1 hidden md:flex" aspectRatio="square" />
          <ImagePlaceholder className="col-span-1" aspectRatio="square" />
          <ImagePlaceholder className="col-span-1" aspectRatio="square" />
          <ImagePlaceholder className="col-span-1 hidden md:flex" aspectRatio="square" />
        </div>
      </section>

      {/* Personal Note */}
      <section className="space-y-4">
        <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {t('interests.p1')}
          </p>
        </div>
      </section>

      <Separator />

      {/* Journey */}
      <section className="space-y-4">
        <h2 className="text-lg font-serif font-medium">{t('journey.title')}</h2>
        <p className="text-muted-foreground leading-relaxed text-sm">
          {t('journey.p1')}
        </p>
        <p className="text-muted-foreground leading-relaxed text-sm">
          {t('journey.p2')}
        </p>
      </section>

      <Separator />

      {/* Technical Expertise */}
      <section className="space-y-6">
        <div>
          <h2 className="text-lg font-serif font-medium">{t('expertise.title')}</h2>
          <p className="text-sm text-muted-foreground mt-1">
            {t('expertise.description')}
          </p>
        </div>

        <div className="grid gap-4">
          {Object.entries(techStack).map(([category, techs]) => (
            <div key={category} className="space-y-2">
              <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                {t(`expertise.${category}` as const)}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {techs.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* Languages */}
      <section className="space-y-4">
        <h2 className="text-lg font-serif font-medium">{t('languages.title')}</h2>
        <div className="grid gap-3">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="flex items-center justify-between py-2 border-b border-border/50"
            >
              <span className="text-sm">{lang.name}</span>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  {lang.level}
                </Badge>
                <span className="text-xs text-muted-foreground">{lang.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* Education */}
      <section className="space-y-4">
        <h2 className="text-lg font-serif font-medium">{t('education.title')}</h2>
        <div className="space-y-4">
          <div className="space-y-1">
            <h3 className="text-sm font-medium">{t('education.bachelors.degree')}</h3>
            <p className="text-sm text-muted-foreground">
              {t('education.bachelors.school')}
            </p>
            <p className="text-xs text-muted-foreground">
              {t('education.bachelors.period')}
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-medium">{t('education.mba.degree')}</h3>
            <p className="text-sm text-muted-foreground">
              {t('education.mba.school')}
            </p>
            <p className="text-xs text-muted-foreground">
              {t('education.mba.period')}
            </p>
          </div>
        </div>
      </section>

      <Separator />

      {/* Certifications */}
      <section className="space-y-4">
        <h2 className="text-lg font-serif font-medium">{t('certifications.title')}</h2>
        <ul className="space-y-2">
          {[0, 1, 2, 3, 4].map((index) => (
            <li
              key={index}
              className="text-sm text-muted-foreground flex items-start gap-2"
            >
              <span className="text-foreground">•</span>
              {t(`certifications.items.${index}` as const)}
            </li>
          ))}
        </ul>
      </section>

      <Separator />

      {/* Interests */}
      <section className="space-y-4">
        <h2 className="text-lg font-serif font-medium">{t('interests.title')}</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {t('interests.p1')}
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {t('interests.p2')}
        </p>
      </section>
    </div>
  );
}
