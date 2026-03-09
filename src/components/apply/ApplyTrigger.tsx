'use client';

import { type ButtonHTMLAttributes } from 'react';

interface ApplyTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function ApplyTrigger({ children, className, ...props }: ApplyTriggerProps) {
  return (
    <button
      {...props}
      className={className}
      onClick={(e) => {
        props.onClick?.(e);
        window.dispatchEvent(new CustomEvent('open-apply'));
      }}
    >
      {children}
    </button>
  );
}
