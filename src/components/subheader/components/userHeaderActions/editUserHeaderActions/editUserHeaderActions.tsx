import React, { FC, PropsWithChildren } from 'react';
import Button from '../../../../base/button';
import { NavigateFunction, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { RootState, useAppSelector } from '../../../../../store/store';
import { OrganisationState } from '../../../../../store/reducers/org/organisation.types';
import { EditUserHeaderActionsProps } from './editUserHeaderActions.types';
import { User, updateUserRequest, createUserRequest } from '../../../../../store/apis/user';
import { NewUser } from '../../../../../store/apis/user/user.types';

const EditUserHeaderActions: FC<EditUserHeaderActionsProps> = ({ getOrganisation, clearCurrentUser }: PropsWithChildren<EditUserHeaderActionsProps>): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();
  const { id } = useParams();

  const { currentUser } = useAppSelector((state: RootState): OrganisationState => state.org);
  const { _id } = useAppSelector((state: RootState): OrganisationState => state.org)

  const handleSave = async (): Promise<void> => {

    if (currentUser._id) {
      await updateUserRequest(
        currentUser._id as string,
        currentUser as User,
      );
    } else {
      const newUser: NewUser = {
        email: currentUser.email!,
        organisation: _id!,
        roles: currentUser.roles
      }
      await createUserRequest(newUser);
    }
    await getOrganisation();
    await clearCurrentUser();
    toast.success('User Saved!');
    navigate('/users');
  };

  const buttonText: string = id ? 'Update' : 'Save';

  return <Button onClick={handleSave}>{buttonText}</Button>;
};
export default EditUserHeaderActions;
