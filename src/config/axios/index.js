import axios from "axios";

axios.defaults.baseURL = process.env.DB_BASE_URL;
axios.defaults.headers["Content-Type"] = "application/json";
axios.defaults.headers["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.withCredentials = true;
axios.defaults.timeout = 60 * 1000;

axios.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {}
);

axios.interceptors.response.use(
  (res) => {
    Controls(res);
    return res;
  },
  (err) => {
    Controls(err.response);
    return err.response;
  }
);

const Controls = (res) => {
  if (res) {
    const { status, messages, data } = res?.data;
    switch (status) {
     
      case 201: {
        break;
      }
      case 400: {
        
        break;
      }
      case 401: {
        alert(401);
        break;
      }
      case 403: {
        break;
      }
      case 404: {
        alert(404);
        break;
      }
      case 500: {
        alert(500);
        break;
      }

      default:
        break;
    }
  }
};

export default axios;
