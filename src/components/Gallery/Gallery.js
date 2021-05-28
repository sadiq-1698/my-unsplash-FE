import { useImageContext } from "../../contexts/ImagesContext";

import Image from "../Image/Image";

import "./styles.css";

const Gallery = () => {
  const { images } = useImageContext();
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
