import React, {useState, userRef} from "react"; 
import './Test_Service.css';
import BlurImage from "../BlurImage";

function Test_Service() {

    const saveAsPNG = () => {
        const download = document.getElementById("download");
        const image = document.getElementById("myCanvas")
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        download.setAttribute("href", image);
        download.setAttribute("download","image-name.png");
    }
    

    return (
        
        <div className="service-container">
            <div className="editor-conatiner">
            <BlurImage
                src='https://d2v80xjmx68n4w.cloudfront.net/gigs/6g3bn1666952643.jpg'
                
                regions={
                [
                { x: 520, y: 241, width: 150, height: 150,      status: true },
                { x: 1230, y: 313, width: 150, height: 150,         status: true },
                { x: 1225, y: 845, width: 140, height: 200,         status: true },
                { x: 1400, y: 236, width: 200, height: 200,         status: true }, 
                { x: 1400, y: 519, width: 200, height: 200,         status: true }, 
            ]
        }
    />
    <button type='button'>
        이미지 업로드
    </button>
    <a id="download">
      <button type='button' onClick={saveAsPNG}>Download</button>
    </a>
                
            </div>
    </div>
    ) 
}

export default Test_Service; 