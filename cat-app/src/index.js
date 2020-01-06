import React from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import CatImage from "./CatImage.js";
import CatFact from "./CatFact.js";
import Button from "./Button.js";

class App extends React.Component {
  state = {
    images: "",
    fact: ""
  };
  handleButton = () => {
    this.getCats();
    this.getCatFact();
  };
  async getCats() {
    const response = await axios.get(
      "https://api.thecatapi.com/v1/images/search",
      {
        headers: {
          "x-api-key": "24ab03a7-123d-4935-94c0-6579f4988b49"
        }
      }
    );
    this.setState({ images: response.data[0].url });
  }
  async getCatFact() {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const response = await axios.get(
      `${proxy}https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1`
    );
    this.setState({ fact: response.data.text });
  }

  componentDidMount() {
    this.getCats();
    this.getCatFact();
  }

  render() {
    return (
      <div className="container w-100 h-100">
        <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">Cute Cats!</h1>
        </div>
        <div className="row h-100 justify-content-center align-items-center">
          <CatImage images={this.state.images} />
        </div>
        <div className="row h-100 justify-content-center align-items-center">
          <Button apiCall={this.handleButton} />
        </div>
        <div className="row h-100 justify-content-center align-items-center">
          <CatFact fact={this.state.fact} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
