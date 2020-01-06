import React from "react";

const CatFact = props => {
  return (
    <div className="col-sm-10 col-md-10 col-lg-8">
      <h4 className="px-3 py-3 pt-md-3 pb-md-3 mx-auto text-center">
        {props.fact}
      </h4>
    </div>
  );
};

export default CatFact;
