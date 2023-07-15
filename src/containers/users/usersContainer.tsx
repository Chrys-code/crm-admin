import React, { FC, PropsWithChildren, useEffect } from 'react'
import { UsersContainerProps } from './usersContainer.types'
import UserList from '../../features/users/userList/userList'
import { RootState, useAppSelector } from '../../store/store'
import { OrganisationState } from '../../store/reducers/org/organisation.types'

const UsersContainer: FC<UsersContainerProps> = ({ getOrganisationUsers }: PropsWithChildren<UsersContainerProps>): JSX.Element => {


    const { users } = useAppSelector((state: RootState): OrganisationState => state.org);

    useEffect((): (() => void) => {
        getOrgUsers();
        return (): void => { }
    }, [])


    async function getOrgUsers() {
        await getOrganisationUsers();
    }


    return (
        <UserList users={users} />
    )
}
export default UsersContainer