import React from "react";
import { Form } from "react-bootstrap";

const SingleServiceList = props => {
  const { name, email, company_name, details } = props.services;

  const changeStatus = e => {
    console.log(e.target.value);
  };

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
          <Form.Group controlId='exampleForm.ControlSelect1'>
            <Form.Control as='select' name='status' onChange={changeStatus}>
              <option>Pending</option>
              <option>Done</option>
              <option>On Going</option>
            </Form.Control>
          </Form.Group>
        </td>
      </tr>
    </>
  );
};

export default SingleServiceList;
