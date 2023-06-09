import Link from 'next/link';
import Navbar from './General/components/navbar';
import Layout from './General/components/Layout';
import { useState } from 'react';

const Contacto = () => {

  const [mail, setMail] = useState("")
  const [mensagem, setMesagem] = useState("")


  return (
    <Layout pageName={"Contacto"}>

      <div className="text-lg text-yellow-100 flex justify-center" style={{marginTop:"100px"}}>
        <div className="max-w-4xl">
          <p className="sobrenostexto">
          </p>
        </div>
      </div>
      <div class="container my-24 mx-auto md:px-6">
        <section class="mb-32">
          <div class="flex flex-wrap">
            <div class="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
              <h2 class="mb-6 text-3xl font-bold">Fala Connosco</h2>
              <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                Com Summer,podes encontrar de tudo, desde tendas, sacos de dormir, mesas e cadeiras, pranchas, entre outros. E o melhor de tudo, você tem a oportunidade de alugá-los por um período curto ou longo, o que lhe permite usufruir dos seus recursos sempre que precisar.
                Não hesite em entrar em contato connosco através dos nossos canais de comunicação.
                Estamos aqui para ajudá-lo durante todo o processo de aluguer.
                Lembre-se, o Verão é muito especial e alugar connosco é uma garantia de umas férias de sonho!

              </p>
              <p class="mb-2 text-neutral-500 dark:text-neutral-300">
                Matosinhos, Porto
              </p>
              <p class="mb-2 text-neutral-500 dark:text-neutral-300">
                + 01 234 567 89
              </p>
              <p class="mb-2 text-neutral-500 dark:text-neutral-300">
                info@gmail.com
              </p>
            </div>
            <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
              <form>
                <div class="relative mb-6" data-te-input-wrapper-init>
                  <input type="text"
                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleInput90" placeholder="Name" />
                  <form style={{ borderRadius: "15px", borderWidth: "3px", padding: "15px", borderColor: "black" }}>
                    <div style={{ flexDirection: "row" }}>
                      <div>Mail</div>
                      <input style={{ borderRadius: "5px", background: "#f7f7f7" }} type="email" onChange={(e) => setMail(e.target.value)} value={mail} required />
                    </div>
                    <div style={{ marginTop: "8px" }}>
                      <div>Mensagem</div>
                      <div >
                        <input style={{ borderRadius: "5px", background: "#f7f7f7", boxSizing: "border-box", }} type="textarea" onChange={...(e) => setMesagem(e.target.value)} value={mensagem} required />
                      </div>
                    </div>
                    <button onClick style={{ marginTop: "20px", borderRadius: "5px", backgroundColor: "lightgreen", display: "flex", justifyContent: "center" }} type='submit' >Submeter</button>
                  </form>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <div className="flex justify-center mt-4">
        <video className="w-3/4 md:w-1/2" autoPlay controls>
          <source src="/Images/Untitled.mp4" type="video/mp4" />
          Desculpe, o seu navegador não suporta o elemento de vídeo.
        </video>
      </div>
    </Layout>
  );
};

export default Contacto;
