import { useState } from "react";
import Header from "../components/Header.jsx";
import "../styles/Perfil.css";

const CAMPOS_INICIAIS = {
  nome: "",
  idade: "",
  cpf: "",
  dataNascimento: "",
  telefone: "",
  unidadeFederativa: "",
  cidade: "",
  funcao: "",
  situacao: "",
  linguagemProgramacao: "",
  habilidades: "",
};

const CAMPOS_PESSOAIS = [
  ["nome", "Nome completo"],
  ["cpf", "CPF"],
  ["dataNascimento", "Data de nascimento"],
  ["idade", "Idade"],
  ["telefone", "Telefone"],
  ["unidadeFederativa", "Estado"],
  ["cidade", "Cidade"],
];

const UNIDADES_FEDERATIVAS = [
  "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal",
  "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul",
  "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí",
  "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia",
  "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins",
];

export default function Perfil() {
  const [perfil, setPerfil] = useState(CAMPOS_INICIAIS);
  const [rascunho, setRascunho] = useState(CAMPOS_INICIAIS);
  const [editando, setEditando] = useState(false);
  const [mensagem, setMensagem] = useState("");

  function iniciarEdicao() {
    setRascunho(perfil);
    setMensagem("");
    setEditando(true);
  }

  function atualizarCampo(event) {
    const { name, value } = event.target;
    setRascunho((atual) => ({ ...atual, [name]: value }));
  }

  function salvarPerfil(event) {
    event.preventDefault();
    setPerfil(rascunho);
    setEditando(false);
    setMensagem("Alterações guardadas nesta demonstração. A persistência será ligada ao backend.");
  }

  function cancelarEdicao() {
    setRascunho(perfil);
    setEditando(false);
    setMensagem("");
  }

  return (
    <div className="page">
      <Header page="perfil" />
      <main className="profile-main">
        <section className="profile-card">
          <div className="profile-topline">
            <div className="profile-avatar" aria-hidden="true">{perfil.nome ? perfil.nome.trim().slice(0, 1).toUpperCase() : "P"}</div>
            <div className="profile-heading">
              <span className="profile-kicker">MEU ESPAÇO</span>
              <h1>{perfil.nome || "Seu perfil"}</h1>
              <p>{perfil.funcao || "Adicione suas informações para apresentar seu perfil."}</p>
            </div>
            {!editando && <button className="btn-primary profile-edit" type="button" onClick={iniciarEdicao}>Editar informações</button>}
          </div>

          {mensagem && <p className="profile-message" role="status">{mensagem}</p>}

          {editando ? (
            <form className="profile-form" onSubmit={salvarPerfil}>
              <section className="profile-section">
                <h2>Dados pessoais</h2>
                <div className="profile-fields">
                  {CAMPOS_PESSOAIS.filter(([campo]) => campo !== "unidadeFederativa").map(([campo, rotulo]) => (
                    <label className={`form-field ${campo === "nome" ? "form-field-wide" : ""}`} key={campo}>
                      <span>{rotulo}</span>
                      <input
                        name={campo}
                        type={campo === "dataNascimento" ? "date" : campo === "idade" ? "number" : "text"}
                        value={rascunho[campo]}
                        onChange={atualizarCampo}
                        autoComplete={campo === "nome" ? "name" : campo === "telefone" ? "tel" : undefined}
                      />
                    </label>
                  ))}
                  <label className="form-field">
                    <span>Estado</span>
                    <select name="unidadeFederativa" value={rascunho.unidadeFederativa} onChange={atualizarCampo}>
                      <option value="">Selecione seu estado</option>
                      {UNIDADES_FEDERATIVAS.map((estado) => <option key={estado} value={estado}>{estado}</option>)}
                    </select>
                  </label>
                </div>
              </section>

              <section className="profile-section">
                <h2>Informações profissionais</h2>
                <div className="profile-fields">
                  <label className="form-field">
                    <span>Função</span>
                    <input name="funcao" value={rascunho.funcao} onChange={atualizarCampo} />
                  </label>
                  <label className="form-field">
                    <span>Situação profissional</span>
                    <input name="situacao" value={rascunho.situacao} onChange={atualizarCampo} />
                  </label>
                  <label className="form-field form-field-wide">
                    <span>Linguagens de programação</span>
                    <input name="linguagemProgramacao" value={rascunho.linguagemProgramacao} onChange={atualizarCampo} />
                  </label>
                  <label className="form-field form-field-wide">
                    <span>Habilidades</span>
                    <textarea name="habilidades" rows="4" value={rascunho.habilidades} onChange={atualizarCampo} />
                  </label>
                </div>
              </section>

              <div className="form-actions">
                <button className="btn-outline" type="button" onClick={cancelarEdicao}>Cancelar</button>
                <button className="btn-primary" type="submit">Guardar alterações</button>
              </div>
            </form>
          ) : (
            <div className="profile-details">
              <section className="profile-section">
                <h2>Dados pessoais</h2>
                <dl className="profile-fields">
                  {CAMPOS_PESSOAIS.map(([campo, rotulo]) => (
                    <div className="profile-detail" key={campo}>
                      <dt>{rotulo}</dt>
                      <dd>{perfil[campo] || "Não informado"}</dd>
                    </div>
                  ))}
                </dl>
              </section>
              <section className="profile-section">
                <h2>Informações profissionais</h2>
                <dl className="profile-fields">
                  {[["funcao", "Função"], ["situacao", "Situação"], ["linguagemProgramacao", "Linguagens de programação"], ["habilidades", "Habilidades"]].map(([campo, rotulo]) => (
                    <div className="profile-detail" key={campo}>
                      <dt>{rotulo}</dt>
                      <dd>{perfil[campo] || "Não informado"}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
