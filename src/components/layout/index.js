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
padding: 1.5rem 0;
`;

const Container = styled.div`
flex: 1;
display: flex;
flex-direction: column;
background: ${Colors.solitude};
`;

const Figure = styled.figure`
width: 30px;
height: 30px;
background: ${Colors.dodgerBlue};
border-radius: 100%;
`;

const Logo = styled.img`
width: 100%;
height: 100%;
object-fit: contain;
`;

const Layout = ({ children }) => (
  <Wrapper>
    <LeftBar>
      <Figure>
        <Logo src={Images.logo} alt="Liferay Portal" />
      </Figure>
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
