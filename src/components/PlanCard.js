import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: white;
  border-radius: 15px;
  padding: 40px 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  position: relative;
  border: ${props => props.featured ? '2px solid #4a6cf7' : '2px solid transparent'};

  &:hover {
    transform: translateY(-10px);
  }

  .featured-badge {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: #4a6cf7;
    color: white;
    padding: 5px 20px;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 600;
  }

  h3 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 20px;
  }

  .price {
    font-size: 3rem;
    font-weight: 700;
    color: #4a6cf7;
    margin-bottom: 5px;

    .period {
      font-size: 1rem;
      color: #666;
    }
  }

  .features {
    list-style: none;
    margin: 30px 0;

    li {
      padding: 10px 0;
      border-bottom: 1px solid #eee;
      color: #555;

      &:last-child {
        border-bottom: none;
      }
    }
  }
`;

function PlanCard({ name, price, period, features, buttonText, featured }) {
    return (
        <Card featured={featured}>
            {featured && <div className="featured-badge">MAIS POPULAR</div>}
            <h3>{name}</h3>
            <div className="price">
                {price}<span className="period">{period}</span>
            </div>
            <ul className="features">
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <a
                href={featured ? "#" : "#"}
                className={`btn ${featured ? '' : 'btn-outline'}`}
            >
                {buttonText}
            </a>
        </Card>
    );
}

export default PlanCard;