// src/components/ImageUploader.jsx
import React, { useState } from "react";

const ImageUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [data, setData] = useState(null); 

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    
  };

  const uploadImage = async () => {
    if (!selectedFile) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    console.log('데이터 실었음');
    
    try {
      const response = await fetch('/picture/upload', {
        method: "POST",
        body: formData,
      })
      
      console.log('데이터 가져오는 중');
      const data = await (response).json();
      
      setData(data); // data에 결과 저장
      
      console.log('데이터 가져옴'); 
      console.log(data);


    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={uploadImage}>Upload</button>
    </div>
  );
};

export default ImageUploader;