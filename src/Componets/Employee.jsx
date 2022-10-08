import React from "react";

class Employee extends React.Component {
  render() {
    const {name, position} = this.props;
    return (
      <tr>
        <td>{name}</td>
        <td>{position}</td>
      </tr>
    );
  }
}

export default Employee;
