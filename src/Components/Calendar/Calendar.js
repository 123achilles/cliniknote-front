
import React, { Component } from "react";
import { useDispatch } from 'react-redux'
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import { SET_OPEN_MODAL_APPOINTMENT } from "../Store/actions";
import "./Calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

class CalendarApp extends Component {
  state = {
    events: [
      {
        start: moment().toDate(),
        end: moment().add(1, "days").toDate(),
        title: "Some title",
      },
    ],
  };


const dispatch = useDispatch();


  onEventResize = (data) => {
    const { start, end } = data;

    this.setState((state) => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: state.events };
    });
  };

  onEventDrop = (data) => {
    console.log(data);
  };

  render() {
    return (
      <div className="App">
        <DnDCalendar
          selectable
          defaultDate={moment().toDate()}
          defaultView="month"
          events={this.state.events}
          localizer={localizer}
          onEventDrop={this.onEventDrop}
          onEventResize={this.onEventResize}
          resizable
          style={{ height: "100vh" }}
          onSelectSlot={() => dispatch({ type: SET_OPEN_MODAL_APPOINTMENT, isOpenModalAppointment: true })}
        />
      </div>
    );
  }
}





// const CalendarApp = () =>{
  
//   state = {
//     events: [
//       {
//         start: moment().toDate(),
//         end: moment().add(1, "days").toDate(),
//         title: "Some title",
//       },
//     ],
//   };
  
  
//   onEventResize = (data) => {
//     const { start, end } = data;

//     this.setState((state) => {
//       state.events[0].start = start;
//       state.events[0].end = end;
//       return { events: state.events };
//     });
//   };

//   onEventDrop = (data) => {
//     console.log(data);
//   };

  
//   return(
//           <div className="App">
//         <DnDCalendar
//           selectable
//           defaultDate={moment().toDate()}
//           defaultView="month"
//           events={this.state.events}
//           localizer={localizer}
//           onEventDrop={this.onEventDrop}
//           onEventResize={this.onEventResize}
//           resizable
//           style={{ height: "100vh" }}
//           onSelectSlot={() => dispatch({ type: SET_OPEN_MODAL_APPOINTMENT, isOpenModalAppointment: true })}
//         />
//       </div>
//   )
// }

export default CalendarApp;
