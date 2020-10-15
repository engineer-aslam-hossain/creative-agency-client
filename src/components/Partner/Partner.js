import React, { useEffect, useState } from "react";
import SinglePartner from "../SinglePartner/SinglePartner";

const Partner = () => {
  const [partners, SetPartner] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/getPartner")
      .then(res => res.json())
      .then(getPartner => {
        SetPartner(getPartner);
      });
  }, []);

  return (
    <section className='partner'>
      <div className='container'>
        {partners.map(partner => (
          <SinglePartner key={partner._id} partner={partner} />
        ))}
      </div>
    </section>
  );
};

export default Partner;
