# 🔮 PLAY LAB - 패션부터 라이프스타일까지 | 디자이너 셀렉샵
> ```PLAY LAB```은 디자이너에게 상품을 판매하는 서비스를 제공하고,<br> 소비자는 디자이너의 상품을 카테고리별로 확인 후 구매할 수 있습니다. <br>
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

