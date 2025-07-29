import { useAppSelector } from '@/app/store';
import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { VerticalList } from '@/components/vertical-list';
import { paths } from '@/config/paths';
import { PostCard } from '@/features/posts/components/post-card';
import { FilePenIcon } from 'lucide-react';
import { NavLink } from 'react-router';

function PostsPage() {
  const posts = useAppSelector((state) => state.posts);

  return (
    <div className='flex flex-col'>
      <PageHeader
        className='mb-6'
        title='Все посты'
        actions={
          <Button asChild>
            <NavLink to={paths.posts.create.getHref()}>
              <FilePenIcon /> Написать
            </NavLink>
          </Button>
        }
      />
      <VerticalList
        className='gap-y-8'
        items={posts}
        render={(post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
          />
        )}
      />
    </div>
  );
}

export default PostsPage;
