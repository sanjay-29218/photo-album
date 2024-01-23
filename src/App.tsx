import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { photoAction } from "./store/slice/photoSlice";
import { useSelector } from "react-redux";
import { RootState } from "./store";

function App() {
  const dispatch = useDispatch();

  const photos = useSelector((state: RootState) => state.photo.photos);
  console.log("photos", photos);

  useEffect(() => {
    dispatch(photoAction.getPhoto());
  }, []);

  return (
    <div className="flex flex-wrap gap-7 ">
      {photos.map((photo) => {
        return (
          <>
            <div className="h-72 w-72">
              <img className="" src={photo.url} />
              <span>{photo?.title}</span>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default App;
