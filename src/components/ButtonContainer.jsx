const ButtonContainer = ({ children, className }) => {
  return (
    <div
      className={`bg-darkSecondary rounded-full drop-shadow-lg shadow-inner ${className}`}
    >
      {children}
    </div>
  );
};

export default ButtonContainer;
