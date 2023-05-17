import React from 'react'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import './detailNews.style.css';
import Footer from '../Home/components/Footer';
import MenuList from '../Product/components/MenuList';
function DetailNews() {

  const [data, setData] = useState([
    {
      image: 'http://giadinh.mediacdn.vn/thumb_w/640/2019/5/30/photo-0-1559208378566487495024.jpg',
      description: 'Ghế sofa khung gỗ khiến bạn cảm giác như đang gần chạm tay vào màu nước biển của khu vực nhiệt đới.',
    },
    {
      image: 'http://giadinh.mediacdn.vn/thumb_w/640/2019/5/30/photo-1-15592083785681082841614.jpg',
      description: 'Về mặt phong thủy nội thất màu xanh ngọc giúp bạn lấy lại sự điềm tĩnh, cân bằng và sự hạnh phúc.',
    },
    {
      image: 'http://giadinh.mediacdn.vn/thumb_w/640/2019/5/30/photo-2-15592083785702011291847.jpg',
      description: 'Tivi treo tường, bàn tam giác lồng vào nhau giúp tiết kiệm diện tích.',
    },
    {
      image: 'http://giadinh.mediacdn.vn/thumb_w/640/2019/5/30/photo-3-15592083785731183018504.jpg',
      description: 'Ghế ăn điểm nhẹ màu xanh ngọc xen lẫn với màu trắng.',
    },
    {
      image: 'http://giadinh.mediacdn.vn/thumb_w/640/2019/5/30/photo-4-15592083785741884749146.jpg',
      description: 'Gạch lát sàn có hoa văn đánh dấu khu vực lối vào.',
    },
    {
      image: 'http://giadinh.mediacdn.vn/thumb_w/640/2019/5/30/photo-5-1559208378577975278243.jpg',
      description: 'Bếp mang phong cách scandinavian càng hoàn hảo hơn khi có sự góp mặt của tủ tường màu xanh ngọc lam.',
    },
    {
      image: 'http://giadinh.mediacdn.vn/thumb_w/640/2019/5/30/photo-6-15592083785791917568365.jpg',
      description: 'Sàn và tường màu trắng khiến nội thất màu xanh ngọc càng trở nên trong trẻo, đẹp mắt.',
    },
    {
      image: 'http://giadinh.mediacdn.vn/thumb_w/640/2019/5/30/photo-7-1559208378580995540528.jpg',
      description: 'Đệm sofa màu xanh làm điểm nhấn trong phòng ngủ.',
    },
    {
      image: 'http://giadinh.mediacdn.vn/thumb_w/640/2019/5/30/photo-10-155920837858778247767.jpg',
      description: 'Bàn đặt gần cửa sổ nên căn phòng rất ít khi phải dùng đèn, xe đạp treo tường trở thành tác phẩm trang trí.',
    },
  ])

  return (
    <div className='detail-news'>
      <Container>
        <Row>
          <Col lg='8'>
            <p style={{ fontWeight: 'bold', fontSize: '20px' }}>Xua tan nắng nóng với nội thất màu xanh ngọc</p>
            <p>Ngày đăng: 15/11/2019</p>
            <p style={{ fontWeight: 'bold', fontSize: '22px' }}>Điểm xuyết nội thất màu xanh ngọc sẽ giúp các thành viên cảm thấy thoải mái mỗi khi trở về, bỏ quên cái nắng như đổ lửa sau cánh cửa.</p>
            {
              data?.map((ele) => (
                <div>
                  <div>
                    <img style={{ width: '90%', height: 'auto' }} src={ele.image} />
                  </div>
                  <p style={{ margin: '20px 0' }}>{ele.description}</p>
                </div>
              ))
            }
          </Col>
          <Col lg='3'>
            <MenuList />
            <div style={{ border: '1px solid lightgray', borderTop: 'none', marginBottom: '30px' }} className='product-filter-price'>
              <p className='b-gray' style={{ padding: '10px 20px', fontWeight: 'bold', color: 'white' }}>TIN LIÊN QUAN</p>
              <div>
                <div style={{ margin: '15px 0 15px 15px', display: 'flex', alignItems: 'center' }}>
                  <span>&nbsp;Xu hướng nội thất mây</span>
                </div>
                <hr/>
                <div style={{ margin: '15px 0 15px 15px', display: 'flex', alignItems: 'center' }}>
                  <span>&nbsp;Xua tan nắng nóng với nội thất màu xanh ngọc</span>
                </div>
                <hr/>
                <div style={{ margin: '15px 0 15px 15px', display: 'flex', alignItems: 'center' }}>
                  <span>&nbsp;Xu hướng nội thất 2020</span>
                </div>
                <hr/>
                <div style={{ margin: '15px 0 15px 15px', display: 'flex', alignItems: 'center' }}>
                  <span>&nbsp;Thư thái trong chính căn hộ của bạn</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default DetailNews