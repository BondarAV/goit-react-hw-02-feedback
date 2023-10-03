export const Section = ({ title, children }) => {
  return (
    <div className="section">
      <p className="title">{title}</p>

      {children}
    </div>
  );
};
