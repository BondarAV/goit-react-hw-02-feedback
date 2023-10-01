import { Component } from "react";

export class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <div className="section">
        <p className="title">{title}</p>

        {children}
      </div>
    );
  }
}