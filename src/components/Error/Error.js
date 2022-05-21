import React from "react";


export class ErrorComponent extends React.Component {
  state = {
    hasError: false,
    message: "",
  };
  state = {
    Error: {},
    message: "",
  };

  componentDidCatch(error) {
    this.setState({
      hasError: true,
      message: error.message,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error">
          there was an error
          {this.state.message}
        </div>
      );
    }
    return this.props.children;
  }
}
