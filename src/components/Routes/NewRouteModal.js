import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Button } from 'reactstrap'
import Axios from 'axios'

class NewRouteModal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        availableVehicles: [],
        newRouteData: {
            id: '',
            first_city: '',
            second_city: '',
            distance_between_cities: '',
            departure_date: '',
            vehicle_type: '',
            expected_profit: '',
            vehicle_id: '',
            status: '',
            completed_at: '',
          },
      }
    }

    addNewRoute = data => {
      Axios.post('http://localhost:8000/api/v1/routes/', data).then(response => {
        this.props.toggleNewRouteModal();
      })
    }

    changeNewInputValue = e => {
      const { value, id } = e.target;
      const { newRouteData } = this.state;
  
      newRouteData[id] = value;
  
      this.setState({ newRouteData })
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
          <Modal isOpen={this.props.isOpen} toggle={this.props.toggleNewRouteModal}>
                <ModalHeader toggle={this.props.toggleNewRouteModal}>Add a new Route</ModalHeader>
                <ModalBody>
                  <FormGroup>
                    <Label for="first_city">First City</Label>
                    <Input type="text" id="first_city" value={this.state.newRouteData.first_city || ''} onChange={this.changeNewInputValue}/>
                    <Label for="second_city">Second City</Label>
                    <Input type="text" id="second_city" value={this.state.newRouteData.second_city || ''} onChange={this.changeNewInputValue}/>
                    <Label for="type">Distance btwn cities</Label>
                    <Input type="text" id="distance_between_cities" value={this.state.newRouteData.distance_between_cities || ''} onChange={this.changeNewInputValue}/>
                    <Label for="departure_date">Departure at</Label>
                    <Input type="date" id="departure_date" value={this.state.newRouteData.departure_date || ''} onChange={this.changeNewInputValue}/>
                    <Label for="vehicle_type">Vehicle type</Label>
                    <Input type="select" id="vehicle_type" value={this.state.newRouteData.vehicle_type || ''} onChange={this.changeNewInputValue}>
                        <option hidden selected>Choose one</option>
                        <option label='Heavy'>HEAVY</option>
                        <option label='Light'>LIGHT</option>
                    </Input>
                    <Label for="expected_profit">Expected profit</Label>
                    <Input type="text" id="expected_profit" value={this.state.newRouteData.expected_profit || ''} onChange={this.changeNewInputValue}/>
                    <Label for="vehicle_id">Vehicle Id</Label>
                    <Input type="select" id="vehicle_id" value={this.state.newRouteData.vehicle_id || ''} onChange={this.changeNewInputValue}>
                        <option hidden selected>Choose one</option>
                        {this.state.availableVehicles.map(vehicle => {
                            return (<option label={`${vehicle.id} - ${vehicle.number}`}>{vehicle.id}</option>)
                        })}
                    </Input>
                    <Label for="status">Status</Label>
                    <Input type="select" id="status" value={this.state.newRouteData.status || ''} onChange={this.changeNewInputValue}>
                        <option hidden selected>Choose one</option>
                        <option label='Available'>AVAILABLE</option>
                        <option label='In progress'>IN_PROGRESS</option>
                        <option label='Completed'>COMPLETE</option>
                    </Input>
                    <Label for="completed_at">Completed at</Label>
                    <Input type="date" id="completed_at" value={this.state.newRouteData.completed_at} onChange={this.changeNewInputValue.bind(this)}/>
                  </FormGroup>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={ () => {this.addNewRoute(this.state.newRouteData)}}>Create</Button>
                  <Button color="secondary" onClick={this.props.toggleNewRouteModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default NewRouteModal;