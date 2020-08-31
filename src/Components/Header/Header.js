import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import plus from "../../assets/plus.svg";
// import Modal from "react-modal"
import ModalAppointment from "../ModalAppointment/ModalAppointment";
import { SET_OPEN_MODAL_APPOINTMENT } from "../Store/actions";
import { useDispatch } from 'react-redux';
import './Header.scss';

const Home = () => {
    const dispatch = useDispatch();
    const isOpenModalAppointment = useSelector(state => state.isOpenModalAppointment);

    return (
        <section className="Header">
            <div className="Header-Cont"> 
                <div className="Header-Cont-ButtonS">
                    {/* <button onClick={() => setIsOpenModalAppointment(true)}> */}
                    <button onClick={() => dispatch ({type: SET_OPEN_MODAL_APPOINTMENT, isOpenModalAppointment: true}) } > 
                        <img src={plus}/>
                        Appointment
                    </button>
                    
                   {isOpenModalAppointment && (
                       <ModalAppointment/>
                   )}
                    <button >
                        <img src={plus}/>
                        Unavailable
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Home