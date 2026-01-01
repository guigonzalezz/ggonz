import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { PageLayout } from '@/components/templates';
import { Breadcrumb } from '@/components/molecules';
import { Rocket } from 'lucide-react';

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <PageLayout>
      <ProjectsContent />
    </PageLayout>
  );
}

function ProjectsContent() {
  const t = useTranslations('projects');
  const navT = useTranslations('navigation');

  return (
    <div className="max-w-[640px] mx-auto px-4 space-y-8">
      {/* Breadcrumb */}
      <Breadcrumb currentPage={navT('projects').toLowerCase()} />

      {/* Header */}
      <header className="space-y-2">
        <h1 className="text-2xl font-serif font-semibold">{t('title')}</h1>
        <p className="text-muted-foreground">{t('subtitle')}</p>
      </header>

      {/* Coming Soon */}
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mb-6">
          <Rocket className="h-8 w-8 text-muted-foreground" />
        </div>
        <h2 className="text-xl font-serif font-medium mb-2">{t('comingSoon')}</h2>
        <p className="text-sm text-muted-foreground max-w-sm">
          {t('comingSoonDescription')}
        </p>
      </div>
    </div>
  );
}
