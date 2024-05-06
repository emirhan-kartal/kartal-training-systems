import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

import {
    ContentCard,
    Card,
    WeeklyWorkoutSchedule,
    SpinningAnimation,
} from "../index";
import withAuth from "../withAuth";
import { useContext, useEffect, useState } from "react";
import { CurrentPageContext } from "../CurrentPageContext";
import Cookies from "js-cookie";
import useDashboardStatHook from "../api/DashboardStatHook";

const Dashboard = () => {
    const { setCurrentPage, setChosenButton } = useContext(CurrentPageContext);

    /*
     */
    const [data, isLoading] = useDashboardStatHook();
    console.log(!isLoading && data);
    useEffect(() => {
        setCurrentPage("Dashboard");
        setChosenButton(0);
    }, []);

    const colSpanOrder = [5, 7, 7, 5];

    return isLoading ? (
        <SpinningAnimation className="h-screen" />
    ) : (
        <div className="bg-half-red min-h-screen w-full rounded-[3rem] flex flex-col px-3 transition-all duration-500">
            <h2 className="text-3xl text-black mt-6 ml-5 mb-4">
                Welcome,{Cookies.get("username")}
            </h2>
            <div className="col-span-7"></div>
            <div className="col-span-5"></div>

            <div className="grid grid-cols-12 grid-rows-2 gap-3">
                {data &&
                    data[0] &&
                    data[0].map((e, i) => {
                        console.log(e);
                        return (
                            <ContentCard
                                title={e.title}
                                content={e.content}
                                className={`col-span-${colSpanOrder[i]}`}
                                key={e.content}
                            />
                        );
                    })}
                <ContentCard
                    title="1"
                    content="you to be better"
                    className={`col-span-5`}
                    key="you"
                />
            </div>
            <WeeklyWorkoutSchedule
                dateJsonArray={data.length > 1 ? data[3].weeklyWorkouts : []}
            />

            <Card title="Today's Workout">
                <FontAwesomeIcon icon={faDumbbell} className="text-2xl" />

                <h3 className="font-semibold text-xl tracking-wider">
                    {data[1] !== undefined
                        ? data[1].todaysWorkoutTitle
                        : "Rest"}
                </h3>
            </Card>
            <Card title="Quote of the Day" className="h-fit">
                {data[2] && data[2].quote}
                It is a shame for a man to grow old without seeing the beauty
            </Card>
        </div>
    );
};

export default withAuth(Dashboard);
