import type {
  Control,
  ControllerFieldState,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  UseFormStateReturn,
} from 'react-hook-form';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from './ui/form';

export type FieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
  control: Control<TFieldValues>;
  label?: string;
  helperText?: string;
  optional?: boolean;
  optionalText?: string;
  render: ({
    field,
    fieldState,
    formState,
  }: {
    field: ControllerRenderProps<TFieldValues, TName>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<TFieldValues>;
  }) => React.ReactElement;
};

export function Field<TFormValues extends FieldValues>({
  name,
  control,
  label,
  helperText,
  optional = false,
  optionalText = '(Optional)',
  render,
}: FieldProps<TFormValues>) {
  return (
    <FormField
      name={name}
      control={control}
      render={(field) => (
        <FormItem>
          {label && (
            <FormLabel className='gap-0.5 mb-0.5'>
              {label} {optional && optionalText}
            </FormLabel>
          )}
          <FormControl>{render(field)}</FormControl>
          {helperText && <FormDescription>{helperText}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
