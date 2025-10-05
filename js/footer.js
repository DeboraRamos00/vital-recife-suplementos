const template = document.createElement('template');
template.innerHTML = `
<style>
  .footer {
    background-color: var(--secondary-color, #1c1c1c);
    color: var(--text-color-light, #f9f9f9);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 15rem;
    padding: 2rem 0 5rem;
    border-top: 3px solid var(--primary-color, #ccff00);
    position: relative;
    font-family: "Oswald", sans-serif;
  }

  .footer ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer ul li {
    margin: 0.5rem 0;
  }

  .footer a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
  }

  .footer a:hover {
    color: var(--primary-color, #ccff00);
  }

  /* Redes sociais (lado direito) */
  .social ul {
    text-align: left;
  }

  .social li {
    margin: 0.5rem 0;
  }

  /* Linha divisória central */
  .footer::before {
    content: "";
    position: absolute;
    top: 15%;
    bottom: 25%;
    width: 1px;
    background-color: #fff;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0.6;
  }

  /* Copyright centralizado */
  .footer p {
    position: absolute;
    bottom: 0.001rem;
    width: 100%;
    text-align: center;
    font-size: 0.9rem;
    color: #aaa;
  }

  /* Responsividade */
  @media (max-width: 768px) {
    .footer {
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
    }

    .footer::before {
      display: none;
    }

    .footer ul, .social ul {
      text-align: center;
    }

    .footer p {
      position: static;
      margin-top: 1rem;
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

  <p>&copy; 2025 Vital Suplementos</p>
</footer>
`;

class AppFooter extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('app-footer', AppFooter);