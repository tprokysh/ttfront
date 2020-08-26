import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Button } from 'reactstrap'
import Axios from 'axios'

class EditRouteModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            availableVehicles: [],
        }
    }

    componentDidMount() {
        this.fetchAvailableVehicles();
    }

    fetchAvailableVehicles() {
        Axios.get('http://localhost:8000/api/v1/availableVehicles/').then(response => {
            this.setState({
                availableVehicles: response.data.data,
            })
          })
    }
    
    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggleEditRouteModal}>
                <ModalHeader toggle={this.props.toggleEditRouteModal}>Edit the Route</ModalHeader>
                <ModalBody>
                  <FormGroup>
                    <Label for="first_city">First City</Label>
                    <Input type="text" id="first_city" value={this.props.editRouteData.first_city || ''} onChange={this.props.changeEditInputValueFunc}/>
                    <Label for="second_city">Second City</Label>
                    <Input type="text" id="second_city" value={this.props.editRouteData.second_city || ''} onChange={this.props.changeEditInputValueFunc}/>
                    <Label for="type">Distance btwn cities</Label>
                    <Input type="text" id="distance_between_cities" value={this.props.editRouteData.distance_between_cities || ''} onChange={this.props.changeEditInputValueFunc}/>
                    <Label for="departure_date">Departure at</Label>
                    <Input type="date" id="departure_date" value={this.props.editRouteData.departure_date || ''} onChange={this.props.changeEditInputValueFunc}/>
                    <Label for="vehicle_type">Vehicle type</Label>
                    <Input type="select" id="vehicle_type" value={this.props.editRouteData.vehicle_type || ''} onChange={this.props.changeEditInputValueFunc}>
                        <option hidden selected>Choose one</option>
                        <option label='Heavy'>HEAVY</option>
                        <option label='Light'>LIGHT</option>
                    </Input>
                    <Label for="expected_profit">Expected profit</Label>
                    <Input type="text" id="expected_profit" value={this.props.editRouteData.expected_profit || ''} onChange={this.props.changeEditInputValueFunc}/>
                    <Label for="vehicle_id">Vehicle Id</Label>
                    <Input type="select" id="vehicle_id" value={this.props.editRouteData.vehicle_id || ''} onChange={this.props.changeEditInputValueFunc}>
                        <option hidden selected>Choose one</option>
                        {this.state.availableVehicles.map(vehicle => {
                            return (<option label={`${vehicle.id} - ${vehicle.number}`}>{vehicle.id}</option>)
                        })}
                    </Input>
                    <Label for="status">Status</Label>
                    <Input type="select" id="status" value={this.props.editRouteData.status || ''} onChange={this.props.changeEditInputValueFunc}>
                        <option hidden selected>Choose one</option>
                        <option label='Available'>AVAILABLE</option>
                        <option label='Completed'>COMPLETE</option>
                    </Input>
                  </FormGroup>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={ () => {this.props.updateRoute(this.props.editRouteData)}}>Create</Button>
                  <Button color="secondary" onClick={this.props.toggleEditRouteModal.bind(this)}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default EditRouteModal;