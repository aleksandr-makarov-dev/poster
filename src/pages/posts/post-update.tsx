import { useAppSelector } from '@/app/store';
import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { paths } from '@/config/paths';
import {
  type PostFormInput,
  PostForm,
} from '@/features/posts/components/post-form';
import { selectPostById, updatePost } from '@/features/posts/slice';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate, useParams } from 'react-router';

const formId = 'post-update-form';

function PostUpdatePage() {
  const { postId = '' } = useParams<{ postId: string }>();
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const post = useAppSelector((state) => selectPostById(state, postId));

  const handleCreatePost = (input: PostFormInput) => {
    dispatch(
      updatePost({
        // Let's pretend postId always not undefind
        postId: postId,
        post: input,
      }),
    );

    navigation(paths.posts.id.getHref(postId));
  };

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className='flex flex-col'>
      <PageHeader className='mb-6' title='Редактирование поста' />
      <PostForm id={formId} values={post} onSubmit={handleCreatePost} />
      <div className='flex flex-row items-center mt-4 gap-2'>
        <Button type='submit' form={formId}>
          Сохранить изменения
        </Button>
        <Button variant='soft' color='gray' asChild>
          <NavLink to={paths.posts.root.getHref()}>Отмена</NavLink>
        </Button>
      </div>
    </div>
  );
}

export default PostUpdatePage;
