import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Album {
  userId: number;
  id: number;
  title: string;
}

const DataFetcher: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1/albums');
        setAlbums(response.data);
      } catch (error) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4 mt-5">
      <div className="w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Albums</h2>
        {loading && <p className="text-center text-gray-500">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {!loading && !error && (
          <ul className="list-none p-0">
            {albums.map((album) => (
              <li
                key={album.id}
                className=" mb-1 p-2 "
              >
                {album.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DataFetcher;
