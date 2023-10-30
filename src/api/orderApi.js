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
