import React from 'react';
import styled from 'styled-components';

const FeaturesSection = styled.section`
  padding: 100px 0;
  background: white;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #333;
  }

  .section-subtitle {
    text-align: center;
    color: #666;
    font-size: 1.1rem;
    max-width: 760px;
    margin: 0 auto 50px;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    margin-top: 50px;
  }

  .feature-card {
    background: #f8f9fa;
    border-radius: 15px;
    padding: 40px 30px;
    text-align: center;
    transition: all 0.3s ease;
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      border-color: #667eea;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #667eea, #764ba2);
    }

    .feature-icon {
      font-size: 3rem;
      margin-bottom: 25px;
      display: inline-block;
    }

    h3 {
      font-size: 1.5rem;
      margin-bottom: 15px;
      color: #333;
    }

    .feature-description {
      color: #666;
      line-height: 1.6;
      margin-bottom: 20px;
      font-size: 0.95rem;
    }

    .feature-details {
      text-align: left;
      background: white;
      padding: 15px;
      border-radius: 10px;
      margin-top: 15px;
      font-size: 0.9rem;

      strong {
        color: #667eea;
        display: block;
        margin-bottom: 5px;
      }

      ul {
        list-style: none;
        padding-left: 0;
        margin: 10px 0;

        li {
          padding: 5px 0;
          color: #555;

          &:before {
            content: '•';
            color: #667eea;
            font-weight: bold;
            margin-right: 10px;
          }
        }
      }
    }
  }
`;

const aiFeatures = [
  {
    icon: '🗂️',
    title: 'Organização da rotina clínica',
    description:
      'Centraliza informações importantes para acompanhar atendimentos, tarefas e próximos passos com mais clareza.',
    helps: [
      'Acompanhamento da rotina e dos atendimentos',
      'Registro de informações relevantes',
      'Mais previsibilidade no dia a dia clínico'
    ],
    benefits: ['Mais organização', 'Menos retrabalho', 'Rotina mais estruturada']
  },
  {
    icon: '⚙️',
    title: 'Automação de tarefas manuais',
    description:
      'Reduz o tempo gasto com processos repetitivos para que a equipe foque no atendimento e nas decisões importantes.',
    helps: [
      'Atividades operacionais repetitivas',
      'Fluxos internos que tomam tempo',
      'Padronização de etapas da rotina'
    ],
    benefits: ['Mais produtividade', 'Menos tarefas manuais', 'Operação mais eficiente']
  },
  {
    icon: '🤖',
    title: 'Apoio com IA na produção de materiais',
    description:
      'Oferece apoio na criação de documentos, exercícios e conteúdos, sempre com revisão final do profissional.',
    helps: [
      'Estruturação de documentos clínicos',
      'Criação de exercícios e materiais de apoio',
      'Apoio na preparação de conteúdos'
    ],
    benefits: ['Mais agilidade', 'Apoio com IA', 'Mais consistência na entrega']
  },
  {
    icon: '💬',
    title: 'Comunicação e operação mais alinhadas',
    description:
      'Ajuda a dar mais consistência à rotina, à comunicação e ao acompanhamento operacional em consultórios e clínicas.',
    helps: [
      'Padronização de processos internos',
      'Acompanhamento de demandas recorrentes',
      'Mais clareza para a equipe e para o profissional'
    ],
    benefits: ['Menos ruído operacional', 'Mais eficiência', 'Atendimento mais organizado']
  }
];

function AIFeatures() {
  return (
    <FeaturesSection id="features">
      <div className="container">
        <h2>O que é o PsicoAssist</h2>
        <p className="section-subtitle">
          O PsicoAssist é uma solução digital para psicólogos e clínicas, com foco em
          organização, produtividade, comunicação e apoio com IA para uma operação mais
          eficiente.
        </p>

        <div className="features-grid">
          {aiFeatures.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>

              <div className="feature-details">
                <strong>Ajuda com:</strong>
                <ul>
                  {feature.helps.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <strong>Benefícios:</strong>
                <ul>
                  {feature.benefits.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FeaturesSection>
  );
}

export default AIFeatures;
