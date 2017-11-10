import * as TYPES from './constants';
import immutable from 'seamless-immutable';

const initialState = immutable({
  title:'你好 小程序'
});

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case TYPES.CHANGE_TITLE:
      return state.setIn(['title'], action.data);
    default:
      return state;
  }
}
