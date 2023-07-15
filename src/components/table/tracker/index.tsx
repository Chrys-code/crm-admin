import { NavigateFunction } from "react-router-dom";
import { TableType } from "../table.types";
import Button from "../../base/button";

export const renderTrackerHeaders = (): JSX.Element => {
    return (
        <tr>
            <th style={{ width: '98%' }}>Title</th>
            <th style={{ width: '1%' }}></th>
            <th style={{ width: '1%' }}></th>
        </tr>
    );
};

export const renderTrackerRow = (
    dataRows: any,
    navigate: NavigateFunction,
    deleteRow: Function,
    tableType: TableType
): JSX.Element[] => {
    return dataRows.map(
        (dataRow: any): JSX.Element => (
            <tr key={dataRow._id}>
                <td>{dataRow.title}</td>
                <td>{dataRow.group}</td>
                <td>
                    <Button
                        color="black"
                        fillColor="lightGreen"
                        onClick={() =>
                            navigate(`/email-templates/update-template/id=${dataRow._id}`, {
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