import React from 'react';
import styled from 'styled-components';

const WorkflowSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);

  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #333;
  }

  .section-subtitle {
    text-align: center;
    color: #555;
    font-size: 1.1rem;
    max-width: 760px;
    margin: 0 auto 50px;
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

    h3 {
      color: #333;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 1.1rem;
    }

    p {
      color: #666;
      font-size: 0.95rem;
    }
  }
`;

function Workflow() {
  const steps = [
    {
      number: '1',
      title: 'Excesso de tarefas manuais',
      description:
        'Ajuda a reduzir o tempo gasto com atividades operacionais repetitivas que tiram foco do atendimento.'
    },
    {
      number: '2',
      title: 'Dificuldade para organizar a rotina e os atendimentos',
      description:
        'Traz mais clareza para acompanhar demandas, materiais e processos da rotina clínica com menos dispersão.'
    },
    {
      number: '3',
      title: 'Falta de padronização',
      description:
        'Contribui para uma operação mais consistente, com apoio à organização de fluxos e entregas do dia a dia.'
    },
    {
      number: '4',
      title: 'Perda de tempo com processos repetitivos',
      description:
        'Apoia psicólogos e clínicas que precisam ganhar eficiência sem abrir mão da revisão e da qualidade profissional.'
    }
  ];

  return (
    <WorkflowSection id="workflow">
      <div className="container">
        <h2>O que o PsicoAssist ajuda a resolver</h2>
        <p className="section-subtitle">
          Veja os principais desafios que a solução ajuda a endereçar na rotina de
          psicólogos, consultórios e clínicas.
        </p>

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
          <h3>Importante: a tecnologia apoia, mas a decisão continua com o profissional</h3>
          <p>
            O PsicoAssist funciona como apoio operacional e assistente com IA. A revisão
            e a decisão clínica final continuam sempre com o psicólogo responsável.
          </p>
        </div>
      </div>
    </WorkflowSection>
  );
}

export default Workflow;
