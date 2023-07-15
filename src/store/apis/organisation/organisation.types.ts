import { User } from "../user";

export interface Organisation {
  _id: string;
  title: string;
  users: User[];
}

export interface NewOrganisation {
  title: string | null;
  users: string[];
}
