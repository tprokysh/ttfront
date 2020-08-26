import React from 'react';
import './App.css';
import Head from './components/Head'
import Navigation from './components/Navigation'

class App extends React.Component {
  state = {
    showRoutePage: false,
    showVehiclePage: true,
    newRouteModal: false,
  }

  toggleRoutePage() {
    this.setState({
      showRoutePage: true,
      showVehiclePage: false,
    })
  }

  toggleVehiclePage() {
    this.setState({
      showRoutePage: false,
      showVehiclePage: true,
    })
  }

  toggleNewVehicleModal() {
    this.setState({
      newVehicleModal: ! this.state.newVehicleModal,
    })
  }

  toggleNewRouteModal() {
    this.setState({
      newRouteModal: ! this.state.newRouteModal,
    })
  }

  render() {
    return (
      <div className="App">
        <Head toggleRoutePage={this.toggleRoutePage.bind(this)} toggleVehiclePage={this.toggleVehiclePage.bind(this)}/>
        <Navigation showRoutePage={this.state.showRoutePage} toggleVehiclePage={this.state.toggleVehiclePage} toggleNewRouteModal={this.toggleNewRouteModal.bind(this)} toggleNewVehicleModal={this.toggleNewVehicleModal.bind(this)} newVehicleModal={this.state.newVehicleModal} newRouteModal={this.state.newRouteModal}/>
      </div>
    );
  }
}

export default App;
