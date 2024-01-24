import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  const { id } = useParams();
  const [photo, setPhoto] = useState<{
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  } | null>(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((res) => res.json())
      .then((data) => setPhoto(data));
  }, [id]);
  console.log("param", id);
  if (!photo) return <>Loading...</>;

  return (
    <div className="h-screen w-full flex justify-center bg-stone-200 p-9  pt-20 md:p-9 ">
      <Link
        to={"/"}
        className="absolute top-8 left-5 bg-slate-400 rounded-full p-3 md:p-5"
      >
        <FaArrowLeft className=" w-3 h-3" />
      </Link>
      <div>
        <span className="text-sm font-semibold mb-2">
          {photo.title.toUpperCase()}
        </span>
        <img className="w-96" src={photo.url} alt="" />
        <div>ID:{photo.id}</div>
        <div>Album Id:{photo.albumId}</div>
      </div>
    </div>
  );
};

export default About;
