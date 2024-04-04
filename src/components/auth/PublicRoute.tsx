import { Navigate } from "react-router";
import { auth } from "../../firebase";

type Props = {
    children : React.ReactNode;
}

export default function PublicRoute({children} : Props) {

    const user = auth.currentUser;

    console.log(user);

    return !user ? <>{children}</> : <Navigate to="/" />

}
