import React, {useState, useRef} from "react"; 
import './Test_Service.css';
import BlurImage from "../BlurImage";

function Test_Service() {

    const [editorFileImg, setEditorImg] = useState(null); 

    const fileInputRef = useRef(null);
    const editorFileRef = useRef(null);
    
    // 이미지 로드 하면서 비동기 처리 필요
    const loadImage = (event) => {
        const file = event.target.files[0];
        
        if(!file) return;

        console.log(file); 
        setEditorImg(file); 
    }
    
    

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
            <div className="title">
                <h1>RULB 서비스 이용하기</h1>
                <h3>원하는 사진을 업로드 후 이용해주세요.</h3>
                <h5>* 업로드된 사진은 서버에 저장되지 않습니다.</h5>
            </div>
            <div className="editor">
                <div className="image-wrapper">

                    <BlurImage
                    src={editorFileImg ? 
                    URL.createObjectURL(editorFileImg) : 'https://d2v80xjmx68n4w.cloudfront.net/gigs/6g3bn1666952643.jpg'}
                
                    // 서버에서 받아온 데이터 전달
                    // 들어가 있는 regions데이터는 예시
                    regions={[
                    { x: 520, y: 241, width: 150,   height: 150,      status: true },
                    { x: 1000, y: 241, width: 150,   height: 150,      status: true },]}
                    /> {/* BlurImage 끝*/}
                </div>

                <div className="buttons">
                    <input
                        type='file'
                        className='file-input'
                        accept='image/*'
                        hidden
                        ref={fileInputRef}
                        onChange={loadImage} />
                    <button
                        className="choose-img btn-upload"
                        onClick={() => fileInputRef.current.click()}>사진 선택</button>
                
                    <a id="download">
                      <button type='button' className="btn-download" onClick={saveAsPNG}>Download</button>
                    </a>
                </div>
    
                
            </div>
        </div> // service-container 끝
    ) 
}

export default Test_Service; 