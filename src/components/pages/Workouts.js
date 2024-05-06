import { useContext, useEffect, useState } from "react";
import { ContentCard, SpinningAnimation } from "../index";
import { CurrentPageContext } from "../CurrentPageContext";
import axios from "axios";
import { Link } from "react-router-dom";

const Workouts = () => {
    const { setCurrentPage, setChosenButton } = useContext(CurrentPageContext);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setCurrentPage("Workouts");
        setChosenButton(1);
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
    }, []);
    return (
        <section className="bg-gray-special h-[95vh] w-full rounded-[3rem] flex flex-col p-3 py-10 gap-y-3">
            <h1 className="text-5xl font-bold">Workouts</h1>
            <hr />

            {isLoading ? (
                <SpinningAnimation />
            ) : data.length === 0 ? (
                <h1 className="text-3xl font-semibold mt-4">
                    You have not workouts assigned yet.
                </h1>
            ) : (
                data.map((e, i) => {
                    console.log(e);
                    return (
                        <Link to={"/workout/" + e._id}>
                            <ContentCard
                                title={e.title}
                                split={false}
                                content={[e.date]}
                                className="bg-white h-auto shadow-xl !text-red-special border-black border-2"
                                type="workout-card"
                                isCompleted={
                                    e.completed === true ? true : false
                                }
                            />
                        </Link>
                    );
                })
            )}

            {console.log("test")}
            {useEffect(() => {}, [])}
        </section>
    );
};
export default Workouts;
