import React, { Component } from 'react';
import data from './data.json';
import './App.css';
import 'react-table/react-table.css'
//import ReactTable from "react-table";
import User from "./components/User";

class App extends Component {
  constructor() {
    super();
  this.state = {
    headers:{
      identificationNumber: "Identification number",
      name : "Name",
      gender : "Gender",
      risk : "Risk",
      hairLength : "Hair length",
      iq : "IQ",
      admissionDate : "Admission date",
      lastBreakdown : "Last breakdown",
      yearlyFee : "Yearly fee",
      knowsJoker : "Knows the Joker?",
    }
  }
  };


  render() {

    const headers = this.state.headers.name;
    var people = data.map(function (user, i) {
      return (
        <User
          key={i}
          headers={headers}
          identificationNumber={user.data["Identification number"]}
          name={user.data["Name"]}
          gender={user.data["Gender"]}
          risk={user.data["Risk"]}
          hairLength={user.data["Hair length"]}
          iq={user.data["IQ"]}
          admissionDate={user.data["Admission date"]}
          lastBreakdown={user.data["Last breakdown"]}
          yearlyFee={user.data["Yearly fee"]}
          knowsJoker={user.data["Knows the Joker?"]}
        />

      )
    });

    //console.log(Object.keys(people[0].props))

    return (
      <table>
        <tbody>
          {people}
        </tbody>
      </table>
    )
  }
}

export default App;
