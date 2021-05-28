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

  useEffect(() => {
    const getImages = async () => {
      const result = await getAllImages();
      setImages([...result]);
    };

    getImages();
  }, []);

  const value = useMemo(
    () => ({
      images,
      setImages
    }),
    [images, setImages]
  );

  return (
    <ImagesContext.Provider value={value}>{children}</ImagesContext.Provider>
  );
};

ImagesProvider.propTypes = {
  children: PropTypes.any.isRequired
};

export default ImagesProvider;
