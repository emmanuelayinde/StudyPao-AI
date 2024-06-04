export type GetPaoResponseData = Chat[];
export interface Chat {
  logo: string;
  type: "human" | "ai";
  message: string;
}

export interface GetWelcomeTextData {
  welcome_message: string;
  prompts: string[];
}
