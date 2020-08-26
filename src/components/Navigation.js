import React from 'react'
import NewVehicleModal from './Vehicles/NewVehicleModal'
import NewRouteModal from './Routes/NewRouteModal'
import Table from './Table'
import Button from './Button'


class Navigation extends React.Component {
    render() {
        return (
            <>
            {this.props.showRoutePage ?
            <>
                <NewRouteModal toggleNewRouteModal = {this.props.toggleNewRouteModal.bind(this)} isOpen = {this.props.newRouteModal} ></NewRouteModal>
                <Button buttonColor="primary" handler={this.props.toggleNewRouteModal.bind(this)} buttonMessage='Create Route'></Button>
                <Table isVehicleTable={false}/>
            </>
            :
            <>
                <NewVehicleModal toggleNewVehicleModal = {this.props.toggleNewVehicleModal.bind(this)} isOpen = {this.props.newVehicleModal}></NewVehicleModal>
                <Button buttonColor="primary" handler={this.props.toggleNewVehicleModal.bind(this)} buttonMessage='Create Vehicle'></Button>
                <Table isVehicleTable={true}/>
            </>}
            </>
        )
    }
  }

export default Navigation;