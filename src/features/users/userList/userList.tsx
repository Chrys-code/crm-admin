import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import Table from '../../../components/table';
import { RootState, useAppSelector } from '../../../store/store';
import { OrganisationState } from '../../../store/reducers/org/organisation.types';
import Section from '../../../layout/section/section';
import { UserListProps } from './userList.types';

const UserList: FC<UserListProps> = ({ users }: PropsWithChildren<UserListProps>): JSX.Element => {

  if (users && users.length) {
    return (
      <Section withBorder withPadding>
        <Table tableType="user" dataRows={users} />
      </Section>
    );
  }

  return <>Could not get users for this organisation</>;
};
export default UserList;
