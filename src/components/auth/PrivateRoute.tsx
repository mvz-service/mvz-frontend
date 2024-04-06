import { Navigate } from "react-router";
import useGetUser from "../../hook/useGetUser";

export default function PrivateRoute({children} : {children : React.ReactNode}) {

    const user = useGetUser();

    if(user === null){
        return <div>Loading...</div>
    }
    
    return user? <>{children}</> : <Navigate to="/" />

}
