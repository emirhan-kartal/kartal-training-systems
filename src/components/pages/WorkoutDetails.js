import Button from "../Button";
import Card from "../Card";
import ContentCard from "../ContentCard";

const WorkoutDetails = () => {
    return (
        <section className="bg-gray-special min-h-[95vh] w-full rounded-[3rem] flex flex-col p-3 py-10 gap-y-3">
            <h1 className="text-3xl font-bold">Workout Details</h1>
            
            <ContentCard  type="workout-details" title="Bench Press" content="Sets: 3;Reps: 8;Weight: 120kg; Rest: 2min" className="bg-white shadow-2xl !h-auto text-red-special"/>
            <ContentCard  type="workout-details" title="Pecdec fly" content="Sets: 3;Reps: 8;Weight: 120kg; Rest: 2min" className="bg-white shadow-2xl !h-auto text-red-special"/>
            <ContentCard  type="workout-details" title="Overhead Press" content="Sets: 3;Reps: 8;Weight: 120kg; Rest: 2min" className="bg-white shadow-2xl !h-auto text-red-special"/>

            <Card title="Feedback Input" className="w-full h-24 p-0">
                <textarea className="w-full h-24 bg-gray-100 p-3 rounded-3xl" placeholder="Enter your feedback here"></textarea>
            </Card>
            <Button text="Submit Feedback" className="w-1/2 self-center" style="submit-workout-feedback"/>
            
        </section>
    );
};

export default WorkoutDetails;
