"use client"

import {useState} from 'react';
import classNames from 'classnames';
import Styles from './index.module.css';

interface TextareaProps {
	name: string,
	title?: string,
	resizable?: boolean,
	placeholder?: string,
	value?: string,
	onChange?: (value: string) => void,
  processor?: (value: string) => string,
}

export default function Textarea({
    name,
    title,
		resizable,
    placeholder,
    value: defaultValue = '',
    processor,
    onChange = () => {},
}: TextareaProps) {
    const [value, _setValue] = useState(defaultValue);

    const setValue = (str: string) => {
      const newValue = processor ? processor(str) : str;
      _setValue(newValue);
      onChange(newValue);
    }


  return (
    <div className={Styles.container}>
        {title && <label className={Styles.label} htmlFor={name}>{title}</label>}
        <textarea
					className={classNames(Styles.textarea, {[Styles.resizable]: resizable})}
					placeholder={placeholder} 
					name={name} id={name} 
					onChange={(event) => setValue(event.target.value)} 
					value={value} 
				/>
    </div>
  )
}
