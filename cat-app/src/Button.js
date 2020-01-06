import React from "react";

const Button = props => {
  return (
    <div className="col-sm-10 col-md-10 col-lg-8 mx-auto px-3 py-3 pt-md-3 pb-md-3 text-center">
      <button onClick={props.apiCall}>More Cats</button>
    </div>
  );
};

export default Button;
