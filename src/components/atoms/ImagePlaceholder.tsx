import { cn } from '@/lib/utils';

interface ImagePlaceholderProps {
  className?: string;
  aspectRatio?: 'square' | 'video' | 'portrait';
}

export function ImagePlaceholder({
  className,
  aspectRatio = 'square',
}: ImagePlaceholderProps) {
  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
  };

  return (
    <div
      className={cn(
        'bg-muted/50 rounded-lg flex items-center justify-center border border-border/50',
        aspectClasses[aspectRatio],
        className
      )}
    >
      <svg
        className="w-10 h-10 text-muted-foreground/30"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    </div>
  );
}
