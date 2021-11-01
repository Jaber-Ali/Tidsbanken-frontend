import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"




const CalendarComponent = () => {

    const myEventsList = [
        { 
            date: new Date(), 
            title: "Kicki",
            end: null 
        }
      ]
    
    const handleDateClick = (event) => {
        console.log("date clicked", event)
        //render a modal
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
            
        </div>
    )
}
export default CalendarComponent