import Carousel from 'react-bootstrap/Carousel';
import './style.css';

function Banner() {
  return (
    <Carousel style={{ marginTop: '70px' }}>
      <Carousel.Item>
        <img
          className="d-block img-banner"
          src="https://xaydungnguyenanh.vn/wp-content/uploads/2022/10/Considerations-of-installing-hardwood-floors-MI-flooring-contractors.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2 style={{ marginBottom: '50px' }}>SÀN GỖ CÔNG NGHIỆP</h2>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block img-banner"
          src="https://xaydungnguyenanh.vn/wp-content/uploads/2022/10/ri-sai-1024x728.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h2 style={{ marginBottom: '50px' }}>GIẤY DÁN TƯỜNG</h2>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block img-banner"
          src="https://xaydungnguyenanh.vn/wp-content/uploads/2022/11/Modern-Style-Office-Carpet-Tile-Designs-Commercial-Office-Carpet-Flooring-Tiles-942x1024.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h2 style={{ marginBottom: '50px' }}>THẢM VĂN PHÒNG</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block img-banner"
          src="https://xaydungnguyenanh.vn/wp-content/uploads/2022/11/HTB1yGieb4sIL1JjSZFqq6AeCpXaU.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h2 style={{ marginBottom: '50px' }}>SÀN NHỰA HÈM KHÓA, DÁN KEO</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block img-banner"
          src="https://xaydungnguyenanh.vn/wp-content/uploads/2022/11/IMG_0247-1024x768.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h2 style={{ marginBottom: '50px', color: 'black' }}>SÀN NGOÀI TRỜI</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;