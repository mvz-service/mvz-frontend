import { Navigate } from "react-router";
import useGetUser from "../../hook/useGetUser";

type Props = {
    children : React.ReactNode;
}

export default function PublicRoute({children} : Props) {

    const user = useGetUser();
    
    if(user === null){
        return <div>Loading...</div>
    }
    

    return !user ? <>{children}</> : <Navigate to="/" />

}
