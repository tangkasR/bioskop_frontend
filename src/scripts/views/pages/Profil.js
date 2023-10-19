import BioskopSource from '../../data/bioskop-source';
import '../templates/itemSidebar';
const Profil = {
  async render () {
    return `
    <div class=dashboard-container>
      <sidebar-template></sidebar-template>
      <div class=dashboard-content>
        <div class="loader-container">
          <div class="loader">
          </div>
        </div>
        <div class="profil-content">
          <h1>PROFIL</h1>
          <div class="profil-wraper">
          </div>
        </div>
      </div>
    </div>
    `;
  },

  async afterRender () {
    // get id admin
    const id = JSON.parse(localStorage.simpan_id);
    // menghilangkan navbar
    const liHomeNav = document.querySelectorAll('.homeNav');
    liHomeNav.forEach(item => {
      item.style.display = 'none';
    });

    // menampilkan loader
    const loader = document.querySelector('.loader-container');
    loader.style.display = 'block';
    
    // profil
    try {
      const profilContent = document.querySelector('.profil-wraper');

      const profil = await BioskopSource.getAdmin(id.id);
      if (profil.length !== 0) {
        loader.style.display = 'none';
        const content = `
          <h4>Name: ${profil.admin.name}</h4>
          <h4>Email: ${profil.admin.email}</h4>
        `;

        profilContent.innerHTML = content;
      }
    } catch (error) {
      console.log(error);
    }

    // eksekusi logout
    const btnLogout = document.querySelector('.logout');
    btnLogout.addEventListener('click', async () => {
      try {
        const logout = BioskopSource.logout(id.id);
        localStorage.removeItem('simpan_id');
        window.location.replace('#/login');
      } catch (error) {
        console.log(error);
      }
    });

    // mengubah href parsing nilai
    const ahrefProductLink = document.querySelector('.profil');
    ahrefProductLink.classList.add('active');
  }
};

export default Profil;
