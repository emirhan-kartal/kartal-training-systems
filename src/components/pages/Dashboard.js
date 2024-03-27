import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

import { ContentCard, Card, WeeklyWorkoutSchedule } from "../index";
const Dashboard = () => {
    return (
        <div className="bg-half-red h-[95vh] w-full rounded-[3rem] flex flex-col px-3">
            <h2 className="text-3xl text-black mt-6 ml-5 mb-4">
                Welcome to Kartal Training!
            </h2>

            <div className="grid grid-cols-12 grid-rows-2 gap-3">
                <ContentCard
                    title="3"
                    content="Workouts to complete "
                    className="col-span-5"
                />
                <ContentCard
                    title="35000kg"
                    content="Volume to lift"
                    className="col-span-7"
                />
                <ContentCard
                    title="24"
                    content="sets to finish"
                    className="col-span-7"
                />
                <ContentCard
                    title="1"
                    content="you to be better today"
                    className="col-span-5"
                />
            </div>
            <WeeklyWorkoutSchedule />

            <Card title="Today's Workout">
                <FontAwesomeIcon icon={faDumbbell} className="text-2xl" />

                <h3 className="font-semibold text-xl tracking-wider">
                    Push Workout
                </h3>
            </Card>
            <Card title="Quote of the Day" className="h-28">
                " lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem
                ipsum dolor sit amet, consectetur adipiscing elit. {"\n"}
                -Socrates"{" "}
            </Card>
        </div>
    );
};

export default Dashboard;
