import { useState, useEffect } from "react";

const useMediaQuery = query => {
  const [matches, setMatches] = useState(false);

  const listener = media => {
    setMatches(media.matches);
  };

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    media.addListener(listener(media));

    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
