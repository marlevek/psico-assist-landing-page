import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  padding: 100px 0;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none"><path d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z" fill="white"/></svg>');
    background-size: 100% 50px;
    background-position: bottom;
    background-repeat: no-repeat;
  }

  .container {
    position: relative;
    z-index: 2;
  }

  h1 {
    font-size: 3.5rem;
    margin-bottom: 20px;
    line-height: 1.2;
    
    span {
      color: #ffd700;
    }
  }

  .subtitle {
    font-size: 1.5rem;
    margin-bottom: 30px;
    opacity: 0.9;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  p {
    font-size: 1.2rem;
    opacity: 0.8;
    max-width: 700px;
    margin: 0 auto 40px;
  }

  .cta-buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-top: 40px;
    flex-wrap: wrap;
  }

  .ai-badge {
    display: inline-block;
    background: rgba(255, 255, 255, 0.2);
    padding: 8px 20px;
    border-radius: 30px;
    font-size: 0.9rem;
    margin-bottom: 30px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

function Hero() {
  return (
    <HeroSection>
      <div className="container">
        <div className="ai-badge">
          🤖 Plataforma com Inteligência Artificial
        </div>
        <h1>Assistente de IA para <span>Psicólogos</span></h1>
        <div className="subtitle">
          Automatize tarefas burocráticas e foque no que realmente importa: seu paciente
        </div>
        <p>
          O Psico Assist AI utiliza inteligência artificial para ajudar psicólogos 
          a redigir documentos, criar exercícios personalizados e otimizar o tempo 
          de trabalho clínico.
        </p>
        <div className="cta-buttons">
          <a href="#demo" className="btn" style={{ background: '#ffd700', color: '#333' }}>
            🎯 Experimentar Demo Gratuita
          </a>
          <a href="#features" className="btn btn-outline" style={{ borderColor: '#ffd700', color: '#ffd700' }}>
            📋 Ver Funcionalidades
          </a>
        </div>
      </div>
    </HeroSection>
  );
}

export default Hero;