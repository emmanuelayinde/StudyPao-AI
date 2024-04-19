import { authTokenStore } from "../store"
import { Navigate } from "react-router-dom"
import { ReactNode } from "react";

interface Props {
    children: ReactNode; 
}

const ProtectedRoute = ({children}: Props) => {

    const firstName = authTokenStore((state) => state.firstName)

    if (!firstName) {
        return <Navigate to='/' />
    }
    return children
}

export default ProtectedRoute
