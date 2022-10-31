import { Button } from '@mui/material';

type IButtonProps = {
  text: string;
  onClick?: VoidFunction;
};

const ButtonNext = ({ text, onClick }: IButtonProps) => {
  return (
    <Button
      sx={(theme) => ({
        backgroundColor: theme.palette.primary.dark,
        minWidth: '5rem',
        minHeight: '3rem',
        '&:hover': {
          background: theme.palette.primary.light,
        },
      })}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default ButtonNext;
