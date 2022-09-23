import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: [],
    };
  }

  submitMessage() {
    this.setState({
      messages: [...this.state.messages, this.state.input],
      input: "",
    });
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={(event) => this.setState({ input: event.target.value })}
        ></input>
        <button onClick={() => this.submitMessage()}>Add message</button>
        <ul>
          {this.state.messages.map((i) => (
            <li>{i}</li>
          ))}
        </ul>
      </div>
    );
  }
}
