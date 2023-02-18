import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Stack, TextField } from '@pankod/refine-mui';

export default function MaterialUIPickers() {
    const [value, setValue] = React.useState<Dayjs | null>(
      dayjs('2014-08-18T21:11:54'),
    );
  
    const handleChange = (newValue: Dayjs | null) => {
      setValue(newValue);
    };


  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
        <DesktopDatePicker
          label="Next deadline"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
    </LocalizationProvider>
  );
}