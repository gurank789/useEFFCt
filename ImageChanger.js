import React, { useState, useRef, useEffect } from 'react';
import './ImageChanger.css'

const images = [
  'https://picsum.photos/id/1000/300/300',
  'https://picsum.photos/id/1001/300/300',
  'https://picsum.photos/id/1002/300/300'
];

function ImageChanger() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imgRef = useRef();

  useEffect(() => {
    imgRef.current.src = images[currentImageIndex];
  }, [currentImageIndex]);

  const handleClick = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  return (
    <div className="container">
      <img ref={imgRef} src={images[currentImageIndex]} alt="Image" />
      <button onClick={handleClick}>Change Image</button>
    </div>
  );
}

export default ImageChanger;