// src/components/FetchData.jsx

import React, { useState, useEffect } from "react";

const FetchData = () => {
  const [data, setData] = useState(null);
  const [otherData, setOtherData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
        
      const response = await fetch("/picture/upload");
      
      const jsonData = await response.json();
      
      setData(jsonData);
      
      // 가져온 데이터를 otherData 변수에 저장합니다.
      setOtherData(jsonData);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      {/* 출력하지 않고 저장만 합니다. */}
    </div>
  );
};

export default FetchData;