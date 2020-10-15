import React from "react";

const SinglePartner = ({ partner }) => {
  return (
    <>
      <img
        style={{ width: "8rem", margin: "3.5rem 2.9rem" }}
        src={partner.img}
        alt=''
      />
    </>
  );
};

export default SinglePartner;
