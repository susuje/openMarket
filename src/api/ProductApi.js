import { BaseInstance } from './Instance'

//3.1 상품 전체 불러오기(GET)
////3.1.1) 상품 전체 불러오기(GET)

////3.1.2) 판매자 상품 불러오기(GET)

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
