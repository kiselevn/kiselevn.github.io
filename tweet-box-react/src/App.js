import React, { Component } from "react";
import logo from "./image/icon/logo-twitter.png";
import load from "./image/icon/load-pic.png";
import "./App.css";

const MAX_LENGTH = 3;
const IMAGE_LENGTH = 2;

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
      message: "",
      file: []
    };
  }

  handleTextarea = event => {
    this.setState({ message: event.target.value });
  };

  handleInputFile = event => {
    const self = this;
    const reader = new FileReader();

    reader.onload = function exp(e) {
      const arr = [];
      arr.push(e.target.result);
      self.setState({ file: arr });
    };

    reader.readAsDataURL(event.target.files[0]);
  };

  deletePreview(event) {
    // console.log(event.target.currentSrc);
  }

  totalLength() {
    const { message, file } = this.state;
    const totalLength = message.length + file.length * IMAGE_LENGTH;

    return totalLength;
  }

  isActive() {
    return this.totalLength() > MAX_LENGTH;
  }

  isMaxLength() {
    return `counter ${this.isActive() ? "max-length" : ""}`;
  }

  render() {
    return (
      <form>
        <textarea
          name="tweet-message"
          className="tweet-message"
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
        <div className="image-preview">
          <ul>
            <img src={this.state.file} onClick={this.deletePreview} alt="" />
          </ul>
        </div>
        <button
          type="submit"
          className="btn button-send"
          disabled={this.isActive()}
        >
          Отправить
        </button>
        <div
          className={this.isMaxLength()}
        >{`${this.totalLength()} из ${MAX_LENGTH}`}</div>
      </form>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="tweet-box">
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
