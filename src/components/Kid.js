import React, { Component } from 'react';

class Cell extends Component {
   render() {
      //console.log(this.props.contentData);
      const kidData = this.props.contentData.data;
      const kidKids = this.props.contentData.kids;
      //console.log(kidData);

         const filterNullValue = (sampleObj) => {
            let resultObj = {};
            Object.keys(sampleObj).map((propertyKey) => {

               if (sampleObj[propertyKey]) {
                  resultObj[propertyKey] = sampleObj[propertyKey];
               }
            });
            return resultObj;
         };
      console.log(filterNullValue(kidData));

      var kidd = Object.keys(filterNullValue(kidData)).map(function (key, index) {
         console.log(filterNullValue(kidData)[key])
         return <Cell
            key={key}
            contentData={filterNullValue(kidData)[key]}
         />
         });
    /*  var kidd = Object.keys(kidData).map(function (key) {
         console.log(kidData[key])
         
         return <Cell
            key={key}
            contentData={kidData[key]}
         />
      });*/
      return (
         
         <tr className="row-kids">
            {kidd}
         </tr>
      );
   }
}

export default Cell;