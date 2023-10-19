class Sidebar extends HTMLElement {
  constructor () {
    super();
  }

  connectedCallback () {
    this.render();
  }

  render () {
    this.innerHTML = `
      <button class="logout">Logout</button>

      <div class="sidebar">
        <div class="product">
          <a href="#/product" class="a-product">Product</a>
        </div>
        <div class="profil">
          <a href="#/profil" class="a-profil">Profil</a>
        </div>
      </div>
      
          `;
  }
}

customElements.define('sidebar-template', Sidebar);
