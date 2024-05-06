export default function useWorkoutList() {
    const [workoutList, setWorkoutList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    axios
        .get(
            "http://localhost:3001/workouts/",

            { withCredentials: true }
        )
        .then((response) => {
            setIsLoading(false);
            console.log(response.data);
            const data = response.data;
            setData(data.reverse());
        });
    return [workoutList, isLoading];
}
