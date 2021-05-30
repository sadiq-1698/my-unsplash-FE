import axios from "axios";
import { API_URL } from "../globals/constants";

const addImage = async data => {
  const response = await axios.post(API_URL + "image/add", data);
  return response;
};

const deleteImage = async imageId => {
  const response = await axios.delete(API_URL + "image/" + imageId);
  return response;
};

const getAllImages = async () => {
  const response = await axios.get(API_URL + "image/all");
  const { data } = response;
  return data;
};

export { addImage, deleteImage, getAllImages };
