import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })
import Home from './home'
import Produto from './produto'
import Contacto from "./contacto"
import Login from './login'
import Sobrenos from './sobrenos'
 



export default function Index() {
  return (
    <>
    <Home/>
    </>
  )
}
