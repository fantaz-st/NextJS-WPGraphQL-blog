import { Box } from '@mui/material';

const Layout = ({ children }) => {
  return <Box sx={{ maxWidth: '1140px', margin: '0 auto', flex: '1', padding: '0' }}>{children}</Box>;
};

export default Layout;
