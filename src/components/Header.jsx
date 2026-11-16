import { useNavigate } from "react-router-dom";
import "../styles/Header.css";

const HEADER_CONTENT = {
  home: {
    links: [
      { label: "Entrar", to: "/login" },
      { label: "Cadastrar", to: "/cadastro-usuario" },
      { label: "Cadastrar currículo", to: "/cadastro-curriculo" },
      { label: "Perfil", to: "/perfil" },
    ],
  },
  login: {
    prompt: "Ainda não tem uma conta?",
    links: [{ label: "Criar perfil", to: "/cadastro-usuario" }],
  },
  cadastro: {
    links: [
      { label: "Entrar", to: "/login" },
      { label: "Voltar", to: "/" },
    ],
  },
  curriculo: {
    links: [
      { label: "Meu perfil", to: "/perfil" },
      { label: "Voltar", to: "/" },
    ],
  },
  perfil: {
    links: [
      { label: "Cadastrar currículo", to: "/cadastro-curriculo" },
      { label: "Início", to: "/" },
    ],
  },
};

export default function Header({ page = "home" }) {
  const navigate = useNavigate();
  const content = HEADER_CONTENT[page] ?? HEADER_CONTENT.home;

  return (
    <header className={`header header--${page}`}>
      <button
        className="logo"
        type="button"
        onClick={() => navigate("/")}
        aria-label="CurrilosLink, página inicial"
      >
        Currilos<span className="logo-accent">Link</span>
      </button>
      <nav className="nav" aria-label="Navegação principal">
        {content.prompt && <span className="header-prompt">{content.prompt}</span>}
        {content.links.map(({ label, to }) => (
          <button className="nav-link" key={to} type="button" onClick={() => navigate(to)}>
            {label}
          </button>
        ))}
      </nav>
    </header>
  );
}
