'use client';

import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function NavItem({ href, children, className, onClick }: NavItemProps) {
  const pathname = usePathname();
  
  // Check if current path matches (accounting for locale prefix)
  const isActive = pathname.endsWith(href) || 
    (href === '/' && (pathname === '/' || pathname.match(/^\/(en|pt|de)$/)));

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        'text-sm text-muted-foreground hover:text-foreground transition-colors',
        isActive && 'text-foreground',
        className
      )}
    >
      {children}
    </Link>
  );
}
