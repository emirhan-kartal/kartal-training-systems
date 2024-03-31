import React, { useState } from "react";

import {
    faCartShopping,
    faUser,
    faFolderOpen,
    faRightFromBracket,
    faDashboard,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import { CurrentPageProvider } from "../CurrentPageContext";
import withAuth from "../withAuth";

const AdminPanel = ({ children }) => {
    const [chosenButton, setChosenButton] = useState();
    const handleClick = (text) => {
        console.log(text);
        setChosenButton(text);
    };

    return (
        <div className="grid grid-cols-12">
            <div className="bg-gradient-custom h-screen col-span-2 p-4">
                <div className="flex flex-col ">
                    <div className="flex items-center text-white gap-x-1 w-full">
                        <svg className="circle-logo" width="50" height="50">
                            <circle cx="25" cy="25" r="15" fill="blue" />
                        </svg>
                        <div>Emirhan Kartal</div>
                    </div>
                    <div className="flex flex-col items-center gap-y-3 mt-10 bg-[#1B3549] rounded-2xl">
                        <Button
                            type="admin-panel-icon"
                            styles="admin-panel-icon"
                            text="Clients"
                            icon={faUser}
                            chosen={chosenButton === "Clients"}
                            onClick={handleClick}
                            key="Clients"
                        />
                        <Button
                            type="admin-panel-icon"
                            styles="admin-panel-icon"
                            text="Orders"
                            icon={faCartShopping}
                            chosen={chosenButton === "Orders"}
                            onClick={handleClick}
                            key="Orders"
                        />
                        <Button
                            type="admin-panel-icon"
                            styles="admin-panel-icon"
                            text="#Test"
                            icon={faUser}
                            chosen={chosenButton === "Customers"}
                            onClick={handleClick}
                            key="#Test"
                        />
                        <Button
                            type="admin-panel-icon"
                            styles="admin-panel-icon"
                            text="Products"
                            icon={faFolderOpen}
                            chosen={chosenButton === "Products"}
                            onClick={handleClick}
                            key="Products"
                        />
                    </div>
                    <div className="flex flex-col items-center gap-y-3 mt-10 bg-[#1B3549] rounded-2xl">
                        <Button
                            type="admin-panel-icon"
                            styles="admin-panel-icon"
                            text="Dashboard"
                            icon={faDashboard}
                            onClick={handleClick}
                        />
                        <Button
                            type="admin-panel-icon"
                            styles="admin-panel-icon"
                            text="Orders"
                            icon={faCartShopping}
                            onClick={handleClick}
                        />
                        <Button
                            type="admin-panel-icon"
                            styles="admin-panel-icon"
                            text="Customers"
                            icon={faUser}
                            onClick={handleClick}
                        />
                        <Button
                            type="admin-panel-icon"
                            styles="admin-panel-icon"
                            text="Products"
                            icon={faFolderOpen}
                            onClick={handleClick}
                        />
                    </div>
                    <Button
                        text="Logout"
                        styles="admin-icon"
                        icon={faRightFromBracket}
                        className="!w-full mt-10 !bg-[#1B3549] text-white"
                        onClick={()=> {console.log("Logout")}}
                    />
                </div>
            </div>
            <main className="col-span-10 p-12 flex flex-col  items-center">
                <CurrentPageProvider value={{setChosenButton}}> {children}</CurrentPageProvider>
            </main>
        </div>
    );
};

export default withAuth(AdminPanel,true);
