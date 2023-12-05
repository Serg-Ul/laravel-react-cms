import React, { FC } from 'react';
import Container from '@/components/common/Container/Container';
import PostsForm from '@/components/forms/admin/PostsForm/PostsForm';
import { useFetchPostQuery, useUpdatePostMutation } from '@/store';
import { Navigate, useNavigate, useParams } from 'react-router';
import { IPost } from '@/types/posts.types';

const EditPost: FC = () => {
  const [updatePost, { isLoading }] = useUpdatePostMutation();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { data: post, isError } = useFetchPostQuery(id);

  if (isError) {
    return <Navigate to="/admin/posts" />;
  }

  const handleSubmit = (values: IPost): void => {
    const newValues = {
      ...post,
      ...values,
    };
    updatePost(newValues);
    navigate('/admin/posts');
  };

  return (
    <div>
      <Container>
        <PostsForm
          onSubmit={handleSubmit}
          filledInitialValues={post}
          buttonText="Update"
        />
      </Container>
    </div>
  );
};

export default EditPost;
