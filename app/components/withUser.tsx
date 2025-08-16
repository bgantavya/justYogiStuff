import { useContext } from "react";
import { UserContext } from "~/page";

export default function withUser(IncomingComponent: any){

    function outgoingComponent(props: any){
        const {user, setuser} = useContext(UserContext)
        return <IncomingComponent {...props} user={user} setuser={setuser} />;
    }
}