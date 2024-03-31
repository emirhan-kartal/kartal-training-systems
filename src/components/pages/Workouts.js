import { useContext, useEffect, useState } from "react";
import { ContentCard } from "../index";
import { CurrentPageContext } from "../CurrentPageContext";
import axios from "axios";
import { Link } from "react-router-dom";

const Workouts = () => {
    const { setCurrentPage, setChosenButton } = useContext(CurrentPageContext);
    useEffect(() => {
        setCurrentPage("Workouts");
        setChosenButton(1);
    });
    const [render, setRender] = useState();
    return (
        <section className="bg-gray-special h-[95vh] w-full rounded-[3rem] flex flex-col p-3 py-10 gap-y-3">
            <h1 className="text-5xl font-bold">Workouts</h1>
            <hr />
            {render}

            {console.log("test")}
            {useEffect(() => {
                axios
                    .get("http://localhost:3001/workouts/", {
                        withCredentials: true,
                    })
                    .then((response) => {
                        console.log(response.data);
                        const data = response.data;
                        if (data.length === 0) {
                            console.log("renders here");
                            setRender(
                                <h1 className="text-3xl font-semibold mt-4">
                                    You have not workouts assigned yet.
                                </h1>
                            );
                        }
                        data.map((e, i) => {
                            setRender(
                                ...render,
                                <Link to={"/workout/" + e._id}>
                                    <ContentCard
                                        title={e.title}
                                        content={e.content}
                                        className="bg-white !h-20 shadow-xl !text-red-special border-black border-2"
                                        type="workout-card"
                                        isCompleted={e.isCompleted === true}
                                    />
                                </Link>
                            );
                        });
                    });
            }, [])}
        </section>
    );
};
export default Workouts;
