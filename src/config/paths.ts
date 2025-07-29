export const paths = {
  home: {
    path: '/',
    getHref: () => '/',
  },

  posts: {
    root: {
      path: '/posts',
      getHref: () => '/posts',
    },
    id: {
      path: ':postId',
      getHref: (postId: string) => `/posts/${postId}`,
    },
    create: {
      path: 'create',
      getHref: () => '/posts/create',
    },
    update: {
      path: ':postId/update',
      getHref: (postId: string) => `/posts/${postId}/update`,
    },
  },
};
