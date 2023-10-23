import { BaseInstance } from './Instance'

//4. 장바구니
//4.1 장바구니 목록 보기(GET)

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

//4.4 장바구니 수량 수정하기(PUT)

//4.4 장바구니 전부 삭제하기(DELETE)

//4.4 장바구니 개별 삭제하기(DELETE)
