"use client"

import Styles from './index.module.css';
import classNames from "classnames";
import { GenericButtonProps } from "../types";

export default function GenericButton({
  value,
  theme,
  children,
  form = '',
  disabled = false,
  type = "button",
  onClick = () => {},
}: GenericButtonProps) {
  return (
    <div className={Styles.container}>
      <button
        {...(form ? {form} : {})}
        className={classNames(Styles.button, Styles[theme])}
        type={type} 
        value={value}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  )
}
