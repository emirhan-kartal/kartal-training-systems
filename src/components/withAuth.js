import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "./AuthHook";

const withAuth = (Component, admin = false) => {
    return function WrappedComponent(props) {
        const navigate = useNavigate();
        const { isAuthenticated, loading, isAdmin } = useAuth();
        useEffect(() => {
            console.log(isAuthenticated);
            if (
                (!isAuthenticated && !loading) ||
                (admin && !isAdmin && isAuthenticated)
            ) {

                navigate("/");
            }
        }, [loading, isAuthenticated]);

        if (isAuthenticated) {
            console.log(admin && isAdmin);
            if (!admin) {
                return <Component {...props} />;
            } else if (isAdmin) return <Component {...props} />;
        }
    };
};
export default withAuth;
