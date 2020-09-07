import React, { useState } from 'react'
import './Header.scss'
import plus from "../../assets/plus.svg"
import ModalAppointment from "../ModalAppointment/ModalAppointment"

const Header = () => {
const [isOpenModalAppointment, setIsOpenModalAppointment] = useState(false)

    return (
        <section className="Header">
            <div className="Header-Cont"> 
                <div className="Header-Cont-ButtonS">
                    <button onClick={() => setIsOpenModalAppointment(true)}>
                        <img src={plus}/>
                        Appointment
                    </button>
                   {isOpenModalAppointment && (
                       <ModalAppointment setIsOpenModalAppointment={setIsOpenModalAppointment}/>
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

export default Header