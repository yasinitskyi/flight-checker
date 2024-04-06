import React from 'react';
import classNames from 'classnames';
import Styles from './index.module.css';
import { TypographyProps } from './types';

export default function Typography({
    tag,
    children,
    className,
}: TypographyProps) {
  return React.createElement(tag, {className: classNames(Styles[tag], className)}, children);
}
