import BioskopSource from '../../data/bioskop-source';
const Dashboard = {
  async render () {
    return `
          <div class=dashboard-container>
            <button class="logout">Logout</button>
            <h1>Dashboard Page</h1>
          </div>
          `;
  },

  async afterRender () {
    const liHomeNav = document.querySelectorAll ('.homeNav');
    liHomeNav.forEach (item => {
      item.style.display = 'none';
    });
    const btnLogout = document.querySelector ('.logout');
    try {
      btnLogout.addEventListener ('click', async () => {
        try {
          const logout = await BioskopSource.logout ();
          window.location.replace ('/');
        } catch (error) {
          console.log (error);
        }
      });
      console.log ('after render');
    } catch (error) {
      console.log (error);
    }
  },
};

export default Dashboard;
