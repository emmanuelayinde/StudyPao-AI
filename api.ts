const app_env: string = `${import.meta.env.VITE_APP_ENV}`;

let baseurl;
let paoBaseurl;

if (app_env === "production") {
} else if (app_env === "development") {
  baseurl = `${import.meta.env.VITE_DEV_BASE_URL}`;
  paoBaseurl = `${import.meta.env.VITE_FAST_API_BASE_URL}`
}

export const basic = `${baseurl}`;
export const paoBasic = `${paoBaseurl}`
export const getUserName = `${baseurl}user/profile`;
export const getUserLevel = `${baseurl}user/levels`;
export const getUserCollege = `${baseurl}user/institutions`;
export const getProfile = `${baseurl}user/update-profile`;
export const getUpgradePlan = `${baseurl}user/upgrade-plan/premium`;
export const useGetProfile = `${baseurl}user/profile`
export const useGetCategory = `${baseurl}user/categories`
export const getCategoryInfo = `${baseurl}user/retrieve-category/`
