import { NavigateFunction } from 'react-router-dom';
import Button from '../../base/button';
import { TableType } from '../table.types';
import { User } from '../../../store/apis/user';

export const renderUserHeaders = (): JSX.Element => {
    return (
        <tr>
            <th style={{ width: '50%' }}>Email</th>
            <th style={{ width: '48%' }}>Roles</th>
            <th style={{ width: '1%' }}></th>
            <th style={{ width: '1%' }}></th>
        </tr>
    );
};

export const renderUserRow = (
    dataRows: User[],
    navigate: NavigateFunction,
    deleteRow: Function,
    tableType: TableType
): JSX.Element[] => {
    return dataRows.map(
        (dataRow: User): JSX.Element => (
            <tr key={dataRow._id}>
                <td>{dataRow.email}</td>
                <td>{dataRow.roles}</td>
                <td>
                    <Button
                        color="black"
                        fillColor="lightGreen"
                        onClick={() =>
                            navigate(`/users/update-user/id=${dataRow._id}`, {
                                state: { id: dataRow._id },
                            })
                        }
                    >
                        Edit
                    </Button>
                </td>
                <td>
                    <Button
                        color="black"
                        fillColor="lightGreen"
                        onClick={() => deleteRow(dataRow._id, tableType)}
                    >
                        Delete
                    </Button>
                </td>
            </tr>
        )
    );
};
