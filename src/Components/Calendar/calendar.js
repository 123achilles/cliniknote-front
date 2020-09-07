
import './calendar.css'
import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop, lastDateOfMonth } from '@syncfusion/ej2-react-schedule';
import SampleBase from './sample-base'

import Axios from 'axios';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

class Calendar extends SampleBase {
    constructor() {
        super(...arguments);
        this.state = {
            finaldata:[]

        }

    }

    onEventRendered(args) {
        switch (args.data.EventType) {
            case 'Requested':
                args.element.style.backgroundColor = '#F57F17';
                break;
            case 'Confirmed':
                args.element.style.backgroundColor = '#7fa900';
                break;
            case 'New':
                args.element.style.backgroundColor = '#8e24aa';
                break;
        }
    }
 


    getId(){
        Axios.get('http://freelancedeveloper.site/projects/laravel/cliniknote/public/api/appointments?week=true')
        .then(response => {
            // console.log(response,'response')
            let arr=[]
            let forname =response.data.appointments
            let startdata=forname.map((el)=>(el.startDateTime))
            let enddata=forname.map((el)=>(el.endDateTime))
            let forpatient =response.data.appointments.map((el)=>(el.id))
            let namedata= forname.map((elem)=>(elem.patient.firstName + ' ' + elem.patient.lastName))
            let patientemail=forname.map((elem)=>(elem.patient.email))
            let note = forname.map((el)=>(el.patient.notes.map((elem)=>elem.note)))
            let noteCreateTime = forname.map((el)=>(el.patient.notes.map((elem)=>(elem.created_at).slice(2,19))))
            for(let i=0, j=0, k=0 , l=0, m=0, n=0, p=0 ; p<noteCreateTime.length, n < note.length, m<patientemail.length, l<namedata.length, k < forpatient.length, j < enddata.length, i <startdata.length; i++ , j++ , k++, l++ , m++, n++, p++) {
                   arr.push({
                       StartTime: startdata[i],
                       EndTime:enddata[j],
                       Id:forpatient[k],
                       Subject:namedata[l],
                       Email:patientemail[m],
                       Note: note[n],
                       NoteCreateTime:noteCreateTime[p]

                   });

               }
            this.setState({ finaldata: arr})
            console.log(arr, "arr")

        })


    }


    editorTemplate(props) {
        return ((props !== undefined) ? <table className="custom-event-editor" style={{ width: '100%', cellpadding: '5' }}><tbody>
            <tr><td className="e-textlabel">Summary</td><td style={{ colspan: '4' }}>
                <input id="Summary" className="e-field e-input" type="text" name="Subject" style={{ width: '100%' }} />
            </td></tr>
            <tr><td className="e-textlabel">Status</td><td style={{ colspan: '4' }}>
                <DropDownListComponent id="EventType" placeholder='Choose status' data-name='EventType' className="e-field" style={{ width: '100%' }} dataSource={['New', 'Requested', 'Confirmed']}>
                </DropDownListComponent>
            </td></tr>
            <tr><td className="e-textlabel">Email</td><td style={{ colspan: '4' }}>
                <input id="Email" className="e-field e-input" placeholder="Email" type="text" name="Email" style={{ width: '100%' }} />
            </td></tr>
            <tr><td className="e-textlabel">From</td><td style={{ colspan: '4' }}>
                <DateTimePickerComponent id="StartTime" format='dd/MM/yy hh:mm a' data-name="StartTime" value={new Date(props.startTime || props.StartTime)} className="e-field"></DateTimePickerComponent>
            </td></tr>
            <tr><td className="e-textlabel">To</td><td style={{ colspan: '4' }}>
                <DateTimePickerComponent id="EndTime" format='dd/MM/yy hh:mm a' data-name="EndTime" value={new Date(props.endTime || props.EndTime)} className="e-field"></DateTimePickerComponent>
            </td></tr>
            <tr>
                <td className="e-textlabel">Note</td><td style={{ colspan: '4' }}>
                    <input id="Note" className="e-field e-input" placeholder="Note" type="text" name="Note" style={{ width: '100%' }} />
                </td>
                <td className="e-textlabel"></td><td style={{ colspan: '4' }}>
                    <input id="NoteCreateTime" className="e-field e-input" type="text" name="NoteCreateTime" style={{ width: '100%' }} />
                </td>
            </tr>
            </tbody></table> : <div></div>);
    }





    onActionBegin(args) {

// console.log(args)
        // if (args.addedRecords && args.addedRecords.length > 0) {


        //     Axios.post('http://localhost:8080/api/calendarEvent/addEvents', args.addedRecords[0])
        //         .then(res =>{
        //              console.log(res.data, 'data')
        //              this.getId()
        //             })
        //         .catch(err => {
        //             console.log(err);

        //         })

        // }

        // if (args.changedRecords && args.changedRecords.length > 0) {
        //     console.log(args, 'args.changedRecords')
        //     Axios.put(`http://localhost:8080/api/calendarEvent/addEvents/update/${args.changedRecords[0]['_id']}`, args.changedRecords[0])
        //         .then(res => {


        //         })
        //         .catch(err => {

        //         })
        // }


        // if (args.deletedRecords && args.deletedRecords.length > 0) {
        //     Axios.delete(`http://localhost:8080/api/calendarEvent/addEvents/delete/${args.deletedRecords[0]['_id']}`)
        //         .then(res => {


        //         })

        // }




    }

    componentDidMount() {
        this.getId()

    }


    render() {

        return (
            <div className='schedule-control-section'>
                
                <div className='col-md-11 control-section'>
                    <div className='control-wrapper'>
                        <ScheduleComponent width='100%' height='650px' selectedDate={new Date()} ref={t => this.scheduleObj = t} eventSettings={{ dataSource: this.state.finaldata}} actionBegin={this.onActionBegin} editorTemplate={this.editorTemplate.bind(this)}   eventRendered={this.onEventRendered.bind(this)} >
                            <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
                        </ScheduleComponent>

                    </div>
                </div>
            </div>);

    }

}

export default Calendar
