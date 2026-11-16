import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CadastroCurriculo.css";

const UNIDADES_FEDERATIVAS = [
  "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará",
  "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso",
  "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná",
  "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte",
  "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo",
  "Sergipe", "Tocantins",
];

export default function CadastroCurriculo() {
  const navigate = useNavigate();
  const [mensagem, setMensagem] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMensagem("Cadastro preenchido com sucesso!");
    event.currentTarget.reset();
  }

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

      <main className="registration-main">
        <section className="registration-card">
          <span className="badge-featured">NOVO PERFIL</span>
          <h1 className="registration-title">Crie seu perfil</h1>
          <p className="registration-description">
            Preencha seus dados para apresentar seu currículo às empresas.
          </p>

          <form className="registration-form" onSubmit={handleSubmit}>
            <label className="form-field form-field-wide">
              <span>Nome completo</span>
              <input name="nome" type="text" maxLength={299} autoComplete="name" placeholder="Ex.: Maria da Silva" required />
            </label>
            <label className="form-field">
              <span>CPF</span>
              <input name="cpf" type="text" inputMode="numeric" maxLength={14} placeholder="000.000.000-00" required />
            </label>
            <label className="form-field">
              <span>Telefone</span>
              <input name="telefone" type="tel" maxLength={20} autoComplete="tel" placeholder="(00) 00000-0000" required />
            </label>
            <label className="form-field">
              <span>Data de nascimento</span>
              <input name="dataNascimento" type="date" autoComplete="bday" required />
            </label>
            <label className="form-field">
              <span>Idade</span>
              <input name="idade" type="number" min="0" max="150" placeholder="Sua idade" required />
            </label>
            <label className="form-field">
              <span>Estado</span>
              <select name="unidadeFederativa" defaultValue="" required>
                <option value="" disabled>Selecione seu estado</option>
                {UNIDADES_FEDERATIVAS.map((estado) => <option key={estado} value={estado}>{estado}</option>)}
              </select>
            </label>
            <label className="form-field">
              <span>Cidade</span>
              <input name="cidade" type="text" maxLength={299} autoComplete="address-level2" placeholder="Sua cidade" required />
            </label>
            <div className="form-actions">
              <button className="btn-outline" type="button" onClick={() => navigate("/")}>Cancelar</button>
              <button className="btn-primary" type="submit">Criar cadastro</button>
            </div>
            {mensagem && <p className="form-success" role="status">{mensagem}</p>}
          </form>
        </section>
      </main>
    </div>
  );
}
