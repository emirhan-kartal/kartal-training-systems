import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../Card";
import {
    faRightFromBracket,
    faChevronRight,
    faQuestion,
    faList,
} from "@fortawesome/free-solid-svg-icons";
import ProfilePageButton from "../ProfilePageButton";
import { useContext, useEffect } from "react";
import { CurrentPageContext } from "../CurrentPageContext";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const Settings = () => {
    const { setCurrentPage, setChosenButton } = useContext(CurrentPageContext);
    useEffect(() => {
        setCurrentPage("Profile");
        setChosenButton(2);
    }, []);
    const email = Cookies.get("email");
    return (
        <section className="flex flex-col items-center p-5 h-[85vh]">
            <div className="w-32 h-32 rounded-full bg-gray-300"></div>
            <h1 className="text-2xl font-bold mt-4">Emirhan Kartal</h1>
            <p className="text-lg font-semibold mt-2 mb-12">User</p>
            <div className="flex flex-col w-full px-6 font-semibold">
                <div className="flex justify-between">
                    <div>Email</div>
                    <div>{email}</div>
                </div>
                <div className="flex justify-between">
                    <div>Coach</div>
                    <div>Emirhan Kartal</div>
                </div>
                <div className="flex justify-between">
                    <div>Goal</div>
                    <div>Lose fat</div>
                </div>
            </div>
            {/* Add your settings components here */}
            <div className="w-full mt-auto">
                <ProfilePageButton text="Support" icon={faQuestion} />

                <Link to="/workouts">
                    <ProfilePageButton text="My workouts" icon={faList} />
                </Link>
                <ProfilePageButton text="Sign out" icon={faRightFromBracket} />
            </div>
        </section>
    );
};

export default Settings;
