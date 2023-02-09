import { useEffect, useState } from 'react'
import { Desktop } from './Desktop'
import styles from './header.module.css'
import { Mobile } from './Mobile'

export function Header() {
  const [activePage, setActivePage] = useState<string>('home')
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener('resize', () => setWidth(window.innerWidth))
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
