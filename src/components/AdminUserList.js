import React, { useContext, useEffect, useState } from "react";
import { CurrentPageContext } from "./CurrentPageContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AdminUserList = () => {
    const { setChosenButton } = useContext(CurrentPageContext);
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        setChosenButton("Clients");

        axios
            .get("http://localhost:3001/api/users", { withCredentials: true })
            .then((res) => {
                if (res.status === 200) {
                    setUsers(res.data);
                    console.log(res.data);
                }
            });
    }, []);
    /*     const users = [
        {
            id: 1,
            name: "John Doe",
            email: "john@example.com",
            missingWorkouts: 3,
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "jane@example.com",
            missingWorkouts: 4,
        },
        {
            id: 3,
            name: "Bob Johnson",
            email: "bob@example.com",
            missingWorkouts: 5,
        },
    ];
 */
    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-semibold mb-4">User List</h1>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b border-gray-200 text-start" key="id">
                            ID
                        </th>
                        <th className="py-2 px-4 border-b border-gray-200 text-start" key="name">
                            Name
                        </th>

                        <th className="py-2 px-4 border-b border-gray-200 text-start" key="missing-workouts">
                            Missing Workouts
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr
                            key={user._id}
                            className="hover:bg-gray-200 cursor-pointer"
                            onClick={() =>
                                navigate(`/admin/workouts/${user._id}`)
                            }
                        >
                            <td className="py-2 px-4 border-b border-gray-200">
                                {user._id}
                            </td>
                            <td className="py-2 px-4 border-b border-gray-200">
                                {user.username}
                            </td>
                            
                            <td className="py-2 px-4 border-b border-gray-200">
                                {
                                    user.workouts.map((workout) => {
                                        if (workout.isCompleted === false)
                                            return workout;
                                    }).length
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminUserList;
