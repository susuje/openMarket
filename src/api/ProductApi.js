import { BaseInstance } from './Instance'

//3.1 상품 전체 불러오기(GET)
////3.1.1) 상품 전체 불러오기(GET)
export const getAllProducts = async pageNum => {
  const result = await BaseInstance.get(`/products/?page=${pageNum}`)
  return result.data
}

////3.1.2) 판매자 상품 불러오기(GET)
export const getSellerProducts = async token => {
  const config = {
    headers: {
      Authorization: `JWT ${token}`,
    },
  }
  const result = await BaseInstance.get('/seller/', config) //get 이니까 data를 안보내도된다
  return result.data
}

//3.2 상품 등록하기(POST)
export const uploadProduct = async (token, data) => {
  const config = {
    headers: {
      Authorization: `JWT ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  }
  const result = await BaseInstance.post('/products/', data, config)
  return result.data
}

//3.3 상품 디테일(GET)
export const getProductDetail = async product_id => {
  const result = await BaseInstance.get(`/products/${product_id}`)
  return result.data
}
//3.4 상품 수정하기(PUT)
export const modifyProductDetail = async (token, UpdateProductId, data) => {
  const config = {
    headers: {
      Authorization: `JWT ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  }
  const result = await BaseInstance.patch(
    `/products/${UpdateProductId}/`,
    data,
    config
  )
  return result.data
}

//3.5 상품 삭제하기(DELETE)
export const deleteProduct = async (token, product_id) => {
  const config = {
    headers: {
      Authorization: `JWT ${token}`,
    },
  }
  const result = await BaseInstance.delete(`/products/${product_id}`, config)
  return result.data
}

//3.6 상품 검색하기(GET)
export const getSearchedProduct = async typing => {
  const result = await BaseInstance.get(`/products/?search=${typing}`)
  return result.data
}
