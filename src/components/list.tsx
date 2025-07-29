import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import type React from 'react';

const listVariants = cva('flex', {
  variants: {
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
  },
  defaultVariants: {
    orientation: 'vertical',
  },
});

export type ListProps<T> = {
  items?: T[];
  render: (item: T, index: number) => React.ReactNode;
} & React.ComponentProps<'div'> &
  VariantProps<typeof listVariants>;

function List<T>({
  items,
  render,
  orientation,
  className,
  ...props
}: ListProps<T>) {
  return (
    <div
      className={cn('flex gap-y-3', listVariants({ orientation }), className)}
      {...props}
    >
      {items?.map((item, index) => render(item, index))}
    </div>
  );
}

export { List, listVariants };
