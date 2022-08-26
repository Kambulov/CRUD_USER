import {INITIAL_STATE} from '../../../const';
import {IUser, UserActions} from '../../../interfaces';

const userReducer = (state = INITIAL_STATE, action: UserActions) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        userList: [...state.userList, action.content]
      };
    case 'DELETE_USER':
      return {
        ...state,
        userList: state.userList.filter((item: IUser) => item.id !== action.content.id)
      };
    case 'CHANGE_USER':
      return {
        ...state,
        userList: state.userList.map((item: IUser) => {
          if (item.id === action.content.id) {
            return {
              ...action.content
            };
          }
          return item;
        })
      };
    default:
      return state;
  }
};
export default userReducer;