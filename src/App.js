import React, { Component } from "react";
import HelloWorld from "./Component/HelloWorld";
import Table from "./Component/Table";


//Columns defines table headings and properties to be placed into the body
let columns = [
  {
    heading: "Name",
    property: "name"
  },
  {
    heading: "Job",
    property: "job"
  }
];

//Data is the array of objects to be placed into the table
let data = [
  {
    name: "Sabrina",
    job: "Engineer"
  },
  {
    name: "Max",
    job: "Technician"
  }
];

// class App extends Component {
//   render() {
//     return (
//       <>
//         <Table
//           columns={columns}
//           data={data}
//           propertyAsKey="name" //The data property to be used as a key
//         />
//       </>
//     );
//   }
// }

class App extends Component {
  render() {
    return (
      <div>
        <HelloWorld />
      </div>
    );
  }
}

export default App;
