import React from 'react';
import Navigation from '../components/Layout/Navigation/Navigation';
import SideMenu from '../components/Layout/SideMenu/SideMenu';
import { SplitContainer } from '../components/StyledComponents/ContainerStyles';
import Feed from '../components/Layout/Feed/Feed';

const Home = () => (
  <div>
    <Navigation />
    <main>
      <SplitContainer columns={[25, 75]}>
        <SideMenu />
        <Feed />
      </SplitContainer>
    </main>
  </div>
);

export default Home;
