import React, { useState } from "react";
import "./App.css";

import {
    FooterMenu,
    Header,
    Dashboard,
    Workouts,
    Settings,
    LoginPage,
    AdminWorkoutDetails,
    AdminWorkoutList,
    AdminUserList,
    RegisterPage,
    WorkoutDetails,
    AdminPanel,
} from "./components";
import { Route, Routes, useLocation } from "react-router-dom";
import { CurrentPageProvider } from "./components/CurrentPageContext";
function App() {
    const [currentPage, setCurrentPage] = useState("Dashboard");
    const [chosenButton, setChosenButton] = useState(0);
    const location = useLocation();
    const adminOrLoginPage =
        location.pathname === "/" ||
        location.pathname.includes("/admin") ||
        location.pathname.includes("/register") ||
        location.pathname.includes("*");
    const headerFooterRendering = [
        "/dashboard",
        "/workouts",
        "/settings",
        "/workout/",
    ];
    const renderingCondition =
        headerFooterRendering.some((path) =>
            location.pathname.includes(path)
        ) && !location.pathname.includes("/admin");

    const NotFound = () => {
        return (
            <>
                <h1 className="text-3xl">404 - Page Not Found</h1>
                <p>Sorry, the page you are looking for could not be found.</p>
            </>
        );
    };
    return (
        <div className="flex flex-col h-screen w-screen overflow-x-hidden ">
            <div className={"pb-16 " + adminOrLoginPage ? "!p-0" : ""}>
                <CurrentPageProvider
                    value={{
                        currentPage,
                        setCurrentPage,
                        chosenButton,
                        setChosenButton,
                    }}
                >
                    {renderingCondition && <Header />}

                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/workouts" element={<Workouts />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route
                            path="/workout/:id"
                            element={<WorkoutDetails />}
                        />
                        <Route
                            path="/admin"
                            element={
                                <AdminPanel>
                                    <AdminUserList />
                                </AdminPanel>
                            }
                        />
                        <Route
                            path="/admin/workouts/:userID"
                            element={
                                <AdminPanel>
                                    <AdminWorkoutList />
                                </AdminPanel>
                            }
                        />
                        <Route
                            path="/admin/workout-details/:workoutID/:userID"
                            element={
                                <AdminPanel>
                                    <AdminWorkoutDetails />
                                </AdminPanel>
                            }
                        />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    {renderingCondition && (
                        <FooterMenu setCurrentPage={setCurrentPage} />
                    )}
                </CurrentPageProvider>
            </div>
        </div>
    );
}

export default App;
