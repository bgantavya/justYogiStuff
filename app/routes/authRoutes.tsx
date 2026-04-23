import { Navigate } from "react-router-dom";
import {UserContext} from '../page'
import { useContext } from "react";

export default function UserRoutes({ children}: any){
    const {user} = useContext(UserContext)
    if (user) {
        return <Navigate to="/" />;
    } 
    return children
}