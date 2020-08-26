import React from 'react'
import { Table } from 'reactstrap'
import Vehicles from './Vehicles/Vehicles'
import Routes from './Routes/Routes'

class TableComponent extends React.Component {
    render() {
        return (
            this.props.isVehicleTable
            ?
            <Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Number</th>
                    <th>Model</th>
                    <th>Type</th>
                    <th>Bought at</th>
                    <th>Mileage</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <Vehicles/>
                </tbody>
            </Table>
            :
            <Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First City</th>
                    <th>Second City</th>
                    <th>Distance</th>
                    <th>Departure Date</th>
                    <th>Vehicle Type</th>
                    <th>Expected profit</th>
                    <th>Vehicle Id</th>
                    <th>Status</th>
                    <th>Completed At</th>
                  </tr>
                </thead>
                <tbody>
                  <Routes/>
                </tbody>
            </Table>
        )
    }
}

export default TableComponent;