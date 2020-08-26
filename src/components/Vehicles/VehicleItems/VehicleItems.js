import React from 'react'
import Button from '../../Button'

class VehicleItem extends React.Component {
    render() {
        return (
            <tr key={this.props.id}>
            <td>{this.props.id}</td>
            <td>{this.props.number}</td>
            <td>{this.props.model}</td>
            <td>{this.props.type}</td>
            <td>{this.props.bought_at}</td>
            <td>{this.props.mileage}</td>
            <td>{this.props.status}</td>
            <td>
              <Button buttonColor="success" handler={this.props.toggleEditVehicleModalFunc.bind(this, {
                id: this.props.id,
                number: this.props.number,
                model: this.props.model,
                type: this.props.type, 
                bought_at: this.props.bought_at,
                mileage: this.props.mileage,
                status: this.props.status
                })} buttonMessage="Edit"/>
              <Button buttonColor="danger" handler={this.props.showDeleteVehicleModalFunc.bind(this, this.props.id)} buttonMessage="Delete"/>
            </td>
        </tr>
        )
    }
}

export default VehicleItem;
