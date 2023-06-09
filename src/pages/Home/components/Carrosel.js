import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Carrosel=(props) => {
    return (
        <div style={{ display: "flex", justifyContent: "end", padding: "50px"}}>
        <Carousel style={{display:"flex"}} autoPlay={true} interval={3000} infiniteLoop={true}>
        {props.images.map(item =>  <Image style={{height: props.height, display:"flex",borderRadius:"10px"}} src={item}/>)}
    
        </Carousel>
        
        </div>
    )
}
export default Carrosel