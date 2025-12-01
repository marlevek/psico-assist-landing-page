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
    max-width: 600px;
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
            content: "•";
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
    icon: "📝",
    title: "Assistente de Documentação",
    description: "Gera resumos profissionais de sessões a partir de anotações ou transcrições de áudio.",
    details: {
      inputs: ["Anotações da sessão", "Transcrição de áudio", "Temas discutidos"],
      outputs: ["Resumo estruturado", "Pontos-chave", "Possíveis diagnósticos (CID-10/DSM-5)", "Padrões identificados"]
    }
  },
  {
    icon: "🏋️",
    title: "Gerador de Exercícios",
    description: "Cria tarefas personalizadas para pacientes baseadas na abordagem terapêutica.",
    details: {
      inputs: ["Abordagem (TCC, etc.)", "Tema da sessão", "Objetivos do paciente"],
      outputs: ["Exercícios personalizados", "Tarefas de casa", "Materiais educativos", "Instruções passo a passo"]
    }
  },
  {
    icon: "📊",
    title: "Revisor de Plano de Tratamento",
    description: "Ajuda a estruturar e revisar planos de tratamento de longo prazo.",
    details: {
      inputs: ["Metas do paciente", "Histórico clínico", "Abordagem preferida"],
      outputs: ["Plano estruturado", "Checklist de coerência", "Sugestões de técnicas", "Linha do tempo sugerida"]
    }
  },
  {
    icon: "✍️",
    title: "Criador de Conteúdo Educacional",
    description: "Produz rascunhos de conteúdos sobre saúde mental para seus canais.",
    details: {
      inputs: ["Tema específico", "Público-alvo", "Tom desejado"],
      outputs: ["Posts para redes sociais", "Textos educativos", "Artigo para Blog", "Material para Paciente", "Materiais para consultório"]
    }
  }
];

function AIFeatures() {
  return (
    <FeaturesSection id="features">
      <div className="container">
        <h2>Funcionalidades de IA</h2>
        <p className="section-subtitle">
          4 ferramentas poderosas de inteligência artificial desenvolvidas especificamente 
          para psicólogos clínicos
        </p>
        
        <div className="features-grid">
          {aiFeatures.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              
              <div className="feature-details">
                <strong>🎯 Entrada:</strong>
                <ul>
                  {feature.details.inputs.map((input, i) => (
                    <li key={i}>{input}</li>
                  ))}
                </ul>
                
                <strong>✨ Saída:</strong>
                <ul>
                  {feature.details.outputs.map((output, i) => (
                    <li key={i}>{output}</li>
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