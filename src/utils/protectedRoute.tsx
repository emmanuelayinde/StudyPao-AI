// import { authTokenStore } from "../store"
import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
// import { getUserDetail } from ".";

interface Props {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  // const name = getUserDetail();
  // console.log(name)
  const firstName = localStorage.getItem("firstName");
//   console.log(firstName);
//   const sample = '';
//   const firstName = authTokenStore((state) => state.firstName);

  if (!firstName) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
