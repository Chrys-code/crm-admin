import { NavigateFunction } from "react-router-dom";
import { TableType } from "../table.types";
import Button from "../../base/button";
import { Tracker } from "../../../store/apis/tracker/tracker.types";

export const renderTrackerHeaders = (): JSX.Element => {
    return (
        <tr>
            <th style={{ width: '40%' }}>Title</th>
            <th style={{ width: '58%' }}>Description</th>
            <th style={{ width: '1%' }}></th>
            <th style={{ width: '1%' }}></th>
        </tr>
    );
};

export const renderTrackerRow = (
    dataRows: Tracker[],
    navigate: NavigateFunction,
    deleteRow: Function,
    tableType: TableType
): JSX.Element[] => {
    return dataRows.map(
        (dataRow: Tracker): JSX.Element => (
            <tr key={dataRow._id}>
                <td>{dataRow.title}</td>
                <td>{dataRow.description}</td>
                <td>
                    <Button
                        color="black"
                        fillColor="lightGreen"
                        onClick={() =>
                            navigate(`/analytics/tracker-editor/id=${dataRow._id}`, {
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