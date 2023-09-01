import { BaseInstance } from './Instance'

//1.  계정 만들기(구매자/판매자,POST)
export const join = async (IsBuyer, userData) => {
  const url = IsBuyer ? '/accounts/signup/' : '/accounts/signup_seller/'
  const result = await BaseInstance.post(url, userData)
  return result.data
}

//2. 계정 검증
export const checkUserName = async userName => {
  //axios.post() 메서드를 사용하여 데이터를 전송할 때, sendData는 객체 형태로 전달하는 것이 일반적

  const result = await BaseInstance.post(
    '/accounts/signup/valid/username/',
    userName
  )
  return result.data
}

//3. 사업자등록번호 검증하기
export const checkBusinessNum = async num => {
  const result = await BaseInstance.post(
    '/accounts/signup/valid/company_registration_number/',
    num
  )
  return result.data
}
