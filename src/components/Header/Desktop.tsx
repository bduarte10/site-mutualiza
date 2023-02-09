import Link from 'next/link'

import styles from './header.module.css'

interface DesktopProps {
  activePage: string
  setActivePage: (page: string) => void
}
interface NavItem {
  label: string
  href: string
}
const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Contato', href: '/contato' },
]

export function Desktop({ activePage, setActivePage }: DesktopProps) {
  const handleClick = (page: string) => {
    setActivePage(page)
  }

  return (
    <nav className={styles.list}>
      {navItems.map((item) => (
        <Link
          className={
            activePage === item.label.toLowerCase() ? styles.active : ''
          }
          onClick={() => handleClick(item.label.toLowerCase())}
          key={item.label}
          href={item.href}>
          {item.label}
        </Link>
      ))}
      <button className={styles.button}>CONTE-NOS A SUA NECESSIDADE</button>
    </nav>
  )
}
