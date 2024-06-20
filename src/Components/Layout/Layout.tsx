import React, { ReactNode } from 'react';
import Header from '../Header/Header';
import { Box } from '@chakra-ui/react';

interface LayoutProps {
  children?: ReactNode; 
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box>
      <Header />
      <main>{children}</main>
    </Box>
  );
};

export default Layout;
