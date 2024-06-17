import { createMutation ,router } from "react-query-kit";
import {
  signUp,
  signIn,
  premiumPlan,
  createCategory,
  uploadFile,
  getChat,
  getWelcomeText,
  preProcessFile,
  getPaoResponse,
} from "..";
import { setTokens } from "../../utils";
// import { AxiosError } from "axios";

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
  mutationFn: premiumPlan,
});

export const useCreateCategory = createMutation({
  mutationFn: createCategory,
});

export const useUploadFile = createMutation({
  mutationFn: uploadFile,
});

export const useGetChat = createMutation({
  mutationFn: getChat,
});

export const chatRouter= router("chat",{
  getRecent: router.query({
    fetcher: getChat
  }),
  getWelcomeMessage: router.query({
    fetcher: getWelcomeText
  })
})

export const useWelcomeText = createMutation({
  mutationFn: getWelcomeText,
});

export const useProcessFile = createMutation({
  mutationFn: preProcessFile,
});

export const useGetResponse = createMutation({
  mutationFn: getPaoResponse,
});

// export const getUserInfo = createMutation({
//     mutationFn: userName,
// })
