import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Card from "./Card";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const ProfilePageButton = ({ icon, text }) => {
    return (
        <Card title="" className="min-h-12 w-10/12 p-8">
            <FontAwesomeIcon
                className="flex-grow"
        
                icon={icon}
            ></FontAwesomeIcon>
            <div className="flex-grow-[4]">{text}</div>
            <FontAwesomeIcon
                className="flex-grow text-xl"
                icon={faChevronRight}
            ></FontAwesomeIcon>
        </Card>
    );
};

export default ProfilePageButton;
