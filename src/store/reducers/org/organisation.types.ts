import { User } from "../../apis/user";
import { UserSerializedById } from "../../apis/user/user.types";
import { UserState } from "../user/user.types";

export interface OrganisationState {
  _id: string | null;
  title: string | null;
  users: User[];
  usersById: UserSerializedById;
  currentUser: UserState;
}
