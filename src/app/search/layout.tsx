import Styles from './index.module.css';

interface SearchLayoutProps {
    children: React.ReactNode,
}

export default function SearchLayout({
    children,
}: SearchLayoutProps) {
  return (
    <form className={Styles.form}>{children}</form>
  )
}
