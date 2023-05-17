import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Col, Row } from 'react-bootstrap';
import { Divider } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { useNavigate } from 'react-router-dom';
import './style.css';
import Button from 'react-bootstrap/Button';
import AddIcon from '@mui/icons-material/Add';
import Container from 'react-bootstrap/Container';
import FormModal from './FormModal';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
function Main(props) {
  const { handleOpenModal, productList, handleOpenEditModal, handleDelete, handleChangeFilters,
    handleChangeCategory
  } = props;
  const navigate = useNavigate();

  return (
    <div>
      <div className='background-primary-light b-gray d-flex justify-content-around align-items-center' style={{ paddingTop: '10px' }}>
        <div className='box-background d-flex justify-content-center align-items-center flex-column' onClick={() => handleChangeCategory('All')}>
          <img src='https://bizweb.dktcdn.net/100/369/704/themes/741072/assets/image_ab_1.png?1677115735837' />
          <p className='product-text-category' style={{ color: 'white' }} >Tất cả</p>
        </div>
        <div className='box-background d-flex justify-content-center align-items-center flex-column' onClick={() => handleChangeCategory('Ghế bành')}>
          <img src='https://bizweb.dktcdn.net/100/369/704/themes/741072/assets/image_ab_3.png?1677115735837' />
          <p className='product-text-category' style={{ color: 'white' }} >Ghế bành</p>
        </div>
        <div className='box-background d-flex justify-content-center align-items-center flex-column' onClick={() => handleChangeCategory('Văn phòng')}>
          <img src='https://bizweb.dktcdn.net/100/369/704/themes/741072/assets/image_ab_2.png?1677115735837' />
          <p className='product-text-category' style={{ color: 'white' }} >Văn phòng</p>
        </div>
        <div className='box-background d-flex justify-content-center align-items-center flex-column' onClick={() => handleChangeCategory('Kệ tủ')}>
          <img src='https://bizweb.dktcdn.net/100/369/704/themes/741072/assets/image_ab_4.png?1677115735837' />
          <p className='product-text-category' style={{ color: 'white' }} >Kệ tủ</p>
        </div>
        <div className='box-background d-flex justify-content-center align-items-center flex-column' onClick={() => handleChangeCategory('Phòng ngủ')}>
          <img src='https://bizweb.dktcdn.net/100/369/704/themes/741072/assets/image_ab_1.png?1677115735837' />
          <p className='product-text-category' style={{ color: 'white' }} >Phòng ngủ</p>
        </div>
      </div>
      <p style={{ fontWeight: 'bold', fontSize: '25px', textAlign: 'center', margin: '20px 0' }}>TẤT CẢ SẢN PHẨM</p>
      <Container>
        <Row>
          <Col lg={10}>
            <div className='d-flex align-items-center'>

              <span className='product-text-category' style={{ paddingRight: '10px' }}>Xếp theo</span>
              <FormControl>
                <RadioGroup
                  defaultValue={1}
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  row
                  onChange={(event) => handleChangeFilters(+event.target.value)}
                >
                  <FormControlLabel value="1" control={<Radio />} label="Mặc định" />
                  <FormControlLabel value="2" control={<Radio />} label="Tên A-Z" />
                  <FormControlLabel value="3" control={<Radio />} label="Tên Z-A" />
                  <FormControlLabel value="4" control={<Radio />} label="Giá thấp đến cao" />
                  <FormControlLabel value="5" control={<Radio />} label="Giá cao đến thấp" />
                </RadioGroup>
              </FormControl>
            </div>
          </Col>
          <Col lg={2} style={{ textAlign: 'right' }}>
            <Button onClick={handleOpenModal} className="btn-primary" variant="outline-primary">
              <AddIcon />
            </Button>
          </Col>
        </Row>
      </Container>

      <Divider sx={{ margin: '20px 0' }} />
      <Container>
        <Row style={{ marginBottom: '25px' }}>
          {productList.map((data, index) => {
            return (
              <Col lg='4' className='product-1' key={index}>
                <div className="item mx-2 box-background mt-2" >
                  <div class='carousel-product-card'>
                    <img src={data.image} alt='#' onClick={() => navigate(`/product/detail/${data?._id}`)} />
                    <p>{data.productName}</p>
                    <span className="color-green">{data.price}đ</span>
                  </div>
                  <div className="d-flex justify-content-around pb-3">
                    <Button onClick={() => handleOpenEditModal(data?._id)}><EditIcon /></Button>
                    <Button onClick={() => handleDelete(data?._id)}><DeleteIcon /></Button>
                  </div>
                </div>
              </Col>
            )
          })}
        </Row>

      </Container>
      {/* <div className='d-flex justify-content-center align-items-center mb-5'>
        <Pagination count={10} variant="outlined" shape="rounded" />
      </div> */}
    </div >
  )
}

export default Main