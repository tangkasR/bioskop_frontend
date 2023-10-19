import BioskopSource from '../../data/bioskop-source';
import '../templates/itemSidebar';
import UrlParser from '../../routes/url-parser.js';
const AddMovie = {
  async render () {
    return `
          <div class=dashboard-container>
            <sidebar-template></sidebar-template>
            <div class=dashboard-content>
              <div class="movie-content">
                <h1>Add FILM</h1>
                <div class="add-movie-wraper">
                  <form id="formAddMovie">
                    <label for="judul">Judul</label>
                    <input type="text" placeholder="Judul" id="judul" name="title"/>
                    <label for="gambar">Gambar</label>
                    <input type="file" class="custom-file-input" id="gambar" name="file"/>
                    <label for="tanggal_rilis">Tanggal Rilis</label>
                    <input type="date" id="tanggal_rilis" name="release_date"/>
                    <label for="tanggal_tayang">Tanggal Tayang</label>
                    <input type="date" id="tanggal_tayang" name="date_playing"/>
                    <button id="btnSaveMovie">Save</button>
                   </form>
                </div>
              </div>
            </div>
          </div>
          `;
  },

  async afterRender () {
    // menghilangkan navbar
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const liHomeNav = document.querySelectorAll('.homeNav');
    liHomeNav.forEach(item => {
      item.style.display = 'none';
    });

    // tambah movie
    const form = document.getElementById('formAddMovie');
    form.addEventListener('submit', onFormSubmit);
    async function onFormSubmit (event) {
      event.preventDefault();
      const data = new FormData(event.target);
      const dataObject = Object.fromEntries(data.entries());
      console.log(dataObject);

      try {
        const addNewMovie = await BioskopSource.addMovies(dataObject);
        console.log(addNewMovie);
        window.location.replace(`#/product`);
      } catch (error) {
        console.log(error.message);
      }
    }

    // eksekusi logout
    const btnLogout = document.querySelector('.logout');
    btnLogout.addEventListener('click', async () => {
      try {
        const logout = BioskopSource.logout(url.id);
        localStorage.removeItem('simpan_id');
        window.location.replace('#/login');
      } catch (error) {
        console.log(error);
      }
    });
  }
};

export default AddMovie;
