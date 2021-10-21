import React, { Component } from 'react';

class Bpp extends Component {
    render() {
      return (
          <div>
              <h1>코끼리</h1>
              <h1>{this.props.num}</h1>
              <button onClick={this.props.onInc}>+버튼</button>
              <button onClick={this.props.onDec}>-버튼</button>
          </div>
      );
    }
  }

  export default Bpp;