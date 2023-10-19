import BioskopSource from '../../data/bioskop-source';

const Register = {
  async render () {
    return `
        <div class="register-msg">
        </div>
        <div class=register-container>
          <div class="register-wraper">
            <form class="form">
              <h1>Registrasi</h1>
              <label for="Name">Nama</label>
              <input type="text" placeholder="Nama" id="Name" name="name">
              <label for="email">Email</label>
              <input type="text" placeholder="email" id="email" name="email">
              <label for="password">Password</label>
              <input type="password" placeholder="password" id="password" name="password">
              <label for="confirmPassword">Konfirmasi Password</label>
              <input type="password" placeholder="Konfirmasi password" id="confirmPassword" name="confirmPassword">
              <div class=register-btn>
                  <button type="submit" id="btnRegister">Register</button>
                  <p>Sudah memiliki akun bisa login <a href="#/login">disini</a></p>
              </div>
            </form>
          </div>
        </div>
        `;
  },

  afterRender () {
    const form = document.querySelector('.form');
    const msgRegis = document.querySelector('.register-msg');
    msgRegis.style.display = 'none';
    form.addEventListener('submit', async event => {
      event.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);

      try {
        const result = await BioskopSource.register(data);
        console.log(data);
        if (result.msg) {
          msgRegis.classList.remove('success');
          msgRegis.style.display = 'flex';
          return (msgRegis.innerHTML = `<h3>${result.msg}</h3>`);
        }
        msgRegis.style.display = 'flex';
        msgRegis.classList.add('success');
        msgRegis.innerHTML = `<h3>Registrasi Berhasil</h3>`;
        window.location.replace('#/login');
        form.submit();
      } catch (error) {
        console.log(error);
      }
    });
  }
};

export default Register;
