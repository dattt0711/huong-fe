import { Button, Divider } from '@mui/material';
import React from 'react'
import { useState } from 'react';

function DetailInfo({ dataInfo }) {
  return (
    <div className='detail-product-detail-info box-background d-flex flex-column justify-content-center'>
      <p style={{ fontWeight: 'bold', fontSize: '22px' }}>{dataInfo?.productName}</p>
      <div className='d-flex justify-content-between align-items-center'>
        <span>Loại: <b style={{ color: '#106F85' }}>{dataInfo?.category}</b></span>
      </div>
      <p className="mt-2">{dataInfo?.description}</p>

      <Divider sx={{ margin: '15px 0' }} />
      <p>Gọi điện để được tư vấn: <span style={{ color: '#106F85', fontWeight: 'bold', fontSize: '18px' }}>0123456789</span></p>
    </div>
  )
}

export default DetailInfo