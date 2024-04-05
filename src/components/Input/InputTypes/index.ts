import { HTMLInputTypeAttribute } from "react";

export interface GenericInputProps {
    name: string,
    value?: string,
    title?: string,
    placeholder?: string,
    pattern?: string,
    type?: HTMLInputTypeAttribute,
    onChange?: (value: string) => void,
    processor?: (value: string) => string,
}

export type InputProps = Pick<GenericInputProps, 'value' | 'onChange' | 'processor'>;
export type AlphaNumericInputProps = Omit<GenericInputProps, 'pattern' | 'type'>;