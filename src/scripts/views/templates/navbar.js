class Navbar extends HTMLElement {
  constructor () {
    super();
  }

  connectedCallback () {
    this.render();
  }

  render () {
    this.innerHTML = `
        <nav>
            <div class="navbar-img">
                <img src="./logo.png" alt="logo" class="img">
            </div>
            <ul>
                <li class="homeNav"><a href="#">Home</a></li>
                <li class="homeNav"><a href="#">About</a></li>
                <li class="homeNav"><a href="#/login">Admin Login</a></li>
            </ul>
        </nav>
        `;
  }
}

customElements.define('navbar-template', Navbar);
