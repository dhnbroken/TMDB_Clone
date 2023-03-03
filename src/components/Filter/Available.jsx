import React, { useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

const Available = () => {
  const [showAllAvailable, setShowAllAvailable] = useState(true);

  const handleChange = (e) => {
    setShowAllAvailable(e.target.checked);
  };
  return (
    <React.Fragment>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked onChange={handleChange} />}
          label="Search all availabilities?"
        />
        <FormControlLabel
          sx={showAllAvailable && { display: 'none' }}
          control={<Checkbox defaultChecked />}
          label="Stream"
        />
        <FormControlLabel
          sx={showAllAvailable && { display: 'none' }}
          control={<Checkbox defaultChecked />}
          label="Free"
        />
        <FormControlLabel
          sx={showAllAvailable && { display: 'none' }}
          control={<Checkbox defaultChecked />}
          label="Ads"
        />
        <FormControlLabel
          sx={showAllAvailable && { display: 'none' }}
          control={<Checkbox defaultChecked />}
          label="Rent"
        />
        <FormControlLabel
          sx={showAllAvailable && { display: 'none' }}
          control={<Checkbox defaultChecked />}
          label="Buy"
        />
      </FormGroup>
    </React.Fragment>
  );
};

export default Available;
