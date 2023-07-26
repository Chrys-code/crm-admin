export interface User {
  _id: string;
  externalId: string;
  email: string;
  organisation: string;
  roles: Array<string>;
}

export interface NewUser {
  email: string;
  organisation: string;
  roles: Array<string>;
}

export interface UserSerializedById {
  [key: string]: {
    _id: string;
    externalId: string;
    email: string;
    organisation: string;
    roles: Array<string>;
  };
}
