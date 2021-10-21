import React, { Component } from 'react';
import { Fade, Button } from 'reactstrap';

class Bpp extends Component {
    constructor (props) {
        super(props);
        this.state = { fadeInOut: true }
    }
  
    toggle = (e) => {
        this.setState({ fadeInOut: !this.state.fadeInOut })
    }

    render(){
        return (
            <div>
                <Button color="success" onClick={this.toggle}>Fade In/Out</Button>
                <Fade in={this.state.fadeInOut} tag="h1">
                    Lorem ipsum 
                </Fade>
            </div>
        )
    }
}

export default Bpp;