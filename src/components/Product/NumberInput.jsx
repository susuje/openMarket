import React from 'react'

import * as S from './NumberInput.style'

export default function NumberInput({ unit }) {
  return (
    <S.Flex>
      <S.NumberInput></S.NumberInput>
      <S.Unit>{unit}</S.Unit>
    </S.Flex>
  )
}
