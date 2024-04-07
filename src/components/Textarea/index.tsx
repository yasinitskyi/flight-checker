"use client"

import {useState} from 'react';
import classNames from 'classnames';
import RenderIf from '@/components/RenderIf';
import { TextareaProps } from './types';
import Styles from './index.module.css';

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
        <RenderIf value={!!title}><label className={Styles.label} htmlFor={name}>{title}</label></RenderIf>
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
