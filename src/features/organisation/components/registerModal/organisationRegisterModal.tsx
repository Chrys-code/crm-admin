import React, { FC, PropsWithChildren, useState } from 'react';
import { OrganisationRegisterModalContainer } from './organisationRegisterModal.styles';
import Popup from '../../../../components/modal/popup';
import { OrganisationRegisterModalProps } from './organisationRegisterModal.types';
import { RootState, useAppSelector } from '../../../../store/store';
import { UserState } from '../../../../store/reducers/user/user.types';

const OrganisationRegisterModal: FC<OrganisationRegisterModalProps> = ({
  isOpen,
  onClose,
  createOrganisation,
  updateUser,
}: PropsWithChildren<OrganisationRegisterModalProps>): JSX.Element => {
  const { _id } = useAppSelector((state: RootState): UserState => state.user);

  const [orgTitle, setOrgTitle] = useState<string | null>(null);

  const handleSave = async (): Promise<void> => {
    const org = await createOrganisation({
      payload: { title: orgTitle, users: [_id] },
    });
    await updateUser({ payload: org.payload._id });
    onClose();
  };
  // action writeup
  return (
    <Popup
      isOpen={isOpen}
      title="To start let's create your space by adding an organisation"
      onClose={() => onClose()}
      action={() => handleSave()}
    >
      <OrganisationRegisterModalContainer>
        <input
          name="organisation_title"
          onChange={(e) => setOrgTitle(e.target.value)}
        />
      </OrganisationRegisterModalContainer>
    </Popup>
  );
};
export default OrganisationRegisterModal;
