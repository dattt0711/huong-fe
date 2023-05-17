import React, { useState, useEffect } from 'react';
import ReactImageZoom from 'react-image-zoom';
import '../detailProduct.style.css';
import { useRef } from 'react';

function ImageInfo(prop) {
  const { dataInfo } = prop;
  const windowWidth = useRef(window.innerWidth);
  const [imgShow, setImgShow] = useState(dataInfo?.image)
  useEffect(() => {
    setImgShow(dataInfo?.image);
  }, [dataInfo])
  const props = { width: 400, height: 300, zoomLensStyle: 'border: 1px solid gray; opacity: 0.5; background-color: white', zoomStyle: 'border: 3px solid gray', img: imgShow };
  return (
    <div style={{ zIndex: '200', marginRight: windowWidth.current < 428 ? 0 : '20px' }}>
      {windowWidth.current < 428 ? <img style={{ width: '100%' }} src={imgShow} alt='#' /> : <ReactImageZoom {...props} className='react-image-zoom' />}
      <div className='d-flex justify-content-center align-items-center' style={{ marginTop: '25px', marginBottom: windowWidth.current < 428 ? '20px' : '0' }}>
        <img onClick={() => setImgShow(dataInfo?.subImage1)} style={{ width: '80px', height: '70px', border: '1px solid gray' }} src={dataInfo?.subImage1} alt='#' />
        <img onClick={() => setImgShow(dataInfo?.subImage2)} style={{ width: '80px', height: '70px', border: '1px solid gray', margin: '0 20px' }} src={dataInfo?.subImage2} alt='#' />
        <img onClick={() => setImgShow(dataInfo?.subImage3)} style={{ width: '80px', height: '70px', border: '1px solid gray' }} src={dataInfo?.subImage3} alt='#' />
      </div>
    </div>
  )
}

export default ImageInfo