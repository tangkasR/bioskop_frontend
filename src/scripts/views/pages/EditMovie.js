import BioskopSource from '../../data/bioskop-source';
import '../templates/itemSidebar';
import UrlParser from '../../routes/url-parser.js';
const EditMovie = {
  async render () {
    return `
          <div class=dashboard-container>
            <sidebar-template></sidebar-template>
            <div class=dashboard-content>
              <div class="movie-content">
                <h1>Edit FILM</h1>
                <div class="add-movie-wraper">
                  <form id="formAddMovie">
                   </form>
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
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const liHomeNav = document.querySelectorAll('.homeNav');
    liHomeNav.forEach(item => {
      item.style.display = 'none';
    });

    const form = document.getElementById('formAddMovie');

    // render value
    const movie = await BioskopSource.getMoviesById(url.id);
    console.log(movie.title);
    const renderValue = `
    <label for="judul">Judul</label>
    <input type="text"  id="judul" name="title" value='${movie.title}' />
    <label for="gambar">Gambar</label>
    <input type="file" class="custom-file-input" id="gambar" name="file"/>
    <label for="tanggal_rilis">Tanggal Rilis</label>
    <input type="date" id="tanggal_rilis" name="release_date" value='${movie.release_date}' />
    <label for="tanggal_tayang">Tanggal Tayang</label>
    <input type="date" id="tanggal_tayang" name="date_playing" value='${movie.date_playing}' />
    <button id="btnSaveMovie">Save</button>
    <button id="btn-delete" class="btnDelete">Hapus</button>
    `;
    form.innerHTML = renderValue;

    // edit movie

    form.addEventListener('submit', onFormSubmit);
    async function onFormSubmit (event) {
      event.preventDefault();
      const data = new FormData(event.target);
      const dataObject = Object.fromEntries(data.entries());
      console.log(dataObject);

      try {
        const addNewMovie = await BioskopSource.editMovie(dataObject, url.id);
        console.log(addNewMovie);
        window.location.replace(`#/product`);
      } catch (error) {
        console.log(error.message);
      }
    }

    // delete movie
    document
      .getElementById('btn-delete')
      .addEventListener('click', async () => {
        const deleted = await BioskopSource.deleteMovie(url.id);
        console.log(deleted);
        window.location.replace('#/product');
      });

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
  }
};

export default EditMovie;
