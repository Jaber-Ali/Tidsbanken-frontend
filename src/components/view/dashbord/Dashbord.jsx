import CalendarComponent from "../../calender/CalendarComponent"
import { useState} from "react"
import { useSelector } from "react-redux"
import { Button, Modal, Col, Row } from 'react-bootstrap'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'
import KeycloakService from "../../../services/KeyclockService"
import { postRequest } from "../../../services/API"

const Dashboard = () => {

    const user = useSelector((state) => state.user)

    const [openVactaionRequest, setOpenVacationRequest] = useState(false)
    const [openInegiblePeriod, setOpenInegiblePeriod] = useState(false)
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())


    const handleOpenVacation = () => {
        setOpenVacationRequest(true)
    }

    const handleCloseVacation = () => {
        setOpenVacationRequest(false)
    }

    const requestVacation = () => {
        const requestBody = {
            periodStart: startDate.toISOString().slice(0,10),
            periodEnd: endDate.toISOString().slice(0,10),
            title: 'Vacation request',
            requestStatus: 0,
            ownerEmail: user.email,
            moderatorEmail: "admin@admin.com"
        }
        postRequest(requestBody)
        handleCloseVacation()
    }

    const handleOpenInegible = () => {
        setOpenInegiblePeriod(true)
    }

    const handleCloseInegible = () => {
        setOpenInegiblePeriod(false)
    }

    const addInegiblePeriod = () => {
        console.log("Inegible period added")
        handleCloseInegible()
    }
   
    return (
        <div style={{textAlign:"center"}}>
            {KeycloakService.hasRole(['admin']) ? (
                <Button onClick={handleOpenInegible} variant="success">Create new inegible period</Button>
            ) : (
                <Button onClick={handleOpenVacation} variant="success">New vacation request</Button>
            )}
            
            <Button onClick={handleOpenVacation} variant="success">TEST VACATION POST</Button>
            {/* Vacation request */}
            <Modal show={openVactaionRequest} onHide={handleCloseVacation} >
                <Modal.Header closeButton>
                    <Modal.Title>Vacation Request</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>Start date</Col>
                        <Col>End date</Col>
                    </Row>
                    <Row>
                        <Col><DayPickerInput onDayChange={day => setStartDate(day)}/></Col>
                        <Col><DayPickerInput onDayChange={day => setEndDate(day)}/></Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={requestVacation}>Add request</Button><Button onClick={handleCloseVacation} variant="secondary">Close</Button>
                </Modal.Footer>
            </Modal>

            {/* Add inegible period */}
            <Modal show={openInegiblePeriod} onHide={handleCloseInegible}>
                <Modal.Header closeButton>
                    <Modal.Title>Add inegible vacation period</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>Start date</Col>
                        <Col>End date</Col>
                    </Row>
                    <Row>
                        <Col><DayPickerInput onDayChange={day => setStartDate(day)}/></Col>
                        <Col><DayPickerInput onDayChange={day => setEndDate(day)}/></Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={addInegiblePeriod}>Add period</Button><Button onClick={handleCloseInegible} variant="secondary">Close</Button>
                </Modal.Footer>
            </Modal>

            <CalendarComponent />
        </div>
    )
}
export default Dashboard