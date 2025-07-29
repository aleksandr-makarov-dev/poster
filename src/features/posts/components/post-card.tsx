import { useAppSelector } from '@/app/store';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { paths } from '@/config/paths';
import { selectUserById } from '@/features/users/slice';
import {
  ArrowDown,
  ArrowUp,
  BookmarkPlusIcon,
  MessageSquareIcon,
  MessageSquareShareIcon,
  MoreHorizontalIcon,
  PlusIcon,
} from 'lucide-react';
import { NavLink } from 'react-router';

export type PostCardProps = {
  id: string;
  title: string;
  content: string;
  userId: string;
};

export function PostCard({ id, title, content, userId }: PostCardProps) {
  const author = useAppSelector((state) => selectUserById(state, userId));

  return (
    <article className='flex flex-col gap-y-3'>
      <header className='flex flex-row justify-between items-center gap-x-3'>
        <div className='flex flex-row items-center gap-x-2'>
          <div className='flex flex-row items-center gap-x-2'>
            <Avatar className='size-7'>
              <AvatarImage src='https://github.com/shadcn.png' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className='text-sm font-medium'>{author?.name}</p>
          </div>
          <span className='text-sm'>•</span>
          <p className='text-sm'>6 hr ago</p>
        </div>
        <div className='flex flex-row items-center gap-2'>
          <Button variant='soft'>
            Follow <PlusIcon />
          </Button>
          <Button variant='soft' color='gray' size='icon'>
            <NavLink to={paths.posts.update.getHref(id)}>
              <MoreHorizontalIcon />
            </NavLink>
          </Button>
        </div>
      </header>
      <NavLink to={paths.posts.id.getHref(id)}>
        <main>
          <h5 className='text-lg font-semibold mb-2'>{title}</h5>
          <p className='text-accent-foreground'>{content}</p>
        </main>
      </NavLink>

      <footer className='flex flex-row items-center gap-x-2'>
        <div className='flex flex-row items-center'>
          <Button
            variant='filled'
            color='blue'
            size='icon'
            className='rounded-e-none'
          >
            <ArrowUp />
          </Button>
          <Button variant='filled' color='blue' className='rounded-none'>
            8,2K
          </Button>
          <Button
            variant='soft'
            color='gray'
            size='icon'
            className='rounded-s-none'
          >
            <ArrowDown />
          </Button>
        </div>
        <Button variant='soft' color='gray'>
          <MessageSquareIcon />
          198
        </Button>
        <Button variant='soft' color='gray'>
          Share <MessageSquareShareIcon />
        </Button>
        <Button variant='soft' color='gray' size='icon'>
          <BookmarkPlusIcon />
        </Button>
      </footer>
    </article>
  );
}
