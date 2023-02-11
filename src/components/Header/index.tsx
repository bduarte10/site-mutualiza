import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styles from './header.module.css'
import { Mobile } from './Mobile'

interface HeaderProps {
  width: number
}
export interface NavItem {
  label: string
  href: string
}
const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Contato', href: '/contato' },
]

export function Header({ width }: HeaderProps) {
  const [activePage, setActivePage] = useState<string>('home')
  const [windowWidth, setWindowWidth] = useState(width)
  const [color, setColor] = useState(false)
  const router = useRouter()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setColor(true)
      } else if (window.scrollY < 100 && color === true) {
        setColor(false)
      }
    })
  }, [])

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
    // seta a página ativa de acordo com a rota
    if (router.pathname === '/') {
      setActivePage('home')
    } else {
      setActivePage(router.pathname.split('/')[1])
      if (router.pathname.split('/')[1] === 'servicos') {
        setActivePage('serviços')
      }
      console.log(activePage)
    }
  }, [])
  const handleClick = (page: string) => {
    setActivePage(page)
  }

  return (
    <header className={`${styles.header} ${color ? styles.scroll : ''}`}>
      <div className="container">
        <div className={styles.navbar}>
          <div>
            <h1 className={styles.logo}>Logo</h1>
          </div>
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
            <button className={styles.button}>
              CONTE-NOS A SUA NECESSIDADE
            </button>
          </nav>

          {windowWidth < 768 && <Mobile />}
        </div>
      </div>
    </header>
  )
}
export const getServerSideProps: GetServerSideProps = async () => {
  let width = 1200
  try {
    width = window.innerWidth
  } catch (error) {
    width = 1200
  }

  return {
    props: {
      width,
    },
  }
}
