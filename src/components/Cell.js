import React, { Component } from 'react';

class Cell extends Component {
   render() {
      return (
         <td>
            {this.props.content}
         </td>
      );
   }
}

export default Cell;