'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { ThemeToggle, LanguageSelector } from '@/components/atoms';

export function Header() {
  const headerT = useTranslations('header');

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="max-w-[640px] mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-medium text-foreground hover:text-foreground/80 transition-colors"
        >
          {headerT('logo')}
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
}
