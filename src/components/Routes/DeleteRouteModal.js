import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'

class DeleteRouteModal extends React.Component {
    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.showDeleteRouteModal.bind(this)}>
          <ModalHeader toggle={this.props.hideDeleteRouteModal.bind(this)}>Delete the Route</ModalHeader>
          <ModalBody>
            Are you sure?
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.deleteRoute.bind(this)}>Delete</Button>
            <Button color="secondary" onClick={this.props.hideDeleteRouteModal.bind(this)}>Cancel</Button>
          </ModalFooter>
        </Modal>
        )
    }
}

export default DeleteRouteModal;