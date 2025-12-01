// src/components/Plans.js
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
    max-width: 600px;
    margin: 0 auto 50px;
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
          color: #4CAF50;
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

      /* Estilo específico para botão de link externo */
      &.external-link {
        background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
        color: white;
        
        &:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(76, 175, 80, 0.3);
          background: linear-gradient(135deg, #45a049 0%, #4CAF50 100%);
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
  }
`;

const Plans = () => {
  const plans = [
    {
      name: "Teste Gratuito",
      price: "R$ 0",
      period: "/7 dias",
      description: "Experimente todas as funcionalidades por 7 dias",
      features: [
        { text: "Todas as 4 ferramentas de IA", checked: true },
        { text: "Até 10 documentos gerados", checked: true, limit: "10" },
        { text: "Acesso à demo completa", checked: true },
        { text: "Suporte por email", checked: true },
        { text: "Sem cartão de crédito", checked: true }
      ],
      buttonText: "🚀 Começar Teste Grátis",
      buttonLink: "https://psicoassist.up.railway.app/accounts/login/",
      buttonType: "external-link",
      featured: false,
      note: "Após 7 dias, escolha um plano para continuar"
    },
    {
      name: "Psicólogo Individual",
      price: "R$ 89",
      period: "/mês",
      description: "Ideal para psicólogos autônomos e consultórios pequenos",
      features: [
        { text: "Todas as 4 ferramentas de IA", checked: true },
        { text: "Documentos ilimitados", checked: true },
        { text: "Suporte prioritário", checked: true },
        { text: "Backup automático", checked: true },
        { text: "Atualizações gratuitas", checked: true },
        { text: "Exportação em PDF", checked: true }
      ],
      buttonText: "Assinar Agora",
      buttonLink: "#",
      buttonType: "primary",
      featured: true,
      note: "Cobrança mensal, cancele quando quiser"
    },
    {
      name: "Estudante",
      price: "R$ 49",
      period: "/mês",
      description: "Para estudantes de psicologia em formação",
      features: [
        { text: "Todas as 4 ferramentas de IA", checked: true },
        { text: "Até 50 documentos/mês", checked: true, limit: "50" },
        { text: "Suporte básico", checked: true },
        { text: "Exemplos de casos clínicos", checked: true },
        { text: "Materiais educativos", checked: true }
      ],
      buttonText: "Plano Estudante",
      buttonLink: "#",
      buttonType: "secondary",
      featured: false,
      note: "Necessário comprovante de matrícula"
    }
  ];

  const handlePlanClick = (plan) => {
    if (plan.name === "Teste Gratuito") {
      // Redireciona diretamente para o login do Django
      window.open(plan.buttonLink, '_blank', 'noopener,noreferrer');
    } else if (plan.name === "Psicólogo Individual" || plan.name === "Estudante") {
      // Para planos pagos - pode abrir um modal ou redirecionar para checkout
      alert(`🚀 Obrigado pelo interesse no plano ${plan.name}! Em breve você poderá assinar diretamente pelo site.`);
      // Alternativa: redirecionar para página de checkout
      // window.location.href = `/checkout?plan=${encodeURIComponent(plan.name)}`;
    }
  };

  const handleContactClick = () => {
    alert('📧 Entre em contato para planos empresariais: contato@psicoassist.com.br\n📞 WhatsApp: (11) 99999-9999');
    // Alternativa: abrir email client
    // window.location.href = 'mailto:contato@psicoassist.com.br?subject=Orçamento para Clínica&body=Olá! Gostaria de solicitar um orçamento para minha clínica/instituição.';
  };

  return (
    <PlansSection id="plans">
      <div className="container">
        <h2>Planos Acessíveis</h2>
        <p className="section-subtitle">
          Escolha o plano ideal para sua prática clínica. Todos incluem acesso completo às 4 ferramentas de IA.
        </p>

        <div className="plans-container">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`plan-card ${plan.featured ? 'featured' : ''}`}
            >
              <div className="plan-header">
                <h3>{plan.name}</h3>
                <div className="price">
                  {plan.price}<span className="period">{plan.period}</span>
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

              <button
                className={`plan-button ${plan.buttonType}`}
                onClick={() => handlePlanClick(plan)}
              >
                {plan.buttonText}
              </button>
              
              {plan.note && (
                <p className="plan-note">{plan.note}</p>
              )}
            </div>
          ))}
        </div>

        <div className="enterprise-contact">
          <h3>👥 Precisa para sua clínica ou instituição?</h3>
          <p>
            Desenvolvemos planos personalizados para clínicas com múltiplos psicólogos, 
            universidades ou instituições de saúde. Entre em contato para uma proposta.
          </p>
          <button 
            className="plan-button secondary"
            onClick={handleContactClick}
          >
            👥 Solicitar Orçamento para Clínica
          </button>
        </div>
      </div>
    </PlansSection>
  );
};

export default Plans;