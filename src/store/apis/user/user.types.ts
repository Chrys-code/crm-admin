export interface User {
  _id: string;
  externalId: string;
  email: string;
  organisation: string;
  roles: Array<string>;
}
