import { Box } from '@mui/material';

const Separator = () => {
  return (
    <Box
      sx={{
        my: '2rem',
        boxSizing: 'border-box',
        minWidth: 'auto',
        borderTopStyle: 'solid',
        borderTopColor: 'transparent',
        borderTopWidth: '2px',
        height: '0px',
      }}
    ></Box>
  );
};

export default Separator;
