import React from 'react';
import styled from 'styled-components';

const FAQWrapper = styled.section`
  padding: 100px 0;
  background: #f8faff;

  h2 {
    text-align: center;
    font-size: 2.4rem;
    margin-bottom: 18px;
    color: #333;
  }

  .section-subtitle {
    text-align: center;
    color: #666;
    max-width: 760px;
    margin: 0 auto 50px;
    line-height: 1.8;
  }

  .faq-list {
    max-width: 860px;
    margin: 0 auto;
    display: grid;
    gap: 18px;
  }

  .faq-item {
    background: white;
    border-radius: 18px;
    padding: 28px 30px;
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.08);
    border: 1px solid rgba(102, 126, 234, 0.1);
  }

  h3 {
    font-size: 1.15rem;
    color: #333;
    margin-bottom: 10px;
  }

  p {
    color: #666;
    line-height: 1.8;
    margin: 0;
  }
`;

const questions = [
  {
    question: 'Consigo migrar de outro sistema para o PsicoAssist?',
    answer:
      'Sim. Você pode importar pacientes e agenda futura por arquivo CSV para começar mais rápido. Isso ajuda a evitar retrabalho e facilita a transição de outro sistema para o PsicoAssist.'
  },
  {
    question: 'Preciso cadastrar tudo manualmente ao começar?',
    answer:
      'Não necessariamente. Se você já tiver seus dados organizados em arquivo CSV, pode importar as informações essenciais e ganhar tempo no início do uso.'
  },
  {
    question: 'O PsicoAssist serve para quem quer organizar a rotina desde o primeiro dia?',
    answer:
      'Sim. A proposta é centralizar pacientes, agenda e operação clínica em um só lugar para que a adaptação aconteça com mais clareza e menos esforço desde o início.'
  }
];

function FAQSection() {
  return (
    <FAQWrapper id="faq">
      <div className="container">
        <h2>Perguntas frequentes</h2>
        <p className="section-subtitle">
          Entenda como funciona o início no PsicoAssist para quem quer organizar a rotina
          clínica com mais rapidez, inclusive na troca de sistema.
        </p>

        <div className="faq-list">
          {questions.map((item) => (
            <article key={item.question} className="faq-item">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </FAQWrapper>
  );
}

export default FAQSection;
