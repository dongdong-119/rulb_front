import React, {useState, useRef} from "react"; 
import './Test_Service.css';
import BlurImage from "../BlurImage";

function Test_Service() {

    const[selectedFile, setSelectedFile] = useState(null); 
    const [editorFileImg, setEditorImg] = useState(null); 
    const [data, setData] = useState(null);

    const fileInputRef = useRef(null);
    const editorFileRef = useRef(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]); 

    }

    // 이미지 업로드 -> 파일 없으면 alert 
    // 비동기 시작
    const uploadImage = async () => {
        
        if(!selectedFile) {
            alert("Please select a file to upload."); 
            return; 
        }

    const formData = new FormData(); 
    formData.append('image', selectedFile);

    console.log('데이터 실었음.');

    try {
        const response = await fetch('/picture/upload', {
          method: "POST",
          body: formData,
        })
        
        const data = await (response).json();
        
        setData(data); // data에 결과 저장 

      } catch (error) {
        console.error("Error:", error);
      }
    
      // 비동기 처리 끝나고 데이터 가져오면 -> editor에 이미지 세팅
      console.log(selectedFile); 
      setEditorImg(selectedFile); 

      console.log('데이터', data); 
    };
    
    
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
                    URL.createObjectURL(editorFileImg) : 'https://img.gqkorea.co.kr/gq/2022/10/style_634e7c680d723.jpg'}
                    
                    // 서버에서 받아온 데이터 전달
                    // 들어가 있는 regions데이터는 예시
                    regions={data}
                    /> {/* BlurImage 끝*/}
                </div>

                <div className="buttons">
                    <label for='file-input'>
                        <div className="file-input">파일 선택하기</div>
                    </label>
                    <input
                        type='file'
                        className='file-input'
                        id='file-input'
                        accept='image/*'
                        // hidden
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        />
                        
                    <button
                        className="choose-img btn-upload"
                        onClick={uploadImage}>업로드</button>
                
                    <a id="download">
                      <button type='button' className="btn-download" onClick={saveAsPNG}>다운로드</button>
                    </a>
                </div>
            </div>
        </div> // service-container 끝
    ) 
}

export default Test_Service;