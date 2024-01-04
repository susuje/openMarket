# 🔮 PLAY LAB - 패션부터 라이프스타일까지 | 디자이너 셀렉샵
> ```PLAY LAB```은 디자이너에게 상품을 판매하는 서비스를 제공하고,<br> 소비자는 디자이너의 상품을 카테고리별로 확인 후 구매할 수 있습니다. <br>
<br>
<br>

- 배포 URL : https://play-lab.netlify.app/
  (모바일 반응형 준비중)

- 구매자 계정

    ID : lolo12 <br>
    PW : lolo12!!

- 판매자 계정

    ID : sellerer12 <br>
    PW : sellerer12!!
  
<br>

## 로그인 기능 (코드브레인 과제)
### 로그인 페이지
- 로그인은 구매자 / 판매자 로그인으로 구분됩니다.
- TabBtn 에서 setIsBuyer을 통해 구매자 / 판매자 로그인을 설정할 수 있습니다.
```jsx
//로그인 페이지
export default function Login() {
  const navigate = useNavigate()
  const [IsBuyer, setIsBuyer] = useState(true)
  return (
    <S.Container>
      <S.Img src={logo} alt="로고" onClick={() => navigate('/')} />
      <TabBtn content={'로그인'} setIsBuyer={setIsBuyer} IsBuyer={IsBuyer} />
      <LoginForm IsBuyer={IsBuyer} />
      <S.Footer>
        <a href="/signup">회원가입</a>
        <a href="/">비밀번호 찾기</a>
      </S.Footer>
    </S.Container>
  )
}

```
### 로그인 form
- react-hook-form을 사용하여 코드의 가독성을 높였습니다.
- 전역 상태관리 라이브러리인 recoil을 사용하여 Local Storage에 유저의 고유한 토큰과 로그인 정보를 저장하여 새로고침시 유지됩니다.
```jsx
//로그인 form
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { login } from '../../api/logInOutApi'
import { useSetRecoilState } from 'recoil'
import {
  userTokenState,
  isLoginState,
  userTypeState,
  myUserName,
} from '../../atoms/Atoms'

export default function LoginForm({ IsBuyer }) {
 
  const [errorM, setErrorM] = useState('')
  const setUserToken = useSetRecoilState(userTokenState) // 사용자 토큰 상태 설정
  const setIsLoginState = useSetRecoilState(isLoginState) // 로그인 상태 설정
  const setUserName = useSetRecoilState(myUserName) // 아이디  설정
  const setUserTypeState = useSetRecoilState(userTypeState) // 구매or판매자 상태 설정

  const navigate = useNavigate()

  const { register, handleSubmit } = useForm({ mode: 'onChange' })

  const LoginMutation = useMutation(login, {
    onSuccess(data) {
      setIsLoginState(true)
      setUserToken(data.token)
      setUserTypeState(data.user_type)
      navigate('/')
    },
    onError(error) {
      setErrorM(error.response.data.FAIL_Message)
    },
  })

  const onSubmit = data => {
    //console.log(data)
    data.login_type = IsBuyer ? 'BUYER' : 'SELLER'
    LoginMutation.mutate(data)
    setUserName(data.username)
  }

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.LoginInput
        placeholder="아이디"
        type="text"
        {...register('username', {
          required: '* 아이디는 필수 입력입니다.',
        })}
      />
      <S.LoginInput
        placeholder="비밀번호"
        type="password"
        {...register('password', {
          required: '* 비밀번호는 필수 입력입니다.',
        })}
      />
      <S.Err>{errorM}</S.Err>
      <S.CommonBtn>로그인</S.CommonBtn>
    </S.Form>
  )
}


```

### 유효성 검사
- 회원가입시, react-hook-form의 pattern 과 정규식을 통해 아이디와 비밀번호 설정에 유효성 검사를 실시하였습니다.
  ```jsx
   const Regex = {
    id: /^[A-Za-z0-9]{4,20}$/, //20자 이내의 영어 소+대문자, 숫자 가능
    pw: /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/, //8자, 숫자, 특문 각 1회 이상, 영문은 2개 이상 사용
    num: /^[0-9]+$/,
  }

  ...//

  <S.SignInput
        id="pw"
        className={checkPw ? 'checked' : 'unChecked'}
        type="password"
        {...register('password', {
          required: '* 비밀번호는 필수 입력입니다.',
          pattern: {
            value: Regex.pw,
            message: '* 8자 이상의 영어,숫자,특수기호를 조합해주세요.',
          },
        })}
      />

  ...//
  ```


