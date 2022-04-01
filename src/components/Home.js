import React from 'react'
import styled from 'styled-components'
import '../styles/homepage.css'

const ImageWrapper = styled.div`
  margin-top: 1.6rem;
  margin-left: 8.33333vw;
  margin-right: 8.33333vw;
  margin-bottom: 8.33333vw;
  position: relative;
  min-height: calc(100vh - 120px);
`;

const Home = () => {
  return (
    <ImageWrapper>
      <div className='bg-image'>
        <svg className='bg-name' viewBox='0 0 430 104'>
          <h1>Ableton</h1>
          <g fill='#FD5948'>
          </g>
        </svg>
      </div>
    </ImageWrapper>
  );
};
  
export default Home;