import React, {
  ChangeEvent,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';
import Button from '../../../base/button';
import { toast } from 'react-toastify';
import {
  Input,
  InputLabel,
  InputWrapper,
  Selector,
} from './createEmailHeaderActions.styles';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { CreateEmailHeaderActionsProps } from './createEmailHeaderActions.types';
import Popup from '../../../modal/popup';
import theme from '../../../../utils/theme/theme';

const CreateEmailHeaderActions: FC<CreateEmailHeaderActionsProps> = ({
  groups,
  extendGroups,
  createEmail,
  setCurrentEmailGroup,
  setCurrentEmailTitle,
  clearCurrentEmail,
}: PropsWithChildren<CreateEmailHeaderActionsProps>): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();

  const [addGroupModalIsOpen, setAddGroupModalIsOpen] =
    useState<boolean>(false);

  const [title, setTitle] = useState<string | null>(null);
  const [group, setGroup] = useState<string | null>(null);

  const [newGroup, setNewGroup] = useState<string | null>(null);

  useEffect((): (() => void) | undefined => {
    if (group !== 'add') return;
    setAddGroupModalIsOpen(true);
    return (): void => {};
  }, [group]);

  const renderOptions = (groups: string[]): JSX.Element[] => {
    return groups.map(
      (group: string): JSX.Element => <option value={group}>{group}</option>
    );
  };

  const handleSave = (): void => {
    setCurrentEmailGroup(group);
    setCurrentEmailTitle(title);
    createEmail(null);
    toast.success('Template Saved!');
    navigate('/email-templates');
    clearCurrentEmail();
  };

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
          id="template-title"
          name="template-title"
        />
      </InputWrapper>

      <InputWrapper>
        <InputLabel style={{ width: '100%' }} htmlFor="template-group">
          Group:
        </InputLabel>
        <Selector
          id="template-group"
          name="template-group"
          required
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setGroup(e.target.value)
          }
        >
          {}
          <option value="" disabled selected>
            Select Group
          </option>
          {renderOptions(groups)}
          <option value="add">New...</option>
        </Selector>
      </InputWrapper>

      <Button onClick={handleSave}>Save</Button>

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
