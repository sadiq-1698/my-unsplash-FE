import { useImageContext } from "../../contexts/ImagesContext";

import Image from "../Image/Image";

import "./styles.css";

const Gallery = () => {
  const { displayImages } = useImageContext();

  const getImage = (imgDetails, index, res) => {
    let { _id, url, label } = imgDetails;
    if (index % 3 === res) {
      return (
        <div key={_id}>
          <Image source={url} label={label} id={_id} />
        </div>
      );
    }
    return null;
  };

  return (
    <div className="container">
      <div className="column col-1">
        {displayImages.map((imgDetails, index) =>
          getImage(imgDetails, index, 0)
        )}
      </div>
      <div className="column col-2">
        {displayImages.map((imgDetails, index) =>
          getImage(imgDetails, index, 1)
        )}
      </div>
      <div className="column col-3">
        {displayImages.map((imgDetails, index) =>
          getImage(imgDetails, index, 2)
        )}
      </div>
    </div>
  );
};

export default Gallery;
