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

    p,
    a {
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
            <h3>PsicoSense</h3>
            <p>
              Solução com IA e automação para psicólogos e clínicas que precisam organizar
              melhor a rotina, reduzir tarefas manuais e ganhar eficiência operacional.
            </p>
            <div className="disclaimer">
              O PsicoSense apoia a rotina clínica, mas não substitui o julgamento
              profissional do psicólogo responsável.
            </div>
          </div>

          <div className="footer-section tech-stack">
            <h3>Tecnologias</h3>
            <div className="tech-tags">
              {technologies.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h3>Links</h3>
            <a href="#features">O que é o PsicoSense</a>
            <a href="#migration">Migração</a>
            <a href="#workflow">O que ajuda a resolver</a>
            <a href="#plans">Para quem serve</a>
            <a href="#faq">Perguntas frequentes</a>
            <a href="#demo">Começar teste grátis</a>
            <a href="/sobre/">Sobre</a>
            <a href="/politica-de-privacidade/">Política de Privacidade</a>
            <a href="/termos-de-uso/">Termos de Uso</a>
            <a href="https://app.psicosense.com.br/accounts/login/" target="_blank" rel="noopener noreferrer">
              Ambiente de demonstração
            </a>
          </div>
        </div>

        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} PsicoSense. Desenvolvido para psicólogos e clínicas.</p>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;
