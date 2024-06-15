import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

import useAuth from "../api/hooks/useAuth";

interface Props {
  children: ReactNode;
}

const AuthRoute = ({ children }: Props) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }
  return children;
};

export default AuthRoute;
