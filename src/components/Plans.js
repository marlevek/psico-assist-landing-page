import React from 'react';
import styled from 'styled-components';

const PlansSection = styled.section`
  padding: 100px 0;
  background: #f8faff;

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
    margin: 0 auto 18px;
  }

  .section-microcopy {
    text-align: center;
    color: #667085;
    font-size: 0.95rem;
    margin-bottom: 50px;
  }

  .plans-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .plan-card {
    background: white;
    border-radius: 20px;
    padding: 40px 30px;
    width: 100%;
    max-width: 350px;
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.1);
    transition: all 0.3s ease;
    position: relative;
    border: 2px solid transparent;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
      border-color: #667eea;
    }

    &.featured {
      border-color: #667eea;
      background: linear-gradient(135deg, #f8faff 0%, #ffffff 100%);

      &::before {
        content: 'MAIS POPULAR';
        position: absolute;
        top: -12px;
        left: 50%;
        transform: translateX(-50%);
        background: #667eea;
        color: white;
        padding: 6px 20px;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 600;
      }
    }

    .plan-header {
      text-align: center;
      margin-bottom: 30px;

      h3 {
        font-size: 1.8rem;
        color: #333;
        margin-bottom: 10px;
      }

      .price {
        font-size: 2.5rem;
        font-weight: 700;
        color: #667eea;
        margin-bottom: 5px;

        .period {
          font-size: 1rem;
          color: #666;
          font-weight: normal;
        }
      }

      .plan-description {
        color: #666;
        font-size: 0.95rem;
        line-height: 1.5;
      }
    }

    .features-list {
      list-style: none;
      padding: 0;
      margin: 30px 0;

      li {
        padding: 12px 0;
        border-bottom: 1px solid #eee;
        color: #555;
        display: flex;
        align-items: center;
        gap: 10px;

        &:last-child {
          border-bottom: none;
        }

        .check-icon {
          color: #4caf50;
          font-weight: bold;
        }

        .limit {
          display: inline-block;
          background: #e3f2fd;
          color: #1976d2;
          padding: 2px 8px;
          border-radius: 10px;
          font-size: 0.8rem;
          margin-left: auto;
        }
      }
    }

    .plan-button {
      width: 100%;
      padding: 15px;
      border: none;
      border-radius: 50px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      text-align: center;
      display: block;
      text-decoration: none;

      &.primary {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;

        &:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
        }
      }

      &.secondary {
        background: transparent;
        color: #667eea;
        border: 2px solid #667eea;

        &:hover {
          background: #667eea;
          color: white;
        }
      }

      &.external-link {
        background: linear-gradient(135deg, #4caf50 0%, #45a049 100%);
        color: white;

        &:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(76, 175, 80, 0.3);
          background: linear-gradient(135deg, #45a049 0%, #4caf50 100%);
        }
      }
    }

    .plan-note {
      font-size: 0.85rem;
      color: #888;
      text-align: center;
      margin-top: 15px;
      font-style: italic;
    }
  }

  .enterprise-contact {
    text-align: center;
    margin-top: 50px;
    padding: 30px;
    background: #f0f4ff;
    border-radius: 15px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;

    h3 {
      color: #333;
      margin-bottom: 15px;
    }

    p {
      color: #666;
      margin-bottom: 20px;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .plan-button {
      max-width: 360px;
      margin: 0 auto;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      border-radius: 50px;
      padding: 15px 24px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
      }
    }
  }
`;

