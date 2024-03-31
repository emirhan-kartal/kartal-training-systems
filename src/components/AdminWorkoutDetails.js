import React, { useState } from "react";
import Button from "./Button";
import { useParams } from "react-router-dom";
import axios from "axios";

const AdminWorkoutDetails = () => {
    const params = useParams();
    const [rows, setRows] = useState([
        { name: "", sets: "", reps: "", weight: "", rest: "" },
    ]);

    const handleAddRow = () => {
        setRows([
            ...rows,
            { name: "", sets: "", reps: "", weight: "", rest: "" },
        ]);
    };

    const handleRemoveRow = (index) => {
        const updatedRows = [...rows];
        updatedRows.splice(index, 1);
        setRows(updatedRows);
    };

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const updatedRows = [...rows];
        updatedRows[index][name] = value;
        setRows(updatedRows);
    };
    const handleSave = () => {
        const workout = {exercises: rows };
        axios.post(

            "http://localhost:3001/api/workout/exercise/update/" + params.workoutID,
            {exercises:workout},
            { withCredentials: true }
        ).then((res) => {
            if (res.status === 200) {
                alert("Workout saved successfully");
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
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Sets</th>
                        <th className="px-4 py-2">Reps</th>
                        <th className="px-4 py-2">Weight</th>
                        <th className="px-4 py-2">Rest</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2">
                                <input
                                    type="text"
                                    name="name"
                                    value={row.name}
                                    onChange={(e) => handleChange(e, index)}
                                    className="w-full"
                                />
                            </td>
                            <td className="border px-4 py-2">
                                <input
                                    type="text"
                                    name="sets"
                                    value={row.sets}
                                    onChange={(e) => handleChange(e, index)}
                                    className="w-full"
                                />
                            </td>
                            <td className="border px-4 py-2">
                                <input
                                    type="text"
                                    name="reps"
                                    value={row.reps}
                                    onChange={(e) => handleChange(e, index)}
                                    className="w-full"
                                />
                            </td>
                            <td className="border px-4 py-2">
                                <input
                                    type="text"
                                    name="weight"
                                    value={row.weight}
                                    onChange={(e) => handleChange(e, index)}
                                    className="w-full"
                                />
                            </td>
                            <td className="border px-4 py-2">
                                <input
                                    type="text"
                                    name="rest"
                                    value={row.rest}
                                    onChange={(e) => handleChange(e, index)}
                                    className="w-full"
                                />
                            </td>
                            <td className="border px-4 py-2">
                                <button
                                    onClick={() => handleRemoveRow(index)}
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    -
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button
                onClick={handleAddRow}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
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

export default AdminWorkoutDetails;
