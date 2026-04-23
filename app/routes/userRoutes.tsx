import { useContext } from "react";
import {  Navigate } from "react-router-dom";
import { UserContext } from "~/page";

export default function UserRoutes({children}: any){
    const {user} = useContext(UserContext)
    if (!user) {
        return <Navigate to="/login" />;
    } 
    return children
}