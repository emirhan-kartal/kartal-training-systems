import { faDumbbell, faGear, faHome } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Button from "./Button";

const FooterMenu = () => {
    return (
        <footer className="bottom-0 fixed w-screen bg-white pt-2">
            <ul className="flex justify-between p-4 px-5 shadow-xl">
                <li className="inline-block">
                    <Button icon={faHome} chosen={true}/>
                </li>
                <li className="inline-block">
                    <Button icon={faDumbbell} />
                </li>
                <li className="inline-block">
                    <Button icon={faGear} />
                </li>
            </ul>
        </footer>
    );
};

export default FooterMenu;
