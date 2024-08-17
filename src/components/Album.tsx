import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const Album = () => {
  const { id } = useParams<{ id: string }>();
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  }, [id]);

  return (
    <div className="block">
      <h1 className="text-center mt-11 mb-5 text-2xl">Фотографії альбому</h1>
      <div className="flex flex-wrap ml-14">
        {photos.map((photo) => (
          <div key={photo.id} className="m-2">
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p className="w-40">{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Album;