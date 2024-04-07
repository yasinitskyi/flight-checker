import React, { ReactNode } from 'react'
import useMountTransition from '@/hooks/useMountTransition';
import classNames from 'classnames';
import Styles from './index.module.css';

interface DrawerProps {
	show: boolean,
	children: ReactNode,
}

export default function Drawer({
	show,
	children,
}: DrawerProps) {
	const isMounted = useMountTransition(show);

	return (
		<>
			{(isMounted || show) && (
				<div className={classNames(Styles.floatingContainer, { [Styles.in]: isMounted, [Styles.visible]: show })}>
					<div className={classNames(Styles.drawer, { [Styles.in]: isMounted, [Styles.visible]: show })}>
						<div className={Styles.drawerContent}>
							{children}
						</div>
					</div>
					<div className={classNames(Styles.backdrop, { [Styles.in]: isMounted, [Styles.visible]: show })} />
				</div>
				)}
		</>
	)
}
