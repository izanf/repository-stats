import React from 'react';
import { shape } from 'prop-types';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

import Colors from '../../constants/Colors';

const Wrapper = styled.p`
font-size: 3rem;
text-align: center;
padding: 3rem 0;
`;

const DateFormated = ({ data }) => {
  console.log(data);
  if (!data) {
    return (
      <Wrapper>
        <CircularProgress color={Colors.dodgerBlue} />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {`${data.days}day ${data.hours}h${data.minutes}min`}
    </Wrapper>
  );
};

DateFormated.propTypes = {
  data: shape({}).isRequired,
};

export default DateFormated;
