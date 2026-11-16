import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import "../styles/Registration.css";

const UNIDADES_FEDERATIVAS = [
  "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará",
  "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso",
  "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná",
  "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte",
  "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo",
  "Sergipe", "Tocantins",
];

export default function CadastroUsuario() {
  const navigate = useNavigate();
  const [mensagem, setMensagem] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMensagem("Dados preenchidos. O envio ao banco será ativado quando o backend estiver conectado.");
  }

  return (
    <div className="page">
      <Header page="cadastro" />

      <main className="registration-main">
        <section className="registration-card">
          <div className="registration-overline">
            <span className="registration-step">ETAPA 1 DE 2</span>
            <span className="registration-overline-label">INFORMAÇÕES DA CONTA</span>
          </div>
          <h1 className="registration-title">Vamos criar seu perfil</h1>
          <p className="registration-description">
            Preencha seus dados pessoais. Depois, você poderá adicionar suas informações profissionais ao currículo.
          </p>

          <div className="registration-section-heading">
            <h2>Dados pessoais</h2>
            <p>Os campos com * são obrigatórios.</p>
          </div>

          <form className="registration-form" onSubmit={handleSubmit}>
            <label className="form-field form-field-wide">
              <span>Nome completo <b>*</b></span>
              <input name="nome" type="text" maxLength={299} autoComplete="name" placeholder="Ex.: Maria da Silva" required />
            </label>
            <label className="form-field">
              <span>CPF <b>*</b></span>
              <input name="cpf" type="text" inputMode="numeric" maxLength={14} placeholder="000.000.000-00" required />
            </label>
            <label className="form-field">
              <span>Telefone <b>*</b></span>
              <input name="telefone" type="tel" maxLength={20} autoComplete="tel" placeholder="(00) 00000-0000" required />
            </label>
            <label className="form-field">
              <span>Data de nascimento <b>*</b></span>
              <input name="dataNascimento" type="date" autoComplete="bday" required />
            </label>
            <label className="form-field">
              <span>Idade <b>*</b></span>
              <input name="idade" type="number" min="0" max="150" placeholder="Sua idade" required />
            </label>
            <label className="form-field">
              <span>Estado <b>*</b></span>
              <select name="unidadeFederativa" defaultValue="" required>
                <option value="" disabled>Selecione seu estado</option>
                {UNIDADES_FEDERATIVAS.map((estado) => <option key={estado} value={estado}>{estado}</option>)}
              </select>
            </label>
            <label className="form-field">
              <span>Cidade <b>*</b></span>
              <input name="cidade" type="text" maxLength={299} autoComplete="address-level2" placeholder="Sua cidade" required />
            </label>
            <div className="form-actions">
              <button className="btn-outline" type="button" onClick={() => navigate("/")}>Cancelar</button>
              <button className="btn-primary" type="submit">Cadastrar</button>
            </div>
            {mensagem && <p className="form-success" role="status">{mensagem}</p>}
          </form>
        </section>
      </main>
    </div>
  );
}

