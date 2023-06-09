import '@/styles/globals.css'
import './Home/styles.css'
import "tw-elements/dist/css/tw-elements.min.css";
import { useEffect } from 'react';
import { Amatic_SC } from 'next/font/google';


export default function App({ Component, pageProps }) {

  useEffect(() => {
    const use = async () => {
      (await import('tw-elements')).default;
    };
    use();
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}