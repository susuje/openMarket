import { BaseInstance } from './Instance'

//4. 장바구니
//4.1 장바구니 목록 보기(GET)
export const getMyCart = async token => {
  const config = {
    headers: {
      Authorization: `JWT ${token}`,
    },
  }
  const result = await BaseInstance.get('/cart/', config)
  return result.data
}
//4.2 장바구니에 물건 넣기(POST)
export const putCartProduct = async (token, data) => {
  const config = {
    headers: {
      Authorization: `JWT ${token}`,
    },
  }
  const result = await BaseInstance.post('/cart/', data, config)
  return result.data
}

//4.3 장바구니 디테일(개발용,GET)
export const getMyCartDetail = async (token, cart_item_id) => {
  const config = {
    headers: {
      Authorization: `JWT ${token}`,
    },
  }
  const result = await BaseInstance.get(`/cart/${cart_item_id}/`, config)
  return result.data
}

//4.4 장바구니 수량 수정하기(PUT)
export const modifyCartQuantity = async (token, cartItemId, data) => {
  const config = {
    headers: {
      Authorization: `JWT ${token}`,
    },
  }
  const result = await BaseInstance.put(`/cart/${cartItemId}/`, data, config)
  return result.data
}
//4.4 장바구니 전부 삭제하기(DELETE)

//4.4 장바구니 개별 삭제하기(DELETE)
