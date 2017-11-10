import {
  CHANGE_TITLE
} from './constants';

export function handleChangeTitle(data) {
  return {
    type: CHANGE_TITLE,
    data,
  };
}
