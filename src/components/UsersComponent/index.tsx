import React, {Fragment, useState} from 'react';
import AddUserComponent from '../AddUserComponent';
import styles from './styles/index.module.css';
import UserTable from '../UserTable';
import {useNavigate} from 'react-router-dom';
import Button from '../Button';
import {IChangeUser} from '../../interfaces';
import {Context,initialValueChange} from '../../const';

const UserComponent = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<IChangeUser>(initialValueChange)

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/')
  }

  return (
    <Context.Provider  value={{userInfo, setUserInfo}}>
      <div className={styles.header}>
        <Button title='Выйти' className={styles.btn} onClick={logout}/>
      </div>
      <div className={styles.wrapper}>
        <AddUserComponent/>
        <UserTable/>
      </div>
    </Context.Provider>

  );
};

export default UserComponent;