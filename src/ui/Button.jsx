function Button({ type, children, onClick }) {
  return (
    <button className={`btn ${type}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
