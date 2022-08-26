import * as Yup from 'yup';
import {IInitialValuesAddUser, IUser} from '../interfaces';


export const schemaAutentificate = Yup.object().shape({
    email: Yup.string().email('Email-адрес введен неправильно')
                 .required('Необходимо указать E-mail'),
    password: Yup.string().required('Необходимо указать пароль').max(100, 'Длина поля превышает 100 символов')
});


export const schemaAddForm = Yup.object().shape({
    lastName: Yup.string().required('Необходимо указать фамилию').max(100, 'Длина поля превышает 100 символов'),
    firstName: Yup.string().required('Необходимо указать имя').max(100, 'Длина поля превышает 100 символов'),
});

export const random = (min:number, max:number):number =>{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export const generateInitialValue = (data: IUser):IInitialValuesAddUser => {
    return {
        lastName: data ? data.lastName : '',
        firstName: data ? data.firstName : '',
    }
}
