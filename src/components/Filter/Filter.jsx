import React, { useEffect, useState } from 'react';
import { ArrowDropDown, ArrowRight } from '@mui/icons-material';
import { FormControl, FormControlLabel, FormGroup, Radio, RadioGroup, Stack, TextField } from '@mui/material';
import Release from './Release';
import Available from './Available';
import Genres from './Genres';

const Filter = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="movie_sort movie_card">
      <div className="name" onClick={() => setShow(!show)}>
        <h2>Filters</h2>
        {show ? <ArrowDropDown /> : <ArrowRight />}
      </div>
      <div className={`filter ${!show && 'd-none'}`}>
        <h3>Show me</h3>
        <FormControl>
          <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="1" name="radio-buttons-group">
            <FormControlLabel value="1" control={<Radio />} label="Everything" />
            <FormControlLabel value="2" control={<Radio />} label="Movies I Haven't Seen" />
            <FormControlLabel value="3" control={<Radio />} label="Movies I Have Seen" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className={`filter ${!show && 'd-none'}`}>
        <h3>Availabilities</h3>
        <Available />
      </div>
      <div className={`filter ${!show && 'd-none'}`}>
        <h3>Availabilities</h3>
        <Release />
      </div>
      <div className={`filter ${!show && 'd-none'}`}>
        <h3>Genres</h3>
        <Genres />
      </div>
      <div className={`filter ${!show && 'd-none'}`}>
        <h3>Certifications</h3>
      </div>
      <div className={`filter ${!show && 'd-none'}`}>
        <h3>Language</h3>
      </div>
    </div>
  );
};

export default Filter;
