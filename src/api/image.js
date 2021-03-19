import axios from "axios";
import { API_URL } from "../globals/constants";

const addImage = async (label, url, galleryId) => {
  const image = {
    label: label,
    url: url,
    galleryId: galleryId
  };
  const response = await axios.post(API_URL + "image/add", image);
  return response;
};

// const getAllImages = async () => {
//   const response = await axios.get(API_URL + "image/all");
//   const { data } = response;
//   return data;
// };

// export { addImage, getAllImages };
