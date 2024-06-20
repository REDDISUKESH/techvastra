import React, { useEffect } from 'react';
import { fabric } from 'fabric';

const FabricApplication = ({ dressImage, fabricImage, onResult }) => {
  useEffect(() => {
    if (dressImage && fabricImage) {
      const canvas = new fabric.Canvas('resultCanvas', {
        width: 600,
        height: 800,
      });

      fabric.Image.fromURL(dressImage.url, (dressImg) => {
        dressImg.scaleToWidth(canvas.width);
        dressImg.scaleToHeight(canvas.height);
        canvas.add(dressImg);

        fabric.Image.fromURL(fabricImage.url, (fabricImg) => {
          fabricImg.scaleToWidth(canvas.width);
          fabricImg.scaleToHeight(canvas.height);
          fabricImg.set({
            opacity: 0.5, // Adjust opacity for better clarity
            top: 0,
            left: 0,
          });
          canvas.add(fabricImg);
          canvas.renderAll();

          // Convert canvas to base64 image and pass to parent component
          onResult(canvas.toDataURL('image/png'));
        });
      });
    }
  }, [dressImage, fabricImage, onResult]);

  return <canvas id="resultCanvas" style={{ display: 'none' }} />;
};

export default FabricApplication;
