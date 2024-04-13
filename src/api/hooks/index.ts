import { createMutation } from "react-query-kit";
import { signUp, signIn } from "..";
import { setTokens } from "../../utils";

export const useSignup = createMutation({
  mutationFn: signUp,
  onSuccess: (data) => {
    setTokens({
      token: data.token,
      refreshToken: data.refreshToken,
    });
  },
});

export const useSignin = createMutation({
  mutationFn: signIn,
  onSuccess: (data) => {
    setTokens({
      token: data.token,
      refreshToken: data.refreshToken,
    });
  },
});

// export const getUserInfo = createMutation({
//     mutationFn: userName,
// })
