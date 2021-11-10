import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { fetchAllRequests } from '../../services/API'


const CalendarComponent = () => {

    const [allRequests, setAllRequests] = useState([])
    const [inegibleDates, setInegibleDates] = useState([])
    const [vacations, setVacations] = useState([{
        title: 'hardcoded',
        start: '2021-11-26',
        end: '2021-11-30',
        color: '#d9534f'
    }])
    //for modal
    const [open, setOpen] = useState(false)
    const [periodInfo, setPeriodInfo] = useState([])
    
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    //fetches all approved requests from the database
    useEffect(() => {
        fetchAllRequests()
        .then(data => {
            let arr = []
            for(let i = 0; i < data.length; i++) {
                arr.push(data[i])
            }
            setAllRequests(arr)
        })
        adminRequestView()
    },[])

    //if user is logged in show only approved vacations
    

    //if admin is logged in show all requests - TODO doesnt render in calendar!
    const adminRequestView = () => {
        console.log(allRequests)
        let arr = []
        for(let i = 0; i < allRequests.length; i++) {
            let vacationObject = {
                title: allRequests[i].title,
                start: allRequests[i].periodStart,
                end: allRequests[i].periodEnd,
                //color should change
                color: '#d9534f'
            }
        arr.push(vacationObject)    
        }
        setVacations(vacations => [...vacations, arr])
    }

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

    const testButton = () => {
        console.log(vacations)
        console.log(myEventsList)
    }


    return(
        <div className="calendar">
            <button onClick={testButton}>test</button>
            <br/>
        
            <FullCalendar
                plugins={[ dayGridPlugin, interactionPlugin ]}
                initialView="dayGridMonth"
                events={vacations}
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