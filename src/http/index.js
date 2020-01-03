/**
 * api接口统一管理
 * import API from 'API'
 * Vue.prototype.$API = API
 * Vue.use(API)
 *
 * this.$API.Login()
 */
import {get, post} from './http';

export default {
  post(link, params) {
    return post(link, params);
  },
  get(link) {
    return get(link);
  },
};