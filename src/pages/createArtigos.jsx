import Link from 'next/link';
import NavbarBackOffice from './components/navbarBackOffice';
import FormArtigos from './api/FormArtigos';

const Create = () => {
  return (
    <>
      <NavbarBackOffice />
      <FormArtigos />
    </>
  );
};

export default Create;
