import React from 'react'
import Button from '../../Button'

class RouteItem extends React.Component {
    render() {
        return (
            <tr key={this.props.id}>
            <td>{this.props.id}</td>
            <td>{this.props.first_city}</td>
            <td>{this.props.second_city}</td>
            <td>{this.props.distance_between_cities}</td>
            <td>{this.props.departure_date}</td>
            <td>{this.props.vehicle_type}</td>
            <td>{this.props.expected_profit}</td>
            <td>{this.props.vehicle_id}</td>
            <td>{this.props.status}</td>
            <td>{this.props.completed_at}</td>
            <td>
              <Button buttonColor="success" handler={this.props.toggleEditRouteModalFunc.bind(this, {
                id: this.props.id,
                first_city: this.props.first_city,
                second_city: this.props.second_city,
                distance_between_cities: this.props.distance_between_cities, 
                departure_date: this.props.departure_date,
                vehicle_type: this.props.vehicle_type,
                expected_profit: this.props.expected_profit,
                vehicle_id: this.props.vehicle_id,
                status: this.props.status,
                completed_at: this.props.completed_at,
                })} buttonMessage="Edit"/>
              <Button buttonColor="danger" handler={this.props.showDeleteRouteModalFunc.bind(this, this.props.id)} buttonMessage="Delete"/>
            </td>
        </tr>
        )
    }
}

export default RouteItem;
