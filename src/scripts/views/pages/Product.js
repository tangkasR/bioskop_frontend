import BioskopSource from '../../data/bioskop-source';
import '../templates/itemSidebar';
const Product = {
  async render () {
    return `
          <div class=dashboard-container>
            <sidebar-template></sidebar-template>
            <div class=dashboard-content>
              <div class="loader-container">
                <div class="loader">
                </div>
              </div>
              <div class="product-content">
                <a href="#/addmovie" class="addBtn">Tambah</a>
                <h1>LIST FILM</h1>
                <div class="product-wraper">
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

    // product
    const movies = await BioskopSource.getMovies();
    if(movies.length !== 0){
      loader.style.display = 'none';
      const dataMovies = document.querySelector('.product-wraper');
      movies.forEach(movie => {
        dataMovies.innerHTML += `
        <div class="card">
          <h2>Judul: ${movie.title}</h2>
          <img src="${movie.url}" style="width:200px; height:200px; object-fit: cover;">
          <h5>Tanggal Rilis: ${movie.release_date}</h5>
          <h5>Tanggal Tayang: ${movie.date_playing}</h5>
          <div class="btn">
            <a class="btnEdit" href="#/editmovie/${movie.id}">Edit</a>
            
          </div>
        </div>
        `;
      });
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
    const ahrefProductLink = document.querySelector('.product');
    ahrefProductLink.classList.add('active');
  }
};

export default Product;
