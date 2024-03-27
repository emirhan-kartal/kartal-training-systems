import { ContentCard } from "../index";

const Workouts = () => {
    return (
        <section className="bg-gray-special h-[95vh] w-full rounded-[3rem] flex flex-col p-3 py-10 gap-y-3">
            <h1 className="text-5xl font-bold">Workouts</h1>
            <hr />
            <h1 className="text-3xl font-semibold mt-4">
                You have not workouts assigned yet.
            </h1>
            <ContentCard
                title="Push"
                content={"27/03/2024,Friday"}
                type="workout-card"
            />
            <ContentCard
                title="Pull Workout"
                content="Testasdaısdıoa"
                className="bg-white !h-20 shadow-xl text-red-special border-black border-2"
                type="workout-card"
            />
            <ContentCard
                title="Push"
                content="Testasdaısdıoa"
                className="bg-white !h-20 shadow-xl text-red-special border-black border-2"
                type="workout-card"
            />
            <ContentCard
                title="Push"
                content="Testasdaısdıoa"
                className="bg-white !h-20 shadow-xl text-red-special border-black border-2"
                type="workout-card"
                isCompleted={true}
            />
        </section>
    );
};
export default Workouts;