const Plans = () => {
  const plans = [
    {
      name: 'Teste Gratuito',
      price: 'R$ 0',
      period: '/7 dias',
      description:
        'Para conhecer a plataforma e avaliar com calma como organizar sua rotina no PsicoSense.',
      features: [
        { text: 'Todas as 4 áreas de apoio com IA', checked: true },
        { text: 'Até 10 documentos gerados', checked: true, limit: '10' },
        { text: 'Acesso à demonstração completa', checked: true },
        { text: 'Suporte por email', checked: true },
        { text: 'Sem cartão de crédito', checked: true }
      ],
      buttonText: 'Começar teste grátis',
      buttonLink: 'https://app.psicosense.com.br/accounts/login/',
      buttonType: 'external-link',
      featured: false,
      note: 'Conheça a solução sem compromisso'
    },
    {
      name: 'Psicólogo Individual',
      price: 'R$ 89',
      period: '/mês',
      description:
        'Ideal para psicólogos(as) autônomos e consultórios que querem ganhar eficiência.',
      features: [
        { text: 'Todas as 4 áreas de apoio com IA', checked: true },
        { text: 'Documentos ilimitados', checked: true },
        { text: 'Suporte prioritário', checked: true },
        { text: 'Backup automático', checked: true },
        { text: 'Atualizações gratuitas', checked: true },
        { text: 'Exportação em PDF', checked: true }
      ],
      buttonText: 'Começar agora',
      buttonLink: 'https://app.psicosense.com.br/accounts/signup/?plano=profissional',
      buttonType: 'primary',
      featured: true,
      note: 'Cobrança mensal, com cancelamento a qualquer momento'
    },
    {
      name: 'Estudante',
      price: 'R$ 49',
      period: '/mês',
      description:
        'Para quem está em formação e quer estruturar melhor a rotina com apoio de IA.',
      features: [
        { text: '4 áreas de apoio com IA para estudo e estágio', checked: true },
        { text: 'Até 50 gerações por mês entre casos, atividades e materiais', checked: true, limit: '50' },
        { text: 'Suporte básico', checked: true },
        { text: 'Exemplos de casos clínicos para estudo', checked: true },
        { text: 'Materiais educativos e fichas para imprimir', checked: true }
      ],
      buttonText: 'Conhecer plano estudante',
      buttonLink: 'https://app.psicosense.com.br/accounts/signup/?plano=estudante',
      buttonType: 'secondary',
      featured: false,
      note: 'Necessário comprovante de matrícula'
    }
  ];

  const handlePlanClick = (plan) => {
    window.open(plan.buttonLink, '_blank', 'noopener,noreferrer');
  };

  const handleContactClick = () => {
    window.location.href =
      'mailto:suporte@codertec.com.br?subject=PsicoSense%20-%20Contato%20para%20cl%C3%ADnica&body=Ol%C3%A1%2C%20gostaria%20de%20falar%20sobre%20o%20PsicoSense%20para%20minha%20cl%C3%ADnica%20ou%20consult%C3%B3rio.';
  };

  return (
    <PlansSection id="plans">
      <div className="container">
        <h2>Para quem o PsicoSense serve</h2>
        <p className="section-subtitle">
          Indicado para psicólogos(as) individuais, clínicas, consultórios e profissionais
          em formação que precisam organizar melhor atendimentos, agenda, comunicação e
          rotina operacional.
        </p>
        <p className="section-microcopy">
          Comece sem precisar organizar tudo do zero e escolha a forma ideal de testar ou
          contratar o PsicoSense.
        </p>

        <div className="plans-container">
          {plans.map((plan, index) => (
            <div key={index} className={`plan-card ${plan.featured ? 'featured' : ''}`}>
              <div className="plan-header">
                <h3>{plan.name}</h3>
                <div className="price">
                  {plan.price}
                  <span className="period">{plan.period}</span>
                </div>
                <p className="plan-description">{plan.description}</p>
              </div>

              <ul className="features-list">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="check-icon">✓</span>
                    {feature.text}
                    {feature.limit && <span className="limit">{feature.limit}</span>}
                  </li>
                ))}
              </ul>

              <button className={`plan-button ${plan.buttonType}`} onClick={() => handlePlanClick(plan)}>
                {plan.buttonText}
              </button>

              {plan.note && <p className="plan-note">{plan.note}</p>}
            </div>
          ))}
        </div>

        <div className="enterprise-contact">
          <h3>Clínicas, consultórios e equipes</h3>
          <p>
            Se você precisa avaliar o PsicoSense para uma operação com múltiplos
            profissionais, fale com a CoderTec para entender a melhor forma de implantação.
          </p>
          <button className="plan-button secondary" onClick={handleContactClick}>
            Falar com a CoderTec sobre o PsicoSense
          </button>
        </div>
      </div>
    </PlansSection>
  );
};

export default Plans;
