import axiosClient from "./axiosClient";
import * as PATH_URL from "../constants/apiUrl";

const visitorApi = {
  getAllVisitor: () => {
    return axiosClient.get(PATH_URL.ALL_VISITOR);
  },
};

export default visitorApi;
