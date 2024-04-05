"use client"

import {useState} from 'react';
import Styles from './index.module.css';
import { GenericInputProps } from '../inputTypes';

function GenericInput({
    name,
    type,
    title,
    pattern,
    placeholder,
    readonly = false,
    value: defaultValue = '',
    processor,
    onChange = () => {},
}: GenericInputProps) {
    const [value, _setValue] = useState(defaultValue);

    const setValue = (str: string) => {
        const newValue = processor ? processor(str) : str;
        _setValue(newValue);
        onChange(newValue);
    }

    return (
    <div className={Styles.container}>
        {title && <label className={Styles.label} htmlFor={name}>{title}</label>}
        <input 
            name={name}
            readOnly={readonly}
            type={type || 'text'}
            title={`請輸入您的${title}`}
            pattern={pattern}
            placeholder={placeholder}
            value={value} 
            id={name}
            required 
            onChange={(event) => setValue(event.target.value) }
            className={Styles.input}
        />
    </div>
  )
}

export default GenericInput;