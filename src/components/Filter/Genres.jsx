import React, { useState, useEffect } from 'react';
import { getGenres } from '../../API/genres';

const Genres = () => {
  const [genres, setGenres] = useState([]);
  const [selected, setSelected] = useState([]);

  const getGenresMovie = async () => {
    try {
      const res = await getGenres();
      setGenres(res);
    } catch (err) {}
  };
  const handleSelected = (genre) => {
    const selectedOption = selected.find((name) => genre.name === name);
    if (!selectedOption) {
      setSelected([...selected, genre.name]);
    } else {
      const removeSelected = selected.filter((name) => genre.name !== name);
      setSelected(removeSelected);
    }
  };
  useEffect(() => {
    getGenresMovie();
  }, []);

  return (
    <ul className="genres_list">
      {genres.length &&
        genres.map((genre, index) => (
          <li
            key={index}
            id={genre.id}
            className={`genres_items ${selected.find((select) => select === genre.name) ? 'selected' : ''}`}
            onClick={() => handleSelected(genre)}
          >
            {genre.name}
          </li>
        ))}
    </ul>
  );
};

export default Genres;
