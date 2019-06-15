import React from 'react';
import { string, shape } from 'prop-types';
import styled from 'styled-components';

import Colors from '../../../../constants/Colors';

const Wrapper = styled.div`
background: ${Colors.white};
box-shadow: 1px 1px 3px rgba(0, 0, 0, .1);
border-radius: .3rem;
`;

const Title = styled.h3`
font-size: .9rem;
font-weight: 100;
padding: 1rem 1.5rem;
border-bottom: 1px solid #EEE;
`;

const Content = styled.div`
padding: 1rem 1.5rem;
`;

const Card = ({ title, children }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Content>
      {children}
    </Content>
  </Wrapper>
);

Card.propTypes = {
  title: string.isRequired,
  children: shape({}).isRequired,
};

export default Card;
