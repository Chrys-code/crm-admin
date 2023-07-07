export interface Organisation {
  _id: string;
  title: string;
  users: string[];
}

export interface NewOrganisation {
  title: string | null;
  users: string[];
}
