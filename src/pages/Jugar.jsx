import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import ClipLoader from "react-spinners/ClipLoader";

const Jugar = ({
  mobil,
  Unity,
  unityProvider,
  requestFullscreen,
  isLoaded,
  unload,
}) => {
  const navigate = useNavigate();
  const handlers = useSwipeable({
    onSwipedUp: async () => {
      if (isLoaded) {
        requestFullscreen(false);
        await unload();
        navigate("/juego");
      }
    },
    onTap: () => {
      if (isLoaded) {
        requestFullscreen(true);
      }
    },
    delta: 20,
  });

  useEffect(() => {
    if (!mobil) {
      navigate("/juego");
    }
  }, []);

  return (
    <>
      <ClipLoader
        className="override"
        loading={!isLoaded}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <Unity
        className="game"
        style={{
          width: "100%",
          height: "100vh",
        }}
        unityProvider={unityProvider}
        {...handlers}
      />
    </>
  );
};

export default Jugar;
