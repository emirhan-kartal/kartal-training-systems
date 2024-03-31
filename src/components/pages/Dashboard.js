import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

import { ContentCard, Card, WeeklyWorkoutSchedule } from "../index";
import { useContext, useEffect, useState } from "react";
import { CurrentPageContext } from "../CurrentPageContext";
import withAuth from "../withAuth";
import axios from "axios";
import Cookies from "js-cookie";
const Dashboard = () => {
    const { setCurrentPage, setChosenButton } = useContext(CurrentPageContext);
    const [data, setData] = useState([]);
    useEffect(() => {
        setCurrentPage("Dashboard");
        setChosenButton(0);
        axios
            .get("http://localhost:3001/dashboard/", { withCredentials: true })
            .then((response) => {
                //[generalInfo,todaysWorkoutTitle,todaysQuote,workoutSchedule]
                const data = response.data;
                console.log("request sent");

                if (response.status === 200) {
                    setData(data);

                    console.log(response.data[0]);

                    if (data[0].length === 0) {
                        return (
                            <h1 className="text-3xl font-semibold mt-4">
                                You have not workouts assigned yet.
                            </h1>
                        );
                    }
                } else {
                    console.log("error");
                }
            });
    }, []);

    const colSpanOrder = [5, 7, 7, 5];
    return (
        <div className="bg-half-red min-h-screen w-full rounded-[3rem] flex flex-col px-3 ">
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
                    {data[1] && data[1].todaysWorkoutTitle}
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
