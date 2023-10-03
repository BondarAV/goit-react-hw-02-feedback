export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className="option-list">
      {Object.keys(options).map(option => (
        <li className="option-element" key={option}>
          <button
            className="option-button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};
