import Link from 'next/link';
import Navbar from './General/components/navbar';
import Image from 'next/image';
import Layout from './General/components/Layout';


const Sobrenos = () => {
    return (
     
      <Layout pageName={"Sobrenos"}>


        <div className="h-screen text-lg text-black-200 flex justify-center" style={{marginTop:"150px"}}>
          <div className="max-w-5xl">
            <h1 className="text-center">Sobre Nós</h1>
            <p className="sobrenostexto">
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

<div class="container my-10 mx-auto md:px-6 ">
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
        
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-primary dark:text-primary-400"
              fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
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
        <img class="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 w-[150px]" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).jpg" alt="avatar" />
        <h5 class="mb-4 text-lg font-bold">Iara Filipa</h5>
        <p class="mb-6">Web Designer</p>
        <ul class="mx-auto flex list-inside justify-center">
          <a href="#!" class="px-2">
       
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              class="h-4 w-4 text-primary dark:text-primary-400">
              <path fill="currentColor"
                d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z" />
            </svg>
          </a>
          <a href="#!" class="px-2">
          
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              class="h-3.5 w-3.5 text-primary dark:text-primary-400">
              <path fill="currentColor"
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
          </a>
          <a href="#!" class="px-2">
          
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              class="h-4 w-4 text-primary dark:text-primary-400">
              <path fill="currentColor"
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </ul>
      </div>
      <div class="mb-12 md:mb-0">
        <img class="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 w-[150px]" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).jpg" alt="avatar" />
        <h5 class="mb-4 text-lg font-bold">Tomás </h5>
        <p class="mb-6">Web Designer</p>
        <ul class="mx-auto flex list-inside justify-center">
          <a href="#!" class="px-2">
       
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              class="h-4 w-4 text-primary dark:text-primary-400">
              <path fill="currentColor"
                d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z" />
            </svg>
          </a>
          <a href="#!" class="px-2">
          
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              class="h-3.5 w-3.5 text-primary dark:text-primary-400">
              <path fill="currentColor"
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
          </a>
          <a href="#!" class="px-2">
          
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              class="h-4 w-4 text-primary dark:text-primary-400">
              <path fill="currentColor"
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
