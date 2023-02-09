import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Desktop } from './Desktop'
import styles from './header.module.css'
import { Mobile } from './Mobile'

export function Header({}) {
  const [activePage, setActivePage] = useState<string>('home')
  const [width, setWidth] = useState(1200)
  const router = useRouter()

  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener('resize', () => setWidth(window.innerWidth))
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
          {width >= 720 ? (
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
