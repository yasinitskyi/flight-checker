import Styles from './index.module.css';
import { ResponsiveGridProps } from './types';

export default function ResponsiveGrid({
	children,
}: ResponsiveGridProps) {
	return (
		<div className={Styles.grid}>{children}</div>
	)
}
