import { BaseInstance } from './Instance'
//1. 로그인- 요청을 보낼 때 login_type도 함께 보내야 합니다.
export const login = async (IsBuyer, loginData) => {
  const result = await BaseInstance.post('/accounts/login/', loginData)
  return result.data
}

//2. 로그아웃
export const logout = async IsBuyer => {
  const result = await BaseInstance.post('/accounts/logout/', null) //null로 해도되나..?
  return result.data
}
