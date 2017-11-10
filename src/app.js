import { setStore } from 'labrador-redux';
import store from './redux';

setStore(store);

export default class {
  globalData = {};

  async onLaunch() {}

  async getUserInfo() {}
}
