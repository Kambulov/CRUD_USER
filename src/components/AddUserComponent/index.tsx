import React from 'react';
import styles from './styles/index.module.css';
import {FormikValues, useFormik} from 'formik';
import {useDispatch, Context, FORM_TYPE, initialValueChange} from '../../const';
import {generateInitialValue, random, schemaAddForm} from '../../helpers';
import FormItem from '../FormItem';
import Button from '../Button';
import {connect} from 'react-redux';
import {addUser, changeUser} from '../../store/actions';
import {UsersChangeContextType} from '../../interfaces';

const AddUserComponent = () => {
  const dispatch = useDispatch();
  const {userInfo, setUserInfo} = React.useContext(Context) as UsersChangeContextType;

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {...generateInitialValue(userInfo)},
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: schemaAddForm,
    onSubmit: ({lastName, firstName}: FormikValues) => {
      if (userInfo.type === FORM_TYPE.EDIT) {
        dispatch(changeUser({
          id: userInfo.id,
          lastName,
          firstName
        }));
      } else {
        dispatch(addUser({
          id: random(1, 1000),
          lastName,
          firstName
        }));
      }
      formik.resetForm();
      setUserInfo(initialValueChange);
    }
  });

  return (
    <div>
      <h2>Добавление пользователя </h2>
      <form
        className={styles.form}
        onSubmit={formik.handleSubmit}
      >
        <FormItem formik={formik} name='firstName'/>
        <FormItem formik={formik} name='lastName'/>
        <div className={styles.form_group}>
          {userInfo.type === FORM_TYPE.EDIT ?
            <Button title='Изменить' type='submit' className={styles.btn_change}/>
            :
            <Button title='Добавить' type='submit' className={styles.btn_add}/>
          }
          {userInfo.type === FORM_TYPE.EDIT &&
          <Button title='Отменить' className={styles.btn_cancel} onClick={() => setUserInfo(initialValueChange)}/>
          }
        </div>
      </form>
    </div>

  );
};
const mapDispatchToProps = {
  addUser,
  changeUser
};

export default connect(undefined, mapDispatchToProps)(AddUserComponent);
