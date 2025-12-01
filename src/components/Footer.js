import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #1a1a2e;
  color: white;
  padding: 60px 0 30px;

  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    margin-bottom: 40px;
  }

  .footer-section {
    h3 {
      color: #667eea;
      margin-bottom: 20px;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    p, a {
      color: #b3b3cc;
      line-height: 1.8;
      text-decoration: none;
      display: block;
      margin-bottom: 10px;
      transition: color 0.3s;

      &:hover {
        color: #667eea;
      }
    }

    .disclaimer {
      font-size: 0.85rem;
      color: #8a8aa3;
      margin-top: 15px;
      padding: 10px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 8px;
      border-left: 3px solid #667eea;
    }
  }

  .tech-stack {
    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 10px;

      span {
        background: rgba(102, 126, 234, 0.2);
        color: #8ab4f8;
        padding: 5px 10px;
        border-radius: 15px;
        font-size: 0.85rem;
        border: 1px solid rgba(102, 126, 234, 0.3);
      }
    }
  }

  .copyright {
    text-align: center;
    padding-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: #8a8aa3;
    font-size: 0.9rem;

    a {
      color: #667eea;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

function Footer() {
  const technologies = ['React', 'Node.js', 'OpenAI API', 'Railway', 'MongoDB'];

  return (
    <FooterContainer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🤖 Psico Assist AI</h3>
            <p>
              Assistente de IA desenvolvido especificamente para psicólogos clínicos, 
              focado em otimizar tarefas documentais e criar conteúdos personalizados.
            </p>
            <div className="disclaimer">
              ⚠️ Esta ferramenta auxilia o trabalho clínico, mas não substitui 
              o julgamento profissional.
            </div>
          </div>

          <div className="footer-section tech-stack">
            <h3>💻 Tecnologias</h3>
            <div className="tech-tags">
              {technologies.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
            <p style={{ marginTop: '20px' }}>
              Código aberto disponível no GitHub
            </p>
          </div>

          <div className="footer-section">
            <h3>🔗 Links</h3>
            <a href="#features">Funcionalidades de IA</a>
            <a href="#how-it-works">Como Funciona</a>
            <a href="#demo">Demo Gratuita</a>
            <a href="https://psicoassist.codertec.com.br/" target="_blank" rel="noopener noreferrer">
              Versão Anterior
            </a>
            <a href="https://github.com/marlevek/psico_app" target="_blank" rel="noopener noreferrer">
              Repositório GitHub
            </a>
          </div>
        </div>

        <div className="copyright">
          <p>
            &copy; {new Date().getFullYear()} Psico Assist AI. 
            Desenvolvido com ❤️ para psicólogos brasileiros.
          </p>
          <p>
            Este projeto é de código aberto. 
            <a href="https://github.com/marlevek/psico_app" target="_blank" rel="noopener noreferrer">
              Contribua no GitHub
            </a>
          </p>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;