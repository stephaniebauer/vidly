import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { saveMovie, getMovie } from "../services/fakeMovieService";
import { withRouter } from "react-router";
{
}

class MovieForm extends Form {
  state = {
    data: { title: "", genre: "", numberInStock: "", rate: "" },
    errors: {},
  };

  componentDidMount() {
    if (this.props.match.params.id) {
      console.log(this.props.match.params.id);
      const selectedMovie = getMovie(this.props.match.params.id);
      this.setState({ selectedMovie });

      console.log("Selected Movie", selectedMovie);
    }
  }

  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .integer()
      .min(0)
      .max(100)
      .required()
      .label("Number in Stock"),
    rate: Joi.number().min(0).max(10).required().label("Rate"),
  };

  doSubmit = () => {
    const movie = this.state.data;
    saveMovie(movie);
    const { history } = this.props;
    history.push("/");
  };

  render() {
    return (
      <div className="container">
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genre", "Genre", this.state.data.genre.name)}
          {this.renderInput("numberInStock", "Number in Stock")}
          {this.renderInput("rate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
