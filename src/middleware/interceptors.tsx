import $axios from 'plugins/axios';
import i18n from 'i18next';
import fp from 'lodash/fp';

const interceptor = () => {
  $axios.interceptors.request.use(response => fp.set(`headers.common.Accept-Language`, i18n.language, response));
};
export default interceptor;
