import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Input from "../Input";
import { useAuth } from "../AuthHook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell, faLock } from "@fortawesome/free-solid-svg-icons";
import image from "../../images/guy1_4.png";
import InputCard from "../InputCard";

const RegisterPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [error, setError] = useState("");
    const [isAuthenticated, loading, setIsAuthenticated] = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/dashboard");
        }
    }, [loading]);
    if (loading)
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="flex space-x-2 justify-center items-center h-8 ">
                    <span className="sr-only">Loading...</span>
                    <div className="h-8 w-8 bg-red-special rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="h-8 w-8 bg-red-special rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="h-8 w-8 bg-red-special rounded-full animate-bounce"></div>
                </div>
            </div>
        );

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handlePasswordRepeatChange = (e) => {
        setPasswordRepeat(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //send request to server with axios
        if (password === passwordRepeat) {
            axios
                .post(
                    "http://localhost:3001/register/",
                    {
                        username: username,
                        password: password,
                    },
                    {
                        withCredentials: true,
                    }
                )
                .then((response) => {
                    if (response.status === 200) {
                        setIsAuthenticated(true);
                        navigate("/dashboard");
                    }
                })
                .catch((error) => {
                    console.log(error);
                    setIsAuthenticated(false);
                    setError("Username already exists");
                });
        } else {
            setError("Your passwords must match");
        }
    };

    return (
        <section className="flex flex-col justify-center items-center h-screen gap-y-12 py-12">
            <div className="flex flex-col items-center gap-y-8">
                <div className="h-[250px] w-[250px] border-2 border-solid border-blue-400 rounded-full flex items-center justify-center bg-red-special">
                    <img src={image} alt="logo" width={200} />
                </div>
                <div>
                    <h1 className="font-bold text-3xl mb-2">
                        Kartal Training Systems
                    </h1>
                    <h2 className="text-xl text-center">
                        Your stop to greatness
                    </h2>
                </div>
            </div>
            <label
                className={
                    "hidden h-2 text-sm text-red-500 absolute mb-20" +
                    (error && " !inline-block")
                }
            >
                {error !== "" && error}
            </label>
            <form
                onSubmit={handleSubmit}
                className="h-1/2 w-11/12 sm:w-1/2 md:w-1/3 lg:w-1/4
                brounded-xl flex flex-col gap-y-8 items-center"
            >
                <InputCard
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={handleUsernameChange}
                    icon={faDumbbell}
                />
                <InputCard
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    icon={faLock}
                />

                <InputCard
                    type="password"
                    placeholder="Password Again"
                    value={passwordRepeat}
                    onChange={handlePasswordRepeatChange}
                    icon={faLock}
                />

                <button
                    type="submit"
                    className=" text-white rounded-[2rem] h-14 w-11/12 text-lg font-bold transition duration-300 hover:scale-105 bg-red-special"
                >
                    Sign In
                </button>
            </form>
        </section>
    );
};

export default RegisterPage;
