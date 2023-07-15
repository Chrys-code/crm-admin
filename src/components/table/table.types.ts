export type TableType = 'email' | 'user' | 'tracker';

export interface TableProps {
  tableType: TableType;
  dataRows: any[];
  getEmails: any;
  getOrganisationUsers: any;
}

export interface TableContainerStyleProps { }
