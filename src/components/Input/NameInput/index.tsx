import React from 'react'
import { InputProps } from '../inputTypes';
import { GenericInput } from '../';

export default function NameInput({
    value,
    isError,
    onChange,
}: InputProps) {
  return (
    <GenericInput 
        title="姓名" 
        name="full name" 
        placeholder="e.g. Ming Hsio" 
        onChange={onChange} 
        isError={isError} 
        value={value}
        pattern="[\u4e00-\u9fa5a-zA-Z\s]*"
    />
  )
}
