import { useEffect, useState } from "react";

import { useRefreshToken } from ".";
import { getCookie } from "../../utils/cookie.util";
import { authTokenStore } from "../../store";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { mutateAsync } = useRefreshToken();

  useEffect(() => {
    const accessToken = getCookie("accessToken");
    if (!accessToken) {
      const refreshToken = getCookie("refreshToken");
      console.log({ refreshToken });
      if (!refreshToken) return;
      // TODO: fetch access token with refreshToken
      mutateAsync({ refreshToken })
        .then((res) => {
          if (!res.ok) {
            console.log({ res });
            return;
          }
          authTokenStore.setState({
            token: res.accessToken,
          });
          return;
        })
        .catch((err) => {
          console.log({ err });
          return;
        });
    }
    
    setIsAuthenticated(true);
    return;
  }, []);

  return {
    isAuthenticated,
  };
};

export default useAuth;
