import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CadastroCurriculo() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <header className="header">
        <div
          className="logo"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Currilos<span className="logo-accent">Link</span>
        </div>
        <nav className="nav">
          <button className="nav-link">Entrar</button>
          <button className="nav-link" onClick={() => navigate("/")}>
            Voltar
          </button>
        </nav>
      </header>

      <div className="search-bar-wrap">
        <div className="search-bar">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Buscar" className="search-input" />
        </div>
      </div>
    </div>
  );
}