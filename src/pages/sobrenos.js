import Link from 'next/link';
import Navbar from './General/components/navbar';
import Image from 'next/image';
import Layout from './General/components/Layout';


const Sobrenos = () => {
    return (
     
      <Layout pageName={"Sobrenos"}>


        <div className="h-screen text-lg text-black-200 flex justify-center" style={{marginTop:"150px"}}>
          <div className="max-w-4xl">
            <h1 className="text-center">Sobre Nós</h1>
            <p className="sobrenostexto" style={{ background: "orange", borderRadius: "10px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)" }}>
            ALUGUE SEU VERÃO é o lugar ideal para encontrar os melhores materiais de campismo e de praia para alugar. <br/> Nós oferecemos uma ampla gama de equipamentos para ajudá-lo a aproveitar ao máximo o seu verão e torná-lo inesquecível! O nosso local de armazenamento está localizado em Matosinhos, onde tudo é organizado para um fácil acesso.<br/>
  
              Somos uma equipa apaixonada por viagens, campismo, praia e aventura. E é por isso que decidimos criar este site para fornecer os melhores equipamentos aos nossos clientes, por preços acessíveis e com uma excelente qualidade. <br/> Ajudamos no planeamento das suas férias e garantimos que terá umas férias sem preocupações!
  
              <br/> Você pode encontrar de tudo, desde tendas, sacos de dormir, mesas e cadeiras, pranchas, entre outros. E o melhor de tudo, você tem a oportunidade de alugá-los por um período curto ou longo, o que lhe permite usufruir dos seus recursos sempre que precisar.
  
              Não hesite em entrar em contato connosco através dos nossos canais de comunicação. <br/> 
              Estamos aqui para ajudá-lo durante todo o processo de aluguer.
              <br/>
              Lembre-se, o Verão é muito especial e alugar connosco é uma garantia de umas férias de sonho!
            </p>
          </div>
        </div>

<div class="container mt-10 mx-auto md:px-6 ">
  <section class="mb-10 text-center">
    <h2 class="mb-12 text-3xl font-bold text-orange-600">
      Time do Verão
    </h2>

    <div class="lg:gap-xl-5 grid gap-x-6 md:grid-cols-5 lg:grid-cols-5">
      <div class="mb-5 lg:mb-0">
        <img class="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 w-[150px]" src="https://media.licdn.com/dms/image/D4E35AQEN6K3FSDdvWg/profile-framedphoto-shrink_400_400/0/1684356031421?e=1686412800&v=beta&t=4nMNxxEIRyDmFMG2VTEXCxoGPJG6jkb2ytpv3PXmeeA" alt="avatar" />
        <h5 class="mb-4 text-lg font-bold">Diogo Nunes</h5>
        <p class="mb-6">Fullstack Developer</p>
        <ul class="mx-auto flex list-inside justify-center">
          <a href="#!" class="px-2">
      
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              class="h-4 w-4 text-primary dark:text-primary-400">
              <path fill="currentColor"
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a href="#!" class="px-2">
     
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              class="h-4 w-4 text-primary dark:text-primary-400">
              <path fill="currentColor"
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
          </a>
          <a href="#!" class="px-2">
     
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              class="h-3.5 w-3.5 text-primary dark:text-primary-400">
              <path fill="currentColor"
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
          </a>
        </ul>
      </div>
      <div class="mb-12 lg:mb-0">
        <img class="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 w-[150px]" src="https://avatars.githubusercontent.com/u/68516755?v=4" alt="avatar" />
        <h5 class="mb-4 text-lg font-bold">Caroline Marques</h5>
        <p class="mb-6"> Product Owner <br/> Frontend </p>
        <ul class="mx-auto flex list-inside justify-center">
          <a href="#!" class="px-2">
      
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              class="h-4 w-4 text-primary dark:text-primary-400">
              <path fill="currentColor"
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a href="#!" class="px-2">
     
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              class="h-4 w-4 text-primary dark:text-primary-400">
              <path fill="currentColor"
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
          </a>
          <a href="#!" class="px-2">
     
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              class="h-3.5 w-3.5 text-primary dark:text-primary-400">
              <path fill="currentColor"
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
          </a>
        </ul>
      </div>
      <div class="mb-12 md:mb-0">
        <img class="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 w-[150px]" src="https://media.licdn.com/dms/image/D4D35AQF1YwZigs5z6A/profile-framedphoto-shrink_800_800/0/1685437947123?e=1686412800&v=beta&t=yQwaAPPaEaeV853YIc0_JPWs-r-8IenLyDc0XoVVZ7o" alt="avatar" />
        <h5 class="mb-4 text-lg font-bold">João Luis</h5>
        <p class="mb-6">Backend developer</p>
        <ul class="mx-auto flex list-inside justify-center">
          <a href="#!" class="px-2">
      
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              class="h-4 w-4 text-primary dark:text-primary-400">
              <path fill="currentColor"
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a href="#!" class="px-2">
     
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              class="h-4 w-4 text-primary dark:text-primary-400">
              <path fill="currentColor"
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
          </a>
          <a href="#!" class="px-2">
     
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              class="h-3.5 w-3.5 text-primary dark:text-primary-400">
              <path fill="currentColor"
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
          </a>
        </ul>
      </div>
      <div class="mb-12 md:mb-0">
        <img class="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 w-[150px]" src="https://media.licdn.com/dms/image/D4D03AQHUPCfixii7kw/profile-displayphoto-shrink_200_200/0/1682603561337?e=1691625600&v=beta&t=jmTY85jPQ5asrT4SxHVKdVtglQFvr_kck4XQixFIj-4" alt="avatar" />
        <h5 class="mb-4 text-lg font-bold">Iara Filipa</h5>
        <p class="mb-6">Web Designer</p>
        <ul class="mx-auto flex list-inside justify-center">
          <a href="#!" class="px-2">
      
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              class="h-4 w-4 text-primary dark:text-primary-400">
              <path fill="currentColor"
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a href="#!" class="px-2">
     
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              class="h-4 w-4 text-primary dark:text-primary-400">
              <path fill="currentColor"
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
          </a>
          <a href="#!" class="px-2">
     
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              class="h-3.5 w-3.5 text-primary dark:text-primary-400">
              <path fill="currentColor"
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
          </a>
        </ul>
      </div>
      <div class="mb-12 md:mb-0">
        <img class="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 w-[150px]" src="https://media.licdn.com/dms/image/D4E03AQGbPw4CoKepVQ/profile-displayphoto-shrink_200_200/0/1685812009181?e=1691625600&v=beta&t=S97IExdjl42cZpwAcqElb3WtzvuVC_MBg4tBpdFzNm4" alt="avatar" />
        <h5 class="mb-4 text-lg font-bold">Tomás </h5>
        <p class="mb-6">Web Designer</p>
        <ul class="mx-auto flex list-inside justify-center">
          <a href="#!" class="px-2">
      
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              class="h-4 w-4 text-primary dark:text-primary-400">
              <path fill="currentColor"
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a href="#!" class="px-2">
     
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              class="h-4 w-4 text-primary dark:text-primary-400">
              <path fill="currentColor"
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
          </a>
          <a href="#!" class="px-2">
     
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              class="h-3.5 w-3.5 text-primary dark:text-primary-400">
              <path fill="currentColor"
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
          </a>
        </ul>
      </div>
      
    </div>        <div className="flex justify-center mb-5 mt-4">
          <video className="w-3/4 md:w-1/2" autoPlay controls loop>
            <source src="/Images/Untitled.mp4" type="video/mp4" />
            Desculpe, o seu navegador não suporta o elemento de vídeo.
          </video>
        </div>
  </section>
 
</div>
 
      </Layout>
    );
  };
  
  export default Sobrenos;
