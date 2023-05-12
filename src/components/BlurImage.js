import React, { useEffect, useRef } from 'react';

function BlurImage({src, regions}) {
  const canvasRef = useRef(null);
  
  const points = (!regions) ? []:regions; 
  
  const image = new Image();
  image.src = src; 
  image.crossOrigin = 'anonymous';

  useEffect(() => {

    image.onload = () => {
      
      // 이미지 그림(initial) 
      const canvas = canvasRef.current;
      canvas.width = image.width;
      canvas.height = image.height;
      const context = canvas.getContext('2d');
      context.drawImage(image, 0, 0);
      
      // initial blur
      points.forEach((point) => {
        const blurRadius = 9;
        const { x, y, width, height, status } = point;
        if (status) {
          context.filter = `blur(${blurRadius}px)`;
          context.drawImage(canvas, x, y, width, height, x, y, width, height);  
        }
      })

      console.log('초기 블러 완료')
      
      // remove blur on click
      canvas.addEventListener('click', (e) => {
        const x = e.offsetX;
        const y = e.offsetY;

        console.log(x, y); 

        points.forEach((point) => {
          const { x: px, y: py, width, height, status } = point;

          // blur box 안에 클릭 이벤트 들어오면
          if (x > px && x < px + width && y > py && y < py + height) {
            point.status = (status)? false: true;
            redrawCanvas(); 
          }
        })
      });
    }; 

  function redrawCanvas() {
    
    const image = new Image();
    image.src = src; 
    image.crossOrigin = 'anonymous';
    
    image.onload = () => {
      const canvas = canvasRef.current;
      canvas.width = image.width;
      canvas.height = image.height;
      const context = canvas.getContext('2d');
      context.drawImage(image, 0, 0);

      // 블러처리
      points.forEach((point) => {
        const blurRadius = 9;
        const { x, y, width, height, status } = point;
        
        // status -> true일 때에만 blur 처리함 
        if (status) {
          context.filter = `blur(${blurRadius}px)`;
          context.drawImage(canvas, x, y, width, height, x, y, width, height);  
        }
      }) 
    }
  }
  }, [src]);

  return <canvas
          ref={canvasRef} 
          id='myCanvas'
          />;
}

export default BlurImage;