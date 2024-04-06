export interface TextareaProps {
	name: string,
	title?: string,
	resizable?: boolean,
	placeholder?: string,
	value?: string,
	onChange?: (value: string) => void,
  processor?: (value: string) => string,
}