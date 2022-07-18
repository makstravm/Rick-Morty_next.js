import { FC, ReactNode } from 'react';
import Header from './Header';

const Layout: FC<{ children: ReactNode }> = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
