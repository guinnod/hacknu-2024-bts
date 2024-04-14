import AxiosDefault from "axios";
import {
    applyJwtAuth,
    configureRefreshRetry,
    createAxiosWithBaseUrl,
} from "./helper";
const baseURL =
    process.env.NEXT_PUBLIC_BACKEND_URL || "https://opti-cash-api.vercel.app/";

const axios = createAxiosWithBaseUrl(baseURL);
const axiosAuthorized = createAxiosWithBaseUrl(baseURL);
const axiosShared = AxiosDefault;

applyJwtAuth(axiosAuthorized);
configureRefreshRetry(axiosAuthorized);

export { axios, axiosAuthorized, axiosShared };
