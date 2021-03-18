import axios from "axios";
import { API_URL } from "../globals/constants";

const addGallery = async (name, isPrivate, password) => {
  const gallery = {
    name: name,
    isPrivate: isPrivate,
    password: password
  };
  const response = await axios.post(API_URL + "gallery/add", gallery);
  return response;
};

const getAllGalleries = async () => {
  const response = await axios.get(API_URL + "gallery/all");
  const { data } = response;
  return data;
};

export { addGallery, getAllGalleries };
