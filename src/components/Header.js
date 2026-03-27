import React, { useState } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(102, 126, 234, 0.1);
`;

const Nav = styled.nav`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  padding: 20px 0;
  column-gap: 32px;

  .logo {
    font-size: 26px;
    font-weight: 800;
    color: #667eea;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;
    white-space: nowrap;

    .ai-badge {
      font-size: 12px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      padding: 4px 10px;
      border-radius: 20px;
    }

    @media (max-width: 768px) {
      font-size: 22px;

      .ai-badge {
        font-size: 10px;
        padding: 3px 8px;
      }
    }

    @media (max-width: 480px) {
      font-size: 20px;
    }
  }

  .nav-links {
    display: flex;
    justify-content: center;
    gap: 24px;
    align-items: center;
    margin: 0 12px;

    @media (max-width: 992px) {
      gap: 18px;
    }

    @media (max-width: 768px) {
      display: flex;
      position: fixed;
      top: 80px;
      left: 0;
      right: 0;
      background: white;
      flex-direction: column;
      gap: 0;
      padding: 20px 0;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
      transform: ${(props) => (props.$isMenuOpen ? 'translateY(0)' : 'translateY(-100%)')};
      opacity: ${(props) => (props.$isMenuOpen ? '1' : '0')};
      visibility: ${(props) => (props.$isMenuOpen ? 'visible' : 'hidden')};
      transition: all 0.3s ease;
      z-index: 999;
    }

    a {
      text-decoration: none;
      color: #333;
      font-weight: 500;
      transition: color 0.3s;
      position: relative;
      white-space: nowrap;
      font-size: 0.98rem;

      &:hover {
        color: #667eea;
      }

      &.active {
        color: #667eea;

        &::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          right: 0;
          height: 2px;
          background: #667eea;
          border-radius: 2px;
        }
      }

      @media (max-width: 768px) {
        width: 100%;
        text-align: center;
        padding: 15px 20px;
        border-bottom: 1px solid #f0f0f0;

        &:last-child {
          border-bottom: none;
        }

        &.active::after {
          display: none;
        }
      }
    }

  }

  .header-btn {
    display: inline-block;
    padding: 12px 30px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s ease;
    white-space: nowrap;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  .mobile-header-btn {
    display: none;

    @media (max-width: 768px) {
      display: inline-block;
      padding: 10px 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      border-radius: 30px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.3s ease;
      width: 90%;
      margin: 20px auto 0;
      text-align: center;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
      }
    }
  }

  @media (min-width: 1400px) {
    .nav-links {
      gap: 28px;
    }
  }

  @media (max-width: 1100px) {
    grid-template-columns: auto 1fr auto;
    column-gap: 20px;

    .logo {
      font-size: 24px;
    }

    .nav-links {
      gap: 16px;
      margin: 0;
    }

    .header-btn {
      padding: 12px 24px;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 28px;
  color: #667eea;
  cursor: pointer;
  padding: 5px;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <div className="container">
        <Nav $isMenuOpen={isMenuOpen}>
          <a href="/" className="logo">
            PsicoSense <span className="ai-badge">IA</span>
          </a>

          <MobileMenuButton onClick={toggleMenu} aria-label="Abrir ou fechar menu">
            {isMenuOpen ? '✕' : '☰'}
          </MobileMenuButton>

          <div className="nav-links">
            <a href="#features" onClick={closeMenu}>
              O que é
            </a>
            <a href="#migration" onClick={closeMenu}>
              Migração
            </a>
            <a href="#plans" onClick={closeMenu}>
              Para quem é
            </a>
            <a href="#faq" onClick={closeMenu}>
              FAQ
            </a>
            <a href="#plans" className="mobile-header-btn" onClick={closeMenu}>
              Começar teste grátis
            </a>
          </div>

          <a href="#plans" className="header-btn">
            Começar teste grátis
          </a>
        </Nav>
      </div>
    </HeaderContainer>
  );
}

export default Header;
