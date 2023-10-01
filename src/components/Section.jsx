import { Component } from "react";

export class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <div className="section">
        <p className="section-title">{title}</p>

        {children}
      </div>
    );
  }
}