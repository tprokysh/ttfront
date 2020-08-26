import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Button } from 'reactstrap'

class EditVehicleModal extends React.Component {
    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggleEditVehicleModal}>
          <ModalHeader toggle={this.props.toggleEditVehicleModal}>Edit the Vehicle</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="number">Number</Label>
              <Input type="text" id="number" value={this.props.editVehicleData.number} onChange={this.props.changeEditInputValueFunc.bind(this)}/>
              <Label for="model">Model</Label>
              <Input type="text" id="model" value={this.props.editVehicleData.model} onChange={this.props.changeEditInputValueFunc.bind(this)}/>
              <Label for="type">Type</Label>
              <Input type="select" id="type" value={this.props.editVehicleData.type} onChange={this.props.changeEditInputValueFunc.bind(this)}>
                <option label='Heavy'>HEAVY</option>
                <option label='Light'>LIGHT</option>
              </Input>
              <Label for="bought_at">Bought at</Label>
              <Input type="date" id="bought_at" value={this.props.editVehicleData.bought_at} onChange={this.props.changeEditInputValueFunc.bind(this)}/>
              <Label for="mileage">Mileage</Label>
              <Input type="text" id="mileage" value={this.props.editVehicleData.mileage} onChange={this.props.changeEditInputValueFunc.bind(this)}/>
              <Label for="status">Status</Label>
              <Input type="select" id="status" value={this.props.editVehicleData.status} onChange={this.props.changeEditInputValueFunc.bind(this)}>
                <option label='Available'>AVAILABLE</option>
                <option label='Unavailable'>UNAVAILABLE</option>
              </Input>
              <Label for="completed_at">Completed at</Label>
              <Input type="date" id="completed_at" value={this.props.editVehicleData.completed_at} onChange={this.props.changeEditInputValueFunc.bind(this)}/>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={ () => {this.props.updateVehicle(this.props.editVehicleData)}}>Update</Button>{' '}
            <Button color="secondary" onClick={this.props.toggleEditVehicleModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
        )
    }
}

export default EditVehicleModal;