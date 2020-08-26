import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Button } from 'reactstrap'
import Axios from 'axios'

class NewVehicleModal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        newVehicleData: {
          number: '',
          model: '',
          type: '',
          bought_at: '',
          mileage: '',
          status: '',
        },
      }
    }

    addNewVehicle = data => {
      Axios.post('http://localhost:8000/api/v1/vehicles/', data).then(response => {
        this.props.toggleNewVehicleModal();
      })
    }

    changeNewInputValue = e => {
      const { value, id } = e.target;
      const { newVehicleData } = this.state;
  
      newVehicleData[id] = value;
  
      this.setState({ newVehicleData })
    }

    render() {
        return (
          <Modal isOpen={this.props.isOpen} toggle={this.props.toggleNewVehicleModal}>
                <ModalHeader toggle={this.props.toggleNewVehicleModal}>Add a new Vehicle</ModalHeader>
                <ModalBody>
                  <FormGroup>
                    <Label for="number">Number</Label>
                    <Input type="text" id="number" value={this.state.newVehicleData.number || ''} onChange={this.changeNewInputValue}/>
                    <Label for="model">Model</Label>
                    <Input type="text" id="model" value={this.state.newVehicleData.model || ''} onChange={this.changeNewInputValue}/>
                    <Label for="type">Type</Label>
                    <Input type="select" id="type" value={this.state.newVehicleData.type || ''} onChange={this.changeNewInputValue}>
                      <option hidden selected>Choose one</option>
                      <option label='Heavy'>HEAVY</option>
                      <option label='Light'>LIGHT</option>
                    </Input>
                    <Label for="bought_at">Bought at</Label>
                    <Input type="date" id="bought_at" value={this.state.newVehicleData.bought_at || ''} onChange={this.changeNewInputValue}/>
                    <Label for="mileage">Mileage</Label>
                    <Input type="text" id="mileage" value={this.state.newVehicleData.mileage || ''} onChange={this.changeNewInputValue}/>
                    <Label for="status">Status</Label>
                    <Input type="select" id="status" value={this.state.newVehicleData.status || ''} onChange={this.changeNewInputValue}>
                      <option hidden selected>Choose one</option>
                      <option label='Available'>AVAILABLE</option>
                      <option label='Unavailable'>UNAVAILABLE</option>
                    </Input>
                  </FormGroup>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={ () => {this.addNewVehicle(this.state.newVehicleData)}}>Create</Button>
                  <Button color="secondary" onClick={this.props.toggleNewVehicleModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default NewVehicleModal;