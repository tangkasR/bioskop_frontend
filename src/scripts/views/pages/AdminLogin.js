import BioskopSource from '../../data/bioskop-source';

const Login = {
  async render () {
    return `
      <div class="login-msg">
      </div>
      <div class=login-container>
        <div class="login-wraper">
            <form class="form" action="#/dashboard">
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
    const form = document.querySelector ('.form');
    const msgLogin = document.querySelector ('.login-msg');
    msgLogin.style.display = 'none';
    msgLogin.classList.remove ('success');
    form.addEventListener ('submit', async event => {
      event.preventDefault ();
      const formData = new FormData (form);
      const data = Object.fromEntries (formData);

      try {
        const result = await BioskopSource.login (data);
        console.log (result);

        if (result.msg) {
          msgLogin.style.display = 'flex';
          return (msgLogin.innerHTML = `<h3>${result.msg}</h3>`);
        }
        msgLogin.style.display = 'flex';
        msgLogin.classList.add ('success');
        msgLogin.innerHTML = `<h3>Login Berhasil</h3>`;
        form.submit ();
      } catch (error) {
        console.log (error);
      }
    });
  },
};

export default Login;
