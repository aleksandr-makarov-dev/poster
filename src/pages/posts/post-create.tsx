import { useAppDispatch } from '@/app/store';
import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { paths } from '@/config/paths';
import {
  PostForm,
  type PostFormInput,
} from '@/features/posts/components/post-form';
import { createPost } from '@/features/posts/slice';
import { nanoid } from '@reduxjs/toolkit';
import { NavLink, useNavigate } from 'react-router';

const formId = 'post-create-form';

function PostCreatePage() {
  const navigation = useNavigate();
  const dispatch = useAppDispatch();

  const handleCreatePost = (input: PostFormInput) => {
    const id = nanoid();

    dispatch(
      createPost({
        id: id,
        title: input.title,
        content: input.content,
      }),
    );

    navigation(paths.posts.id.getHref(id));
  };

  return (
    <div className='flex flex-col'>
      <PageHeader className='mb-6' title='Новый пост' />
      <PostForm id={formId} onSubmit={handleCreatePost} />
      <div className='flex flex-row items-center mt-4 gap-2'>
        <Button type='submit' form={formId}>
          Опубликовать
        </Button>
        <Button variant='soft' color='gray' asChild>
          <NavLink to={paths.posts.root.getHref()}>Отмена</NavLink>
        </Button>
      </div>
    </div>
  );
}

export default PostCreatePage;
