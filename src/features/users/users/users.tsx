import React, { FC, PropsWithChildren } from 'react';
import Table from '../../../components/table';
import Section from '../../../layout/section/section';
import { UserListProps } from './users.types';

const Users: FC<UserListProps> = ({ users }: PropsWithChildren<UserListProps>): JSX.Element => {

  if (users && users.length) {
    return (
      <Section withBorder withPadding>
        <Table tableType="user" dataRows={users} />
      </Section>
    );
  }

  return <>Could not get users for this organisation</>;
};
export default Users;
