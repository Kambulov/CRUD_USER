import {DispatchType, IUser} from '../../interfaces';

const setUser = (content: IUser) => {
  return {
    type: 'ADD_USER',
    content
  };
};

const addUser = (obj: IUser) => {
  return (dispatch: DispatchType) => {
    dispatch(setUser(obj));
  };
};

const deleteUser = (content: IUser) => {
  return (dispatch: DispatchType) => {
    dispatch({
      type: 'DELETE_USER',
      content
    });
  };
};

const changeUser = (content: IUser) => {
  return (dispatch: DispatchType) => {
    dispatch({
      type: 'CHANGE_USER',
      content
    });
  };
};

export {
  addUser,
  changeUser,
  deleteUser
};