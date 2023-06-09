import Link from "next/link";
import Image from "next/image";
// import Logo from "../../../../public/Images/Logo laranja.png"

function Navbar(props) {
  return (
    <header>
      <div>
        <p style={{ backgroundColor: "#FFA500", padding: "10px" }}>
          {" "}
          +351-919063304
          <Link
            href="\login"
            style={{ float: "right", marginRight: "30px", color: "#FFA500" }}
          >
            {" "}
            <button className="bg-orange-400 hover:bg-orange-600 text-white font-bold py-0 px-4 rounded-lg ">
              {" "}
              Login/Criar Conta
            </button>
          </Link>
        </p>
      </div>

      <nav className="navbar_navbar_wrapper bg-gray-100 hover:bg-orange-100">
        {/* <Image src={Logo} style={{width:"450px", float:"left",marginTop:"50px",marginLeft:"30px"}}/>   */}
        <ul
          className="menu-bar"
          style={{ fontSize: "20px", fontWeight: "bold", marginTop: "00px", padding: "50px", padding: "50px" }}
        >
          <li
            className="menu-item"
            style={{ color: props.pageName === "Home" && "orange" }}
          >
            <Link href="\home">Home</Link>
          </li>
          <li
            className="menu-item"
            style={{ color: props.pageName === "Products" && "orange" }}
          >
            <Link href="\produto">Produtos</Link>
          </li>
          <li
            className="menu-item"
            style={{ color: props.pageName === "Contacto" && "orange" }}
          >
            <Link href="\contacto">Contacte-nos</Link>
          </li>
          <li>
            <Link
              href="\sobrenos"
              style={{ color: props.pageName === "Sobrenos" && "orange" }}
            >
              Sobre Nós
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
