import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { photoAction } from "./store/slice/photoSlice";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import Navbar from "./components/Navbar";
import PhotoCard from "./components/PhotoCard";
import { Link } from "react-router-dom";
import FakeCard from "./components/FakeCard";

function App() {
  const dispatch = useDispatch();

  const [start, setStart] = useState(0);
  const [limit] = useState(20);
  const [search, setSearch] = useState("");
  const [option, setOption] = useState<string>("");
  let photos = useSelector((state: RootState) => state.photo.photos);

  console.log("album", photos);
  photos = photos?.filter((photo) => photo.title.includes(search));
  const albumOptions = [
    ...new Set(
      photos?.map((photo) => {
        return photo.albumId;
      })
    ),
  ].map((id) => {
    return { label: id, value: id };
  });

  if (option) {
    photos = photos.filter((photo) => photo.albumId === Number(option));
  }

  useEffect(() => {
    dispatch(photoAction.getPhoto({ start, limit }));
  }, [limit, start, dispatch]);
  if (!photos)
    return (
      <>
        <Navbar
          albumOptions={albumOptions}
          search={search}
          setSearch={setSearch}
          option={option}
          setOption={setOption}
        />
        <div className="flex flex-wrap gap-20 p-5 ">
          {Array.from({ length: 20 }, (_, idx) => (
            <FakeCard key={idx} />
          ))}
        </div>
      </>
    );
  return (
    <>
      <Navbar
        albumOptions={albumOptions}
        search={search}
        setSearch={setSearch}
        option={option}
        setOption={setOption}
      />
      <div className="flex flex-col p-7">
        <div className="flex flex-wrap gap-20 p-5 ">
          {photos.map((photo) => (
            <Link to={`/about/${photo.id}`}>
              {" "}
              <PhotoCard photo={photo} />
            </Link>
          ))}
        </div>
        {!search && (
          <div className="flex justify-end gap-4">
            <button
              onClick={() => {
                setStart((prev) => (prev !== 0 ? prev - 20 : prev));
              }}
              className="bg-gray-300 p-3"
            >
              Prev
            </button>
            <button
              onClick={() => {
                setStart((prev) => prev + 20);
              }}
              className="bg-gray-300 p-3"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
