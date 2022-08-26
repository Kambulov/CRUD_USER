import React, {FC, useState} from 'react';
import styles from './styles/index.module.css'
import cn from 'classnames';
import {IUser, UsersChangeContextType, UserState} from '../../interfaces';
import {connect} from 'react-redux';
import {deleteUser} from '../../store/actions';
import {useDispatch, Context, FORM_TYPE} from '../../const';

const UserTable:FC = (props:any) => {
  const {userList} = props.users;
  const dispatch = useDispatch();
  const {setUserInfo} = React.useContext(Context) as UsersChangeContextType
  const [searchItem, setSearchItem] = useState<string>('');
  const regex = new RegExp(searchItem, 'gi')

  const changeItem = (item: IUser):void => {
    setUserInfo({
      id:item.id,
      lastName:item.lastName,
      firstName:item.firstName,
      type: FORM_TYPE.EDIT
    })
  }


    return (
      <div className={styles.wrapper}>
          <h2>Список пользователей </h2>
          <input
            className={styles.input}
            type="text"
            placeholder='Поиск'
            onChange={(e)=>setSearchItem(e.target.value)}
          />
          <table className={styles.table}>
              <thead>
              <tr>
                  <th>ID</th>
                  <th>Фамилия</th>
                  <th>Имя</th>
                  <th>Действия</th>
              </tr>
              </thead>
              <tbody>
              {userList.filter((item: IUser)=> item.firstName.match(regex) || item.lastName.match(regex)).map((user:IUser,index: number) => (
                <tr key={user.id}>
                    <td>{index+1}</td>
                    <td>{user.lastName}</td>
                    <td>{user.firstName}</td>
                    <td className={styles.actions}>
                        <button
                          className={cn(styles.btn,styles.btn_edit)}
                          onClick={()=>{changeItem(user)}}
                        >
                            Редактировать
                        </button>
                        <button
                          className={cn(styles.btn,styles.btn_delete)}
                          onClick={()=>dispatch(deleteUser(user))}
                        >
                            Удалить
                        </button>
                    </td>
                </tr>
              ))}
              </tbody>
          </table>
      </div>
    );
}

const mapDispatchToProps = {
    deleteUser: (item:IUser)=>deleteUser(item)
}
const mapStateToProps = (state: UserState) => ({
    users: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(UserTable);
