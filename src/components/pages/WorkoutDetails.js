import axios from "axios";
import Button from "../Button";
import Card from "../Card";
import ContentCard from "../ContentCard";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import withAuth from "../withAuth";

const WorkoutDetails = () => {
    const params = useParams();
    const [workout, setWorkout] = useState({}); //[title, content, feedback, date, completed
    const handleFeedbackChange = (e) => {
        setWorkout({ ...workout, feedback: e.target.value })
    };
    const navigate = useNavigate();

    
    useEffect(() => {
        axios
            .get("http://localhost:3001/workout/" + params.id, {
                withCredentials: true,
            })
            .then((response) => {
                console.log(response.data);
                setWorkout(response.data);
            });
    }, []);
    
    const submitFeedback = () => {
        axios
            .post(
                "http://localhost:3001/workout/feedback/" + workout._id,
                { feedback: workout.feedback },

                {
                    withCredentials: true,
                }
            )
            .then((res) => {
                if (res.status === 200) {
                    alert("Workout feedback submitted successfully");
                } else {
                    alert("Error submitting workout feedback");
                }
                navigate("/workouts");
            });
    };
    return (
        <section className="bg-gray-special min-h-[95vh] w-full rounded-[3rem] flex flex-col p-3 py-10 gap-y-3">
            <h1 className="text-3xl font-bold">Workout Details</h1>

            {workout.title && workout.exercises ? (
                <ContentCard
                    title={workout.title}
                    split={false}
                    content={workout.exercises.map(
                        (e) =>
                            e.name +
                            " " +
                            e.sets +
                            "x" +
                            e.reps +
                            "reps " +
                            e.weight +
                            "kg " +
                            e.rest +
                            " rest"
                    )}
                    className="bg-white shadow-2xl !h-auto !text-red-special"
                    type="workout-details"
                />
            ) : (
                ""
            )}

            <Card title="Feedback Input" className="w-full h-24 p-0">
                <textarea
                    className="w-full h-24 bg-gray-100 p-3 rounded-3xl"
                    placeholder="Enter your feedback here..."
                    onChange={handleFeedbackChange}
                    disabled={workout.completed === true ? true : false}
                    value={workout.feedback}
                >
            
                </textarea>
            </Card>
            <Button
                text="Submit Workout"
                className={
                    "w-1/2 self-center " +
                    (workout.completed === true ? "hidden" : "")
                }
                styles="submit-workout-feedback"
                onClick={submitFeedback}
            />
        </section>
    );
};

export default withAuth(WorkoutDetails);
