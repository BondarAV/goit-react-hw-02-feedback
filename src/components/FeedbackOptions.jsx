import { Component } from 'react';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <ul className='option-list'>
        {options.map(option => (
          <li className='option-element' key={option}>
            <button className='option-button' onClick={() => onLeaveFeedback(option)}>
              {option}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}