import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { PageLayout } from '@/components/templates';
import { ExperienceList } from '@/components/organisms';
import { Breadcrumb } from '@/components/molecules';

export default async function ExperiencesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <PageLayout>
      <ExperiencesContent />
    </PageLayout>
  );
}

function ExperiencesContent() {
  const t = useTranslations('experiences');
  const navT = useTranslations('navigation');

  return (
    <div className="max-w-[640px] mx-auto px-4 space-y-8">
      {/* Breadcrumb */}
      <Breadcrumb currentPage={navT('experiences').toLowerCase()} />

      {/* Header */}
      <header className="space-y-2">
        <h1 className="text-2xl font-serif font-semibold">{t('title')}</h1>
        <p className="text-muted-foreground">{t('subtitle')}</p>
      </header>

      {/* Experience List with Filters */}
      <ExperienceList />
    </div>
  );
}