<br>
<br>
<br>

## 프로젝트 기능 소개
```
- PLAY LAB은 구매회원, 판매회원(디자이너)로 나뉘어 물건을 사거나 팔 수 있는 서비스를 제공합니다.

- 회원가입
    - 원하는 목적(구매회원, 판매회원)에 따라 가입
    - react-hook-form을 이용해 각 input의 유효성 검사 구현

- 구매회원
    - 홈화면에서 카트아이콘을 통해 장바구니에 담거나, 상품 상세 페이지에서 원하는 수량으로 장바구니에 담을 수 있습니다.
    - 장바구니 내에서 상품 수량을 변경 및 삭제
    - 상품 상세 페이지 내에서 바로 구매 가능
    - 결제 페이지에서 모든 정보를 입력후 주문
    - 마이 페이지에서 주문한 상품 및 배송현황 확인 (주문날짜에서 하루 지나면 배송완료) 

- 판매회원
    - 판매회원은 상품 주문 불가능, 상품 업로드만 가능
    - 판매자 센터 페이지에서 상품 업로드
    - 판매자 센터 페이지에서 판매중인 상품 확인 및 수정 삭제
    - 카테고리 설정하여 상품 업로드
    - 상품 업로드 및 수정 시 react-hook-form을 이용해 각 input의 유효성 검사 구현

- 검색기능
    - 상단 bar 돋보기 마우스 주변 hover시 나타나는 검색 창에서 상품이름으로 검색

```

<br>

## 기능 시연 
클릭하면 크게 보입니다!

| 홈 (pageNation) | 카테고리 화면 |
| ------ | ------ |
|![hh](https://github.com/susuje/openMarket/assets/115439373/4a461d96-334d-4db0-9797-5bdeaee51cdb)| ![category](https://github.com/susuje/openMarket/assets/115439373/cfcce4d8-0ac7-43be-ac90-f0062bf44388)

| 검색 화면 | 로그아웃 |
| ------ | ------ |
|![search](https://github.com/susuje/openMarket/assets/115439373/d6433d12-a1fe-4ff0-952b-982d1bce068a)|![logout](https://github.com/susuje/openMarket/assets/115439373/71c5e7b7-f055-40a3-8a37-bb71bc256552)

<br>
<br>
 
### 구매 회원

| 회원 가입 (구매 회원) |  로그인 (구매 회원) |
| ------ | ------ | 
| ![sign](https://github.com/susuje/openMarket/assets/115439373/23ebff15-6bb7-4b66-a869-5e6adc8fc7ad) |![loginin](https://github.com/susuje/openMarket/assets/115439373/9f010369-728b-4b6f-a158-96300d53a594)


| 상품페이지 장바구니 | 홈화면 바로 장바구니 |
| ------ | ------ | 
| ![cartDetailPage](https://github.com/susuje/openMarket/assets/115439373/c85f6b51-616a-4b75-b6aa-18561aabd794) |![carthome](https://github.com/susuje/openMarket/assets/115439373/ddbd1db4-2c7c-4f6b-bbbd-c18989a202fa)|

| 카트 전체 주문/결제 | 마이페이지 |
| ------ | ------ | 
| ![order](https://github.com/susuje/openMarket/assets/115439373/2773794e-5e94-4d4b-bfd9-6897003bf5c7) |![image](https://github.com/susuje/openMarket/assets/115439373/a6d932a0-b197-42fa-8991-cd17cc14ae06)|

<br>
<br>

### 판매 회원
| 회원 가입 (판매 회원) |  로그인 (판매 회원) |
| ------ | ------ | 
|![signupseller](https://github.com/susuje/openMarket/assets/115439373/86dd9855-dad3-4bc7-982e-d5d91ef1c29e)|![loginseller](https://github.com/susuje/openMarket/assets/115439373/af6a76ff-c59b-4203-b6cb-0f79e8154789)|

| 상품 업로드 | 상품 수정 및 삭제 |
| ------ | ------ | 
| ![upup](https://github.com/susuje/openMarket/assets/115439373/5c5a5aab-f25d-4fce-95fd-8985042a7266)|![edittdelete](https://github.com/susuje/openMarket/assets/115439373/9e1b10e6-18c4-4b0e-9c27-1250eba1a1ff)|

