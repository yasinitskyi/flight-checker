import { ReactHTML, ReactNode } from "react";

export interface TypographyProps {
	tag: keyof Pick<ReactHTML, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>
	children: ReactNode,
	className?: string,
}