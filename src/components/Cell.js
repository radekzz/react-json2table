import React, { Component } from 'react';

class Cell extends Component {
   render() {
      return (
         <td>
            {this.props.contentData}
         </td>
      );
   }
}

export default Cell;