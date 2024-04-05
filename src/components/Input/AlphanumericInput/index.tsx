import React from 'react';
import { AlphaNumericInputProps } from '../inputTypes';
import { GenericInput } from '../';

export default function AlphanumericInput({
    name,
    value,
    title,
    placeholder,
    onChange,
    processor,
}: AlphaNumericInputProps) {
  return (
    <GenericInput 
        title={title}
        name={name}
        placeholder={placeholder}
        value={value}
        pattern="[A-Za-z0-9]*"
        onChange={onChange}
        processor={processor}
    />
  )
}
