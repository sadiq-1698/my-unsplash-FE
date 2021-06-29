import { useImageContext } from "../../contexts/ImagesContext";

import Image from "../Image/Image";

import "./styles.css";
import useMediaQuery from "../../hooks/useMediaQuery";

const getImage = (imgDetails, index, mod, res) => {
  let { _id, url, label } = imgDetails;
  if (index % mod === res) {
    return (
      <div key={_id}>
        <Image source={url} label={label} id={_id} />
      </div>
    );
  }
  return null;
};

const LargerScreen = ({ displayImages }) => {
  return (
    <div className="container">
      <div className="column col-1">
        {displayImages.map((imgDetails, index) =>
          getImage(imgDetails, index, 3, 0)
        )}
      </div>
      <div className="column col-2">
        {displayImages.map((imgDetails, index) =>
          getImage(imgDetails, index, 3, 1)
        )}
      </div>
      <div className="column col-3">
        {displayImages.map((imgDetails, index) =>
          getImage(imgDetails, index, 3, 2)
        )}
      </div>
    </div>
  );
};

const TabletScreen = ({ displayImages }) => {
  return (
    <div className="container">
      <div className="column col-1">
        {displayImages.map((imgDetails, index) =>
          getImage(imgDetails, index, 2, 0)
        )}
      </div>
      <div className="column col-2">
        {displayImages.map((imgDetails, index) =>
          getImage(imgDetails, index, 2, 1)
        )}
      </div>
    </div>
  );
};

const MobileScreen = ({ displayImages }) => {
  return (
    <div className="container">
      <div className="column col-1">
        {displayImages.map((imgDetails, index) =>
          getImage(imgDetails, index, 1, 0)
        )}
      </div>
    </div>
  );
};

const Gallery = () => {
  const { displayImages } = useImageContext();

  const largeScreenQuery = "(min-width: 701px)";
  const tabletScreenQuery = "(min-width:501px) and (max-width: 700px)";
  const mobileScreenQuery = "(min-width:320px) and (max-width: 500px)";

  const isLargerScreen = useMediaQuery(largeScreenQuery);
  const isTabletScreen = useMediaQuery(tabletScreenQuery);
  const isMobileScreen = useMediaQuery(mobileScreenQuery);

  return (
    <>
      {isLargerScreen && <LargerScreen displayImages={displayImages} />}
      {isTabletScreen && <TabletScreen displayImages={displayImages} />}
      {isMobileScreen && <MobileScreen displayImages={displayImages} />}
    </>
  );
};

export default Gallery;
