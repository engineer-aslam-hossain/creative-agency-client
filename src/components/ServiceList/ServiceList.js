import React, { useContext, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { UserContext } from "../../App";
const ServiceList = () => {
  const { LoggedInUser, SetLoggedInUser } = useContext(UserContext);
  const [listOfService, SetListOfService] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8080/getMyOrder?email=${LoggedInUser.email}`)
      .then(res => res.json())
      .then(getlistOfService => {
        SetListOfService(getlistOfService);
      });
  }, []);

  return (
    <div className='serviceList d-flex flex-wrap'>
      {listOfService.map(singleService => (
        <Card
          key={singleService._id}
          className='review'
          style={{ width: "20rem", marginRight: "1rem", marginBottom: "1rem" }}>
          <Card.Body className='p-4'>
            <div className='person'>
              <div className='cardTop d-flex justify-content-between align-items-center'>
                <Card.Img
                  style={{ width: "4rem" }}
                  variant='top'
                  src={`data:image/png;base64,${singleService.image.img}`}
                />
                <Button>Done</Button>
              </div>
              <div className='personDetails my-3'>
                <h5 className='m-0'>{singleService.name}</h5>
              </div>
            </div>
            <Card.Text style={{ color: "#707070" }}>
              {singleService.details}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ServiceList;
