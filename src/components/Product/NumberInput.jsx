import React, { forwardRef } from 'react'

import * as S from './NumberInput.style'

const NumberInput = forwardRef(
  ({ unit, id, type, register, onInput, defaultValue }, ref) => {
    return (
      <S.Flex>
        <S.NumberInput
          id={id}
          type={type}
          ref={ref}
          onInput={onInput}
          {...register}
          defaultValue={defaultValue}
        ></S.NumberInput>
        <S.Unit>{unit}</S.Unit>
      </S.Flex>
    )
  }
)

export default NumberInput
