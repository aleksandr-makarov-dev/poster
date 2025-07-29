import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { LoaderIcon } from 'lucide-react';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transform active:-translate-y-[0.5px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none hover:cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-1",
  {
    variants: {
      variant: {
        filled: '',
        soft: '',
      },
      color: {
        blue: '',
        green: '',
        red: '',
        gray: '',
        yellow: '',
      },
      size: {
        md: 'h-8 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-7 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-9 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-8',
      },
    },
    defaultVariants: {
      variant: 'filled',
      color: 'blue',
      size: 'md',
    },
    compoundVariants: [
      {
        variant: 'filled',
        color: 'blue',
        className: 'bg-blue-600 text-white hover:bg-blue-700',
      },
      {
        variant: 'soft',
        color: 'blue',
        className:
          'bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-100 dark:hover:bg-blue-800',
      },

      {
        variant: 'filled',
        color: 'green',
        className: 'bg-green-600 text-white hover:bg-green-700',
      },
      {
        variant: 'soft',
        color: 'green',
        className:
          'bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-100 dark:hover:bg-green-800',
      },

      {
        variant: 'filled',
        color: 'red',
        className: 'bg-red-600 text-white hover:bg-red-700',
      },
      {
        variant: 'soft',
        color: 'red',
        className:
          'bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-900 dark:text-red-100 dark:hover:bg-red-800',
      },

      {
        variant: 'filled',
        color: 'gray',
        className: 'bg-gray-800 text-white hover:bg-gray-900',
      },
      {
        variant: 'soft',
        color: 'gray',
        className:
          'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700',
      },

      {
        variant: 'filled',
        color: 'yellow',
        className: 'bg-yellow-500 text-black hover:bg-yellow-600',
      },
      {
        variant: 'soft',
        color: 'yellow',
        className:
          'bg-yellow-100 text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-900 dark:text-yellow-100 dark:hover:bg-yellow-800',
      },
    ],
  },
);

function Button({
  className,
  variant,
  color,
  size,
  children,
  disabled,
  loading = false,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean;
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      className={cn(
        'relative',
        buttonVariants({ variant, color, size }),
        className,
      )}
      disabled={loading || disabled}
      aria-busy={loading}
      aria-disabled={loading || disabled}
      {...props}
    >
      {loading ? (
        <span className='absolute inset-0 flex items-center justify-center'>
          <LoaderIcon className='size-4 animate-spin text-current' />
        </span>
      ) : (
        children
      )}
    </Comp>
  );
}

export { Button, buttonVariants };
