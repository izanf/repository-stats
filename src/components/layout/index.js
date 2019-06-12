import React from 'react';
import { shape } from 'prop-types';
import styled from 'styled-components';

import Colors from '../../constants/Colors';
import Images from '../../assets/images';
import Header from './Header';

const Wrapper = styled.main`
display: flex;
`;

const LeftBar = styled.nav`
display: flex;
justify-content: center;
align-items: flex-start;
width: 80px;
background: ${Colors.blueBell};
`;

const Container = styled.div`
flex: 1;
display: flex;
flex-direction: column;
background: ${Colors.solitude};
`;

const Logo = styled.img`
width: 50px;
/* margin: 0 auto; */
`;

const Layout = ({ children }) => (
  <Wrapper>
    <LeftBar>
      <Logo src={Images.logo} alt="Liferay Portal" />
    </LeftBar>
    <Container>
      <Header />
      {children}
    </Container>
  </Wrapper>
);

Layout.propTypes = {
  children: shape({}).isRequired,
};

export default Layout;
