import axios from "axios";
import { useEffect, useState } from "react";

export default function DashboardStatHook() {
    const [statistics, setStatistics] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        axios
            .get("http://localhost:3001/dashboard", {
                withCredentials: true,
            })
            .then((response) => {
                setStatistics(response.data);
                setIsLoading(false);
            });
    }, []);
    return [statistics, isLoading];
}
//this doesnt require any parameters, because it is already in the cookie of the user
//this hook is used to get the statistics of the user, such as the number of workouts assigned, the number of workouts completed, and the number of workouts not completed
//this hook is used in the Dashboard.js component
