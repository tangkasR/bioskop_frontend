import BioskopSource from '../../data/bioskop-source';

const Login = {
  async render () {
    return `
      <div class="login-msg">
      </div>
      <div class=login-container>
        <div class="login-wraper">
            <form class="form">
              <h1>Login</h1>
              <label for="email">Email</label>
              <input type="text" placeholder="email" id="email" name="email">
              <label for="password">Password</label>
              <input type="password" placeholder="password" id="password" name="password">
              <div class="login-btn">
                  <button type="submit" id="btnLogin">Login</button>
                  <p>Tidak memiliki akun bisa registrasi <a href="#/register">disini</a></p>
              </div>
            </form>
        </div>
      </div>
      `;
  },

  async afterRender () {
    const form = document.querySelector('.form');
    const msgLogin = document.querySelector('.login-msg');
    msgLogin.style.display = 'none';
    msgLogin.classList.remove('success');
    document
      .getElementById('btnLogin')
      .addEventListener('click', async event => {
        event.preventDefault();
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        const data = {
          email: email,
          password: password
        };
        const result = await BioskopSource.login(data);

        if (result.msg) {
          msgLogin.style.display = 'flex';
          return (msgLogin.innerHTML = `<h3>${result.msg}</h3>`);
        }
        msgLogin.style.display = 'flex';
        msgLogin.classList.add('success');
        msgLogin.innerHTML = `<h3>Login Berhasil</h3>`;
        const id = result.admin.id;

        // simpan id di local storage
        const myObj = {
          id: id
        };
        const myObj_string = JSON.stringify(myObj);
        localStorage.setItem('simpan_id', myObj_string);

        window.location.replace(`#/dashboard`);
      });

    // menampilkan navbar
    const liHomeNav = document.querySelectorAll('.homeNav');
    liHomeNav.forEach(item => {
      item.style.display = 'flex';
    });
  }
};

export default Login;
