import styled from 'styled-components'
export const Container = styled.div`
  cursor: pointer;
  width: 100%;
  height: 200px;
  border-radius: 20px;
  box-shadow: rgba(60, 64, 67, 0.1) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.1) 0px 2px 6px 2px;
  padding: 20px;
  margin-bottom: 15px;

  display: flex;
  justify-content: space-between;
`
export const LeftWrapper = styled.div`
  display: flex;
  img {
    width: 160px;
    height: 160px;
    border-radius: 15px;
  }
`
export const ProductInfo = styled.div`
  margin-left: 30px;

  p.name {
    font-size: 21px;
    font-weight: 500;
    margin: 7px 0;
  }

  p.price {
    font-size: 21px;
    font-weight: 700;
    margin-bottom: 80px;
  }
  p.shipping {
    font-size: 15px;
    color: var(--light-grey);
  }
`
export const RightWrapper = styled.div`
  border-left: 2px solid #eeeeee;
  padding-left: 20px;
  width: 250px;
  p.store {
    font-size: 21px;
    font-weight: 700;
    margin: 7px 0;
    margin-bottom: 106px;
    color: var(--red);
  }

  p.createdAt {
    color: var(--light-grey);
    font-size: 15px;
  }
`
