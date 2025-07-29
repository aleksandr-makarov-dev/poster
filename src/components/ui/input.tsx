import * as React from 'react';

import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot='input'
      className={cn(
        'relative',
        'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input bg-background ring-inset flex h-8 w-full min-w-0 rounded-md border px-3 py-1 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'focus-visible:ring-2 focus-visible:ring-blue-600',
        'aria-invalid:ring-2 aria-invalid:ring-red-600 aria-invalid:ring-offset-0',
        className,
      )}
      {...props}
    />
  );
}

export { Input };
