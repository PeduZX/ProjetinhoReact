import { useState } from "react";
import { ArrowRight, BriefcaseBusiness, Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import Header from "../components/Header.jsx";
import "../styles/Login.css";

function GoogleMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="google-mark">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.72 7.18l7.62 5.91c4.45-4.1 7.14-10.15 7.14-17.56Z" />
      <path fill="#FBBC05" d="M10.53 28.59A14.4 14.4 0 0 1 9.75 24c0-1.59.27-3.13.76-4.59l-7.98-6.19A23.9 23.9 0 0 0 0 24c0 3.87.93 7.53 2.56 10.78l7.97-6.19Z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.9-5.89l-7.62-5.91c-2.12 1.42-4.84 2.26-8.28 2.26-6.26 0-11.57-4.22-13.46-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48Z" />
    </svg>
  );
}

export default function Login() {
  const [mensagem, setMensagem] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setMensagem("A autenticação estará disponível assim que sua conta for conectada.");
  }

  return (
    <div className="login-page">
      <Header page="login" />

      <main className="login-main">
        <section className="login-intro" aria-label="Sobre o CurrilosLink">
          <div className="login-orb login-orb-one" />
          <div className="login-orb login-orb-two" />
          <div className="intro-content">
            <span className="intro-eyebrow"><BriefcaseBusiness size={15} /> SUA PRÓXIMA OPORTUNIDADE</span>
            <h1>Seu próximo passo começa <span>aqui.</span></h1>
            <p>Acesse sua conta e conecte seu talento às oportunidades que combinam com você.</p>
            <div className="intro-proof"><span className="proof-dot" /> Um espaço para talentos e empresas crescerem juntos</div>
          </div>
          <div className="intro-bottom">CURRILOSLINK <span>•</span> CONEXÕES QUE MOVEM CARREIRAS</div>
        </section>

        <section className="login-panel" aria-labelledby="login-title">
          <div className="login-form-wrap">
            <div className="login-heading">
              <span className="login-kicker">BEM-VINDO DE VOLTA</span>
              <h2 id="login-title">Entre na sua conta</h2>
              <p>Informe seus dados para continuar.</p>
            </div>

            <button className="google-button" type="button" onClick={() => setMensagem("O acesso com Google estará disponível quando a autenticação for configurada.")}>
              <GoogleMark />
              <span>Continuar com Google</span>
            </button>

            <div className="login-divider"><span>ou entre com seu e-mail</span></div>

            <form className="login-form" onSubmit={handleSubmit}>
              <label className="login-field">
                <span>E-mail</span>
                <div className="login-input-wrap">
                  <Mail size={18} aria-hidden="true" />
                  <input name="email" type="email" autoComplete="email" placeholder="voce@exemplo.com" required />
                </div>
              </label>
              <label className="login-field">
                <span>Senha</span>
                <div className="login-input-wrap">
                  <LockKeyhole size={18} aria-hidden="true" />
                  <input name="senha" type={mostrarSenha ? "text" : "password"} autoComplete="current-password" placeholder="Digite sua senha" required />
                  <button className="password-toggle" type="button" onClick={() => setMostrarSenha((visivel) => !visivel)} aria-label={mostrarSenha ? "Ocultar senha" : "Mostrar senha"}>
                    {mostrarSenha ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </label>

              <div className="login-options">
                <label className="remember-option"><input type="checkbox" name="lembrar" /> <span>Manter conectado</span></label>
                <button className="forgot-link" type="button" onClick={() => setMensagem("A recuperação de senha estará disponível quando a autenticação for configurada.")}>Esqueceu a senha?</button>
              </div>

              <button className="login-submit" type="submit">Entrar <ArrowRight size={17} /></button>
              {mensagem && <p className="login-message" role="status">{mensagem}</p>}
            </form>

            <p className="login-terms">Ao continuar, você concorda com nossos <a href="#termos">Termos de uso</a> e <a href="#privacidade">Política de privacidade</a>.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
