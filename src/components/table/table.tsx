import React, { FC, PropsWithChildren } from 'react';
import { TableContainer } from './table.styles';
import { TableProps } from './table.types';
import Button from '../base/button/button';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Email } from '../../store/apis/email/email.types';
import { deleteEmailRequest } from '../../store/apis/email';

const Table: FC<TableProps> = ({
  emails,
  getEmails,
}: PropsWithChildren<TableProps>): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();

  const deleteEmail = async (id: string): Promise<void> => {
    await deleteEmailRequest(id);
    await getEmails(null);
    toast.success('Template Deleted');
  };

  const renderRow = (emails: Email[]): JSX.Element[] => {
    return emails.map(
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
              onClick={() => deleteEmail(dataRow._id)}
            >
              Delete
            </Button>
          </td>
        </tr>
      )
    );
  };

  return (
    <TableContainer>
      <thead>
        <tr>
          <th style={{ width: '50%' }}>Name</th>
          <th style={{ width: '48%' }}>Group</th>
          <th style={{ width: '1%' }}></th>
          <th style={{ width: '1%' }}></th>
        </tr>
      </thead>
      <tbody>{renderRow(emails)}</tbody>
    </TableContainer>
  );
};
export default Table;
