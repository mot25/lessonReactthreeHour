import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <h2>{this.props.propsCounret}</h2>
      </div>
    );
  }
}

export default Counter;
