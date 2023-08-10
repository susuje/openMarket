import styled from 'styled-components'

export const Footer = styled.footer`
  background-color: #f2f2f2;
  width: 100%;
  height: 298px;
`
export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 60px;

  p {
    line-height: 24px;
    color: #767676;
    span {
      font-weight: 700;
    }
  }
`
export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 22px;
  border-bottom: 1px solid var(--grey-border);
  margin-bottom: 30px;
`
export const InfoUl = styled.ul`
  display: flex;
  gap: 20px;

  li {
    font-size: 16px;
    cursor: pointer;
  }
`
export const SnsUl = styled.ul`
  display: flex;
  gap: 14px;
`
