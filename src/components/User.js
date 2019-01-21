import React, { Component } from 'react';
import Cell from "./Cell";
import Kid from "./Kid";

class User extends Component {
   isNotEmpty(o, i) {
      for (i in o) {
         return !0
      }
      return !1
   }
   render() {
      const userData = this.props.data;
      const userKids = this.props.kids;
      //const hasKids = this.isNotEmpty(userKids);
      //console.log(userData);
      //console.log(userKids);

      var user = Object.keys(userData).map(function (key) {
         return <Cell
            key={key}
            contentData={userData[key]}
         />
      });
      //console.log(userKids["has_relatives"].records[0].data);
      if (userKids["has_relatives"]){
         var kidss = Object.keys(userKids["has_relatives"]["records"]).map(function (key) {
         //const dataData = userKids["has_relatives"]["records"][key].data;
            const dataData = userKids["has_relatives"]["records"];
         return Object.keys(dataData).map(function (kkey) {
            //console.log(dataData[kkey])
            return <Kid
               key={key}
               contentData={dataData[kkey]}
            />
         });
      });
      }

      return (
      <React.Fragment>
            <tr className="row-user">
               {user}
            </tr>
            <tr className="row-kids">
            <table>
               <thead>
                  <tr>
                     <th>Relative ID</th>
                     <th>Patient ID</th>
                     <th>Is alive?</th>
                     <th>Frequency of visits</th>
                  </tr>
               </thead>
               <tbody>
                  {kidss}
               </tbody>
            </table>
            

               
            </tr>
         }
         </React.Fragment>
      );
   }
}

export default User;