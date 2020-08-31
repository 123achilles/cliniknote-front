import { createStore, compose } from 'redux';
import createReducer from './createReducer';
import {SET_OPEN_MODAL_APPOINTMENT} from "./actions"

const defaultState = {
    isOpenModalAppointment: false,
}

const reducer = createReducer(defaultState, {
    [SET_OPEN_MODAL_APPOINTMENT]: (state, action) => ({
        ...state,
        isOpenModalAppointment: action.isOpenModalAppointment
    })
});

const store = createStore(reducer, compose);

export default store;