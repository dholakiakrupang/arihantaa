import React from 'react';
import { cn } from '../../lib/utils';

export const Button = React.forwardRef(({ className, variant = 'primary', size = 'default', children, ...props }, ref) => {
  const baseStyles = 'font-label-caps text-label-caps transition-all inline-flex items-center justify-center disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    primary: 'bg-accent text-surface hover:bg-primary',
    outline: 'text-on-surface border border-on-surface hover:bg-on-surface hover:text-surface',
    ghost: 'hover:bg-surface-container-highest',
    nav: 'border-2 border-on-surface hover:bg-on-surface hover:text-surface'
  };

  const sizes = {
    default: 'px-8 py-3',
    lg: 'px-10 py-4',
    sm: 'px-6 py-3',
  };

  return (
    <button
      ref={ref}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';
