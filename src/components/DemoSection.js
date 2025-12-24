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

  .demo-info h4 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 2rem;
    color: #333;
  }

    .demo-features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .demo-feature {
      background: #f8f9fa;
      border-radius: 12px;
      padding: 1.5rem;
      border: 1px solid #e9ecef;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .demo-feature:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    }

    .feature-header {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
    }

    .feature-emoji {
      font-size: 1.5rem;
      margin-right: 10px;
    }

    .feature-title {
      font-size: 1.1rem;
      font-weight: 600;
      margin: 0;
      color: #2c3e50;
    }

    .feature-items {
      padding-left: 1.5rem;
    }

    .feature-item {
      margin-bottom: 0.5rem;
      color: #495057;
      line-height: 1.5;
      position: relative;
    }

    .feature-item:before {
      content: "";
      position: absolute;
      left: -1.5rem;
      top: 0.7rem;
      width: 6px;
      height: 6px;
      background: #3498db;
      border-radius: 50%;
    }

    .platform-features {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-radius: 12px;
      padding: 1.5rem;
      margin-top: 2rem;
    }

    .platform-header {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
    }

    .platform-emoji {
      font-size: 1.5rem;
      margin-right: 10px;
    }

    .platform-title {
      font-size: 1.2rem;
      font-weight: 600;
      margin: 0;
      color: white;
    }

    .platform-items {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 0.75rem;
    }

    .platform-item {
      padding: 0.5rem 0;
      color: rgba(255, 255, 255, 0.9);
      position: relative;
      padding-left: 1.5rem;
    }

    .platform-item:before {
      content: "•";
      position: absolute;
      left: 0;
      color: white;
      font-size: 1.5rem;
    }


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
    window.open('https://psicoassist.up.railway.app/accounts/login/', '_blank');
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
            Acessar Demo
          </button>
        </div>

        <div className="demo-info">
          <h4>🤖 REVOLUCIONE SUA PRÁTICA COM IA</h4>

          <div className="demo-features-grid">
            <div className="demo-feature">
              <div className="feature-header">
                <span className="feature-emoji">1️⃣</span>
                <h5 className="feature-title">DOCUMENTAÇÃO INTELIGENTE</h5>
              </div>
              <div className="feature-items">
                <div className="feature-item">↳ Transforme anotações em relatórios profissionais</div>
                <div className="feature-item">↳ Análise automática de padrões de linguagem</div>
                <div className="feature-item">↳ Sugestões de diagnóstico em segundos</div>
              </div>
            </div>

            <div className="demo-feature">
              <div className="feature-header">
                <span className="feature-emoji">2️⃣</span>
                <h5 className="feature-title">PLANOS DE TRATAMENTO COM IA</h5>
              </div>
              <div className="feature-items">
                <div className="feature-item">↳ Crie planos personalizados em minutos</div>
                <div className="feature-item">↳ Metas realistas e mensuráveis</div>
                <div className="feature-item">↳ Acompanhamento visual do progresso</div>
              </div>
            </div>

            <div className="demo-feature">
              <div className="feature-header">
                <span className="feature-emoji">3️⃣</span>
                <h5 className="feature-title">EXERCÍCIOS TERAPÊUTICOS ÚNICOS</h5>
              </div>
              <div className="feature-items">
                <div className="feature-item">↳ Gerados para cada abordagem teórica</div>
                <div className="feature-item">↳ Personalizados por idade e tema</div>
                <div className="feature-item">↳ Prontos para usar na próxima sessão</div>
              </div>
            </div>

            <div className="demo-feature">
              <div className="feature-header">
                <span className="feature-emoji">4️⃣</span>
                <h5 className="feature-title">CONTEÚDO QUE ENGAJA</h5>
              </div>
              <div className="feature-items">
                <div className="feature-item">↳ Posts para redes sociais em 1 clique</div>
                <div className="feature-item">↳ Materiais educativos para pacientes</div>
                <div className="feature-item">↳ Artigos profissionais para seu blog</div>
              </div>
            </div>
          </div>

          <div className="platform-features">
            <div className="platform-header">
              <span className="platform-emoji">➕</span>
              <h5 className="platform-title">TUDO ISSO EM UMA PLATAFORMA:</h5>
            </div>
            <div className="platform-items">
              <div className="platform-item">• Gestão completa de pacientes</div>
              <div className="platform-item">• Dashboard com métricas em tempo real</div>
              <div className="platform-item">• Exportação profissional em PDF</div>
              <div className="platform-item">• Configurações do seu consultório</div>
            </div>
          </div>
        </div>

      </div>
    </DemoSection>
  );
}

export default DemoSectionComponent;