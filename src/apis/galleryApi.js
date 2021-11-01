import axiosClient from "./axiosClient";
import * as PATH_URL from "./../constants/apiUrl";

const galleryApi = {
  getGallery: (data) => {
    return axiosClient.post(PATH_URL.GALLERY_PRODUCT, data);
  },
  newGallery: (gallery) => {
    return axiosClient.post(PATH_URL.NEW_GALLERY, gallery);
  },
  deleteGallery: (gallery) => {
    return axiosClient.post(PATH_URL.DELETE_GALLERY, gallery);
  },
};

export default galleryApi;
