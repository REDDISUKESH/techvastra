// src/App.js
import React, { useState } from 'react';
import ImageUpload from './Components/ImageUpload';
import ImagePreview from './Components/ImagePreview';
import FabricApplication from './Components/FabricApplication';
import './App.css';

const App = () => {
  const [dressImage, setDressImage] = useState(null);
  const [fabricImage, setFabricImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);

  const handleImageUpload = (image, name) => {
    const imgObject = {
      url: image,
      width: null,
      height: null,
    };

    if (name === 'dressImage') {
      setDressImage(imgObject);
    } else if (name === 'fabricImage') {
      setFabricImage(imgObject);
    }
  };

  return (
    <div className="App">
      <h1>Dress Fabric Visualizer</h1>
      <ImageUpload onImageUpload={handleImageUpload} />
      <ImagePreview dressImage={dressImage ? dressImage.url : null} fabricImage={fabricImage ? fabricImage.url : null} resultImage={resultImage} />
      {dressImage && fabricImage && (
        <FabricApplication dressImage={dressImage} fabricImage={fabricImage} onResult={setResultImage} />
      )}
    </div>
  );
};

export default App;
