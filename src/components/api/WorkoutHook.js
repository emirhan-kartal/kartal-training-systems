import axios from "axios";
import { useEffect } from "react";

export default function useWorkout(workoutID) {
    const [isLoading, setIsLoading] = useState(true);
    const [workout, setWorkout] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:3001/workout/" + workoutID, {
                withCredentials: true,
            })
            .then((response) => {
                setWorkout(response.data);
                setIsLoading(false);
            });
    }, []);
    return [workout, isLoading];
}

// this hook is used to get the workout details of a specific workout
// used in the WorkoutDetails.js component
