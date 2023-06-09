import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/pages/General/components/navbar'
import Footer from './Footer'


function Layout(props) {
  return (
    
    <div style={{display:"flex",width:"100%",height:"100hv",flexDirection:"column"}}>
        <Navbar pageName={props.pageName}/>
            {props.children}
            
            <Footer/>
            
    </div>
  )
}
export default Layout