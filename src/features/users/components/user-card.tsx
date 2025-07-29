import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { paths } from '@/config/paths';
import { NavLink } from 'react-router';

export type UserCardProps = {
  id: string;
  name: string;
  description: string;
};

export function UserCard({ id, name, description }: UserCardProps) {
  return (
    <div className='flex flex-row gap-2 items-center'>
      <Avatar>
        <AvatarImage src='https://github.com/shadcn.png' />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
        <NavLink
          className='text-sm text-foreground font-semibold hover:underline'
          to={paths.users.id.getHref(id)}
        >
          {name}
        </NavLink>
        <p className='text-sm text-muted-foreground'>{description}</p>
      </div>
    </div>
  );
}
