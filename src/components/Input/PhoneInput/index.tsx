import React from 'react';
import { InputProps } from '../inputTypes';
import { GenericInput } from '../';

export default function PhoneInput({
    value,
    isError,
    onChange,
}: InputProps) {
  return (
    <GenericInput 
        title="電話" 
        name="phone" 
        placeholder="e.g. 0908000000" 
        onChange={onChange} 
        isError={isError} 
        value={value}
        pattern="09[0-9]{8}"
        type="tel"
    />
  )
}
