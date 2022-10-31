import { ReactNode } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
} from '@mui/material';

type IDropDown = {
  value: string;
  onChange:
    | ((event: SelectChangeEvent<string>, child: ReactNode) => void)
    | undefined;
  label: string;
  children?: ReactNode;
};

const Dropdown = ({ value, onChange, label, children }: IDropDown) => {
  return (
    <FormControl sx={{ minWidth: 200 }}>
      <InputLabel>{label}</InputLabel>
      <Select value={value} label={label} onChange={onChange}>
        {children}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
