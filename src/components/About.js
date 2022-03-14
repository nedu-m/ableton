import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  font-size: '2rem';
  display: 'flex';
  justify-content: center;
  margin-top: '2rem';
`;

const About = () => {
  return (
    <Wrapper>
    <h1>About</h1>
    </Wrapper>
  );
};

export default About;