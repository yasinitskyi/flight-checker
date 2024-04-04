import React from 'react';
import { PhoneInputProps } from '../InputTypes';
import { GenericInput } from '../';

export default function PhoneInput({
    value,
    isError,
    onChange,
}: PhoneInputProps) {
  return (
    <GenericInput title="電話" name="phone" placeholder="e.g. 0908000000" onChange={onChange} isError={isError} value={value} />
  )
}
