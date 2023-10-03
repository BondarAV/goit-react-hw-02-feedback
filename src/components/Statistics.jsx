export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className="statistics-list">
      <li className="statistics-element" key="good">
        Good: {good}
      </li>
      <li className="statistics-element" key="neutral">
        Neutral: {neutral}
      </li>
      <li className="statistics-element" key="bad">
        Bad: {bad}
      </li>
      <li className="statistics-element" key="total">
        Total: {total}
      </li>
      <li className="statistics-element" key="percentage">
        Positive percentage: {positivePercentage}%
      </li>
    </ul>
  );
};
