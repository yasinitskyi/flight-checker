import React from 'react';
import { InputProps } from '../inputTypes';
import { GenericInput } from '../';

export default function PhoneInput({
    value,
    onChange,
    processor,
}: InputProps) {
  return (
    <GenericInput 
        title="電話"
        name="phone"
        placeholder="e.g. 0908000000"
        value={value}
        pattern="09[0-9]{8}"
        type="tel"
        onChange={onChange}
        processor={processor}
    />
  )
}
