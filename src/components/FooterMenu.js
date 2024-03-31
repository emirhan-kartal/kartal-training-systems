import { faDumbbell, faGear, faHome } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { CurrentPageContext } from "./CurrentPageContext";

const FooterMenu = ({ setCurrentPage }) => {
    const { chosenButton } = useContext(CurrentPageContext);
    console.log(chosenButton);
    console.log(chosenButton === 0 ? "true" : "false");
    return (
        <footer className="bottom-0 sticky w-screen bg-white pt-2">
            <ul className="flex justify-between p-4 px-5 shadow-xl">
                <li className="inline-block">
                    <Link to="/dashboard">
                        <Button
                            icon={faHome}
                            chosen={chosenButton === 0 ? true : false}
                            onClick={() => setCurrentPage("Dashboard")}
                        />
                    </Link>
                </li>
                <li className="inline-block">
                    <Link to="/workouts">
                        <Button
                            chosen={chosenButton === 1 ? true : false}
                            icon={faDumbbell}
                            onClick={() => setCurrentPage("Workouts")}
                        />
                    </Link>
                </li>

                <li className="inline-block">
                    <Link to="/settings">
                        <Button
                            icon={faGear}
                            chosen={chosenButton === 2 ? true : false}
                            onClick={() => setCurrentPage("Profile")}
                        />
                    </Link>
                </li>
            </ul>
        </footer>
    );
};

export default FooterMenu;
