import CONFIG from './config';

const API_ENDPOINT = {
  ADMIN_LOGIN: `${CONFIG.BASE_URL}/login`,
  ADMIN_REGIS: `${CONFIG.BASE_URL}/register`,
  ADMIN_LOGOUT: id => `${CONFIG.BASE_URL}/logout/${id}`,
  GET_ADMIN: id => `${CONFIG.BASE_URL}/getAdmin/${id}`,
  GET_MOVIES: `${CONFIG.BASE_URL}/movies`,
  GET_MOVIES_BY_ID: id => `${CONFIG.BASE_URL}/movies/${id}`,
  ADD_MOVIES: `${CONFIG.BASE_URL}/movies`,
  EDIT_MOVIES: id => `${CONFIG.BASE_URL}/movies/${id}`,
  DELETE_MOVIES: id => `${CONFIG.BASE_URL}/movies/${id}`
};

export default API_ENDPOINT;
