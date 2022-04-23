/* eslint-disable no-bitwise */
/* eslint linebreak-style: ["error", "windows"] */
/* jslint bitwise: true */

import axios from 'axios';
import { toast } from 'react-toastify';
import { setToken, setNewuser } from './Auth';
import { API_BASE_LOGIN } from '../Apiconst/apiConstants';

const notify = () => toast.error('Неверный логин или пароль!', {
  position: 'top-center',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});

function Apilogin({ name, password }) {
  // eslint-disable-next-line no-empty
  if ((name === '') & (password === '')) {} else {
    axios
      .post(API_BASE_LOGIN, {
        name,
        password,
      })
      .then((response) => {
        console.log(response);
        if (response.data[1].token) {
          setToken(response.data[1].token);
          setNewuser(response.data[0].name);
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
        // eslint-disable-next-line no-lone-blocks
        { notify(); }
      });
  }
}

export default Apilogin;
