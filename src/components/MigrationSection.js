import React from 'react';
import styled from 'styled-components';

const MigrationWrapper = styled.section`
  padding: 100px 0;
  background: linear-gradient(180deg, #ffffff 0%, #f8faff 100%);

  h2 {
    text-align: center;
    font-size: 2.4rem;
    margin-bottom: 18px;
    color: #333;
  }

  .section-intro {
    text-align: center;
    color: #666;
    font-size: 1.08rem;
    max-width: 760px;
    margin: 0 auto 50px;
    line-height: 1.8;
  }

  .migration-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 24px;
  }

  .migration-card {
    background: white;
    border-radius: 18px;
    padding: 32px 28px;
    border: 1px solid rgba(102, 126, 234, 0.12);
    box-shadow: 0 12px 30px rgba(102, 126, 234, 0.08);
  }

  .card-icon {
    width: 52px;
    height: 52px;
    border-radius: 14px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 18px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    font-size: 1.35rem;
    font-weight: 700;
  }

  h3 {
    color: #333;
    font-size: 1.25rem;
    margin-bottom: 12px;
  }

  p {
    color: #666;
    line-height: 1.7;
    margin: 0;
  }
`;

const migrationCards = [
  {
    icon: '1',
    title: 'Importação simples',
    description:
      'Traga seus pacientes e sua agenda futura de forma prática, sem precisar cadastrar tudo manualmente.'
  },
  {
    icon: '2',
    title: 'Começo mais rápido',
    description:
      'Evite começar do zero. Organize sua rotina desde os primeiros dias de uso.'
  },
  {
    icon: '3',
    title: 'Migração com apoio',
    description:
      'Se precisar, você pode contar com suporte para facilitar a transição do seu sistema atual.'
  }
];

function MigrationSection() {
  return (
    <MigrationWrapper id="migration">
      <div className="container">
        <h2>Trocar de sistema não precisa ser complicado</h2>
        <p className="section-intro">
          Se você já usa outro sistema, o PsicoSense ajuda você a começar com tudo mais
          organizado. Importe pacientes e agenda futura por arquivo CSV e ganhe tempo na
          transição.
        </p>

        <div className="migration-grid">
          {migrationCards.map((card) => (
            <article key={card.title} className="migration-card">
              <div className="card-icon" aria-hidden="true">
                {card.icon}
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </MigrationWrapper>
  );
}

export default MigrationSection;
