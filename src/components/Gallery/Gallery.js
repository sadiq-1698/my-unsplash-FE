import { useState, useEffect } from 'react';
import "./styles.css";

const Gallery = () => {

  const [images]

  useEffect(() => {
    const getImages = async () => {

    }

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
