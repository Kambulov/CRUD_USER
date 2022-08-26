import React, {FC} from 'react';
import styles from './styles/index.module.css';
import {FormikValues, useFormik} from 'formik';
import {schemaAutentificate} from '../../helpers';
import {initialValuesAuth} from '../../const';
import {axiosRequest} from '../../api';
import {useNavigate} from 'react-router-dom';
import FormItem from '../FormItem';
import {AxiosError} from 'axios';
import classNames from 'classnames';

const AuthorizationComponent: FC = () => {
    const navigate = useNavigate();
    const formik = useFormik({
      enableReinitialize: true,
      validateOnChange: false,
      validateOnBlur: false,
      initialValues: initialValuesAuth,
      validationSchema: schemaAutentificate,
      onSubmit: async (values: FormikValues) => {
        try {
          const {data} = await axiosRequest.post('/login', {
            ...values
          });
          localStorage.setItem('token', data.accessToken);
          navigate('/users');
        } catch (e) {
          if (e instanceof AxiosError) alert(`Ошибка входа: (${e.response?.data})`);
        }
        formik.resetForm();
      }
    });

    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <form className={styles.form} onSubmit={formik.handleSubmit}>
            <h2 className={styles.form__title}>Авторизация</h2>
            <FormItem formik={formik} name='email'/>
            <FormItem formik={formik} name='password'/>
            <button type="submit" className={classNames(styles.btn, styles.btn_come)}>
              Войти
            </button>
          </form>
        </div>
      </div>
    );
  }
;

export default AuthorizationComponent;