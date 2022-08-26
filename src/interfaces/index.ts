import {FormikValues} from 'formik';
import store from '../store/store';
import { Action, AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
export type AppDispatch = typeof store.dispatch

export type UseDispatch<T extends Action = AnyAction> = () => ThunkDispatch<UserState, {}, T>;

export interface IInitialValuesAuth {
    email?: string,
    password?: string
}

export interface IInitialValuesAddUser {
    lastName?: string,
    firstName?: string
}

export interface IFormItem {
    formik: FormikValues,
    name: string,
}

export interface IButton {
    title: string,
    className?: string,
    type?: 'submit' | 'reset' | 'button' | undefined,
    onClick?: () => void;
}

export interface IUser {
    id?: number,
    lastName: string,
    firstName: string
}
export type UserActions = {
    type: string
    content: IUser
}
export type UserState = {
    user: Array<IUser>
}

export type DispatchType = (args: { type: string; content: IUser }) => UserActions

export interface IChangeUser extends IUser{
    type: number;
}
export type UsersChangeContextType = {
    userInfo: IChangeUser;
    setUserInfo: (user: IChangeUser) => void;
};