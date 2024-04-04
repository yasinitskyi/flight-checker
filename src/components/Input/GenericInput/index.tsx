"use client"

import Styles from './index.module.css';
import { GenericInputProps } from '../InputTypes';
import classNames from 'classnames';

function GenericInput({
    title,
    placeholder,
    value,
    isError = false,
    onChange = () => {},
    name,
}: GenericInputProps) {
  return (
    <div className={Styles.container}>
        {title && <label className={Styles.label} htmlFor={name}>{title}</label>}
        <input
            placeholder={placeholder}
            name={name}
            id={name}
            required 
            value={value} 
            type="text" 
            onChange={(event) => onChange(event.target.value)}
            className={classNames(Styles.input, {[Styles.error]: isError})}
        />
    </div>
  )
}

export default GenericInput;