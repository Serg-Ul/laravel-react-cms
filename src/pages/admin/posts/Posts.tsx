import React, { FC } from 'react';
import Table from '@/components/common/Table/Table';
import Container from '@/components/common/Container/Container';
import { useFetchPostsQuery, useRemovePostMutation } from '@/store';
import { TPosts } from '@/types/posts.types';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';

const header = {
  title: 'Title',
  description: 'Description',
};

const Posts: FC = () => {
  const { data, isLoading, error } = useFetchPostsQuery();
  const [removePost, { isLoading: isDeleting }] = useRemovePostMutation();

  const actions = [
    {
      method: 'edit',
      type: 'link',
      Icon: FaEdit,
      buildLink: (param?: number | string): string => `edit/${param}`,
    },
    {
      method: 'delete',
      type: 'method',
      Icon: FaTrash,
      methods: {
        onClick: (id?: number | string): void => {
          if (id) {
            removePost(id as number);
          }
        },
      },
    },
    {
      method: 'show',
      type: 'link',
      Icon: FaEye,
      buildLink: (param?: number | string): string => `show/${param}`,
    },
  ];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div>
      <Container>
        <Table
          header={header}
          body={data as TPosts}
          actions={actions}
        />
      </Container>
    </div>
  );
};

export default Posts;
