import React, { Component } from 'react';
import Cell from "./Cell";

class User extends Component {
   createHeader = () =>{
      return(
         <tr>
            {Object.keys(this.props.headers).map(function (key) {
               console.log(key)
            })}
            </tr>
      )
   }
   render() {
   const userData = this.props;
   console.log(this.props);




      return (
         this.createHeader(),
      <tr>
      {Object.keys(userData).map(function(key) {
         return <Cell
         key={key}
         content={userData[key]}
         />
      })}
      </tr>
      );
   }
}

export default User;