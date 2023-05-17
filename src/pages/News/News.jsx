import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './news.style.css'
import Footer from '../Home/components/Footer'
import { useNavigate } from 'react-router-dom'

function News() {
  const navigate = useNavigate();
  return (
    <div className='news'>
      <Container>
        <p style={{ fontWeight: 'bold', fontSize: '22px' }}>Tin tức</p>
        <Row style={{marginBottom: '30px'}}>
          <Col lg='4' onClick={()=> navigate('/news/detail/1')}>
            <div className='news-card'>
              <img className='news-card-img' src='https://bizweb.dktcdn.net/thumb/large/100/369/704/articles/b1.jpg?v=1573816030597' alt='#' />
              <div className='news-card-info d-flex'>
                <div className='news-card-date'>
                  <p className='news-card-date-day'>15</p>
                  <p className='news-card-date-month'>11</p>
                </div>
                <p className='news-card-title'>Xu hướng nội thất mây</p>
              </div>
            </div>
          </Col>
          <Col lg='4'>
            <div className='news-card'>
              <img className='news-card-img' src='https://bizweb.dktcdn.net/thumb/large/100/369/704/articles/photo-0-1559208378566487495024.jpg?v=1573815753963' alt='#' />
              <div className='news-card-info d-flex'>
                <div className='news-card-date d-flex justify-content-center align-items-center flex-column'>
                  <p className='news-card-date-day'>15</p>
                  <p className='news-card-date-month'>11</p>
                </div>
                <p className='news-card-title'>Xu hướng nội thất mây</p>
              </div>
            </div>
          </Col>
          <Col lg='4'>
            <div className='news-card'>
              <img className='news-card-img' src='https://bizweb.dktcdn.net/thumb/large/100/369/704/articles/t1.jpg?v=1572513954943' alt='#' />
              <div className='news-card-info d-flex'>
                <div className='news-card-date'>
                  <p className='news-card-date-day'>15</p>
                  <p className='news-card-date-month'>11</p>
                </div>
                <p className='news-card-title'>Xu hướng nội thất mây</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row style={{marginBottom: '30px'}}>
          <Col lg='4'>
            <div className='news-card'>
              <img className='news-card-img' src='	https://bizweb.dktcdn.net/thumb/large/100/369/704/articles/t2.jpg?v=1572513976507' alt='#' />
              <div className='news-card-info d-flex'>
                <div className='news-card-date'>
                  <p className='news-card-date-day'>15</p>
                  <p className='news-card-date-month'>11</p>
                </div>
                <p className='news-card-title'>Xu hướng nội thất mây</p>
              </div>
            </div>
          </Col>
          <Col lg='4'>
            <div className='news-card'>
              <img className='news-card-img' src='https://bizweb.dktcdn.net/thumb/large/100/369/704/articles/b1.jpg?v=1573816030597' alt='#' />
              <div className='news-card-info d-flex'>
                <div className='news-card-date d-flex justify-content-center align-items-center flex-column'>
                  <p className='news-card-date-day'>15</p>
                  <p className='news-card-date-month'>11</p>
                </div>
                <p className='news-card-title'>Xu hướng nội thất mây</p>
              </div>
            </div>
          </Col>
          <Col lg='4'>
            <div className='news-card'>
              <img className='news-card-img' src='https://bizweb.dktcdn.net/thumb/large/100/369/704/articles/gk-1.jpg?v=1573815627700' alt='#' />
              <div className='news-card-info d-flex'>
                <div className='news-card-date'>
                  <p className='news-card-date-day'>15</p>
                  <p className='news-card-date-month'>11</p>
                </div>
                <p className='news-card-title'>Xu hướng nội thất mây</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row style={{marginBottom: '30px'}}>
          <Col lg='4'>
            <div className='news-card'>
              <img className='news-card-img' src='https://bizweb.dktcdn.net/thumb/large/100/369/704/articles/b1.jpg?v=1573816030597' alt='#' />
              <div className='news-card-info d-flex'>
                <div className='news-card-date'>
                  <p className='news-card-date-day'>15</p>
                  <p className='news-card-date-month'>11</p>
                </div>
                <p className='news-card-title'>Xu hướng nội thất mây</p>
              </div>
            </div>
          </Col>
          <Col lg='4'>
            <div className='news-card'>
              <img className='news-card-img' src='https://bizweb.dktcdn.net/thumb/large/100/369/704/articles/b1.jpg?v=1573816030597' alt='#' />
              <div className='news-card-info d-flex'>
                <div className='news-card-date d-flex justify-content-center align-items-center flex-column'>
                  <p className='news-card-date-day'>15</p>
                  <p className='news-card-date-month'>11</p>
                </div>
                <p className='news-card-title'>Xu hướng nội thất mây</p>
              </div>
            </div>
          </Col>
          <Col lg='4'>
            <div className='news-card'>
              <img className='news-card-img' src='https://bizweb.dktcdn.net/thumb/large/100/369/704/articles/b1.jpg?v=1573816030597' alt='#' />
              <div className='news-card-info d-flex'>
                <div className='news-card-date'>
                  <p className='news-card-date-day'>15</p>
                  <p className='news-card-date-month'>11</p>
                </div>
                <p className='news-card-title'>Xu hướng nội thất mây</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default News