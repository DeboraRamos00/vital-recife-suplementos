const template = document.createElement('template');
template.innerHTML = `
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