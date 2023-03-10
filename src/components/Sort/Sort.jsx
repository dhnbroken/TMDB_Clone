import React, { useContext, useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { ArrowDropDown, ArrowRight } from '@mui/icons-material';
import { GlobalContext } from '../../Context/GlobalContext';

const Sort = () => {
  const [show, setShow] = useState(true);
  const { movies, setMovies, tvPopular, setTVPopular } = useContext(GlobalContext);
  const [sortSelection, setSortSelection] = React.useState('1');

  const handleChange = (event) => {
    setSortSelection(event.target.value);
    const newMovies = [...movies];
    const newTVPopular = [...tvPopular];
    switch (event.target.value) {
      case 1:
        setMovies(newMovies.sort((min, max) => max.popularity - min.popularity));
        setTVPopular(newTVPopular.sort((min, max) => max.popularity - min.popularity));
        break;
      case 2:
        setMovies(newMovies.sort((min, max) => min.popularity - max.popularity));
        setTVPopular(newTVPopular.sort((min, max) => min.popularity - max.popularity));
        break;
      case 3:
        setMovies(newMovies.sort((min, max) => max.vote_average - min.vote_average));
        setTVPopular(newTVPopular.sort((min, max) => max.vote_average - min.vote_average));
        break;
      case 4:
        setMovies(newMovies.sort((min, max) => min.vote_average - max.vote_average));
        setTVPopular(newTVPopular.sort((min, max) => min.vote_average - max.vote_average));
        break;
      case 5:
        setMovies(newMovies.sort((min, max) => new Date(max.release_date) - new Date(min.release_date)));
        setTVPopular(newTVPopular.sort((min, max) => new Date(max.first_air_date) - new Date(min.first_air_date)));
        break;
      case 6:
        setMovies(newMovies.sort((min, max) => new Date(min.release_date) - new Date(max.release_date)));
        setTVPopular(newTVPopular.sort((min, max) => new Date(min.first_air_date) - new Date(max.first_air_date)));
        break;
      case 7:
        setMovies(newMovies.sort((min, max) => min.title.localeCompare(max.title)));
        setTVPopular(newTVPopular.sort((min, max) => min.name.localeCompare(max.name)));
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="movie_sort movie_card">
        <div className="name" onClick={() => setShow(!show)}>
          <h2>Sort</h2>
          {show ? <ArrowDropDown /> : <ArrowRight />}
        </div>
        <div className={`filter ${!show && 'd-none'}`}>
          <h3>Sort Results By</h3>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <Select id="demo-simple-select" value={sortSelection} onChange={handleChange}>
                <MenuItem value={1}>Popularity Descending</MenuItem>
                <MenuItem value={2}>Popularity Ascending</MenuItem>
                <MenuItem value={3}>Rating Descending</MenuItem>
                <MenuItem value={4}>Rating Ascending</MenuItem>
                <MenuItem value={5}>Release Date Descending</MenuItem>
                <MenuItem value={6}>Release Date Ascending</MenuItem>
                <MenuItem value={7}>Title (A-Z)</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Sort;
