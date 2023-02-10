import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Desktop } from './Desktop'
import styles from './header.module.css'
import { Mobile } from './Mobile'

interface HeaderProps {
  width: number
}

export function Header({ width }: HeaderProps) {
  const [activePage, setActivePage] = useState<string>('home')
  const [windowWidth, setWindowWidth] = useState(width)
  const router = useRouter()

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

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.navbar}>
          <div>
            <h1>Logo</h1>
          </div>
          {windowWidth >= 720 ? (
            <Desktop
              activePage={activePage}
              setActivePage={setActivePage}
            />
          ) : (
            <Mobile />
          )}
        </div>
      </div>
    </header>
  )
}
export const getServerSideProps: GetServerSideProps = async () => {
  let width = 0
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
