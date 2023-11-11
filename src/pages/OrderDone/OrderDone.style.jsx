import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 100px;
  margin-bottom: 200px;
  width: 100%;
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 400px;
  }
`

export const TextWrapper = styled.div`
  h1 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 30px;
  }
`
export const BtnWrapper = styled.div`
  button {
    font-size: 16px;
    padding: 10px 20px;
    border-radius: 10px;
    border: 1px solid var(--grey-border);

    &:hover {
      border: 1px solid black;
    }
    &.right {
      margin-left: 10px;
    }
  }
`
