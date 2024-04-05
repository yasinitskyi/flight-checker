import React from 'react'
import { InputProps } from '../inputTypes';
import { GenericInput } from '../';

export default function NameInput({
    value,
    onChange,
    processor,
}: InputProps) {
  return (
    <GenericInput 
        title="姓名" 
        name="full name" 
        placeholder="e.g. Ming Hsio" 
        onChange={onChange} 
        value={value}
        pattern="[\u4e00-\u9fa5a-zA-Z\s]*"
        processor={processor}
    />
  )
}
