import { Outlet } from 'react-router';

function MainLayout() {
  return (
    <div className='flex flex-col max-w-2xl mx-auto p-4'>
      <Outlet />
    </div>
  );
}

export default MainLayout;
