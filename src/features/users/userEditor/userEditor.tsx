import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { InputLabel, UserEditorContentWrapper, UserInputField } from './userEditor.styles';
import Section from '../../../layout/section/section';
import { RootState, useAppSelector } from '../../../store/store';
import { OrganisationState } from '../../../store/reducers/org/organisation.types';
import { NavigateFunction, Location, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { User } from '../../../store/apis/user';
import { getSelectedUser } from './helpers';
import { useDebounce } from '../../../utils/hooks';
import { actions as orgActions } from '../../../store/reducers/org';


const EditUser: FC = (): JSX.Element => {

  const location: Location = useLocation();
  const navigate: NavigateFunction = useNavigate();


  const { id } = useParams();
  const dispatch = useDispatch();


  const { users } = useAppSelector((state: RootState): OrganisationState => state.org);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);


  const [externalId, setExternalId] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [organisation, setOrganisation] = useState<string | null>(null);
  const [roles, setRoles] = useState<string[]>([]);


  useEffect((): void => {
    if (!users.length && location.pathname.includes('id=')) navigate('/users');
  }, []);


  useEffect((): void => {
    getSelectedUser(id, users, setSelectedUser);
  }, [id, users]);


  useEffect((): (() => void) | undefined => {
    if (!selectedUser) return;
    dispatch(orgActions.setCurrentUserId(selectedUser._id))
    setExternalId(selectedUser.externalId)
    setEmail(selectedUser.email)
    setOrganisation(selectedUser.organisation)
    setRoles(selectedUser.roles)
    return (): void => { }
  }, [selectedUser])


  function updateRoles(e: any) {

  }


  useDebounce(
    () => dispatch(orgActions.setCurrentUserExternalId(externalId)),
    600,
    [externalId]
  );
  useDebounce(
    () => dispatch(orgActions.setCurrentUserEmail(email)),
    600,
    [email]
  );
  useDebounce(
    () => dispatch(orgActions.setCurrentUserOrganisation(organisation)),
    600,
    [organisation]
  );
  useDebounce(
    () => dispatch(orgActions.setCurrentUserRoles(roles)),
    600,
    [roles]
  );


  return (<Section withBorder withPadding>
    <UserEditorContentWrapper>
      <Section type='div' >
        <InputLabel htmlFor='user_id'>ID:</InputLabel>
        <UserInputField
          id="user_id"
          name="user_id"
          type='text'
          placeholder='User ID'
          value={selectedUser ? selectedUser._id : ""}
          disabled
        ></UserInputField>
      </Section>
      <Section type='div'>
        <InputLabel htmlFor='user_external_id'>External ID:</InputLabel>
        <UserInputField
          id="user_external_id"
          name="user_external_id"
          type='text'
          placeholder='User External ID'
          value={selectedUser ? selectedUser.externalId : ""}
          disabled
        ></UserInputField>
      </Section>
      <Section type='div'>
        <InputLabel htmlFor='user_email'>Email:</InputLabel>
        <UserInputField
          id="user_email"
          name="user_email"
          type='text'
          placeholder='User Email'
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
          }
          value={email ? email : ""}
        ></UserInputField>
      </Section>
      <Section type='div'>
        <InputLabel htmlFor='user_roles'>Roles:</InputLabel>
        <UserInputField
          id="user_roles"
          name="user_roles"
          type='text'
          placeholder='User Roles'
          onChange={(e: ChangeEvent<HTMLInputElement>) => updateRoles(e.target.value)
          }
          value={roles ? roles : ""}
        ></UserInputField>
      </Section>
    </UserEditorContentWrapper>
  </Section>)
};

export default EditUser;