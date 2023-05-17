import { Divider } from '@mui/material'
import React from 'react'
import { useRef } from 'react';

function Description({ dataInfo }) {
  const windowWidth = useRef(window.innerWidth);
  return (
    <div style={{ width: windowWidth.current < 428 ? '100%' : '75%' }}>
      <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '22px' }}>Mô tả</p>
      <Divider />
      <div style={{ margin: '20px 0 40px 0' }}>
        <p>{dataInfo?.description}</p>
        <img style={{ maxWidth: '70%', maxHeight: "300px" }} width={windowWidth.current < 428 ? '100%' : '80%'} src={dataInfo?.subImage1} />
      </div>
      <div style={{ margin: '20px 0 40px 0' }}>
        <p>{dataInfo?.details}</p>
        <img width={windowWidth.current < 428 ? '100%' : '80%'} src={dataInfo?.subImage2} />
      </div>
    </div>
  )
}

export default Description