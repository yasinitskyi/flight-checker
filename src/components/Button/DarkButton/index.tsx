import React from 'react'
import GenericButton from '../GenericButton'
import { ThemedButtonProps } from '../buttonTypes'

export default function DarkButton({
	value,
  children,
  form,
  disabled,
  type,
  onClick,
}: ThemedButtonProps) {
	return (
		<GenericButton
			theme="dark"
			type={type} 
			form={form}
			value={value}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</GenericButton>
	)
}
