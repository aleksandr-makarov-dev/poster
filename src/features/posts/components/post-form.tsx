import { Field } from '@/components/field';
import { Form } from '@/components/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import type React from 'react';
import z from 'zod';

const schema = z.object({
  title: z.string().min(5).max(150),
  content: z.string().max(500),
});

export type PostFormInput = z.infer<typeof schema>;

export type PostFormProps = {
  values?: PostFormInput;
  onSubmit: (input: PostFormInput) => void;
} & Omit<React.ComponentProps<'form'>, 'onSubmit'>;

export function PostForm({ values, onSubmit, ...props }: PostFormProps) {
  return (
    <Form
      schema={schema}
      onSubmit={onSubmit}
      options={{ values: values, defaultValues: { title: '', content: '' } }}
      {...props}
    >
      {({ control }) => (
        <div className='flex flex-col gap-y-3'>
          <Field
            control={control}
            name='title'
            label='Заголовок'
            render={({ field }) => <Input {...field} />}
          />
          <Field
            control={control}
            name='content'
            label='Содержимое'
            render={({ field }) => <Textarea rows={15} {...field} />}
          />
        </div>
      )}
    </Form>
  );
}
