import { PageHeader } from '@/components/page-header';
import { UserCard } from '@/features/users/components/user-card';
import { useAppSelector } from '@/app/store';
import { selectAllUsers } from '@/features/users/slice';
import { List } from '@/components/list';

function UsersPage() {
  const users = useAppSelector((state) => selectAllUsers(state));

  return (
    <div className='flex flex-col'>
      <PageHeader className='mb-6' title='Все пользователи' />
      <List
        items={users}
        render={(user) => (
          <UserCard
            id={user.id}
            name={user.name}
            description={user.description}
          />
        )}
      />
    </div>
  );
}

export default UsersPage;
