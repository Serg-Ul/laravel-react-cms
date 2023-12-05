import { lazy } from 'react';

const Posts = lazy(() => import('@/pages/admin/posts/Posts'));
const AddPost = lazy(() => import('@/pages/admin/posts/AddPost'));
const EditPost = lazy(() => import('@/pages/admin/posts/EditPost'));
const ShowPost = lazy(() => import('@/pages/admin/posts/ShowPost'));

export { Posts, AddPost, EditPost, ShowPost };

// export { AddPost } from './AddPost';
// export { EditPost } from './EditPost';
// export { ShowPost } from './ShowPost';
// export { Posts } from './Posts';
