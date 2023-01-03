import React  from 'react';
import UploadImage from './pages/uploadImage.jsx'
import ActionsBar from "./components/actionsBar.jsx";
import Images from './pages/images.jsx'
import { ImageContextProvider } from './context/imageContext';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  background-color: #B0C8D7;
`; 

function App() {
  return (
    <Wrapper>
    <React.StrictMode>
      <ImageContextProvider>
        <UploadImage />
        <ActionsBar />
        <Images />
      </ImageContextProvider>
    </React.StrictMode>
  </Wrapper>
  );
}

export default App;
