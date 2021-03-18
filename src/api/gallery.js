import axios from "axios";
import { API_URL } from "../globals/constants";

const addGallery = async (name, isPrivate, password) => {
  const gallery = {
    name: name,
    isPrivate: isPrivate,
    password: password
  };
  const response = await axios.post(API_URL, gallery);
  return response;
};

export { addGallery, getAllGalleries };
