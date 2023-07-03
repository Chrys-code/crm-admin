import React, { FC, PropsWithChildren } from 'react';
import { TableContainer } from './table.styles';
import { TableProps } from './table.types';
import Button from '../base/button/button';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Table: FC<TableProps> = ({
  data,
}: PropsWithChildren<TableProps>): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();

  const renderRow = (data: any): JSX.Element => {
    return data.map(
      (dataRow: any): JSX.Element => (
        <tr>
          <td>{dataRow.title}</td>
          <td>{dataRow.group}</td>
          <td>
            <Button
              color="black"
              fillColor="lightGreen"
              onClick={() =>
                navigate(`/email-templates/create-template?id=${'123'}`)
              }
            >
              Edit
            </Button>
          </td>
          <td>
            <Button
              color="black"
              fillColor="lightGreen"
              onClick={() => toast.success('Template Deleted')}
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
        <th style={{ width: '30%' }}>Name</th>
        <th style={{ width: '20%' }}>Group</th>
        <th style={{ width: '10%' }}></th>
        <th style={{ width: '10%' }}></th>
      </thead>
      <tbody>{renderRow(data)}</tbody>
    </TableContainer>
  );
};
export default Table;
