import * as React from 'react';

import { cn } from '@/lib/utils';

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot='textarea'
      className={cn(
        'flex w-full rounded-md border bg-transparent px-3 py-2 ring-inset text-base outline-none md:text-sm',
        'focus-visible:ring-2 focus-visible:ring-blue-600',
        'aria-invalid:ring-2 aria-invalid:ring-red-600 aria-invalid:ring-offset-0',
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
