export type TableType = 'email' | 'user';

export interface TableProps {
  tableType: TableType;
  dataRows: any[];
  getEmails: any;
}

export interface TableContainerStyleProps {}
