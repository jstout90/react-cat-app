import React from "react";

const CatImage = props => {
  return (
    <div className="col-sm-6 col-md-6 col-lg-4">
      <img className="img-fluid" src={props.images} alt="cute cats"></img>
    </div>
  );
};

export default CatImage;
