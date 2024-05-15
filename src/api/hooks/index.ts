import { createMutation } from "react-query-kit";
import { signUp, signIn, premiumPlan, createCategory, uploadFile } from "..";
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

export const useUpgradePlan = createMutation({
  mutationFn: premiumPlan
})

export const useCreateCategory = createMutation({
  mutationFn: createCategory,
})

export const useUploadFile = createMutation({
  mutationFn: uploadFile
})

// export const getUserInfo = createMutation({
//     mutationFn: userName,
// })
