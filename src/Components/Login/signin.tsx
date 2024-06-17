import { Link, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useSignin } from "../../api/hooks";
import { useState, useEffect } from "react";
import { authTokenStore, planStore, useUserInfoStore } from "../../store";
import { setUserDetail } from "../../utils";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Signin = () => {
  const [googleToken, setGoogleToken] = useState<string>("");
  const [userError, setUserError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  // const {firstNames, tokens} = authTokenStores.getState();
  const setFirstName = useUserInfoStore.setState;

  const { mutateAsync } = useSignin();

  const queryGoogleAuth = async () => {
    setIsLoading(true);
    mutateAsync({
      token: googleToken,
      authenticationType: "google",
    })
      .then((res) => {
        if (res) {
          // console.log(res)
          setIsLoading(false);
          authTokenStore.setState({
            firstName: res.firstName,
            token: res.token,
          });
          setFirstName({ firstNames: res.firstName, initials: res.logo, tokens: res.token });
          planStore.setState({ plan: res.plan });
          setUserDetail(res.firstName);
          navigate("/dashboard");
        }
      })
      .catch((e) => {
        setIsLoading(false);
        console.log(e);
        if (e.response.status === 401) {
          setUserError(true);
        }
      });
  };

  useEffect(() => {
    if (googleToken) {
      queryGoogleAuth();
    }
  }, [googleToken]);

  useEffect(() => {
    if (userError) {
      setTimeout(() => {
        setUserError(false);
      }, 3000);
    }
  });

  const flyVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: { duration: 0.5 },
    },
    close: {
      x: "-100vw",
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="my-10 ">
      {isLoading && (
        <div className="h-full w-full fixed top-0 z-[1000] bg-black/30">
          <div className="text-center my-[200px]">
            <div className="loading-spinner"></div>
          </div>
        </div>
      )}

      <AnimatePresence>
        {userError && (
          <motion.div
            className="py-2 px-2 rounded-md bg-white flex items-center justify-between fixed left-[30px] md:left-[50px] border-l-2 border-[#EA4335] w-[200px] shadow-lg"
            variants={flyVariant}
            animate="visible"
            initial="hidden"
            exit="close"
          >
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faCircleExclamation}
                className="text-[#EA4335] text-xs"
              />
              <span className="text-xs">User does not exist</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faXmark} className="text-xs" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <h1 className="text-3xl font-bold text-center">Welcome Back</h1>

      {/* <div className="w-full md:w-96 border border-[#dedddd] mx-auto rounded-md my-8 px-5 py-4 shadow-md">
        <form action="">
          <div>
            <label htmlFor="" className="text-left">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-md border my-2"
              placeholder="i.e john@mail.com"
            />
          </div>

          <div className="my-5">
            <label htmlFor="" className="">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-md border my-2"
              placeholder="Enter password here"
            />
          </div>

          <div className="flex gap-3">
            <input type="checkbox" />
            <span>Remember me</span>
          </div>

          <button className="w-full py-2 text-white bg-green rounded-md my-4">
            Sign In
          </button>
        </form>
      </div>

      <div className="text-center">
        <p>
          Don't have an account?{" "}
          <Link to="/signup">
            <span className="text-green">Create an account</span>
          </Link>
        </p>
        
        <div className="flex items-center gap-4 justify-center my-4">
          <span className="bg-black w-24 h-[1px]"></span>
          <span>OR</span>
          <span className="bg-black w-24 h-[1px]"></span>
        </div>

      </div> */}

      {/* <div className="md:w-96 mx-4 md:mx-auto border border-[#E7E9ED] rounded-md py-2 px-4 shadow-md flex justify-center items-center gap-3 mt-12">
        <img src="/Images/google.svg" alt="Google" />
        <span>Continue with Google</span>
      </div> */}

      <div className="mx-auto mt-12 w-[350px] shadow-md border border-[#E7E9ED]">
        <GoogleOAuthProvider clientId={`${import.meta.env.VITE_CLIENTID}`}>
          <GoogleLogin
            text="continue_with"
            width="350px"
            size="large"
            onSuccess={(credentialResponse) => {
              setGoogleToken(credentialResponse.credential || "");
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </GoogleOAuthProvider>
      </div>

      <div className="my-5">
        <p className="text-center">
          Don't have an account?{" "}
          <Link to="/signup">
            <span className="text-green">Create an account</span>
          </Link>
        </p>
      </div>

      <div>
        <img
          src="/Images/auth.AVIF"
          alt="auth"
          className="w-full absolute bottom-20"
        />
      </div>
    </div>
  );
};

export default Signin;
