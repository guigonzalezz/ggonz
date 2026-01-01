'use client';

import { Link } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { Experience, technologyLabels } from '@/lib/experiences';
import { Badge } from '@/components/ui/badge';
import { MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExperienceCardProps {
  experience: Experience;
  variant?: 'compact' | 'full';
  className?: string;
}

export function ExperienceCard({ experience, variant = 'compact', className }: ExperienceCardProps) {
  const locale = useLocale() as 'en' | 'pt' | 'de';

  const title = experience.titles[locale];
  const shortDescription = experience.shortDescriptions[locale];
  const location = experience.locationCity[locale];

  if (variant === 'compact') {
    return (
      <Link
        href={`/experiences/${experience.slug}`}
        className={cn(
          'group block py-3 border-b border-border/50 hover:border-foreground/20 transition-colors',
          className
        )}
      >
        <h3 className="text-sm font-medium text-foreground group-hover:underline underline-offset-4 truncate">
          {title}
        </h3>
        <p className="text-xs text-muted-foreground truncate mt-0.5">
          {shortDescription}
        </p>
      </Link>
    );
  }

  return (
    <Link
      href={`/experiences/${experience.slug}`}
      className={cn(
        'group block p-4 rounded-lg border border-border/50 hover:border-foreground/20 transition-colors bg-card',
        className
      )}
    >
      <div className="space-y-3">
        <div>
          <h3 className="text-sm font-medium text-foreground group-hover:underline underline-offset-4">
            {title}
          </h3>
          <div className="flex items-center gap-1.5 mt-1 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3" />
            {location}
          </div>
        </div>

        <p className="text-xs text-muted-foreground line-clamp-2">
          {shortDescription}
        </p>

        <div className="flex flex-wrap gap-1">
          {experience.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-[10px] px-1.5 py-0">
              {technologyLabels[tech] || tech}
            </Badge>
          ))}
          {experience.technologies.length > 4 && (
            <Badge variant="outline" className="text-[10px] px-1.5 py-0">
              +{experience.technologies.length - 4}
            </Badge>
          )}
        </div>
      </div>
    </Link>
  );
}
