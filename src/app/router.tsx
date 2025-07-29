import MainLayout from '@/components/main-layout';
import { paths } from '@/config/paths';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

const LandingPage = React.lazy(() => import('@/pages/landing'));

const PostsPage = React.lazy(() => import('@/pages/posts/posts'));
const PostPage = React.lazy(() => import('@/pages/posts/post'));
const PostCreatePage = React.lazy(() => import('@/pages/posts/post-create'));
const PostUpdatePage = React.lazy(() => import('@/pages/posts/post-update'));

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={paths.home.path} element={<LandingPage />} />
          <Route path={paths.posts.root.path}>
            <Route index element={<PostsPage />} />
            <Route
              path={paths.posts.create.path}
              element={<PostCreatePage />}
            />
            <Route path={paths.posts.id.path} element={<PostPage />} />
            <Route
              path={paths.posts.update.path}
              element={<PostUpdatePage />}
            />
          </Route>
          <Route path='*' element={<p>Страница не найдена</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
