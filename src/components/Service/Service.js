import React, { useContext, useEffect, useState } from "react";
import SingleService from "../SingleService/SingleService";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../App";
const Service = () => {
  const { selectedService, SetSelectedService } = useContext(UserContext);
  let history = useHistory();
  const handleRoute = service => {
    SetSelectedService(service);
    history.push("/dashboard");
  };

  const [services, SetServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/getServices")
      .then(res => res.json())
      .then(getServices => {
        SetServices(getServices);
      });
  }, []);

  return (
    <section className='serviceSection' style={{ margin: "5rem" }}>
      <div className='container'>
        <h3
          className='text-center'
          style={{ fontWeight: "700", fontSize: "36px", marginBottom: "3rem" }}>
          Provide Awesome <span style={{ color: "#7AB259" }}>Services</span>{" "}
        </h3>
        <div className='row justify-content-around'>
          {services.map(service => (
            <SingleService
              key={service._id}
              service={service}
              handleRoute={handleRoute}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
