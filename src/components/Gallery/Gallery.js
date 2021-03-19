import { useState, useEffect } from "react";
import "./styles.css";
import { getAllImages } from "../../api/image";
import Image from "../Image/Image";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const result = await getAllImages();
      setImages([...result]);
    };

    getImages();
  }, []);

  return (
    <div>
      <div className="container">
        {images.map(({ _id, url, label }) => {
          return (
            <div key={_id}>
              <Image source={url} label={label} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
