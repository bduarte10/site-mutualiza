
import { ButtonWhatsapp } from "@/components/ButtonWhatsapp";
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      {/* <Sobre/>
      <Contato/> */}
      <ButtonWhatsapp />
    </>
  )
}
