import React from 'react';
import { cn } from '../../lib/utils';

export interface ProgressiveBlurProps {
  direction?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
  blurLevels?: number[];
  stops?: number[];
}

export const ProgressiveBlur: React.FC<ProgressiveBlurProps> = ({
  direction = 'bottom',
  className,
  blurLevels = [0.5, 1, 2, 4, 8, 12, 16, 24],
  stops = [0, 12.5, 25, 37.5, 50, 62.5, 75, 100],
}) => {
  const getGradientDirection = () => {
    switch (direction) {
      case 'top':
        return 'to top';
      case 'bottom':
        return 'to bottom';
      case 'left':
        return 'to left';
      case 'right':
        return 'to right';
      default:
        return 'to bottom';
    }
  };

  const gradDir = getGradientDirection();

  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden',
        className
      )}
      aria-hidden="true"
    >
      {blurLevels.map((blur, index) => {
        const startStop = stops[index];
        const endStop = stops[index + 1] ?? 100;
        const maskGradient = `linear-gradient(${gradDir}, rgba(0, 0, 0, 0) ${startStop}%, rgba(0, 0, 0, 1) ${endStop}%)`;

        return (
          <div
            key={index}
            className="absolute inset-0"
            style={{
              backdropFilter: `blur(${blur}px)`,
              WebkitBackdropFilter: `blur(${blur}px)`,
              maskImage: maskGradient,
              WebkitMaskImage: maskGradient,
            }}
          />
        );
      })}
    </div>
  );
};
