import axios from "axios";
// import jwtDecode from "jwt-decode"; already installed
import {
  JOBS,
  LOGIN,
} from "../../constants";

const {
  REACT_APP_AXIOS_RETRY,
  REACT_APP_API_PREFIX,
  REACT_APP_CONTENT_TYPE,
  REACT_APP_APPLICATION_X_WWW_FORM_URLENCODED,
} = process.env;

// Constants
const AXIOS_RETRY = REACT_APP_AXIOS_RETRY;
const API_PREFIX = "http://192.168.10.150:8000/api/";
// const API_PREFIX = "https://2bed-203-215-162-230.ngrok-free.app/api/";


const CONTENT_TYPE = REACT_APP_CONTENT_TYPE;
const APPLICATION_X_WWW_FORM_URLENCODED =
  REACT_APP_APPLICATION_X_WWW_FORM_URLENCODED;

const headers = {
  // "Access-Control-Allow-Origin": "*",
  // "Accept": "application/json"
}

// export const login = ({ email, password }) => {
//   return axios.post(
//     `${API_PREFIX}${LOGIN}`,
//     { email, password },
//     {
//       [AXIOS_RETRY]: {
//         retries: 3,
//       },
//       errorHandling: {
//         global: true,
//       },
//     }
//   );
// };

export const getAllJobs = () => {
  return axios.get(`${API_PREFIX}${JOBS}`,
    { withCredentials: true },
    {
      [AXIOS_RETRY]: {
        retries: 3,
      },
      errorHandling: {
        global: true,
      },
    });
};

// export const deleteUserById = (id) => {
//   return axios.delete(`${API_PREFIX}${USER}/${id}`, {
//     [AXIOS_RETRY]: {
//       retries: 3,
//     },
//     errorHandling: {
//       global: true,
//     },
//   });
// };

// export const updateUser = (data, id) => {
//   return axios.patch(`${API_PREFIX}${USER}/${UPDATE}/${id}`,
//     data,
//     { headers }, {
//     [AXIOS_RETRY]: {
//       retries: 3,
//     },
//     errorHandling: {
//       global: true,
//     },
//   });
// };
