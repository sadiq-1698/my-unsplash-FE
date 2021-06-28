import React, {
  useContext,
  createContext,
  useMemo,
  useEffect,
  useState
} from "react";
import PropTypes from "prop-types";

import { getAllImages } from "../api/image";

const ImagesContext = createContext();

export const useImageContext = () => useContext(ImagesContext);

const ImagesProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [displayImages, setDisplayImages] = useState([]);
  const [currentImage, setCurrentImage] = useState();

  const getImages = async () => {
    const result = await getAllImages();
    setImages([...result]);
    setDisplayImages([...result]);
  };

  useEffect(() => {
    getImages();
  }, []);

  const value = useMemo(
    () => ({
      images,
      setImages,
      currentImage,
      setCurrentImage,
      displayImages,
      setDisplayImages
    }),
    [
      images,
      setImages,
      currentImage,
      setCurrentImage,
      displayImages,
      setDisplayImages
    ]
  );

  return (
    <ImagesContext.Provider value={value}>{children}</ImagesContext.Provider>
  );
};

ImagesProvider.propTypes = {
  children: PropTypes.any.isRequired
};

export default ImagesProvider;
