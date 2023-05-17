import { Divider, Stack } from '@mui/material'
import React from 'react'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductInCategory({ listRelated }) {
  const windowWidth = useRef(window.innerWidth);
  const navigate = useNavigate();

  return (
    <div>
      <p style={{ fontWeight: 'bold' }}>SẢN PHẨM CÙNG LOẠI</p>
      <Divider />
      <Stack direction={'column'} gap={2} sx={{ padding: windowWidth.current < 428 ? '0 25px' : '0' }}>
        {listRelated.map((item, index) => (
          <div key={index} className='product-in-category d-flex  align-items-center' style={{ padding: '7px' }}>
            <img width={'80px'} src={item?.image} alt='#' />
            <div style={{ marginLeft: '30px' }}>
              <p style={{ margin: '10px 0', fontWeight: 500 }} onClick={() => navigate(`/product/detail/${item?._id}`)}>{item?.productName}</p>
              <p style={{ margin: '10px 0', fontWeight: 'bold', color: '#106F85' }}>{item?.price}₫</p>
            </div>
          </div>
        ))}

      </Stack>
    </div>
  )
}

export default ProductInCategory;