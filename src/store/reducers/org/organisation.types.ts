import { User } from "../../apis/user";

export interface OrganisationState {
  _id: string | null;
  title: string | null;
  users: User[];
}
