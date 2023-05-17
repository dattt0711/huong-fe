import { Divider } from '@mui/material'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../Home/components/Footer'
import FilterByPrice from './components/FilterByPrice'
import Main from './components/Main'
import MenuList from './components/MenuList'
import './product.style.css'
import { useState, useEffect } from 'react';
import CreateModal from './components/CreateModal'
import EditModal from './components/EditModal'
import {
  fetchCreateProduct, fetchDeleteProductApi, fetchListProductsApi, fetchRelatedListProductsApi,
  fetchInfoProductApi, fetchEditProduct,
} from '../../api/productsAPI';
const initialValue = {
  productName: '',
  description: '',
  category: '',
  price: '',
  image: '',
  details: '',
  subImage1: '',
  subImage2: '',
  subImage3: '',
}
const initFilters = {
  category: '',
  sortKey: 'productName',
  sortOrder: 1,
  fromPrice: '',
  toPrice: '',
}
function Product() {
  const [show, setShow] = useState(false);
  const [createParams, setCreateParams] = useState(initialValue);
  const [reset, setReset] = useState(false);
  const [filters, setFilters] = useState(initFilters);
  const [productList, setProductList] = useState([]);
  const [editParams, setEditParams] = useState(initialValue);
  const [showEdit, setShowEdit] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const result = await fetchListProductsApi(
        filters,
      );
      if (result?.data?.success) {
        setProductList(result?.data?.data?.items);
      }
    }
    fetchData();
  }, [filters, reset])
  const handleChangeFilters = (type) => {
    switch (type) {
      case 1: {
        setFilters(initFilters);
        break;
      }
      case 2: {
        setFilters({
          ...filters,
          sortKey: 'productName',
          sortOrder: 1,
        });
        break;
      }
      case 3: {
        setFilters({
          ...filters,
          sortKey: 'productName',
          sortOrder: -1,
        });
        break;
      }
      case 4: {
        setFilters({
          ...filters,
          sortKey: 'price',
          sortOrder: 1,
        });
        break;
      }
      case 5: {
        setFilters({
          ...filters,
          sortKey: 'price',
          sortOrder: -1,
        });
        break;
      }
      default: {
        setFilters(initFilters);
        break;
      }
    }
  }
  const handleChangePriceFilters = (type) => {
    switch (type) {
      case 1: {
        setFilters(initFilters);
        break;
      }
      case 2: {
        setFilters({
          ...filters,
          fromPrice: 100000,
          toPrice: 200000,
        });
        break;
      }
      case 3: {
        setFilters({
          ...filters,
          fromPrice: 200000,
          toPrice: 300000,
        });
        break;
      }
      case 4: {
        setFilters({
          ...filters,
          fromPrice: 300000,
          toPrice: 400000,
        });
        break;
      }
      case 5: {
        setFilters({
          ...filters,
          fromPrice: 500000,
          toPrice: 1000000,
        });
        break;
      }
      default: {
        setFilters(initFilters);
        break;
      }
    }
  }
  const handleChangeCategory = (value) => {
    console.log(value, 'value')
    setFilters({
      ...filters,
      category: value,
    });

  }
  //create
  const handleCloseModal = () => {
    setCreateParams(initialValue);
    setShow(false);
  }
  const handleSubmit = async () => {
    await fetchCreateProduct(createParams);
    console.log(createParams, 'createParams');
    setReset((prev) => !prev);
    setShow(false);
    setCreateParams(initialValue);
  }
  const handleOpenModal = () => {
    setShow(true);
  }

  const handleOnChange = (event) => {
    setCreateParams({
      ...createParams,
      [event.target.name]: event.target.value,
    })
  }
  // handle edit
  const handleCloseEditModal = () => {
    setEditParams(initialValue);
    setShowEdit(false);
  }
  const handleSubmitEdit = async () => {
    await fetchEditProduct(editParams);
    setReset((prev) => !prev);
    setShowEdit(false);
    setEditParams(initialValue);
  }
  const handleOpenEditModal = async (productObjId) => {
    const result = await fetchInfoProductApi(productObjId)
    if (result?.data?.success) {
      setEditParams({
        ...result.data.data,
        productObjId: productObjId,
      })
    }
    setShowEdit(true);
  }
  const handleOnChangeEdit = (event) => {
    setEditParams({
      ...editParams,
      [event.target.name]: event.target.value,
    })
  }

  // delete
  const handleDelete = async (productObjId) => {
    await fetchDeleteProductApi({ productObjId });
    setReset((prev) => !prev);
  }
  return (
    <div className='product primary-background'>
      <Divider />
      <Container>
        <Row>
          <Col sm='12' lg='3'>
            {/* <MenuList /> */}
            <FilterByPrice handleChangePriceFilters={handleChangePriceFilters} />
          </Col>
          <Col sm='12' lg='9'>
            <Main
              handleChangeCategory={handleChangeCategory}
              handleChangeFilters={handleChangeFilters}
              productList={productList}
              handleOpenModal={handleOpenModal}
              handleOpenEditModal={handleOpenEditModal}
              handleDelete={handleDelete}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
      <CreateModal
        show={show}
        handleCloseModal={handleCloseModal}
        handleSubmit={handleSubmit}
        handleOnChange={handleOnChange}
      />
      <EditModal
        show={showEdit}
        handleCloseModal={handleCloseEditModal}
        handleSubmit={handleSubmitEdit}
        handleOnChange={handleOnChangeEdit}
        params={editParams}
      />
    </div>
  )
}

export default Product