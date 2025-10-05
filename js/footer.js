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
    display: flex;
    align-items: center;
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
  
  .social a svg {
    width: 20px; 
    height: 20px; 
    margin-right: 8px; 
    fill: #fff; 
    transition: fill 0.3s ease;
  }

  .social a:hover svg {
    fill: var(--primary-color, #ccff00); /* Cor vibrante no hover */
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
      <li><a href="https://www.facebook.com/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M80 299.3l0 212.7 116 0 0-212.7 86.5 0 18-97.8-104.5 0 0-34.6c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2l0-88.7C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4l0 42.1-66 0 0 97.8 66 0z"/></svg>Facebook</a></li>
      <li><a href="https://www.instagram.com/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>Instagram</a></li>
      <li><a href="https://www.linkedin.com/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z"/></svg>LinkedIn</a></li>
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