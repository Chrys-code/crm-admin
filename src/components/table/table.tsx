import React, { FC, PropsWithChildren } from 'react';
import { TableContainer } from './table.styles';
import { TableProps, TableType } from './table.types';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteEmailRequest } from '../../store/apis/email';
import { renderTrackerHeaders, renderTrackerRow } from './tracker';
import { renderEmailHeaders, renderEmailRow } from './email';
import { renderUserHeaders, renderUserRow } from './user';
import { deleteUserRequest, getUsersRequest } from '../../store/apis/user';
import { deleteTrackerRequest } from '../../store/apis/tracker';

const Table: FC<TableProps> = ({
  tableType,
  dataRows,
  getEmails,
  getOrganisationUsers,
  getTrackers
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
      await deleteUserRequest(id);
      await getOrganisationUsers();
      return;
    }

    if (tableType === 'tracker') {
      await deleteTrackerRequest(id)
      await getTrackers();
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
      {tableType === 'tracker' && (
        <>
          <thead>{renderTrackerHeaders()}</thead>
          <tbody>
            {renderTrackerRow(dataRows, navigate, deleteRow, tableType)}
          </tbody>
        </>
      )}
    </TableContainer>
  );
};
export default Table;
