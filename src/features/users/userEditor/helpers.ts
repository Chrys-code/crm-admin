import { User } from "../../../store/apis/user";

export function getSelectedUser(id: string | undefined, users: User[], setSelectedUser: (user: User) => void): void {
    if (!id || !users.length) return;
    const objId: string = id.split('=')[1];
    const foundUser: User | undefined = users.find((user: User) => user._id === objId);
    if (foundUser) setSelectedUser(foundUser);
}
