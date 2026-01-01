'use client';

import { Link } from '@/i18n/navigation';
import { ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { StatusIndicator } from '@/components/atoms';

interface BreadcrumbProps {
  currentPage?: string;
  parentPage?: {
    href: string;
    label: string;
  };
}

export function Breadcrumb({ currentPage, parentPage }: BreadcrumbProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className="flex items-center gap-2 text-sm overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Home link with name */}
      <Link
        href="/"
        className={cn(
          "flex items-center gap-2 transition-all duration-300 ease-out",
          "text-muted-foreground hover:text-foreground",
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
        )}
      >
        <ArrowLeft 
          className={cn(
            "h-3 w-3 transition-transform duration-200",
            isHovering && "-translate-x-0.5"
          )} 
        />
        <StatusIndicator />
        <span className="transition-colors duration-200">Guilherme Gonzalez</span>
      </Link>
      
      {/* Parent page link */}
      {parentPage && (
        <>
          <span 
            className={cn(
              "text-muted-foreground transition-all duration-300 delay-75",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
            )}
          >
            /
          </span>
          <Link
            href={parentPage.href}
            className={cn(
              "text-muted-foreground hover:text-foreground transition-all duration-300 delay-100",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
            )}
          >
            {parentPage.label}
          </Link>
        </>
      )}
      
      {/* Current page */}
      {currentPage && (
        <>
          <span 
            className={cn(
              "text-muted-foreground transition-all duration-300",
              parentPage ? "delay-150" : "delay-75",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
            )}
          >
            /
          </span>
          <span 
            className={cn(
              "text-foreground font-medium transition-all duration-500 ease-out",
              parentPage ? "delay-200" : "delay-100",
              isVisible 
                ? "opacity-100 translate-y-0 translate-x-0" 
                : "opacity-0 translate-y-3 translate-x-2"
            )}
          >
            {currentPage}
          </span>
        </>
      )}
    </div>
  );
}
