import React from 'react';
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;

  .logo {
    font-size: 28px;
    font-weight: 800;
    color: #667eea;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;

    .ai-badge {
      font-size: 12px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      padding: 4px 10px;
      border-radius: 20px;
    }
  }

  .nav-links {
    display: flex;
    gap: 30px;
    align-items: center;

    a {
      text-decoration: none;
      color: #333;
      font-weight: 500;
      transition: color 0.3s;
      position: relative;

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
    }

    .github-link {
      display: flex;
      align-items: center;
      gap: 8px;
      background: #f0f0f0;
      padding: 8px 15px;
      border-radius: 20px;
      margin-left: 20px;

      &:hover {
        background: #e0e0e0;
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

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
    }
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <Nav>
          <a href="/" className="logo">
            Psico Assist <span className="ai-badge">AI</span>
          </a>
          
          <div className="nav-links">
            <a href="#features">Funcionalidades</a>
            <a href="#workflow">Como Funciona</a>
            <a href="#plans">Planos</a>
            <a href="#demo">Demo</a>
            <a 
              href="https://github.com/marlevek/psico_app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-link"
            >
              <svg height="20" viewBox="0 0 16 16" width="20" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              Código
            </a>
          </div>
          
          <a href="#demo" className="header-btn">Teste Grátis</a>
        </Nav>
      </div>
    </HeaderContainer>
  );
}

export default Header;