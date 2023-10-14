const Home = {
  async render () {
    return `
        <div class=home-container>
            <h1>Home Page</h1>
        </div>
        `;
  },

  async afterRender () {
    try {
      console.log ('after render');
    } catch (error) {
      console.log (error);
    }
  },
};

export default Home;
