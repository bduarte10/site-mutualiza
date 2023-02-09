import { useState } from 'react'
import { Desktop } from './Desktop'
import styles from './header.module.css'

export function Header() {
  const [activePage, setActivePage] = useState<string>('home')
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.navbar}>
          <div>
            <h1>LOGO</h1>
          </div>
          <Desktop
            activePage={activePage}
            setActivePage={setActivePage}
          />
        </div>
      </div>
    </header>
  )
}
