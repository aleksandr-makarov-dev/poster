import { cn } from '@/lib/utils';
import type React from 'react';

export type PageHeaderProps = {
  title?: React.ReactNode;
  actions?: React.ReactNode;
} & React.ComponentProps<'div'>;

export function PageHeader({
  title,
  actions,
  className,
  ...props
}: PageHeaderProps) {
  return (
    <div
      className={cn('flex flex-row items-center gap-x-3', className)}
      {...props}
    >
      {title && <h2 className='text-2xl font-semibold flex-1'>{title}</h2>}
      {actions}
    </div>
  );
}
