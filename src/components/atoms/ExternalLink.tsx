import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
}

export function ExternalLink({
  href,
  children,
  className,
  showIcon = true,
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center gap-1 underline underline-offset-4 hover:text-foreground/80 transition-colors',
        className
      )}
    >
      {children}
      {showIcon && <ArrowUpRight className="h-3 w-3" />}
    </a>
  );
}
