import React from 'react';

const ImagePreview = ({ dressImage, fabricImage, resultImage }) => {
  return (
    <div>
      <div className="image-preview">
        <div>
          <h3>Dress Image</h3>
          {dressImage && <img src={dressImage} alt="Dress" />}
        </div>
        <div>
          <h3>Fabric Image</h3>
          {fabricImage && <img src={fabricImage} alt="Fabric" />}
        </div>
      </div>
      <div className="result-image-container">
        <div>
          <h3>Result Image</h3>
          {resultImage && <img src={resultImage} alt="Result" />}
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;
