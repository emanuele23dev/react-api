import reactLogo from "../assets/react.svg";
import "../components/AppHeader.css";
export default function AppHeader() {
  return (
    <nav className="navbar navbar-expand navbar-dark">
      <div className="nav navbar-nav">
        <a className="nav-item nav-link active" href="#" aria-current="page">
          Home <span className="visually-hidden">(current)</span>
        </a>
        <a className="nav-item nav-link" href="#">
          Blog
        </a>
        <img src={reactLogo} alt="" />
      </div>
    </nav>
  );
}
