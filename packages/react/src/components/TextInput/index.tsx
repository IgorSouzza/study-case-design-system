import { ComponentProps } from 'react'
import * as S from './styles'

export type TextInputProps = {
  prefix?: string
} & ComponentProps<typeof S.Input>

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <S.TextInputContainer>
      {!!prefix && <S.Prefix>{prefix}</S.Prefix>}
      <S.Input {...props} />
    </S.TextInputContainer>
  )
}
