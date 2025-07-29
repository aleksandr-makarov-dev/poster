'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDownIcon } from 'lucide-react';
import { useMemo } from 'react';

export type SelectOptionDef = {
  label: string;
  value: string;
};

export type SelectProps = {
  value?: string;
  options?: SelectOptionDef[];
  disabled?: boolean;
  onChange?: (value: string) => void;
};

export function Select({ value, options, disabled, onChange }: SelectProps) {
  const option = useMemo(() => {
    return options?.find((option) => option.value === value);
  }, [options, value]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label='Select option'
        disabled={disabled}
        asChild
      >
        <Button
          className='group justify-between items-center dark:bg-input/30 border-input bg-background ring-inset flex h-8 w-full min-w-0 rounded-md border px-3 py-1 text-base outline-none overflow-hidden'
          variant='none'
        >
          <span className='text-sm truncate overflow-hidden'>
            {option?.label}
          </span>
          <ChevronDownIcon className='ml-2 h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='start' className='w-56'>
        <DropdownMenuRadioGroup value={value} onValueChange={onChange}>
          {options?.map((option) => (
            <DropdownMenuRadioItem key={option.value} value={option.value}>
              {option.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
