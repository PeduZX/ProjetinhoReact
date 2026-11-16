import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import "../styles/Registration.css";

export default function CadastroCurriculo() {
  const navigate = useNavigate();
  const [mensagem, setMensagem] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMensagem("Currículo preenchido. A conexão com o banco será adicionada pelo backend.");
  }

  return (
    <div className="page">
      <Header page="curriculo" />
      <main className="registration-main">
        <section className="registration-card">
          <span className="badge-featured">CURRÍCULO PROFISSIONAL</span>
          <h1 className="registration-title">Conte sua experiência</h1>
          <p className="registration-description">
            Essas informações completam seu perfil e ajudam empresas a encontrar você.
          </p>

          <form className="registration-form" onSubmit={handleSubmit}>
            <label className="form-field form-field-wide">
              <span>Área ou função desejada</span>
              <input name="funcao" type="text" maxLength={299} placeholder="Ex.: Desenvolvedora Front-end" required />
            </label>
            <label className="form-field">
              <span>Situação profissional</span>
              <select name="situacao" defaultValue="" required>
                <option value="" disabled>Selecione sua situação</option>
                <option value="Buscando oportunidade">Buscando oportunidade</option>
                <option value="Disponível imediatamente">Disponível imediatamente</option>
                <option value="Empregado, aberto a propostas">Empregado, aberto a propostas</option>
                <option value="Freelancer">Freelancer</option>
              </select>
            </label>
            <label className="form-field">
              <span>Linguagens de programação</span>
              <input name="linguagemProgramacao" type="text" maxLength={299} placeholder="Ex.: JavaScript, Python" />
            </label>
            <label className="form-field form-field-wide">
              <span>Habilidades</span>
              <textarea name="habilidades" rows="4" maxLength={299} placeholder="Conte sobre suas principais habilidades" required />
            </label>
            <div className="form-actions">
              <button className="btn-outline" type="button" onClick={() => navigate("/perfil")}>Cancelar</button>
              <button className="btn-primary" type="submit">Cadastrar currículo</button>
            </div>
            {mensagem && <p className="form-success" role="status">{mensagem}</p>}
          </form>
        </section>
      </main>
    </div>
  );
}
