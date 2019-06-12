import React from 'react';
import styled from 'styled-components';

import Colors from '../../constants/Colors';

const Wrapper = styled.header`
background: ${Colors.white};
padding: 1rem 1.5rem;
box-shadow: 0 0 3px rgba(0, 0, 0, .1);
`;

const Title = styled.h2`
  color: ${Colors.jaguar};
`;

const Subtitle = styled.h3`
  color: ${Colors.mischka};
`;

const Header = () => (
  <Wrapper>
    <Title>Liferay</Title>
    <Subtitle>liferay-portal</Subtitle>
  </Wrapper>
);

export default Header;
