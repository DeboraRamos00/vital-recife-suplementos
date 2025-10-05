const template = document.createElement('template');
template.innerHTML = `
<style>
    .header {
        background-color: var(--secondary-color, #1c1c1c); 
        color: var(--text-color-light, #f9f9f9);
        display: flex;
        justify-content: space-between;
        align-items: center; 
        padding: 1.5rem 3rem; 
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
    }

    .logo {
        display: flex;
        align-items: center;
        gap: 0.75rem; 
        flex-shrink: 0; 
    }

    .logo img {
        height: 55px; 
        filter: drop-shadow(0 0 5px rgba(204, 255, 0, 0.4));
    }

    .logo a {
        font-size: 2rem; 
        font-weight: 700;
        color: var(--primary-color, #ccff00); 
        text-decoration: none;
        letter-spacing: 1px;
        line-height: 1.2; 
        text-transform: uppercase;
    }

    .main-nav ul {
        list-style: none;
        display: flex;
        gap: 3rem; 
        margin: 0;
        padding: 0;
    }

    .main-nav a {
        color: var(--text-color-light, #f9f9f9);
        text-decoration: none;
        font-size: 1.05rem; 
        text-transform: uppercase;
        padding: 0.5rem 0; 
        transition: color 0.3s ease, border-bottom 0.3s ease;
        font-weight: 500;
    }

    .main-nav a:hover {
        color: var(--primary-color, #ccff00);
    }

    /* === ESTILO FINAL: ÍCONE + TEXTO DE LOGIN === */
    .login-de-cadastro {
        flex-shrink: 0;
        display: flex;
        align-items: center; /* Alinha o SVG e o P no centro vertical */
        padding: 0.5rem 1rem; 
        cursor: pointer;
        border-radius: 4px;
        transition: background-color 0.3s ease;
        /* GARANTE QUE O BLOCO INTEIRO NÃO QUEBRE */
        white-space: nowrap; 
    }

    .login-de-cadastro svg {
        width: 30px;
        height: 30px;
        margin-right: 12px;
        fill: var(--primary-color, #ccff00);
    }

    .login-de-cadastro p {
        /* ESTILO DO TEXTO */
        display: flex; 
        flex-direction: column; 
        line-height: 1.2;
        margin: 0; 
        font-family: sans-serif;
    }
    
    .login-de-cadastro p a {
        /* LINKS */
        color: var(--text-color-light, #f9f9f9);
        text-decoration: none;
        font-weight: 600;
        font-size: 1rem;
        transition: color 0.3s ease;
    }
    
    .login-de-cadastro p a:hover {
        color: var(--primary-color, #ccff00);
    }
    
    .login-de-cadastro p:first-line {
        /* ESTILIZA A PRIMEIRA LINHA (Bem-vindo(a)!) */
        color: #aaa;
        font-size: 0.85rem;
    }
    
    .login-de-cadastro p .action-line {
        /* ESTILIZA A SEGUNDA LINHA (Entre ou Cadastre-se) */
        font-size: 1rem;
        font-weight: 600;
    }


    /* === RESPONSIVIDADE (MOBILE) === */
    @media (max-width: 992px) {
        .main-nav ul {
            gap: 1.5rem; 
        }
        .header {
            padding: 1.2rem 1.5rem;
        }
    }

    @media (max-width: 768px) {
        .header {
            justify-content: center;
            flex-wrap: wrap; 
            padding: 1rem 1.5rem;
        }
        
        .main-nav, .login-de-cadastro {
            display: none; 
        }

        .logo a {
            font-size: 1.5rem;
        }
        .logo img {
            height: 40px;
        }
    }
</style>
<header class="header">
    <div class="logo">
        <img src="../img/logo.png"></img>
        <a href="/home">Vital Suplementos</a>        
    </div>

    <nav class="main-nav">
        <ul>
            <li><a href="/visao geral">Visão Geral</a></li>
            <li><a href="/indicacao">Loja</a></li>
            <li><a href="/perfil">Indique e ganhe</a></li>
            <li><a href="/logout">Perfil</a></li>
        </ul>
    </nav>

    <div class="login-de-cadastro">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>
        <p>
            Bem-vindo(a)! 
            <span class="action-line">
                <a href="/login.html">Entre</a> ou <a href="/cadastro.html">Cadastre-se</a>
            </span>
        </p>
    </div>
</header>
`;

class AppHeader extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('app-header', AppHeader)