import React, {
  ChangeEvent,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';
import Button from '../../../../base/button';
import { toast } from 'react-toastify';
import {
  Input,
  InputLabel,
  InputWrapper,
  Selector,
} from './createEmailHeaderActions.styles';
import { NavigateFunction, useNavigate, useParams } from 'react-router-dom';
import { CreateEmailHeaderActionsProps } from './createEmailHeaderActions.types';
import Popup from '../../../../modal/popup';
import theme from '../../../../../utils/theme/theme';
import { RootState, useAppSelector } from '../../../../../store/store';
import { EmailState } from '../../../../../store/reducers/email/email.types';
import { Email } from '../../../../../store/apis/email/email.types';

const CreateEmailHeaderActions: FC<CreateEmailHeaderActionsProps> = ({
  groups,
  extendGroups,
  updateEmail,
  createEmail,
  getEmails,
  setCurrentEmailGroup,
  setCurrentEmailTitle,
  setCurrentEmailId,
  clearCurrentEmail,
}: PropsWithChildren<CreateEmailHeaderActionsProps>): JSX.Element => {
  const { emailsById } = useAppSelector(
    (state: RootState): EmailState => state.email
  );
  const { id } = useParams();

  const navigate: NavigateFunction = useNavigate();

  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);

  const [addGroupModalIsOpen, setAddGroupModalIsOpen] =
    useState<boolean>(false);

  const [title, setTitle] = useState<string | null>(null);
  const [group, setGroup] = useState<string | null>(null);

  const [newGroup, setNewGroup] = useState<string | null>(null);

  useEffect((): (() => void) | undefined => {
    if (!id || !emailsById) return;
    const objId: string = id.split('=')[1];
    setSelectedEmail(emailsById[objId]);
    return (): void => { };
  }, [id, emailsById]);

  useEffect((): (() => void) | undefined => {
    if (selectedEmail) {
      setGroup(selectedEmail.group);
      setTitle(selectedEmail.title);
      setCurrentEmailTitle(selectedEmail.title);
      setCurrentEmailGroup(selectedEmail.group);
      setCurrentEmailId(selectedEmail._id);
    }

    return (): void => { };
  }, [selectedEmail]);

  useEffect((): (() => void) | undefined => {
    if (group !== 'create_new_group_gx7') return;
    setAddGroupModalIsOpen(true);
    return (): void => { };
  }, [group]);

  const renderSelector = (groups: string[]): JSX.Element => {
    return (
      <Selector
        id="template-group"
        name="template-group"
        required
        value={group || ''}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setGroup(e.target.value)
        }
      >
        { }
        <option value="" disabled>
          Select Group
        </option>
        {groups.map(
          (group: string): JSX.Element => (
            <option key={group} value={group}>
              {group}
            </option>
          )
        )}
        <option value="create_new_group_gx7">New...</option>
      </Selector>
    );
  };

  const handleSave = async (): Promise<void> => {
    setCurrentEmailGroup(group);
    setCurrentEmailTitle(title);
    if (selectedEmail?._id) {
      await updateEmail();
    } else {
      await createEmail(null);
    }
    await getEmails();
    toast.success('Template Saved!');
    navigate('/email-templates');
    clearCurrentEmail();
  };

  const buttonText: string = id ? 'Update' : 'Save';

  return (
    <>
      <InputWrapper>
        <InputLabel style={{ width: '100%' }} htmlFor="template-title">
          Title:
        </InputLabel>
        <Input
          onChange={(e: ChangeEvent<HTMLInputElement>): void =>
            setTitle(e.target.value)
          }
          value={title ? title : ''}
          id="template-title"
          name="template-title"
        />
      </InputWrapper>

      <InputWrapper>
        <InputLabel style={{ width: '100%' }} htmlFor="template-group">
          Group:
        </InputLabel>
        {renderSelector(groups)}
      </InputWrapper>

      <Button onClick={handleSave}>{buttonText}</Button>

      <Popup
        title="Create a new group"
        isOpen={addGroupModalIsOpen}
        onClose={() => setAddGroupModalIsOpen(false)}
        action={() => {
          extendGroups(newGroup);
          setAddGroupModalIsOpen(false);
        }}
      >
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setNewGroup(e.target.value)
          }
          style={{ padding: theme.space(1), textAlign: 'center' }}
        />
      </Popup>
    </>
  );
};
export default CreateEmailHeaderActions;
