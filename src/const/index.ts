import {IChangeUser, IInitialValuesAddUser, IInitialValuesAuth, UseDispatch, UsersChangeContextType} from '../interfaces';
import {createContext} from 'react';
import {useDispatch as BaseUseDispatch} from 'react-redux/es/hooks/useDispatch';

export const Context = createContext<UsersChangeContextType | null>(null);
export const useDispatch: UseDispatch = BaseUseDispatch;

export const initialValuesAuth:IInitialValuesAuth = {
    email: '',
    password: ''
}

export const initialValuesAddUser:IInitialValuesAddUser = {
    lastName: '',
    firstName: ''
}

export const ITEMS_FORM: Record<string, string>  = {
    firstName: 'Имя',
    lastName: 'Фамилия',
    email: 'Email',
    password: 'Пароль'
}

export enum FORM_TYPE {
    ADD,
    EDIT
}

export const INITIAL_STATE = {
    userList: [],
    type: FORM_TYPE.ADD
}

export const initialValueChange:IChangeUser = {
    type:FORM_TYPE.ADD,
    firstName: '',
    lastName: ''
}


