import styled from 'styled-components'

export const FormContainer = styled.form`
  width: 100%;
  max-width: 1280px;
  margin-top: 96px;
`
export const H2 = styled.h2`
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 18px;
  &.ship {
    border-bottom: 2px solid var(--grey-border);
  }
`
export const Info = styled.div`
  margin-top: 40px;
  position: relative;
  h3 {
    //display: inline-block;
    font-size: 18px;
    font-weight: 500;
    padding-bottom: 8px;
    border-bottom: 2px solid var(--grey-border);
  }
  button.sameInfo {
    position: absolute;
    top: -7px;
    left: 169px;
    border: 1px solid var(--light-grey);
    border-radius: 5px;
    padding: 6px 10px;
    color: var(--light-grey);
  }
  p.alert {
    color: var(--red);
    font-size: 14px;
    font-weight: 500;
  }
`
export const InputWrapper = styled.div`
  padding: 8px 0px;
  border-bottom: 1px solid var(--grey-border);

  p {
    display: inline-block;
    margin: 0px 10px;
  }
  label {
    display: inline-block;
    width: 170px;
  }
  button {
    margin-left: 10px;
    width: 154px;
    height: 40px;
    border-radius: 5px;
    background-color: #000;
    font-size: 16px;
    color: white;
    font-weight: 500;
  }
  input {
    height: 40px;
    padding-left: 10px;
    border: 1px solid var(--grey-border);
    ${({ width }) => width && `width: ${width}`}; //width가 없으면 설정x

    &.first {
      width: 80px;
    }

    &.long {
      width: 800px;
      margin-left: 170px;
      margin-top: 8px;
    }
  }

  &:last-child {
    margin-bottom: 70px;
  }
`
export const Wrapper = styled.div`
  width: 760px;
`

export const Payment = styled.div`
  display: flex;
  border-top: 2px solid var(--grey-border);
  border-bottom: 2px solid var(--grey-border);
  padding: 18px 0px;

  div {
    display: flex;
    //justify-content: center;
    align-items: center;
    margin-left: 20px;

    &:first-child {
      margin-left: 12px;
    }
  }
  input {
    margin: 0;
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`
export const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
`
