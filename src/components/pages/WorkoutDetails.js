import axios from "axios";
import Button from "../Button";
import Card from "../Card";
import ContentCard from "../ContentCard";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const WorkoutDetails = () => {
    const params = useParams();
    const [feedback, setFeedback] = useState("");
    const handleFeedbackChange = (e) => {
        setFeedback(e.target.value);
    };
    const navigate = useNavigate();
    const submitFeedback = () => {
        axios.post("http://localhost:3001/workout/feedback", {}).then((res) => {
            if (res.status === 200) {
                alert("Workout feedback submitted successfully");
            } else {
                alert("Error submitting workout feedback");
            }
            navigate("/workouts")
        });
    };
    return (
        <section className="bg-gray-special min-h-[95vh] w-full rounded-[3rem] flex flex-col p-3 py-10 gap-y-3">
            <h1 className="text-3xl font-bold">Workout Details</h1>

            {useEffect(() => {
                axios
                    .get("http://localhost:3001/workout/" + params.id)
                    .then((response) => {
                        console.log(response.data);
                        const data = response.data;
                        return (
                            <ContentCard
                                title={data.title}
                                content={data.content}
                                className="bg-white shadow-2xl !h-auto text-red-special"
                                type="workout-details"
                            />
                        );
                    });
            })}
            <Card title="Feedback Input" className="w-full h-24 p-0">
                <textarea
                    className="w-full h-24 bg-gray-100 p-3 rounded-3xl"
                    placeholder="Enter your feedback here"
                    onChange={handleFeedbackChange}
                >
                    {feedback}
                </textarea>
            </Card>
            <Button
                text="Submit Feedback"
                className="w-1/2 self-center"
                styles="submit-workout-feedback"
                onClick={submitFeedback}
            />
        </section>
    );
};

export default WorkoutDetails;
