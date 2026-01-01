import { useTranslations } from 'next-intl';
import { StatCard } from '@/components/molecules';
import { Github } from 'lucide-react';
import { ExternalLink } from '@/components/atoms';

interface GitHubStatsProps {
  stats: {
    contributions: number | null;
    totalStars: number | null;
    yearsActive: number | null;
  };
}

export function GitHubStats({ stats }: GitHubStatsProps) {
  const t = useTranslations('home');

  const formatNumber = (num: number | null | undefined) => {
    if (num === null || num === undefined) return '—';
    if (num >= 1000) return `${(num / 1000).toFixed(1)}k`;
    return num.toString();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-2">
          <Github className="h-4 w-4" />
          {t('githubStats')}
        </h2>
        <ExternalLink
          href="https://github.com/guigonzalezz"
          className="text-xs text-muted-foreground"
        >
          @guigonzalezz
        </ExternalLink>
      </div>
      
      <div className="grid grid-cols-3 gap-3">
        <StatCard
          label={t('contributions')}
          value={formatNumber(stats.contributions)}
        />
        <StatCard
          label={t('stars')}
          value={formatNumber(stats.totalStars)}
        />
        <StatCard
          label={t('yearsActive')}
          value={stats.yearsActive ? `${stats.yearsActive}+` : '—'}
        />
      </div>
    </div>
  );
}
