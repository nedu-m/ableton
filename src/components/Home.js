import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  font-size: '2rem';
  display: 'flex';
  justify-content: center;
  margin-top: '2rem';
`;

const Home = () => {
  return (
    <Wrapper>
    <h1>Home</h1>
    </Wrapper>
  );
};

export default Home;