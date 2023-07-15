import { NavigateFunction } from "react-router-dom";
import { Email } from "../../../store/apis/email/email.types";
import { TableType } from "../table.types";
import Button from "../../base/button";

export const renderEmailHeaders = (): JSX.Element => {
    return (
        <tr>
            <th style={{ width: '50%' }}>Title</th>
            <th style={{ width: '48%' }}>Group</th>
            <th style={{ width: '1%' }}></th>
            <th style={{ width: '1%' }}></th>
        </tr>
    );
};

export const renderEmailRow = (
    dataRows: Email[],
    navigate: NavigateFunction,
    deleteRow: Function,
    tableType: TableType
): JSX.Element[] => {
    return dataRows.map(
        (dataRow: Email): JSX.Element => (
            <tr key={dataRow._id}>
                <td>{dataRow.title}</td>
                <td>{dataRow.group}</td>
                <td>
                    <Button
                        color="black"
                        fillColor="lightGreen"
                        onClick={() =>
                            navigate(`/email-templates/template-editor/id=${dataRow._id}`, {
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
