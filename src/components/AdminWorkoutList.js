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
    const bson = 
    useEffect(() => {
        axios
            .get("http://localhost:3001/api/workout/get/" + params.userID, {
                withCredentials: true,
            })
            .then((res) => {
                console.log(res.data);
                console.log(typeof res.data);
                if (res.status === 200) {
                    setRows(res.data);
                    if (firstReceivedData.current === "")
                        firstReceivedData.current = res.data;
                }
            });
    }, []);
    const addRow = () => {
        setRows([...rows, { title: "", date: "", _id:  new ObjectId()}]);
    };
    const compareArrays = (arr1, arr2) => {
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
    };

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
    };
    const handleSave = () => {
        axios
            .post(
                "http://localhost:3001/api/workout/update/" + params.userID,
                { workout: rows },
                { withCredentials: true }
            )
            .then((res) => {
                if (res.status === 200) {
                    alert("Workout info saved successfully");
                } else {
                    alert("Error saving workout");
                }
            });
    };

    return (
        <div className="container mx-auto">
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2 text-start">Workout Title</th>
                        <th className="px-4 py-2 text-start">Date</th>
                        <th className="px-4 py-2 text-start">ID</th>
                        <th className="px-4 py-2 text-start">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={row.id}>
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
                                    name="id"
                                    value={row.id}
                                    onChange={(e) =>
                                        handleInputChange(e, index)
                                    }
                                    readOnly
                                />
                            </td>
                            <td className="border px-4 py-2">
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => removeRow(index)}
                                >
                                    -
                                </button>
                                <button
                                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={() =>
                                        navigate(
                                            `/admin/workout-details/${row._id}`
                                        )
                                    }
                                ><FontAwesomeIcon icon={faEdit}/></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={addRow}
            >
                +
            </button>
            <Button
                text="Save"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={handleSave}
            />
        </div>
    );
};

export default AdminWorkoutList;
