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
  border-bottom: 2px solid var(--grey-border);
`
export const Info = styled.div`
  margin-top: 40px;
  h3 {
    font-size: 18px;
    font-weight: 500;
    padding-bottom: 8px;
    border-bottom: 2px solid var(--grey-border);
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
    border: 1px solid var(--grey-border);
    &#address {
      width: 170px;
    }
    &#name,
    &#mail,
    &#reciever {
      width: 334px;
    }
    &#phoneNum {
      width: 100px;

      &.first {
        width: 80px;
      }
    }
  }
`
