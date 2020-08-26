import React from 'react'
import { Button } from 'reactstrap'

class ButtonComponent extends React.Component {
    render() {
        return (
            <>
                <Button size="sm" className="mr-2" color={this.props.buttonColor} onClick={this.props.handler}>{this.props.buttonMessage}</Button>
            </>
        )
    }
}

export default ButtonComponent;