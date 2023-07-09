import React, { FC, useEffect, useState } from 'react';
import Table from '../../../components/table';
import { RootState, useAppSelector } from '../../../store/store';
import { OrganisationState } from '../../../store/reducers/org/organisation.types';
import { User, getUsersRequest } from '../../../store/apis/user';
import Section from '../../../layout/section/section';

const Users: FC = (): JSX.Element => {
  const { _id } = useAppSelector(
    (state: RootState): OrganisationState => state.org
  );

  const [users, setUsers] = useState<User[] | null>(null);

  useEffect((): (() => void) | undefined => {
    if (!_id) return;
    (async (): Promise<void> => {
      const users: User[] = await getUsersRequest(_id);
      setUsers(users);
    })();
    return (): void => {};
  }, [_id]);

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
