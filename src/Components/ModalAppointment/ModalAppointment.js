import React from 'react';
import "./ModalAppointment.scss";
import close from "../../assets/close.png";

const ModalAppointment = ({ setIsOpenModalAppointment }) => {

    return (
        <section className="ModalAppointment">
            <div className="ModalAppointment-Cont">
                <div className="ModalAppointment-Cont-Flex">
                    <h2 >New Appointment</h2>
                    <img  src={close} onClick={() => setIsOpenModalAppointment(false)}/>
                </div>
                <div className="ModalAppointment-Cont-MainText">
                    <h1>Appointment Details</h1>
                    <div className="ModalAppointment-Cont-MainText-AppointmentDetailsFlex">
                        <div className="ModalAppointment-Cont-MainText-AppointmentDetailsFlex-Width50">
                            <h5>Service *</h5>
                            <select>
                                <option>Test Service </option>
                                <option>Massage </option>
                            </select>
                            <h5>Provider *</h5>
                            <select>
                                <option></option>
                            </select>
                            <h5>Notes</h5>
                            <textarea></textarea>
                        </div>
                        {/* <div>
                            <h5>Start Date / Time</h5>
                            <h5>End Date / Time</h5>
                        </div> */}
                    </div>
                    <h1>Customer Details</h1>
                    <div className="ModalAppointment-Cont-MainText-CustomerDetailsFlex">
                        <div className="ModalAppointment-Cont-MainText-CustomerDetailsFlex-Width50">
                            <h5>First Name *</h5>
                            <input/>
                            <h5>Last Name *</h5>
                            <input/>
                            <h5>Email</h5>
                            <input/>
                            <h5>Phone Number *</h5>
                            <input/>
                        </div>
                        <div className="ModalAppointment-Cont-MainText-CustomerDetailsFlex-Width50RightSide">
                            <h5>Address</h5>
                            <input/>
                            <h5>City</h5>
                            <input/>
                            <h5>Zip Code</h5>
                            <input/>
                            <h5>Notes</h5>
                            <textarea></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ModalAppointment