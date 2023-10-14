import CONFIG from './config';

const API_ENDPOINT = {
  ADMIN_LOGIN: `${CONFIG.BASE_URL}/login`,
  ADMIN_REGIS: `${CONFIG.BASE_URL}/register`,
  ADMIN_LOGOUT: `${CONFIG.BASE_URL}/logout`,
};

export default API_ENDPOINT;