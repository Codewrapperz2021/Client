import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import './App.css'
import Path from './Path';

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Path/>       
      </AppContainer>
    </BrowserRouter>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  font-size: calc(1px + 2vmin);
  color: black;
  background-color: #454552;
  text-align: center;
`;

export default App;
