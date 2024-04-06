import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { ObjectId } from "bson";
const AdminWorkoutList = () => {
    const [rows, setRows] = useState([]);
    const params = useParams();
    const firstReceivedData = useRef("");
    const navigate = useNavigate();
    const bson = useEffect(() => {
        axios
            .get("http://localhost:3001/api/workout/get/" + params.userID, {
                withCredentials: true,
            })
            .then((res) => {
                console.log(res.data);
                console.log(typeof res.data);
                if (res.status === 200) {
                    setRows(res.data);
                    console.log(
                        JSON.stringify(res.data) + " rows After Effect"
                    );
                    if (firstReceivedData.current === "")
                        firstReceivedData.current = res.data;
                }
            });
    }, []);
    const addRow = () => {
        setRows([
            ...rows,
            {
                title: "",
                date: "",
                feedback: "",
                completed: false,
                _id: new ObjectId(),
            },
        ]);
        console.log(JSON.stringify(rows) + " rows");
    };
    /*  const compareArrays = (arr1, arr2) => {
        const result = [];
        arr2.forEach((json) => {
            const found = Array(arr1).find(
                (item) => item.id === json._id.toString()
            );
            if (
                found &&
                (found.date !== json.date || found.title !== json.title)
            ) {
                result.push(json);
            }
        });
        return result;
    }; */

    const removeRow = (index) => {
        const updatedRows = [...rows];
        updatedRows.splice(index, 1);
        setRows(updatedRows);
    };

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const updatedRows = [...rows];
        updatedRows[index][name] = value;
        setRows(updatedRows);
        handleSave();
    };
    const handleSave = (popup) => {
        axios
            .post(
                "http://localhost:3001/api/workout/update/" + params.userID,
                { workout: rows.map((row) => ({ ...row, exercises: [] })) },
                { withCredentials: true }
            )
            .then((res) => {
                if (res.status !== 200) {
                    alert("Error saving workout");
                } else if (popup) {
                    alert("Workout saved successfully");
                }
            });
    };

    return (
        <>
            <table className="w-full">
                <thead>
                    <tr>
                        <th
                            key="workout-title"
                            className="px-4 py-2 text-start"
                        >
                            Workout Title
                        </th>
                        <th key="date" className="px-4 py-2 text-start">
                            Date
                        </th>
                        <th key="completed" className="px-4 py-2 text-start">
                            Completed
                        </th>
                        <th key="feedback" className="px-4 py-2 text-start">
                            Feedback
                        </th>
                        <th key="actions" className="px-4 py-2 text-start">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={row._id}>
                            <td className="border px-4 py-2">
                                <input
                                    type="text"
                                    name="title"
                                    value={row.title}
                                    onChange={(e) =>
                                        handleInputChange(e, index)
                                    }
                                />
                            </td>
                            <td className="border px-4 py-2">
                                <input
                                    type="text"
                                    name="date"
                                    value={row.date}
                                    onChange={(e) =>
                                        handleInputChange(e, index)
                                    }
                                />
                            </td>
                            <td className="border px-4 py-2">
                                <input
                                    type="text"
                                    name="completed"
                                    value={row.completed}
                                    onChange={(e) =>
                                        handleInputChange(e, index)
                                    }
                                />
                            </td>

                            <td className="border px-4 py-2">
                                <textarea
                                    name="feedback"
                                    value={row.feedback}
                                    onChange={(e) =>
                                        handleInputChange(e, index)
                                    }
                                    readOnly
                                />
                            </td>
                            <td className="border px-4 py-2">
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-10 h-10"
                                    onClick={() => removeRow(index)}
                                >
                                    -
                                </button>
                                <button
                                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded h-10 w-11"
                                    onClick={() => {
                                        console.log(
                                            JSON.stringify(row) + " rowid"
                                        );
                                        navigate(
                                            `/admin/workout-details/${row._id}/${params.userID}`
                                        );
                                    }}
                                >
                                    <FontAwesomeIcon icon={faEdit} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex self-end">
                <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
                    onClick={() => {
                        addRow();
                        handleSave();
                    }}
                >
                    +
                </button>
                <Button
                    text="Save"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                    onClick={() => handleSave(true)}
                />
            </div>
        </>
    );
};

export default AdminWorkoutList;
