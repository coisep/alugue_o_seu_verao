import Link from 'next/link'
import Navbar from './General/components/navbar'
import carouselImagens from '@/imagens/home-carrosel/homecarousel'
import Carrosel from './Home/components/Carrosel'
import { useEffect } from 'react'
import Layout from './General/components/Layout'
import { Quicksand } from "next/font/google"

const Home = () => {

    return (


        
        <Layout pageName={"Home"}>
            <h1 className='fonte'></h1>

            
            <div style={{ height: "300px", width: "80%", position: "relative", zIndex: 1,  margin: "150px auto 0" }}>
            <Carrosel height={550} images={carouselImagens} />
        </div>


  
  <div style={{ position: "relative", zIndex: 5 }}>
    <p style={{ textAlign: "center", marginTop: "350px", marginBottom: "10px", fontFamily: "Quicksand, sans-serif", fontSize: "37px", color: "orange", fontWeight: "bolder" }}>
      Alguns dos nossos Produtos
    </p>
    <p style={{ textAlign: "center", marginBottom: "100px", fontSize:"24px", fontFamily: "Quicksand, sans-serif", color:"#262626", fontWeight: "bolder" }}>
      |    EM DESTAQUE    | 
    </p>
  </div>

        
            <div class="container mx-auto mb-16 px-12">
                <div class="grid grid-cols-4 gap-12">
                <div
                        
                        class="flex flex-col items-center h-fit w-fit rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <div class="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
                            <img class="rounded-t-lg w-80 h-80 pt-6 px-5" src=".\Images\Cadeiras_casal.jpg" alt=""  />
                            <a href="http://localhost:3000/produto" target='_blank'> 
                                <div
                                    class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                                </div>
                            </a>
                        </div>
                        <div class="p-6">
                            <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                              Cadeiras e Espreguiçadeiras 
                            </h5>
                            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                Apenas relaxe ..
                            </p>
                            <button type="button"
                                class="inline-block rounded-full border-2 border-warning px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-warning transition duration-150 ease-in-out hover:border-warning-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-warning-600 focus:border-warning-600 focus:text-warning-600 focus:outline-none focus:ring-0 active:border-warning-700 active:text-warning-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
                                Ver produtos
                            </button>
                        </div>
                    </div>

                    <div
                        
                        class="flex flex-col items-center h-fit w-fit rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <div class="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
                            <img class="rounded-t-lg w-80 h-80 pt-6 px-5" src=".\Images\guardasol.jpg" alt="guarda-sol"  />
                            <a href="#!">
                                <div
                                    class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                                </div>
                            </a>
                        </div>
                        <div class="p-6">
                            <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                              Guarda Sol  
                            </h5>
                            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                               Te ajudamos na tua proteção!
                            </p>
                            <button type="button"
                                class="inline-block rounded-full border-2 border-warning px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-warning transition duration-150 ease-in-out hover:border-warning-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-warning-600 focus:border-warning-600 focus:text-warning-600 focus:outline-none focus:ring-0 active:border-warning-700 active:text-warning-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
                                 Ver produtos
                            </button>
                        </div>
                    </div>

                    <div
                        
                        class="flex flex-col items-center h-fit w-fit rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <div class="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
                            <img class="rounded-t-lg w-80 h-80 pt-6 px-5" src="https://maiscasapt.b-cdn.net/wp-content/uploads/op70225-l_1_-860x860.jpg" alt=""  />
                            <a href="http://localhost:3000/produto" target='_blank'>
                                <div
                                    class="absolute  bottom-0 left-0 right-0 top-0 h-80 w-80 overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                                </div>
                            </a>
                        </div>
                        <div class="p-6">
                            <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                Panchas
                            </h5>
                            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                               Também alugamos a vossa diversão!
                            </p>

                            <button type="button"
                                class="inline-block rounded-full border-2 border-warning px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-warning transition duration-150 ease-in-out hover:border-warning-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-warning-600 focus:border-warning-600 focus:text-warning-600 focus:outline-none focus:ring-0 active:border-warning-700 active:text-warning-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
                                 Ver produtos
                            </button>
                        </div>
                    </div>
                    <div
                       class="flex flex-col items-center h-fit w-fit rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <div class="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
                            <img class="rounded-t-lg w-80 h-80 pt-6 px-5" src=".\Images\tenda.jpg" alt=""/>
                            <a href="http://localhost:3000/produto" target='_blank'>
                                <div
                                    class="absolute bottom-0 left-0 right-0 top-0 h-80 w-80 overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                                </div>
                            </a>
                        </div>
                        <div class="p-6">
                            <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                Tendas
                            </h5>
                            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                               .. se precisares descansar
                            </p>

                            <button type="button"
                                class="inline-block rounded-full border-2 border-warning px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-warning transition duration-150 ease-in-out hover:border-warning-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-warning-600 focus:border-warning-600 focus:text-warning-600 focus:outline-none focus:ring-0 active:border-warning-700 active:text-warning-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
                                 Ver produtos
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ position: "relative" }}>
  <div style={{ position: "fixed", top: "98%", right: "1rem", transform: "translateY(-50%)" }}>
    <a className="float-button" target="_blank" href="//">
      <i className="fa fa-whatsapp" aria-hidden="true"></i>
      <button>Fale conosco!</button>
    </a> 
  </div>
</div>




     <div class="container my-2 mx-auto md:px-2">
        <section class="mb-5 text-center"> 
    <div class="px-6 py-12 md:px-12">
      <a class="mb-2 inline-block rounded bg-orange-500 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal
       text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out
        hover:bg-orange-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
         focus:bg-orange-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
          focus:outline-none focus:ring-0 active:bg-orange-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),
            0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
        data-te-ripple-init data-te-ripple-color="light" href="http://localhost:3000/produto" role="button">Ver mais</a>
     
      <a class="mb-2 inline-block rounded bg-orange-500 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal
       text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out
        hover:bg-orange-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
         focus:bg-orange-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
          focus:outline-none focus:ring-0 active:bg-orange-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),
            0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
        data-te-ripple-init data-te-ripple-color="light" href="http://localhost:3000/contacto" role="button">Dúvidas?</a>
    </div>
  </section>
  
</div>
            

            


        </Layout>
    )

}
export default Home
