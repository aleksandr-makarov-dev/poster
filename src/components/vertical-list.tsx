import { cn } from '@/lib/utils';
import type React from 'react';

export type VerticalListProps<T> = {
  items?: T[];
  render: (item: T, index: number) => React.ReactNode;
} & React.ComponentProps<'div'>;

export function VerticalList<T>({
  items,
  render,
  className,
  ...props
}: VerticalListProps<T>) {
  return (
    <div className={cn('flex flex-col gap-y-2', className)} {...props}>
      {items?.map((item, index) => render(item, index))}
    </div>
  );
}
