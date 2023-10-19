import BioskopSource from '../../data/bioskop-source';
const Home = {
  async render () {
    return `
        <div class=home-container>     
        <h1>FILM TAYANG</h1>
          <div class="loader-container-home">
            <div class="loader">
            </div>
          </div>
          <div class="wraper-content">
          </div>
        </div>
        `;
  },

  async afterRender () {
    // menampilkan loader
    const loader = document.querySelector('.loader-container-home');
    loader.style.display = 'block';

    try {
      const homeContent = document.querySelector('.wraper-content');
      const movies = await BioskopSource.getMovies();
      if (movies.length !== 0) {
        loader.style.display = 'none';
        movies.forEach(movie => {
          return (homeContent.innerHTML += `
          <div class="card">
          <h2>Judul: ${movie.title}</h2>
          <img src="${movie.url}" style="width:200px; height:200px; object-fit: cover;">
          <h5>Tanggal Rilis: ${movie.release_date}</h5>
          <h5>Tanggal Tayang: ${movie.date_playing}</h5>
          </div>
          `);
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
};

export default Home;
