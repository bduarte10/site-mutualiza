import { ButtonWhatsapp } from '@/components/ButtonWhatsapp'
import { Header } from '@/components/Header'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <ButtonWhatsapp />
    </>
  )
}
