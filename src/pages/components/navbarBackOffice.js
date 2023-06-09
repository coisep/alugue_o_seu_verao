import Link from "next/link";

function NavbarBackOffice(props) {
  const handleClick = () => {
    localStorage.removeItem("token");
    window.location.href = `../home`;
  };

  return (
    <header>
      <nav className="navback flex justify-center" >
        <ul
          className="menu-backoffice flex center  pl-10"
          style={{ fontSize: "20px", fontWeight: "bold", marginTop: "20px" }}
        >
          <li className="nav-backoffice flex center  pl-10">
            <Link href="\home">Home</Link>
          </li>

          <li className="nav-backoffice flex center  pl-10">
            <Link href="\createArtigos">Criar Artigos</Link>
          </li>
          <li
            className="nav-backoffice flex center  pl-10"
            style={{ color: props.pageName === "backoffice" && "orange" }}
          >
            <Link href="\backoffice">Backoffice</Link>
          </li>
          <li
            className="nav-backoffice flex center  pl-10"
            style={{ color: props.pageName === "historico" && "orange" }}
          >
            <Link href="\historicobackoffice">Historico do Aluguer</Link>
          </li>
          <li>
            <button
              onClick={handleClick}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded nav-backoffice flex center  pl-10"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default NavbarBackOffice;
