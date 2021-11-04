import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { fetchAllRequests } from '../../services/API'


const CalendarComponent = () => {

    const [approvedRequests, setApprovedRequests] = useState([])
    const [inegibleDates, setInegibleDates] = useState([])
    const [open, setOpen] = useState(false)
    //for modal
    const [periodInfo, setPeriodInfo] = useState([])
    
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    //fetches all approved requests from the database
    useEffect(() => {
        fetchAllRequests()
        .then(data => {
            console.log(data)
            let arr = []
            for(let i = 0; i < data.length; i++) {
                arr.push(data[i])
            }
            setApprovedRequests(arr)
        })
    },[])


    //hard-coded periods
    const myEventsList = [
        {
            title: "Kicki", 
            start: "2021-11-26", 
            end: "2021-12-04",
            color: "#d9534f"
        },
        {
            title: "Jaber", 
            start: "2021-11-10", 
            end: "2021-11-19",
            color: "#d9534f"
        },
        {
            title: "Inegible", 
            start: "2021-11-01", 
            end: "2021-11-09",
            color: "#5cb85c"
        },
        {
            title: "Inegible", 
            start: "2021-11-22", 
            end: "2021-11-24",
            color: "#5cb85c"
        }
        
    ]
    
    const handleDateClick = (event) => {
        console.log(event.dateStr)
        setPeriodInfo(event.dateStr)
        //render a modal with info on selected date
        handleOpen()

    }

    const renderEventContent = (eventInfo) => {
        return (
            <>
                <b style={{color: 'black'}}>{eventInfo.event.title}</b>
            </>
        )
    } 


    return(
        <div className="calendar">
            <br/>
        
            <FullCalendar
                plugins={[ dayGridPlugin, interactionPlugin ]}
                initialView="dayGridMonth"
                events={myEventsList}
                eventContent={renderEventContent}
                dateClick={handleDateClick}
            />

            <Modal show={open} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Vacation Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{periodInfo}</p>
                    <p>Info about clicked vacation</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
            
        </div>
    )
}
export default CalendarComponent