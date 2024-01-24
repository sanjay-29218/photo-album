import React, { useEffect, useState } from "react";
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
  }, []);
  console.log("param", id);
  if (!photo) return <>Loading...</>;

  return (
    <div className="h-screen w-full flex justify-center bg-stone-200 p-9">
      <Link
        to={"/"}
        className="absolute top-8 left-5 bg-slate-400 rounded-full p-5"
      >
        <FaArrowLeft size={20} />
      </Link>
      <div>
        <span>
          Title:<span className="text-sm">{photo.title.toUpperCase()}</span>
        </span>
        <img className="w-96" src={photo.url} alt="" />
        <div>ID:{photo.id}</div>
        <div>Album Id:{photo.albumId}</div>
      </div>
    </div>
  );
};

export default About;
