'use client';

import { useState, useEffect } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

type StatusType = 'available' | 'lunching' | 'sleeping';

interface StatusConfig {
  color: string;
  label: string;
}

const statusConfigs: Record<StatusType, StatusConfig> = {
  available: {
    color: 'bg-green-500',
    label: 'available',
  },
  lunching: {
    color: 'bg-red-500',
    label: 'lunching 🍽️',
  },
  sleeping: {
    color: 'bg-gray-400',
    label: 'sleeping',
  },
};

function getStatusFromBRT(): StatusType {
  // Get current time in BRT (Brazil Time - UTC-3)
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const brtOffset = -3 * 60 * 60000; // UTC-3
  const brtTime = new Date(utc + brtOffset);

  const hours = brtTime.getHours();
  const minutes = brtTime.getMinutes();
  const timeInMinutes = hours * 60 + minutes;

  // 1PM (13:00) to 2PM (14:00) - Lunching
  if (timeInMinutes >= 13 * 60 && timeInMinutes < 14 * 60) {
    return 'lunching';
  }

  // 8AM (8:00) to 8PM (20:00) - Available
  if (timeInMinutes >= 8 * 60 && timeInMinutes < 20 * 60) {
    return 'available';
  }

  // Outside working hours - Sleeping
  return 'sleeping';
}

export function StatusIndicator() {
  const [status, setStatus] = useState<StatusType>('sleeping');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setStatus(getStatusFromBRT());

    // Update status every minute
    const interval = setInterval(() => {
      setStatus(getStatusFromBRT());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const config = statusConfigs[status];

  // Avoid hydration mismatch by rendering a neutral state initially
  if (!mounted) {
    return <div className="w-2 h-2 rounded-full bg-gray-400" />;
  }

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className={cn(
              'w-2 h-2 rounded-full cursor-default transition-colors duration-300',
              config.color
            )}
          />
        </TooltipTrigger>
        <TooltipContent side="top" className="text-xs">
          {config.label}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
