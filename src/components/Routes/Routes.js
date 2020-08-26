import React from 'react';
import RouteItem from './RouteItems/RouteItems'
import Axios from 'axios';
import EditRouteModal from './EditRouteModal'
import DeleteRouteModal from './DeleteRouteModal'

class Routes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            routes: [],
            availableVehicles: [],
            editRouteData: {
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
            editRouteModal: false,
            deleteRouteModal: false,
            routeForDeleteId: '',
        };
      }

    componentDidMount() {
        this.fetchRoutes();
        this.fetchAvailableVehicles();
    }

    fetchAvailableVehicles() {
        Axios.get('http://localhost:8000/api/v1/availableVehicles/').then(response => {
            this.setState({
                availableVehicles: response.data.data,
            })
          })
    }

    fetchRoutes() {
        Axios.get('http://localhost:8000/api/v1/routes/').then(response => {
          this.setState({
            routes: response.data.data,
          });
        })
      }

      toggleEditRouteModal({ id, first_city, second_city, distance_between_cities, departure_date, vehicle_type, expected_profit, vehicle_id, status, completed_at }) {
        this.setState({
          editRouteData: { id, first_city, second_city, distance_between_cities, departure_date, vehicle_type, expected_profit, vehicle_id, status, completed_at },
          editRouteModal: ! this.state.editRouteModal,
        });
      }

      toggleUpdateRouteModal() {
        this.setState({
          editRouteModal: ! this.state.editRouteModal,
        })
      }

      showDeleteRouteModal(id) {
        this.setState({
          routeForDeleteId: id,
          deleteRouteModal: true,
        })
      }

      hideDeleteRouteModal() {
        this.setState({
          deleteRouteModal: false,
        })
      }

      updateRoute() {
        const routesId = this.state.editRouteData.id
        Axios.put(`http://localhost:8000/api/v1/routes/${routesId}/`, this.state.editRouteData).then(response => {
          this.fetchRoutes();
          this.toggleUpdateRouteModal();
        })
      }

      deleteRoute() {
        Axios.delete(`http://localhost:8000/api/v1/routes/${this.state.routeForDeleteId}/`).then(response => {
          this.fetchRoutes();
          this.hideDeleteRouteModal();
        })
      }

      changeEditInputValue = e => {
        const { value, id } = e.target;
        const { editRouteData } = this.state;
    
        editRouteData[id] = value;
    
        this.setState({ editRouteData })
      }

      addNewRoute = data => {
        Axios.post('http://localhost:8000/api/v1/routes/', data).then(response => {
          const { routes } = this.state;
    
          routes.push(response.data.data);
    
          this.setState({ routes });
          this.toggleNewRouteModal();
        })
      }

    render() {
        return (
            <>
                <EditRouteModal editRouteData={this.state.editRouteData} updateRoute = {this.updateRoute.bind(this)} toggleEditRouteModal = {this.toggleEditRouteModal.bind(this)} isOpen = {this.state.editRouteModal} changeEditInputValueFunc={this.changeEditInputValue.bind(this)}></EditRouteModal>
                <DeleteRouteModal deleteRoute = {this.deleteRoute.bind(this)} hideDeleteRouteModal = {this.hideDeleteRouteModal.bind(this)} showDeleteRouteModal = {this.showDeleteRouteModal.bind(this)} isOpen = {this.state.deleteRouteModal}></DeleteRouteModal>

                {this.state.routes.map(route => {
                    return <RouteItem
                    id={route.id}
                    first_city={route.first_city}
                    second_city={route.second_city}
                    distance_between_cities={route.distance_between_cities}
                    departure_date={route.departure_date}
                    vehicle_type={route.vehicle_type}
                    expected_profit={route.expected_profit}
                    vehicle_id={route.vehicle_id}
                    status={route.status}
                    completed_at={route.completed_at}
                    toggleEditRouteModalFunc={this.toggleEditRouteModal.bind(this)}
                    showDeleteRouteModalFunc={this.showDeleteRouteModal.bind(this)}/>
                })}

            </>
        )
    }
    
    
}

export default Routes;