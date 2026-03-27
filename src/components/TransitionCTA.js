import React from 'react';
import styled from 'styled-components';

const TransitionCTASection = styled.section`
  padding: 80px 0;
  background: #ffffff;

  .cta-box {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 24px;
    padding: 48px 36px;
    color: white;
    text-align: center;
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
  }

  h2 {
    font-size: 2.1rem;
    margin-bottom: 16px;
    line-height: 1.3;
  }

  p {
    max-width: 760px;
    margin: 0 auto 28px;
    font-size: 1.05rem;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.9);
  }

  .cta-note {
    display: block;
    margin-top: 16px;
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.82);
  }
`;

function TransitionCTA() {
  return (
    <TransitionCTASection>
      <div className="container">
        <div className="cta-box">
          <h2>Comece no PsicoSense sem perder tempo organizando tudo do zero</h2>
          <p>
            Se você já usa outro sistema, a migração dos dados essenciais ajuda a
            acelerar sua adaptação.
          </p>
          <a href="#plans" className="btn" style={{ background: '#ffd700', color: '#333' }}>
            Quero testar o PsicoSense
          </a>
          <span className="cta-note">
            Importação simples de pacientes e agenda futura para uma transição mais prática.
          </span>
        </div>
      </div>
    </TransitionCTASection>
  );
}

export default TransitionCTA;
