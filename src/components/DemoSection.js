import React from 'react';
import styled from 'styled-components';

const DemoSection = styled.section`
  padding: 100px 0;
  background: white;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #333;
  }

  p {
    font-size: 1.1rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto 40px;
    line-height: 1.8;
  }

  .demo-container {
    background: #f8f9fa;
    border-radius: 15px;
    padding: 50px;
    margin-top: 40px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  }

  .demo-info {
    margin-top: 30px;
    padding: 20px;
    background: #e9ecef;
    border-radius: 10px;
    text-align: left;
    max-width: 800px;
    margin: 30px auto 0;

    h4 {
      color: #4a6cf7;
      margin-bottom: 10px;
    }

    ul {
      list-style: none;
      padding-left: 0;

      li {
        padding: 5px 0;
        color: #555;

        &:before {
          content: "✓";
          color: #4a6cf7;
          font-weight: bold;
          margin-right: 10px;
        }
      }
    }
  }
`;

function DemoSectionComponent() {
  const handleDemoClick = () => {
    // Redireciona para o Railway (substitua pela URL real)
    window.open('https://psicoassist-app.up.railway.app', '_blank');
  };

  return (
    <DemoSection id="demo">
      <div className="container">
        <h2>Experimente Grátis</h2>
        <p>
          Teste todas as funcionalidades do Psico Assist por 14 dias sem compromisso. 
          Não é necessário cartão de crédito.
        </p>
        
        <div className="demo-container">
          <h3>Demo ao Vivo</h3>
          <p style={{ marginBottom: '30px' }}>
            Clique no botão abaixo para acessar a versão de demonstração completa
          </p>
          <button 
            onClick={handleDemoClick} 
            className="btn"
            style={{ 
              padding: '15px 50px',
              fontSize: '1.1rem'
            }}
          >
            Acessar Demo no Railway
          </button>
        </div>

        <div className="demo-info">
          <h4>O que você vai encontrar na demo:</h4>
          <ul>
            <li>Sistema completo de agendamento</li>
            <li>Prontuário eletrônico funcional</li>
            <li>Módulo de teleconsulta</li>
            <li>Gestão financeira básica</li>
            <li>Painel administrativo</li>
            <li>Área do paciente</li>
          </ul>
        </div>
      </div>
    </DemoSection>
  );
}

export default DemoSectionComponent;