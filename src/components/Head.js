import React from 'react';
import Button from './Button'

class Head extends React.Component {
  render() {
    return (
        <div>
            <Button buttonColor="link" handler={this.props.toggleVehiclePage.bind(this)} buttonMessage='Vehicles'></Button>
            <Button buttonColor="link" handler={this.props.toggleRoutePage.bind(this)} buttonMessage='Routes'></Button>
        </div>
    );
  }
}

export default Head;
