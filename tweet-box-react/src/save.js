import React, { Component } from "react";
import logo from "./image/icon/logo-twitter.png";
import load from "./image/icon/load-pic.png";
import "./App.css";

const MAX_LENGTH = 3;

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" className="logo" />
      <h1>Tweet Box</h1>
    </header>
  );
};

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageCounter: 0,
      imageCounter: 0,
      totalCounter: 0,
      file: null
    };
  }

  handleTextarea = event => {
    this.setState({ messageCounter: event.target.value.length });
    const counter = this.refs.counter;
    const button = this.refs.button;

    if (this.state.messageCounter > MAX_LENGTH) {
      counter.classList.add("max-length");
      button.disabled = true;
    } else {
      counter.classList.remove("max-length");
      button.disabled = false;
    }
  };

  handleInputFile = event => {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
  };

  render() {
    return (
      <form>
        <textarea
          name="tweet-message"
          className="tweet-message"
          id="tweet-message"
          onChange={this.handleTextarea}
        />
        <input
          type="file"
          accept="image/gif,image/jpeg,image/jpg,image/png"
          name="media"
          id="loading-images"
          className="loading-images"
          onChange={this.handleInputFile}
        />
        <label
          htmlFor="loading-images"
          style={{ backgroundImage: `url(${load})` }}
        />
        <div id="image-preview" className="image-preview">
          <ul id="image-list">
            <img src={this.state.file} alt="" />
          </ul>
        </div>
        <button
          type="submit"
          id="button-send"
          className="btn button-send"
          ref="button"
        >
          Отправить
        </button>
        <div id="counter" className="counter" ref="counter">
          {`${this.state.messageCounter} из ${MAX_LENGTH}`}
        </div>
      </form>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div id="parent">
        <Header />
        <div className="tweet-box">
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
