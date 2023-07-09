import { NavigateFunction } from 'react-router-dom';
import { Email } from '../../store/apis/email/email.types';
import Button from '../base/button';
import { TableType } from './table.types';
import { User } from '../../store/apis/user';

export const renderEmailHeaders = (): JSX.Element => {
  return (
    <tr>
      <th style={{ width: '50%' }}>Title</th>
      <th style={{ width: '48%' }}>Group</th>
      <th style={{ width: '1%' }}></th>
      <th style={{ width: '1%' }}></th>
    </tr>
  );
};

export const renderEmailRow = (
  dataRows: Email[],
  navigate: NavigateFunction,
  deleteRow: Function,
  tableType: TableType
): JSX.Element[] => {
  return dataRows.map(
    (dataRow: Email): JSX.Element => (
      <tr key={dataRow._id}>
        <td>{dataRow.title}</td>
        <td>{dataRow.group}</td>
        <td>
          <Button
            color="black"
            fillColor="lightGreen"
            onClick={() =>
              navigate(`/email-templates/update-template/id=${dataRow._id}`, {
                state: { id: dataRow._id },
              })
            }
          >
            Edit
          </Button>
        </td>
        <td>
          <Button
            color="black"
            fillColor="lightGreen"
            onClick={() => deleteRow(dataRow._id, tableType)}
          >
            Delete
          </Button>
        </td>
      </tr>
    )
  );
};

export const renderUserHeaders = (): JSX.Element => {
  return (
    <tr>
      <th style={{ width: '50%' }}>Email</th>
      <th style={{ width: '48%' }}>Roles</th>
      <th style={{ width: '1%' }}></th>
      <th style={{ width: '1%' }}></th>
    </tr>
  );
};

export const renderUserRow = (
  dataRows: User[],
  navigate: NavigateFunction,
  deleteRow: Function,
  tableType: TableType
): JSX.Element[] => {
  return dataRows.map(
    (dataRow: User): JSX.Element => (
      <tr key={dataRow._id}>
        <td>{dataRow.email}</td>
        <td>{dataRow.roles}</td>
        <td>
          <Button
            color="black"
            fillColor="lightGreen"
            onClick={() =>
              navigate(`/users/update-user/id=${dataRow._id}`, {
                state: { id: dataRow._id },
              })
            }
          >
            Edit
          </Button>
        </td>
        <td>
          <Button
            color="black"
            fillColor="lightGreen"
            onClick={() => deleteRow(dataRow._id, tableType)}
          >
            Delete
          </Button>
        </td>
      </tr>
    )
  );
};
