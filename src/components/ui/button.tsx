import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/50 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] select-none cursor-pointer',
  {
    variants: {
      variant: {
        default:
          'bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white shadow-glow-brand hover:shadow-[0_0_35px_rgba(16,185,129,0.45)] border border-brand-400/20 hover:-translate-y-0.5',
        destructive:
          'bg-red-500/90 text-white hover:bg-red-600 shadow-sm border border-red-500/30',
        outline:
          'border border-border bg-surface-card/85 text-foreground hover:bg-surface-secondary hover:border-border-highlight shadow-sm backdrop-blur-md hover:-translate-y-0.5',
        secondary:
          'bg-surface-secondary text-foreground hover:bg-surface border border-border shadow-sm',
        ghost:
          'text-muted-text hover:text-foreground hover:bg-surface-secondary/70',
        link:
          'text-brand-500 dark:text-brand-400 underline-offset-4 hover:underline p-0 h-auto font-medium',
      },
      size: {
        default: 'h-10 px-5 py-2',
        sm: 'h-8.5 rounded-lg px-3.5 text-xs',
        lg: 'h-12 rounded-xl px-8 text-sm sm:text-base font-bold',
        icon: 'h-10 w-10 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
