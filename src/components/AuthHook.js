import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// Create the AuthContext

// Create the AuthProvider component
export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const token = Cookies.get("token");
        const userID = Cookies.get("userID");
        console.log(token+"=token")
        if (token && userID) {
            console.log("/verify/2")
            axios
                .get(
                    "http://localhost:3001/verify/",

                    { withCredentials: true }
                )
                .then((response) => {
                    if (response.status === 200) {
                        setIsAuthenticated(true);
                        console.log("sa")
                        if (response.data === "admin") {
                            setIsAdmin(true);
                        }
                    }
                    setLoading(false);
                })
                .catch((error) => {
                    setIsAuthenticated(false);
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, []);
    const register = (username, password) => {
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
                return "Username already exists";
            });
    };
    const login = (username, password) => {
        
        axios
            .post(
                "http://localhost:3001/login/",
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
                    console.log("navigated to dashboard");
                    setIsAuthenticated(true);
                    navigate("/dashboard");
                } else if (response.status === 401) {
                    setIsAuthenticated(false);
                    setError(true);
                }
            })
            .catch((error) => {
                console.log(error);
                setIsAuthenticated(false);
                setError(true);
            });
    };
    return {
        isAuthenticated,
        loading,
        setIsAuthenticated,
        isAdmin,
        register,
        login,
        error,
    };
};
