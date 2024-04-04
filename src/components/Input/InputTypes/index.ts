export interface GenericInputProps {
    title?: string;
    placeholder?: string;
    value?: string;
    isError: boolean;
    onChange: (value: string) => void;
    name: string;
}

export type PhoneInputProps = Pick<GenericInputProps, 'value' | 'isError' | 'onChange'>