import React, { Component } from 'react';

class Settings extends Component {
  render() {
    return (
      <div>
        <input onChange={this.handleRows} placeholder='Rows' />
        <input onChange={this.handleCols} placeholder='Columns' />
        <input onChange={this.handleTime} placeholder='Time' />
      </div>
    );
  }
}

export default Settings