const template = document.createElement('template');
template.innerHTML = `
<style>
    .footer {
        margin-top: auto;
        background-color: var(--secondary-color, #1c1c1c);
        color: var(--text-color-light, #f9f9f9);
        padding: 40px 3rem; /* Padding generoso */
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        border-top: 3px solid var(--primary-color, #ccff00); /* Linha de destaque */
    }

    .footer ul {
        list-style: none;
        padding: 0;
        margin: 0 0 20px 0; /* Espaço após cada lista */
    }

    .footer a {
        color: var(--text-color-light, #f9f9f9);
        text-decoration: none;
        font-size: 1rem;
        transition: color 0.3s ease;
        font-weight: 500;
    }

    .footer a:hover {
        color: var(--primary-color, #ccff00);
    }

    /* === 1. LINKS PRINCIPAIS (Empilhados - UL) === */
    .footer > ul {
        /* Garante que os itens principais fiquem empilhados verticalmente */
        display: flex;
        flex-direction: column;
        gap: 8px; /* Espaço entre os links */
        max-width: 300px; /* Limita a largura para centralizar melhor */
        margin-bottom: 25px;
    }

    /* === 2. LINKS SOCIAIS (Lado a Lado - .social ul) === */
    .social ul {
        /* Transforma a lista social em horizontal */
        display: flex;
        justify-content: center;
        gap: 20px; /* Espaço entre os ícones/links sociais */
        margin-bottom: 25px;
    }
    
    .social a {
        /* Estilização específica para os links sociais */
        text-transform: uppercase;
        font-size: 0.9rem;
        padding: 0 5px;
    }

    /* === COPYRIGHT === */
    .footer p {
        font-size: 0.85rem;
        color: #777;
        margin-top: 15px;
    }

    /* === RESPONSIVIDADE === */
    @media (min-width: 768px) {
        .footer {
            /* Em telas maiores, coloca as duas listas e o copyright em linha para um layout de três colunas */
            display: grid;
            grid-template-areas: 
                "nav social copyright"
                "nav social copyright";
            grid-template-columns: 1fr 1fr auto; /* Distribui o espaço */
            text-align: left;
            padding: 40px 5rem;
        }

        .footer > ul {
            grid-area: nav;
            align-items: flex-start;
            margin-bottom: 0;
        }

        .social {
            grid-area: social;
            text-align: center;
        }
        
        .social ul {
            justify-content: center; /* Centraliza a lista horizontal no grid */
            margin-bottom: 0;
        }

        .footer p {
            grid-area: copyright;
            text-align: right;
            align-self: flex-end; /* Alinha o copyright no final da linha */
            margin: 0;
            padding-bottom: 5px; /* Alinhamento visual */
        }
    }

    @media (max-width: 767px) {
        .footer {
            padding: 30px 1.5rem;
        }
    }
</style>
<footer class="footer">
    <ul>
        <li><a href="/Sobre">Sobre Nós</a></li>
        <li><a href="/termos">Termos de Usuário</a></li>
        <li><a href="/politica">Política de Privacidade</a></li>
        <li><a href="/Contato">Contato</a></li>
    </ul>
    <div class="social">
        <ul>
            <li><a href="https://www.facebook.com/" target="_blank">Facebook</a></li>
            <li><a href="https://www.instagram.com/" target="_blank">Instagram</a></li>
            <li><a href="https://www.linkedin.com/" target="_blank">LinkedIn</a></li>
        </ul>
    </div>
    <p>&copy 2025</p>
</footer>
`;

class AppFooter extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('app-footer', AppFooter)