import { BaseInstance } from './Instance'

//1. 주문 목록 가져오기(GET)

export const getMyOrder = async token => {
  const config = {
    headers: {
      Authorization: `JWT ${token}`,
    },
  }
  const result = await BaseInstance.get('/order/', config)
  return result.data
}

//2.주문 생성하기 POST
export const postOrder = async (token, data) => {
  const config = {
    headers: {
      Authorization: `JWT ${token}`,
    },
  }
  const result = await BaseInstance.post('/order/', data, config)
  return result.data
}
