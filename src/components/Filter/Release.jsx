import React, { useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup, Stack, TextField } from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment';

const Release = () => {
  const [showAllReleases, setShowAllReleases] = useState(true);
  const [value, setValue] = React.useState(moment('2014-08-18T21:11:54'));

  const handleChangeTime = (newValue) => {
    setValue(newValue);
  };

  const handleChangeRelease = (e) => {
    setShowAllReleases(e.target.checked);
  };
  return (
    <React.Fragment>
      <FormGroup className="mb-20">
        <FormControlLabel
          control={<Checkbox defaultChecked onChange={handleChangeRelease} />}
          label="Search all releases?"
        />
        <FormControlLabel
          sx={showAllReleases && { display: 'none' }}
          control={<Checkbox defaultChecked />}
          label="
              Search all countries?"
        />
        <FormControlLabel
          sx={showAllReleases && { display: 'none' }}
          control={<Checkbox defaultChecked />}
          label="Premiere"
        />
        <FormControlLabel
          sx={showAllReleases && { display: 'none' }}
          control={<Checkbox defaultChecked />}
          label="Theatrical (limited)"
        />
        <FormControlLabel
          sx={showAllReleases && { display: 'none' }}
          control={<Checkbox defaultChecked />}
          label="Theatrical"
        />
        <FormControlLabel
          sx={showAllReleases && { display: 'none' }}
          control={<Checkbox defaultChecked />}
          label="Digital"
        />
        <FormControlLabel
          sx={showAllReleases && { display: 'none' }}
          control={<Checkbox defaultChecked />}
          label="Physical"
        />
        <FormControlLabel
          sx={showAllReleases && { display: 'none' }}
          control={<Checkbox defaultChecked />}
          label="TV"
        />
      </FormGroup>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Stack spacing={3}>
          <DesktopDatePicker
            label="From"
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleChangeTime}
            renderInput={(params) => <TextField {...params} />}
          />
          <DesktopDatePicker
            label="To"
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleChangeTime}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
    </React.Fragment>
  );
};

export default Release;
