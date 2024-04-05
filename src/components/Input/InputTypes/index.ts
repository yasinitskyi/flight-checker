import { HTMLInputTypeAttribute } from "react";

export interface GenericInputProps {
    name: string,
    value?: string,
    title?: string,
    placeholder?: string,
    isError?: boolean,
    pattern?: string,
    type?: HTMLInputTypeAttribute,
    onChange?: (value: string) => void,
    validator?: (value: string) => string,
}

export type InputProps = Pick<GenericInputProps, 'value' | 'isError' | 'onChange' | 'validator'>