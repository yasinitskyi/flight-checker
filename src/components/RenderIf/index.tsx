import React from 'react';
import { RenderIfProps } from './types';

export default function RenderIf({ value, children }: RenderIfProps) {
  return (
    <>
      {value && React.Children.map(children, (child) => child)}
    </>
  );
}
