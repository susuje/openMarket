import React from 'react'
import * as S from './ProductUpload.style'

import SellerTopNav from '../../components/TopNav/SellerTopNav'
import NumberInput from '../../components/Product/NumberInput'
import Footer from '../../components/Footer/Footer'

export default function ProductUpload() {
  return (
    <>
      <SellerTopNav />
      <S.Wrapper>
        <S.Container>
          <S.H1>상품 등록</S.H1>
          <S.FlexDiv>
            <S.Caution>
              <h4>*상품 등록 주의사항</h4>
              <div>
                <p>- 터무니없는 금액은 올리지 말아주세요.</p>
                <p>
                  - 부적절한 상품이미지 혹은 내용이 업로드 되었을시 상품 강제
                  삭제 및 경고 조치를 받을 수 있습니다.
                </p>
              </div>
            </S.Caution>
            <S.UploadForm>
              <S.GridDiv>
                <S.ProductImg>
                  <p>상품 이미지</p>
                  <S.InputLabel htmlFor="uploadImg">
                    <input
                      id="uploadImg"
                      type="file"
                      accept=".jpg, .gif, .png, .jpeg, .bmp, .tif, .heic"
                    />
                  </S.InputLabel>
                </S.ProductImg>
                <S.ProductInfo>
                  <S.InputBox>
                    <label htmlFor="productName">상품명</label>
                    <S.NameInput maxLength="30" htmlFor="productName" />
                    <small>0/30</small>
                  </S.InputBox>
                  <S.InputBox>
                    <label htmlFor="price">판매가</label>
                    <NumberInput unit="원" id="price" />
                  </S.InputBox>
                  <S.InputBox>
                    <label>배송방법</label>
                    <S.ShipBtn className="active">택배, 소포, 등기</S.ShipBtn>
                    <S.ShipBtn>직접배송(화물배달)</S.ShipBtn>
                  </S.InputBox>
                  <S.InputBox>
                    <label htmlFor="ship">기본 배송비</label>
                    <NumberInput unit="원" id="ship" />
                  </S.InputBox>
                  <S.InputBox>
                    <label htmlFor="stock">재고</label>
                    <NumberInput unit="개" id="stock" />
                  </S.InputBox>
                </S.ProductInfo>
              </S.GridDiv>
              <S.ProductDetail>
                <p>상품 상세 정보</p>
                <textarea></textarea>
              </S.ProductDetail>
              <S.Btns>
                <S.CancelBtn>취소</S.CancelBtn>
                <S.UploadBtn>저장하기</S.UploadBtn>
              </S.Btns>
            </S.UploadForm>
          </S.FlexDiv>
        </S.Container>
      </S.Wrapper>
      <Footer />
    </>
  )
}
//input 숫자만 받게 해야함
//배송 버튼 toggle 리액트
