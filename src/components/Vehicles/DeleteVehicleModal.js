import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'

class DeleteVehicleModal extends React.Component {
    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.showDeleteVehicleModal.bind(this)}>
          <ModalHeader toggle={this.props.hideDeleteVehicleModal.bind(this)}>Delete the Vehicle</ModalHeader>
          <ModalBody>
            Are you sure?
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.deleteVehicle.bind(this)}>Delete</Button>
            <Button color="secondary" onClick={this.props.hideDeleteVehicleModal.bind(this)}>Cancel</Button>
          </ModalFooter>
        </Modal>
        )
    }
}

export default DeleteVehicleModal;