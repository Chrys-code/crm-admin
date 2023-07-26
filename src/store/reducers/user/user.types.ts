export interface UserState {
    _id: string | null;
    externalId: string | null;
    email: string | null;
    organisation: string | null;
    roles: Array<string>;
}
