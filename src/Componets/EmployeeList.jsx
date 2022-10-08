import React from "react";
import Employee from "./Employee";

class EmployeeList extends React.Component {
  render() {
    const list = [
      {
        name: "Manuel",
        position: "manager",
      },
      {
        name: "Daniel",
        position: "CEO",
      },
      {
        name: "Maria",
        position: "Developer",
      },
    ];

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {list.map((employee, index) => (
            <Employee
              key={index}
              name={employee.name}
              position={employee.position}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default EmployeeList;
