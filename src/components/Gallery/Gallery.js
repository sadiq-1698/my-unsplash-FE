import { useState, useEffect } from "react";
import "./styles.css";
import { getAllImages } from "../../api/image";

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
      <div>
        {images.map(({ _id, url, label }) => {
          return (
            <div key={_id}>
              <img src={url} alt={label} />
              <p>{label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
