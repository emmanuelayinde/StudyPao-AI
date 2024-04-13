import { Link } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useState, useEffect } from "react";
import { useSignup } from "../../api/hooks";
import { authTokenStore } from "../../store";

const Signup = ({
  setStep,
}: {
  // setStep: React.Dispatch<
  //   React.SetStateAction<{
  //     stepOne?: boolean | undefined;
  //     stepTwo?: boolean | undefined;
  //   }>
  // >;
  setStep: (step: { stepOne?: boolean; stepTwo?: boolean }) => void;
}) => {
  const [googleToken, setGoogleToken] = useState<string>("");

  const {mutateAsync} = useSignup()

  const queryGoogleAuth = async () => {
    mutateAsync({
      token: googleToken,
      authenticationType: "google"
    })
    .then((res) => {
      if(res) {
        setStep({stepTwo: true})
        authTokenStore.setState({token: res.token})
      }
    })
    .catch((e) => {
        console.log(e)
        alert('Big Fat Error')
    })
  };

  useEffect(() => {
    if (googleToken) {
      queryGoogleAuth();
    }
  }, [googleToken]);

  return (
    <div className="my-10 overflow-hidden">
      <h1 className="text-3xl font-bold text-center">Sign Up</h1>

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

          <div>
            <label htmlFor="" className="">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-md border my-2"
              placeholder="Confirm here"
            />
          </div>

          <div className="flex gap-3 my-3">
            <input type="checkbox" />
            <span>I agree to the Terms and conditions</span>
          </div>

          <button className="w-full py-2 text-white bg-green rounded-md my-4">
            Continue
          </button>
        </form>

      </div>
        <div className="text-center">
            <p>Already have an account? <Link to='/signin'><span className="text-green">Sign in now</span></Link></p>

            <div className="flex items-center gap-4 justify-center my-4">
                <span className="bg-black w-24 h-[1px]"></span>
                <span>OR</span>
                <span className="bg-black w-24 h-[1px]"></span>
            </div>

        </div> */}
      {/* <div
        className="md:w-96 mx-4 md:mx-auto border border-[#E7E9ED] rounded-md py-2 px-4 shadow-md flex justify-center items-center gap-3 mt-12 cursor-pointer"
        onClick={() => setStep({ stepTwo: true })}
      >
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
              console.log("Login Failed")
            }}
          />
        </GoogleOAuthProvider>
      </div>

      <div className="my-5">
        <p className="text-center">
          Already have account?{" "}
          <Link to="/signin">
            <span className="text-green">Sign in now</span>
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

export default Signup;
