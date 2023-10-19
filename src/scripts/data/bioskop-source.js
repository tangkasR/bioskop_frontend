import API_ENDPOINT from '../globals/api-endpoint';
import axios from 'axios';
class BioskopSource {
  static async login (data) {
    try {
      const response = await fetch(API_ENDPOINT.ADMIN_LOGIN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const responseJson = response.json();
      return responseJson;
    } catch (error) {
      return responseJson.msg;
    }
  }
  static async register (data) {
    try {
      const response = await fetch(API_ENDPOINT.ADMIN_REGIS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const responseJson = response.json();
      return responseJson;
    } catch (error) {
      return responseJson.msg;
    }
  }
  static async logout (id) {
    try {
      const response = await fetch(API_ENDPOINT.ADMIN_LOGOUT(id), {
        method: 'DELETE'
      });
      return response;
    } catch (error) {
      return responseJson.msg;
    }
  }
  static async getAdmin (id) {
    try {
      const response = await fetch(API_ENDPOINT.GET_ADMIN(id));
      const responseJson = response.json();
      return responseJson;
    } catch (error) {
      return responseJson.msg;
    }
  }
  static async getMovies () {
    try {
      const response = await fetch(API_ENDPOINT.GET_MOVIES);
      const responseJson = response.json();
      return responseJson;
    } catch (error) {
      return console.log(error);
    }
  }
  static async getMoviesById (id) {
    try {
      const response = await fetch(API_ENDPOINT.GET_MOVIES_BY_ID(id));
      const responseJson = response.json();
      return responseJson;
    } catch (error) {
      return console.log(error);
    }
  }
  static async addMovies (data) {
    try {
      const response = await axios.post(API_ENDPOINT.ADD_MOVIES, data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return response;
    } catch (error) {
      return console.log(error);
    }
  }
  static async deleteMovie (id) {
    try {
      const response = await await axios.delete(API_ENDPOINT.DELETE_MOVIES(id));
      return response;
    } catch (error) {
      return console.log(error);
    }
  }
  static async editMovie (data, id) {
    try {
      const response = axios.put(API_ENDPOINT.EDIT_MOVIES(id), data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return response;
    } catch (error) {
      return console.log(error);
    }
  }
}

export default BioskopSource;
