import React, { FC, PropsWithChildren } from 'react';
import { TableContainer } from './table.styles';
import { TableProps, TableType } from './table.types';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteEmailRequest } from '../../store/apis/email';
import {
  renderEmailHeaders,
  renderEmailRow,
  renderUserHeaders,
  renderUserRow,
} from './helpers';

const Table: FC<TableProps> = ({
  tableType,
  dataRows,
  getEmails,
}: PropsWithChildren<TableProps>): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();

  const deleteRow = async (id: string, tableType: TableType): Promise<void> => {
    if (tableType === 'email') {
      await deleteEmailRequest(id);
      await getEmails(null);
      toast.success('Template Deleted');
      return;
    }

    if (tableType === 'user') {
      return;
    }
  };

  return (
    <TableContainer>
      {tableType === 'email' && (
        <>
          <thead>{renderEmailHeaders()}</thead>
          <tbody>
            {renderEmailRow(dataRows, navigate, deleteRow, tableType)}
          </tbody>
        </>
      )}
      {tableType === 'user' && (
        <>
          <thead>{renderUserHeaders()}</thead>
          <tbody>
            {renderUserRow(dataRows, navigate, deleteRow, tableType)}
          </tbody>
        </>
      )}
    </TableContainer>
  );
};
export default Table;
