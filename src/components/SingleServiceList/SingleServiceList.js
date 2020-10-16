import React from "react";
import { Form } from "react-bootstrap";

const SingleServiceList = props => {
  const { name, email, company_name, details, status } = props.services;

  const changeStatus = (id, e) => {
    const formData = new FormData();
    formData.append("status", e.target.value);
    fetch(`http://localhost:8080/updateStatus/${id}`, {
      method: "PATCH",
      body: formData,
    })
      .then(res => res.json())
      .then(data => console.log("updated"));
    // console.log(e.target.value, id);
  };

  // ////////////////////////

  return (
    <>
      <tr
        style={{
          fontSize: ".9rem",
        }}>
        <td> {company_name} </td>
        <td>{email} </td>
        <td>{name} </td>
        <td>{details}</td>
        <td>
          <Form.Control
            as='select'
            name='status'
            onChange={e => changeStatus(props.services._id, e)}>
            <option>{status}</option>
            <option>Pending</option>
            <option>OnGoing</option>
            <option>Done</option>
          </Form.Control>
        </td>
      </tr>
    </>
  );
};

export default SingleServiceList;
