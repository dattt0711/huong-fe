import React, { useState, useEffect } from 'react';
import './detailProduct.style.css';
import { Container } from 'react-bootstrap';
import DetailInfo from './components/DetailInfo';
import ImageInfo from './components/ImageInfo';
import ProductInCategory from './components/ProductInCategory';
import Description from './components/Description';
import CarouselProduct from '../Home/components/CarouselProduct';
import Footer from '../Home/components/Footer';
import { Link, useParams } from "react-router-dom";
import {
  fetchInfoProductApi, fetchRelatedListProductsApi,
  fetchListSameCatProductsApi,
} from '../../api/productsAPI';
const initialValue = {
  productName: 'OAT ESSENTIAL WATER',
  description: 'UPTOWN LIIZ presents the Oat Enough Essential Water. Experience a healthy glow with the Oat Enough routine that contains the rich moisture and nutrition of oats',
  category: '',
  price: '49.98',
  image: 'https://bizweb.dktcdn.net/thumb/grande/100/369/704/products/3-ada177ab-e8ae-46f5-8ee9-19e30da4d7ed.jpg?v=1575349214200',
  details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  subImage1: 'https://bizweb.dktcdn.net/thumb/grande/100/369/704/products/3-ada177ab-e8ae-46f5-8ee9-19e30da4d7ed.jpg?v=1575349214200',
  subImage2: 'https://bizweb.dktcdn.net/thumb/grande/100/369/704/products/3-ada177ab-e8ae-46f5-8ee9-19e30da4d7ed.jpg?v=1575349214200',
  subImage3: 'https://bizweb.dktcdn.net/thumb/grande/100/369/704/products/3-ada177ab-e8ae-46f5-8ee9-19e30da4d7ed.jpg?v=1575349214200',
}
function DetailProduct() {
  const { id } = useParams();
  const [dataInfo, setDataInfo] = useState(initialValue);
  const [listSameCategory, setListSameCategory] = useState([]);
  const [listRelated, setListRelated] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const rs = await fetchInfoProductApi(id);
      if (rs?.data?.success) {
        setDataInfo(rs.data.data);
      }
    }
    fetchData();
  }, [id])
  useEffect(() => {
    if (dataInfo?.category) {
      async function fetchData() {
        const rs = await fetchRelatedListProductsApi({
          category: dataInfo.category,
        });
        if (rs?.data?.success) {
          setListRelated(rs.data.data.items);
        }
      }
      fetchData();
    }
  }, [dataInfo, id])
  useEffect(() => {
    if (dataInfo?.category) {
      async function fetchData() {
        const rs = await fetchListSameCatProductsApi({
          category: dataInfo.category,
        });
        if (rs?.data?.success) {
          setListSameCategory(rs.data.data);
        }
      }
      fetchData();
    }
  }, [dataInfo, id])
  return (
    <div className='detail-product'>
      <Container >
        <div className='info-component d-flex '>
          <ImageInfo dataInfo={dataInfo} />
          <DetailInfo dataInfo={dataInfo} />
        </div>
        <div className='describe-component d-flex justify-content-between' style={{ marginTop: '100px' }}>
          <Description dataInfo={dataInfo} />
          <ProductInCategory listRelated={listRelated} />
        </div>
        <CarouselProduct name={'CÓ THỂ BẠN QUAN TÂM'} listSameCategory={listSameCategory} />
      </Container>
      <Footer />
    </div>
  )
}

export default DetailProduct