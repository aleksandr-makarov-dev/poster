import { useAppSelector } from '@/app/store';
import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { paths } from '@/config/paths';
import { PostCard } from '@/features/posts/components/post-card';
import { selectPostById } from '@/features/posts/slice';
import { ArrowLeftIcon } from 'lucide-react';
import { NavLink, useParams } from 'react-router';

function PostPage() {
  const { postId = '' } = useParams<{ postId: string }>();

  const post = useAppSelector((state) => selectPostById(state, postId));

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className='flex flex-col'>
      <PageHeader
        className='mb-6'
        actions={
          <Button variant='soft' color='gray' asChild>
            <NavLink to={paths.posts.root.getHref()}>
              <ArrowLeftIcon /> К постам
            </NavLink>
          </Button>
        }
      />
      <PostCard
        id={post.id}
        title={post.title}
        content={post.content}
        userId={post.userId}
      />
    </div>
  );
}

export default PostPage;
