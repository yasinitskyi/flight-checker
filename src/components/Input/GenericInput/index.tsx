"use client"

import {ChangeEvent, useState} from 'react';
import Styles from './index.module.css';
import { GenericInputProps } from '../inputTypes';
import classNames from 'classnames';

function GenericInput({
    title,
    placeholder,
    value: defaultValue = '',
    isError: defaultIsError = false,
    onChange = () => {},
    name,
    pattern,
    type,
    validator,
}: GenericInputProps) {
    const [value, _setValue] = useState(defaultValue);
    const [isError, setIsError] = useState(defaultIsError);

    const validate = (event: ChangeEvent<HTMLInputElement>) => {
        if (pattern) setIsError(event.target.validity.patternMismatch);
        const newValue = validator?.(event.target.value) || event.target.value;

        setValue(newValue);
    }

    const setValue = (newValue: string) => {
        _setValue(newValue);
        onChange(newValue);
    }

    return (
    <div className={Styles.container}>
        {title && <label className={Styles.label} htmlFor={name}>{title}</label>}
        <input 
            title={`請輸入您的${title}`}
            placeholder={placeholder}
            name={name}
            id={name}
            required 
            value={value} 
            type={type || 'text'}
            onChange={(event) => validate(event) }
            className={classNames(Styles.input, {[Styles.error]: isError})}
            pattern={pattern}
        />
    </div>
  )
}

export default GenericInput;