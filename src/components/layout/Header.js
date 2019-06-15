import React from 'react';
import styled from 'styled-components';

import Colors from '../../constants/Colors';

const Wrapper = styled.header`
background: ${Colors.white};
padding: 1rem 1.5rem;
box-shadow: 0 0 3px rgba(0, 0, 0, .1);
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: ${Colors.jaguar};
  padding-bottom: .3rem;
`;

const Subtitle = styled.h2`
  font-size: .9rem;
  font-weight: 100;
  color: ${Colors.mischka};
`;

const Header = () => (
  <Wrapper>
    <Title>Liferay</Title>
    <Subtitle>liferay-portal</Subtitle>
  </Wrapper>
);

export default Header;
