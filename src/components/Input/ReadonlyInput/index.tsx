import React from 'react';
import { ReadonlyInputProps } from '../inputTypes';
import { GenericInput } from '../';

export default function ReadonlyInput({
    name,
    value,
    title,
}: ReadonlyInputProps) {
  return (
    <GenericInput 
        title={title}
        name={name}
        value={value}
        readonly
    />
  )
}
