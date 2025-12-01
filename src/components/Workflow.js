// src/components/Workflow.js
import React from 'react';
import styled from 'styled-components';

const WorkflowSection = styled.section`  // ← Nome alterado
  padding: 100px 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);

  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 50px;
    color: #333;
  }

  .steps-container {
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-width: 800px;
    margin: 0 auto;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: 30px;
      top: 0;
      bottom: 0;
      width: 2px;
      background: #667eea;
      opacity: 0.3;
    }
  }

  .step {
    display: flex;
    gap: 30px;
    align-items: flex-start;
    position: relative;

    .step-number {
      background: #667eea;
      color: white;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: bold;
      flex-shrink: 0;
      position: relative;
      z-index: 2;
    }

    .step-content {
      background: white;
      padding: 25px;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
      flex: 1;

      h3 {
        color: #333;
        margin-bottom: 10px;
        font-size: 1.3rem;
      }

      p {
        color: #666;
        line-height: 1.6;
      }
    }
  }

  .note-box {
    background: #fff9e6;
    border-left: 4px solid #ffd700;
    padding: 20px;
    border-radius: 10px;
    margin-top: 50px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;

    h4 {
      color: #333;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    p {
      color: #666;
      font-size: 0.95rem;
    }
  }
`;

function Workflow() {  // ← Nome da função alterado
  const steps = [
    {
      number: "1",
      title: "Acesse a Plataforma",
      description: "Faça login no Psico Assist AI através do seu navegador. Interface simples e intuitiva, sem necessidade de instalação."
    },
    {
      number: "2",
      title: "Escolha a Ferramenta",
      description: "Selecione qual assistente de IA você precisa: documentação, exercícios, planos ou conteúdo."
    },
    {
      number: "3",
      title: "Insira os Dados",
      description: "Forneça as informações básicas (anotações, abordagem, tema, etc.) para personalizar os resultados."
    },
    {
      number: "4",
      title: "Revise e Personalize",
      description: "Receba o conteúdo gerado pela IA e faça os ajustes finais conforme sua necessidade clínica."
    }
  ];

  return (
    <WorkflowSection id="workflow">  {/* ← Id alterado */}
      <div className="container">
        <h2>Como Funciona</h2>
        
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="note-box">
          <h4>⚠️ Importante: A IA é um Assistente, Não um Substituo</h4>
          <p>
            Todas as ferramentas geram conteúdos que devem ser revisados e validados 
            pelo profissional. A IA otimiza seu tempo, mas a decisão clínica final 
            é sempre do psicólogo.
          </p>
        </div>
      </div>
    </WorkflowSection>
  );
}

export default Workflow;  // ← Export com nome alterado