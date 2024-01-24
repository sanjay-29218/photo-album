type Props = {
  photo: {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  };
};

const PhotoCard = ({ photo }: Props) => {
  return (
    <div className="">
      <div className=" w-32 flex justify-center items-center  flex-col">
        <img className="rounded-lg" src={photo.thumbnailUrl} />
        {/* <div>{photo.id}</div> */}
        <div className="text-sm font-thin">{photo.title.toUpperCase()}</div>
      </div>
    </div>
  );
};

export default PhotoCard;
