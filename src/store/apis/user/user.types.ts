export interface User {
  _id: string;
  externalId: string;
  firstName: string;
  lastName: string;
  email: string;
  organizationId: string;
  roles: Array<string>;
}
