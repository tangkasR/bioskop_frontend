import BioskopSource from '../../data/bioskop-source';
import '../templates/itemSidebar';
const Dashboard = {
  async render () {
    return `
          <div class=dashboard-container>
            <sidebar-template></sidebar-template>
            <div class=dashboard-content>
              <div class="welcome-content">
                <h1>Dashboard</h1>
              </div>
            </div>
          </div>
          `;
  },

  async afterRender () {
    try {
      // get id admin
      const id = JSON.parse(localStorage.simpan_id);

      // menghilangkan navbar
      const liHomeNav = document.querySelectorAll('.homeNav');
      liHomeNav.forEach(item => {
        item.style.display = 'none';
      });

      // eksekusi logout
      const btnLogout = document.querySelector('.logout');
      try {
        btnLogout.addEventListener('click', async () => {
          try {
            const logout = BioskopSource.logout(id.id);
            localStorage.removeItem('simpan_id');
            console.log(logout);
            window.location.replace('#/login');
          } catch (error) {
            console.log(error);
          }
        });
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      alert('Login terlebih dahulu');
      window.location.replace('#/login');
    }
  }
};

export default Dashboard;
