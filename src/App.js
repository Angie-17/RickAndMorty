import React from "react";
import "./styles.css";

class ApiMorty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      api: []
    };
  }
  componentDidMount() {
    const peticion = {
      method: "get",
      headers: { "Content-Type": "application/json" }
    };
    fetch("https://rickandmortyapi.com/api/character?page=1", peticion)
      .then((res) => res.json())
      .then((res) => this.setState({ api: res.results }))
      .catch((err) => console.log(err));
  }

  render() {
    console.log(this.state.api);
    return (
      <div className="body">
        <h1>PERSONAJES RICK AND MORTY</h1>
        <div className="target">
          {this.state.api.map((api) => {
            return (
              <div className="card">
                <div className="cardHead">
                  <img className="cardHeadImg" src={api.image} alt={api.name} />
                </div>
                <div className="cardBody">
                  <h3 className="cardHeadName">{api.name}</h3>
                  <p className="cardBodyStatusAndSpecies  info">
                    {api.status} - {api.species}
                  </p>
                  <p className="cardBodyGender info">Gender: {api.gender}</p>
                  <p className="cardBodyOrigin info">
                    Origin: {api.origin.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ApiMorty;
