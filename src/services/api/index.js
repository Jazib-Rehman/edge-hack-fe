import axios from "axios";
// import jwtDecode from "jwt-decode"; already installed
import {
  JOBS,
  LOGIN,
} from "../../constants";
import Jobs from "../../pages/Admin/Jobs";

// const {
//   REACT_APP_AXIOS_RETRY,
//   REACT_APP_API_PREFIX,
//   REACT_APP_CONTENT_TYPE,
//   REACT_APP_APPLICATION_X_WWW_FORM_URLENCODED,
// } = process.env;

// Constants
// const AXIOS_RETRY = REACT_APP_AXIOS_RETRY;
const API_PREFIX = "http://192.168.10.150:8000/api/";
// const API_PREFIX = "https://2bed-203-215-162-230.ngrok-free.app/api/";


// const CONTENT_TYPE = REACT_APP_CONTENT_TYPE;
// const APPLICATION_X_WWW_FORM_URLENCODED =
//   REACT_APP_APPLICATION_X_WWW_FORM_URLENCODED;


export const createJob = (data) => {
  return axios.post(
    `${API_PREFIX}${JOBS}/`,
    data,
  );
};
export const createCandidate = (data) => {
  return axios.post(
    `${API_PREFIX}candidates/`,
    data,
  );
};

export const getAllJobs = () => {
  return axios.get(`${API_PREFIX}${JOBS}`,
  );
};

export const getAllCandidates = () => {
  return axios.get(`${API_PREFIX}candidates`,
  );
};

export const getAllScore = () => {
  return axios.get(`${API_PREFIX}score-graph`,
  );
};

export const getAllStatus = () => {
  return axios.get(`${API_PREFIX}status-graph`,
  );
};

export const calScore = (body) => {
  return axios.post(`${API_PREFIX}calscore`,
    body
  );
};

export const getAllCandidatesScore = () => {
  return axios.get(`${API_PREFIX}candidates/`,
  );
};
export const getAllUniversities = () => {
  return axios.get(`${API_PREFIX}university`,
  );
};

// export const deleteUserById = (id) => {
//   return axios.delete(${API_PREFIX}${USER}/${id}, {
//     [AXIOS_RETRY]: {
//       retries: 3,
//     },
//     errorHandling: {
//       global: true,
//     },
//   });
// };

export const updateJobAPI = (data, id) => {
  return axios.patch(`${API_PREFIX}jobs/${id}/`, data,);
};