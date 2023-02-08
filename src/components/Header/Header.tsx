import Link from 'next/link'
import styles from './header.module.css'

export function Header() {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/sobre">sobre</Link>
      <Link href="/servicos">servicos</Link>
    </>
  )
}
