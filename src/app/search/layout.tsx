interface SearchLayoutProps {
    children: React.ReactNode,
}

export default function SearchLayout({
    children,
}: SearchLayoutProps) {
  return (
    <form>{children}</form>
  )
}
