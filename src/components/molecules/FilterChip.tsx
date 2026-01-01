'use client';

import { cn } from '@/lib/utils';

interface FilterChipProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

export function FilterChip({
  label,
  isActive,
  onClick,
  className,
}: FilterChipProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'px-3 py-1.5 text-sm rounded-full border transition-all',
        isActive
          ? 'bg-foreground text-background border-foreground'
          : 'bg-transparent text-muted-foreground border-border hover:border-foreground/50 hover:text-foreground',
        className
      )}
    >
      {label}
    </button>
  );
}
