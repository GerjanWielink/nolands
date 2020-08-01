import React from 'react';
import styled, { keyframes } from 'styled-components';

const change = keyframes`
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100%{
    background-position: 0 50%;
  }
`

const Background = styled.div`
  display: grid;
  //grid-template-rows: 20% 80% 20%;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(-45deg, #EE7752, #ea16c8, #23A6D5, #23D5AB);
  overflow-y: scroll;
  background-size: 400% 400%;
  animation: ${change} 10s ease-in-out infinite;
`

export { Background }
