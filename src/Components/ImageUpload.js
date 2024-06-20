// src/components/ImageUpload.js
import React from 'react';
import { useDropzone } from 'react-dropzone';

const ImageUpload = ({ onImageUpload }) => {
  const handleDrop = (acceptedFiles, name) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      onImageUpload(reader.result, name);
    };
    reader.readAsDataURL(file);
  };

  const { getRootProps: getDressRootProps, getInputProps: getDressInputProps } = useDropzone({
    onDrop: (files) => handleDrop(files, 'dressImage'),
    accept: 'image/*',
  });

  const { getRootProps: getFabricRootProps, getInputProps: getFabricInputProps } = useDropzone({
    onDrop: (files) => handleDrop(files, 'fabricImage'),
    accept: 'image/*',
  });

  return (
    <div className="image-upload">
      <div {...getDressRootProps({ className: 'dropzone' })}>
        <input {...getDressInputProps()} />
        <p>Drag & drop the dress image here, or click to select a file</p>
      </div>
      <div {...getFabricRootProps({ className: 'dropzone' })}>
        <input {...getFabricInputProps()} />
        <p>Drag & drop the fabric image here, or click to select a file</p>
      </div>
    </div>
  );
};

export default ImageUpload;
