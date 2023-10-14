import API_ENDPOINT from '../globals/api-endpoint';

class BioskopSource {
  static async login (data) {
    try {
      const response = await fetch (API_ENDPOINT.ADMIN_LOGIN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify (data),
      });
      const responseJson = response.json ();
      return responseJson;
    } catch (error) {
      return responseJson.msg;
    }
  }
  static async register (data) {
    try {
      const response = await fetch (API_ENDPOINT.ADMIN_REGIS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify (data),
      });
      const responseJson = response.json ();
      return responseJson;
    } catch (error) {
      return responseJson.msg;
    }
  }
  static async logout () {
    try {
      const response = await fetch (API_ENDPOINT.ADMIN_LOGOUT, {
        method: 'DELETE'
      });
      return response;
    } catch (error) {
      return responseJson.msg;
    }
  }
}

export default BioskopSource;
