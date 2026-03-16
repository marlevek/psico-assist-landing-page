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
    max-width: 720px;
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
    margin-left: auto;
    margin-right: auto;

    h3 {
      font-size: 1.8rem;
      font-weight: 700;
      margin-bottom: 2rem;
      color: #333;
      text-align: center;
    }
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
    border: 1px solid #dce3ea;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .demo-feature:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
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
    content: '';
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
    padding: 0.5rem 0 0.5rem 1.5rem;
    color: rgba(255, 255, 255, 0.9);
    position: relative;
  }

  .platform-item:before {
    content: '•';
    position: absolute;
    left: 0;
    color: white;
    font-size: 1.5rem;
  }
`;

function DemoSectionComponent() {
  const handleDemoClick = () => {
    window.open('https://psicoassist.up.railway.app/accounts/login/', '_blank', 'noopener,noreferrer');
  };

  return (
    <DemoSection id="demo">
      <div className="container">
        <h2>Solicite uma demonstração do PsicoAssist</h2>
        <p>
          Veja na prática como o PsicoAssist ajuda psicólogos e clínicas a organizar
          atendimentos, reduzir tarefas manuais e operar com mais eficiência.
        </p>

        <div className="demo-container">
          <h3>Demonstração prática</h3>
          <p style={{ marginBottom: '30px' }}>
            Acesse o ambiente de demonstração e conheça a solução em funcionamento.
          </p>
          <button
            onClick={handleDemoClick}
            className="btn"
            style={{
              padding: '15px 50px',
              fontSize: '1.1rem'
            }}
          >
            Acessar demonstração
          </button>
        </div>

        <div className="demo-info">
          <h3>Principais benefícios na rotina</h3>

          <div className="demo-features-grid">
            <div className="demo-feature">
              <div className="feature-header">
                <span className="feature-emoji">1.</span>
                <h4 className="feature-title">Mais organização</h4>
              </div>
              <div className="feature-items">
                <div className="feature-item">Melhor acompanhamento de atendimentos e tarefas.</div>
                <div className="feature-item">Mais clareza sobre o que precisa ser feito.</div>
                <div className="feature-item">Rotina clínica com menos dispersão.</div>
              </div>
            </div>

            <div className="demo-feature">
              <div className="feature-header">
                <span className="feature-emoji">2.</span>
                <h4 className="feature-title">Menos retrabalho</h4>
              </div>
              <div className="feature-items">
                <div className="feature-item">Apoio à padronização de processos recorrentes.</div>
                <div className="feature-item">Redução de tarefas operacionais repetitivas.</div>
                <div className="feature-item">Mais tempo para foco no atendimento.</div>
              </div>
            </div>

            <div className="demo-feature">
              <div className="feature-header">
                <span className="feature-emoji">3.</span>
                <h4 className="feature-title">Apoio com IA</h4>
              </div>
              <div className="feature-items">
                <div className="feature-item">Suporte na estruturação de documentos e materiais.</div>
                <div className="feature-item">Agilidade na preparação de conteúdos de apoio.</div>
                <div className="feature-item">Revisão final sempre com o profissional responsável.</div>
              </div>
            </div>

            <div className="demo-feature">
              <div className="feature-header">
                <span className="feature-emoji">4.</span>
                <h4 className="feature-title">Operação mais eficiente</h4>
              </div>
              <div className="feature-items">
                <div className="feature-item">Mais previsibilidade na rotina da clínica ou consultório.</div>
                <div className="feature-item">Melhor alinhamento entre atendimento e operação.</div>
                <div className="feature-item">Mais produtividade sem perder qualidade.</div>
              </div>
            </div>
          </div>

          <div className="platform-features">
            <div className="platform-header">
              <span className="platform-emoji">+</span>
              <h4 className="platform-title">Na prática, sua operação ganha:</h4>
            </div>
            <div className="platform-items">
              <div className="platform-item">Mais produtividade no dia a dia</div>
              <div className="platform-item">Menos retrabalho em processos repetitivos</div>
              <div className="platform-item">Apoio com automação e IA</div>
              <div className="platform-item">Mais clareza na rotina clínica</div>
            </div>
          </div>
        </div>
      </div>
    </DemoSection>
  );
}

export default DemoSectionComponent;
