import { useTranslations } from 'next-intl';
import { NavItem } from '@/components/molecules';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  const t = useTranslations('navigation');
  const footerT = useTranslations('footer');

  const navItems = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/experiences', label: t('experiences') },
    { href: '/projects', label: t('projects') },
  ];

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="max-w-[640px] mx-auto px-4 py-8">
        <nav className="flex flex-wrap items-center gap-4 md:gap-6 mb-6">
          {navItems.map((item) => (
            <NavItem key={item.href} href={item.href}>
              {item.label}
            </NavItem>
          ))}
        </nav>
        
        <Separator className="mb-6" />
        
        <p className="text-sm text-muted-foreground">
          {footerT('copyright')}
        </p>
      </div>
    </footer>
  );
}
