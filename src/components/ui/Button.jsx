import React from 'react';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';

export const Button = React.forwardRef(({
  className,
  variant = 'primary',
  size = 'default',
  children,
  showArrow = true,
  icon = 'arrow_forward',
  iconPosition = 'right',
  to,
  sweepBg,
  theme = 'light',
  noAnimation = false,
  noTextAnimation = false,
  ...props
}, ref) => {
  const isText = typeof children === 'string';

  // Base styles: rigidly size to prevent dimensional shifts
  const baseStyles = 'group relative font-label-caps text-[11px] tracking-[0.2em] inline-flex items-center justify-center overflow-hidden border font-semibold select-none transition-all duration-300 box-border leading-none h-[44px]';
  
  // Explicitly configure symmetric padding
  const sizes = {
    default: 'px-8',
    lg: 'px-10 h-[52px]',
    sm: 'px-6 h-[36px]',
  };

  const Component = to ? Link : 'button';
  const componentProps = to ? { to, ...props } : props;

  if (variant === 'ghost') {
    return (
      <Component
        ref={ref}
        className={cn(
          'font-label-caps text-label-caps transition-all inline-flex items-center justify-center disabled:opacity-50 disabled:pointer-events-none hover:bg-surface-container-highest px-8 py-3 box-border',
          className
        )}
        {...componentProps}
      >
        {children}
      </Component>
    );
  }

  // Resolve sweepBg based on theme if not explicitly passed
  let resolvedSweepBg = sweepBg;
  if (!resolvedSweepBg) {
    if (theme === 'light') {
      resolvedSweepBg = variant === 'primary' ? 'bg-surface' : 'bg-on-surface';
    } else if (theme === 'dark') {
      resolvedSweepBg = variant === 'primary' ? 'bg-[#080808]' : 'bg-white';
    } else if (theme === 'black') {
      resolvedSweepBg = variant === 'primary' ? 'bg-[#060606]' : 'bg-white';
    }
  }

  let variantClasses = '';
  let slideBg1 = '';
  let slideBg2 = '';
  let textInitialColor = '';
  let textHoverColor = '';

  if (variant === 'primary') {
    variantClasses = noAnimation 
      ? 'bg-accent border-accent text-white hover:bg-secondary hover:border-secondary' 
      : 'bg-accent border-accent text-white'; // default state is orange bg
    slideBg1 = resolvedSweepBg || 'bg-inverse-surface';
    slideBg2 = resolvedSweepBg || 'bg-inverse-surface';
    textInitialColor = 'text-white';
    textHoverColor = 'text-accent';
  } else if (variant === 'outline') {
    variantClasses = noAnimation
      ? 'bg-transparent border-on-surface/20 text-secondary hover:bg-secondary/5 hover:border-secondary hover:text-accent'
      : 'bg-transparent border-on-surface/30 text-on-surface hover:border-on-surface';
    slideBg1 = resolvedSweepBg || 'bg-on-surface';
    slideBg2 = resolvedSweepBg || 'bg-on-surface';
    textInitialColor = 'text-on-surface';
    textHoverColor = (resolvedSweepBg === 'bg-white' || resolvedSweepBg === 'bg-surface' || resolvedSweepBg === 'bg-surface-container-lowest') 
      ? 'text-on-surface' 
      : 'text-white';
  } else if (variant === 'nav') {
    variantClasses = 'bg-transparent border-accent/20 text-accent';
    slideBg1 = 'bg-secondary';
    slideBg2 = 'bg-accent';
    textInitialColor = 'text-accent';
    textHoverColor = 'text-white';
  }

  return (
    <Component
      ref={ref}
      className={cn(baseStyles, sizes[size], variantClasses, className)}
      {...componentProps}
    >
      {/* Sweep backgrounds (Diagonal slice effect) */}
      {!noAnimation && (
        <>
          <div className={cn("absolute inset-0 -translate-x-[120%] group-hover:translate-x-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] z-0 skew-x-12 scale-110 origin-left", slideBg1)} />
          <div className={cn("absolute inset-0 -translate-x-[120%] group-hover:translate-x-0 transition-transform duration-[600ms] delay-[50ms] ease-[cubic-bezier(0.76,0,0.24,1)] z-0 skew-x-12 scale-110 origin-left", slideBg2)} />
        </>
      )}

      {/* Text wrapper with overflow-visible to permit absolute/inline icon placement */}
      <div className="relative z-10 flex items-center justify-center pointer-events-none h-[11px] overflow-visible">
        <div className="relative flex items-center">
          {/* Icon Left */}
          {isText && showArrow && iconPosition === 'left' && (
            <span
              className={cn(
                "z-10 material-symbols-outlined text-[13px] transition-all duration-300",
                noAnimation
                  ? "opacity-100 translate-x-0 relative mr-2 leading-none"
                  : "absolute right-full mr-2.5 opacity-0 duration-[400ms] delay-150 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:opacity-100",
                !noAnimation && (
                  icon === 'arrow_downward' || icon === 'expand_more' || icon === 'download'
                    ? "-translate-y-2 group-hover:translate-y-0"
                    : "-translate-x-2 group-hover:translate-x-0"
                ),
                noAnimation && (
                  icon === 'arrow_downward' || icon === 'expand_more' || icon === 'download'
                    ? "group-hover:translate-y-[2px]"
                    : "group-hover:-translate-x-[2px]"
                ),
                noAnimation ? "" : textHoverColor
              )}
            >
              {icon}
            </span>
          )}

          {/* Animated/Static Text Spans */}
          {isText ? (
            (noAnimation || noTextAnimation) ? (
              <span className={cn("font-semibold leading-none transition-colors duration-300", textInitialColor, variant === 'outline' && "group-hover:text-accent")}>
                {children}
              </span>
            ) : (
              <div className="flex font-semibold">
                {children.split('').map((char, i) => (
                  <div key={i} className="relative flex flex-col items-center justify-center w-auto h-[11px] overflow-hidden">
                    <span 
                      className={cn("inline-block transition-transform duration-[500ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[150%] leading-none", textInitialColor)}
                      style={{ transitionDelay: `${i * 0.015}s` }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                    <span 
                      className={cn("absolute top-full left-0 inline-block transition-transform duration-[500ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full leading-none", textHoverColor)}
                      style={{ transitionDelay: `${i * 0.015}s` }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  </div>
                ))}
              </div>
            )
          ) : (
            children
          )}

          {/* Icon Right */}
          {isText && showArrow && iconPosition === 'right' && (
            <span
              className={cn(
                "z-10 material-symbols-outlined text-[13px] transition-all duration-300",
                noAnimation
                  ? "opacity-100 translate-x-0 relative ml-2 leading-none"
                  : "absolute left-full ml-2.5 opacity-0 duration-[400ms] delay-150 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:opacity-100",
                !noAnimation && (
                  icon === 'arrow_downward' || icon === 'expand_more' || icon === 'download'
                    ? "-translate-y-2 group-hover:translate-y-0"
                    : "translate-x-2 group-hover:translate-x-0"
                ),
                noAnimation && (
                  icon === 'arrow_downward' || icon === 'expand_more' || icon === 'download'
                    ? "group-hover:translate-y-[2px]"
                    : "group-hover:translate-x-[2px]"
                ),
                noAnimation ? "" : textHoverColor
              )}
            >
              {icon}
            </span>
          )}
        </div>
      </div>
    </Component>
  );
});

Button.displayName = 'Button';
