import React from 'react';
import VehicleItem from './VehicleItems/VehicleItems'
import Axios from 'axios';
import EditVehicleModal from './EditVehicleModal'
import DeleteVehicleModal from './DeleteVehicleModal'

class Vehicles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicles: [],
            editVehicleData: {
                id: '',
                number: '',
                model: '',
                type: '',
                bought_at: '',
                mileage: '',
                status: '',
            },
            editVehicleModal: false,
            deleteVehicleModal: false,
            vehicleForDeleteId: '',
        };
      }

    componentDidMount() {
        this.fetchVehicles()
    }

    fetchVehicles() {
        Axios.get('http://localhost:8000/api/v1/vehicles/').then(response => {
          this.setState({
            vehicles: response.data.data,
          });
        })
    }

    toggleEditVehicleModal({ id, number, model, type, bought_at, mileage, status }) {
      this.setState({
        editVehicleData: { id, number, model, type, bought_at, mileage, status },
        editVehicleModal: ! this.state.editVehicleModal,
      });
    }

    toggleUpdateVehicleModal() {
      this.setState({
        editVehicleModal: ! this.state.editVehicleModal,
      })
    }

    showDeleteVehicleModal(id) {
      this.setState({
        vehicleForDeleteId: id,
        deleteVehicleModal: true,
      })
    }

    hideDeleteVehicleModal() {
      this.setState({
        deleteVehicleModal: false,
      })
    }

    updateVehicle() {
      const vehicleId = this.state.editVehicleData.id
      Axios.put(`http://localhost:8000/api/v1/vehicles/${vehicleId}/`, this.state.editVehicleData).then(response => {
        this.fetchVehicles();
        this.toggleUpdateVehicleModal();
      })
    }

    deleteVehicle() {
      Axios.delete(`http://localhost:8000/api/v1/vehicles/${this.state.vehicleForDeleteId}/`).then(response => {
        this.fetchVehicles();
        this.hideDeleteVehicleModal();
      })
    }

    changeEditInputValue = e => {
      const { value, id } = e.target;
      const { editVehicleData } = this.state;

      editVehicleData[id] = value;

      this.setState({ editVehicleData })
    }

    render() {
        return (
            <>
                <EditVehicleModal editVehicleData={this.state.editVehicleData} updateVehicle = {this.updateVehicle.bind(this)} toggleEditVehicleModal = {this.toggleEditVehicleModal.bind(this)} isOpen = {this.state.editVehicleModal} changeEditInputValueFunc={this.changeEditInputValue.bind(this)}></EditVehicleModal>
                <DeleteVehicleModal deleteVehicle = {this.deleteVehicle.bind(this)} hideDeleteVehicleModal = {this.hideDeleteVehicleModal.bind(this)} showDeleteVehicleModal = {this.showDeleteVehicleModal.bind(this)} isOpen = {this.state.deleteVehicleModal}></DeleteVehicleModal>

                {this.state.vehicles.map(vehicle => {
                    return <VehicleItem
                    id={vehicle.id}
                    number={vehicle.number}
                    model={vehicle.model}
                    type={vehicle.type}
                    bought_at={vehicle.bought_at}
                    mileage={vehicle.mileage}
                    status={vehicle.status}
                    toggleEditVehicleModalFunc={this.toggleEditVehicleModal.bind(this)}
                    showDeleteVehicleModalFunc={this.showDeleteVehicleModal.bind(this)}/>
                })}

            </>
        )
    }
    
    
}

export default Vehicles;